"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { writeBack, resetCache } from "@/lib/cache"

export default function WriteBackPage() {
  return (
    <Card title="⚡ Write-Back">
      <p>Se escribe primero en cache y luego en DB (async).</p>

      <StatePanel />

      <button onClick={() => writeBack(Math.floor(Math.random() * 100))}>
        ⚡ Escribir rápido
      </button>

      <button onClick={resetCache}>🧹 Reset Cache</button>

      <Timeline />
      <a href="/">⬅ Volver</a>
    </Card>
  )
}