"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { getCache, setCache, resetCache } from "@/lib/cache"
import { readDB } from "@/lib/db"
import { Timeline } from "../components/Timeline"

export default function CacheAsidePage() {
  let data = getCache()

  if (!data) {
    data = readDB()
    setCache(data)
  }

  return (
    <Card title="🧩 Cache-Aside">
      <p>La app controla cuándo leer DB y guardar en cache.</p>

      <StatePanel />
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={resetCache}>🧹 Reset Cache</button>

      <Timeline />
      <a href="/">⬅ Volver</a>
    </Card>
  )
}