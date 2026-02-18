"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { readThrough, resetCache } from "@/lib/cache"
import { readDB } from "@/lib/db"
import { useState, useEffect } from "react"

export default function ReadThroughPage() {
  const [mounted, setMounted] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setMounted(true)
    const result = readThrough(readDB)
    setData(result)
  }, [])

  if (!mounted) {
    return (
      <Card title="🔁 Read-Through">
        <p>La app no sabe si el dato viene de cache o DB.</p>
        <StatePanel />
        <pre>Cargando...</pre>
        <Timeline />
        <a href="/">⬅ Volver</a>
      </Card>
    )
  }

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