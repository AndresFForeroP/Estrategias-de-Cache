"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { refreshAhead, resetCache } from "@/lib/cache"
import { readDB } from "@/lib/db"

export default function RefreshAheadPage() {
  const data = refreshAhead(readDB, 5000)

  return (
    <Card title="🔄 Refresh-Ahead">
      <p>La cache se refresca automáticamente antes de expirar.</p>

      <StatePanel />
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={resetCache}>🧹 Reset Cache</button>

      <Timeline />
      <a href="/">⬅ Volver</a>
    </Card>
  )
}