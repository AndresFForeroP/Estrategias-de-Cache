import { logEvent } from "./events"

export let database = {
  value: 0,
  updatedAt: Date.now(),
}

let dbSubscribers: Array<() => void> = []

export function subscribeToDBChanges(callback: () => void) {
  dbSubscribers.push(callback)
  return () => {
    dbSubscribers = dbSubscribers.filter(cb => cb !== callback)
  }
}

function notifyDBSubscribers() {
  dbSubscribers.forEach(cb => cb())
}

export function readDB() {
  logEvent("📀 Lectura desde DB")
  return { ...database }
}

export function writeDB(value: number) {
  logEvent(`✍️ Escritura en DB → ${value}`)
  database.value = value
  database.updatedAt = Date.now()
  notifyDBSubscribers()
}