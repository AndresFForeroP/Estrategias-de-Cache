import { logEvent, startTimer, endTimer } from "./events"

export let database = {
  value: 0,
  updatedAt: Date.now(),
}

let dbSubscribers: Array<() => void> = []
let accessCount = 0

export function subscribeToDBChanges(callback: () => void) {
  dbSubscribers.push(callback)
  return () => {
    dbSubscribers = dbSubscribers.filter(cb => cb !== callback)
  }
}

function notifyDBSubscribers() {
  dbSubscribers.forEach(cb => cb())
}

// Simula latencia realista de BD
async function simulateDBLatency() {
  accessCount++
  // Primer acceso: ~1000ms (simula carga desde disco)
  // Subsecuentes: ~50ms (simula red + procesamiento)
  const latency = accessCount === 1 ? 1000 : 50
  return new Promise(resolve => setTimeout(resolve, latency))
}

export async function readDB() {
  startTimer("db-read")
  logEvent("📀 Lectura desde DB", "db")
  await simulateDBLatency()
  endTimer("db-read", "📀 DB respondió", "db")
  return { ...database }
}

export async function writeDB(value: number) {
  startTimer("db-write")
  logEvent("✍️ Escritura en DB", "db")
  await simulateDBLatency()
  database.value = value
  database.updatedAt = Date.now()
  endTimer("db-write", `✍️ DB actualizada → ${value}`, "db")
  notifyDBSubscribers()
}