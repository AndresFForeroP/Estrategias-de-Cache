"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { writeThrough, resetCache } from "@/lib/cache"

export default function WriteThroughPage() {
  return (
    <Card title="✍️ Write-Through">
      <p>Se escribe en cache y DB al mismo tiempo.</p>

      <StatePanel />

      <button onClick={() => writeThrough(Math.floor(Math.random() * 100))}>
        ✍️ Escribir valor
      </button>

      <button onClick={resetCache}>🧹 Reset Cache</button>

      <Timeline />
      <a href="/">⬅ Volver</a>
    </Card>
  )
}