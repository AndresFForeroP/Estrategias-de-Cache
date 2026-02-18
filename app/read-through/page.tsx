"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { readThrough, resetCache } from "@/lib/cache"
import { readDB } from "@/lib/db"

export default function ReadThroughPage() {
  const data = readThrough(readDB)

  return (
    <Card title="🔁 Read-Through">
      <p>La app no sabe si el dato viene de cache o DB.</p>

      <StatePanel />
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={resetCache}>🧹 Reset Cache</button>

      <Timeline />
      <a href="/">⬅ Volver</a>
    </Card>
  )
}