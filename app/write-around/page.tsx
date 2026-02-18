"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { writeAround, resetCache } from "@/lib/cache"

export default function WriteAroundPage() {
  return (
    <Card title="🚫 Write-Around">
      <p>Las escrituras evitan la cache.</p>

      <StatePanel />

      <button onClick={() => writeAround(Math.floor(Math.random() * 100))}>
        🚫 Escribir solo en DB
      </button>

      <button onClick={resetCache}>🧹 Reset Cache</button>

      <Timeline />
      <a href="/">⬅ Volver</a>
    </Card>
  )
}