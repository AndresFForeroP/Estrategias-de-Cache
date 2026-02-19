"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { getCache, setCache, resetCache } from "@/lib/cache"
import { readDB } from "@/lib/db"
import { Timeline } from "../components/Timeline"
import { logEvent } from "@/lib/events"
import { useState, useEffect } from "react"

export default function CacheAsidePage() {
  const [mounted, setMounted] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleFetchData = async () => {
    setLoading(true)
    try {
      let result = getCache()
      if (!result) {
        logEvent("🔍 Cache MISS, consultando BD...", "app")
        result = await readDB()
        setCache(result)
      } else {
        logEvent("⚡ Cache HIT, usando datos en caché", "cache")
      }
      setData(result)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

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
      <div>
        <h3 style={{ marginBottom: 12, color: "#0f172a" }}>¿Qué es Cache-Aside?</h3>
        <p style={{ marginBottom: 16, color: "#475569", lineHeight: 1.6 }}>
          La aplicación es responsable de gestionar el caché. Cuando necesita datos:
          <br />
          1. Busca primero en caché
          <br />
          2. Si no está (MISS), consulta BD y guarda el resultado
          <br />
          3. Si está (HIT), lo devuelve directamente
        </p>

        <strong style={{ display: "block", marginBottom: 8 }}>✓ Ventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Resiliente a fallos de caché</li>
          <li>Control total sobre la lógica</li>
          <li>Popular en aplicaciones reales</li>
        </ul>

        <strong style={{ display: "block", marginBottom: 8 }}>✗ Desventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Primer acceso es lento (MISS)</li>
          <li>Lógica dispersa en la app</li>
        </ul>
      </div>

      <StatePanel />

      <button 
        onClick={handleFetchData}
        disabled={loading}
        style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "⏳ Consultando..." : "🔄 Obtener datos"}
      </button>

      <button onClick={resetCache}>🧹 Reset Cache</button>

      {data && (
        <div>
          <strong>Resultado:</strong>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      <Timeline />
      <a href="/">⬅ Volver</a>
    </Card>
  )
}