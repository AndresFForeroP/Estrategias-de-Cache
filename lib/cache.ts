import { logEvent, startTimer, endTimer, resetEvents } from "./events"
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
  logEvent("🧹 Cache reseteada", "cache")
  cache = null
  expiresAt = 0
  resetEvents()
  notifyCacheSubscribers()
}

export function getCache() {
  startTimer("cache-read")
  logEvent("⚡ Verificando caché", "cache")
  // Simula latencia de caché (~1ms)
  setTimeout(() => endTimer("cache-read", cache && Date.now() <= expiresAt ? "✓ Cache HIT" : "✗ Cache MISS", "cache"), 1)

  if (!cache || Date.now() > expiresAt) {
    return null
  }
  return cache
}

export function setCache(data: any, ttl = 5000) {
  startTimer("cache-set")
  logEvent("💾 Guardando en caché", "cache")
  setTimeout(() => endTimer("cache-set", "✓ Guardado en caché", "cache"), 1)
  cache = data
  expiresAt = Date.now() + ttl
  notifyCacheSubscribers()
}

export async function readThrough(getFromDB: () => Promise<any>) {
  if (!cache || Date.now() > expiresAt) {
    logEvent("🔁 Read-Through: No en caché, consultando BD", "app")
    const data = await getFromDB()
    setCache(data)
    return data
  } else {
    logEvent("🔁 Read-Through: Encontrado en caché", "cache")
    return cache
  }
}

export async function refreshAhead(getFromDB: () => Promise<any>, ttl = 5000) {
  if (!cache || Date.now() > expiresAt - 2000) {
    logEvent("🔄 Refresh-Ahead: Refresco preventivo", "app")
    const data = await getFromDB()
    setCache(data, ttl)
  } else {
    logEvent("🔄 Refresh-Ahead: Datos frescos en caché", "cache")
  }
  return cache
}

export async function writeThrough(value: number) {
  logEvent("✍️ Write-Through: Escribiendo en caché y BD", "app")
  cache = { value, updatedAt: Date.now() }
  notifyCacheSubscribers()
  await writeDB(value)
}

export async function writeAround(value: number) {
  logEvent("🚫 Write-Around: Escribiendo solo en BD", "app")
  await writeDB(value)
}

export async function writeBack(value: number) {
  logEvent("⚡ Write-Back: Escribiendo en caché (async a BD)", "app")
  cache = { value, updatedAt: Date.now() }
  notifyCacheSubscribers()
  setTimeout(() => writeDB(value), 3000)
}

export function getCacheState() {
  return cache
}