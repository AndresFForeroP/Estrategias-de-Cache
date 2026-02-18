import { logEvent } from "./events"
import { writeDB } from "./db"

let cache: any = null
let expiresAt = 0
let cacheSubscribers: Array<() => void> = []

export function subscribeToCacheChanges(callback: () => void) {
  cacheSubscribers.push(callback)
  return () => {
    cacheSubscribers = cacheSubscribers.filter(cb => cb !== callback)
  }
}

function notifyCacheSubscribers() {
  cacheSubscribers.forEach(cb => cb())
}

export function resetCache() {
  logEvent("🧹 Cache reseteada")
  cache = null
  expiresAt = 0
  notifyCacheSubscribers()
}

export function getCache() {
  if (!cache || Date.now() > expiresAt) {
    logEvent("❌ Cache MISS")
    return null
  }
  logEvent("⚡ Cache HIT")
  return cache
}

export function setCache(data: any, ttl = 5000) {
  logEvent("💾 Guardando en cache")
  cache = data
  expiresAt = Date.now() + ttl
  notifyCacheSubscribers()
}

export function readThrough(getFromDB: () => any) {
  if (!cache) {
    logEvent("🔁 Read-Through → DB")
    cache = getFromDB()
  } else {
    logEvent("⚡ Read-Through → Cache")
  }
  return cache
}

export function refreshAhead(getFromDB: () => any, ttl = 5000) {
  if (!cache || Date.now() > expiresAt) {
    logEvent("🔄 Refresh-Ahead → DB")
    cache = getFromDB()
    expiresAt = Date.now() + ttl
  }
  return cache
}

export function writeThrough(value: number) {
  logEvent("✍️ Write-Through")
  cache = { value, updatedAt: Date.now() }
  writeDB(value)
  notifyCacheSubscribers()
}

export function writeAround(value: number) {
  logEvent("🚫 Write-Around")
  writeDB(value)
}

export function writeBack(value: number) {
  logEvent("⚡ Write-Back (async)")
  cache = { value, updatedAt: Date.now() }
  notifyCacheSubscribers()
  setTimeout(() => writeDB(value), 3000)
}

export function getCacheState() {
  return cache
}