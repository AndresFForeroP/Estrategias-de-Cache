"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { getCache, setCache, resetCache } from "@/lib/cache"
import { readDB } from "@/lib/db"
import { Timeline } from "../components/Timeline"
import { useState, useEffect } from "react"

export default function CacheAsidePage() {
  const [mounted, setMounted] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setMounted(true)
    let result = getCache()
    if (!result) {
      result = readDB()
      setCache(result)
    }
    setData(result)
  }, [])

  if (!mounted) {
    return (
      <Card title="🧩 Cache-Aside">
        <p>La app controla cuándo leer DB y guardar en cache.</p>
        <StatePanel />
        <pre>Cargando...</pre>
        <Timeline />
        <a href="/">⬅ Volver</a>
      </Card>
    )
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