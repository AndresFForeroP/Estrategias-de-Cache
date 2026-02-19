"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { refreshAhead, resetCache } from "@/lib/cache"
import { readDB } from "@/lib/db"
import { logEvent } from "@/lib/events"
import { useState } from "react"

export default function RefreshAheadPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFetchData = async () => {
    setLoading(true)
    try {
      logEvent("🔄 Refresh-Ahead iniciado", "app")
      const result = await refreshAhead(readDB, 5000)
      setData(result)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="🔄 Refresh-Ahead">
      <div>
        <h3 style={{ marginBottom: 12, color: "#0f172a" }}>¿Qué es Refresh-Ahead?</h3>
        <p style={{ marginBottom: 16, color: "#475569", lineHeight: 1.6 }}>
          El caché se auto-refresca antes de expirar. Esto asegura que los datos siempre estén frescos sin esperar MISS:
          <br />
          1. Si el dato está cercano a expirar, se refresca automáticamente
          <br />
          2. El usuario nunca ve latencia de BD
          <br />
          3. Ideal para datos populares que cambian frecuentemente
        </p>

        <strong style={{ display: "block", marginBottom: 8 }}>✓ Ventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Latencia mínima y consistente</li>
          <li>Usuario nunca ve MISS</li>
          <li>Perfecto para trending topics, precios</li>
        </ul>

        <strong style={{ display: "block", marginBottom: 8 }}>✗ Desventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Predecir qué datos refrescar es complejo</li>
          <li>Mayor carga en BD</li>
          <li>Requiere análisis de patrones</li>
        </ul>
      </div>

      <StatePanel />

      <button 
        onClick={handleFetchData}
        disabled={loading}
        style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "⏳ Refrescando..." : "🔄 Refrescar si necesario"}
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