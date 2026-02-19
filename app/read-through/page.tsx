"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { readThrough, resetCache } from "@/lib/cache"
import { readDB } from "@/lib/db"
import { logEvent } from "@/lib/events"
import { useState } from "react"

export default function ReadThroughPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFetchData = async () => {
    setLoading(true)
    try {
      logEvent("📖 Read-Through iniciado", "app")
      const result = await readThrough(readDB)
      setData(result)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="🔁 Read-Through">
      <div>
        <h3 style={{ marginBottom: 12, color: "#0f172a" }}>¿Qué es Read-Through?</h3>
        <p style={{ marginBottom: 16, color: "#475569", lineHeight: 1.6 }}>
          El caché es transparente para la aplicación. La app solo pide datos, y un middleware:
          <br />
          1. Consulta el caché automáticamente
          <br />
          2. Si MISS, obtiene de BD y carga el caché automáticamente
          <br />
          3. La app nunca ve directamente la BD
        </p>

        <strong style={{ display: "block", marginBottom: 8 }}>✓ Ventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Código de app muy limpio</li>
          <li>Lógica centralizada en middleware</li>
          <li>Agnóstico del almacenamiento</li>
        </ul>

        <strong style={{ display: "block", marginBottom: 8 }}>✗ Desventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Middleware más complejo de implementar</li>
          <li>Menos control granular</li>
        </ul>
      </div>

      <StatePanel />

      <button 
        onClick={handleFetchData}
        disabled={loading}
        style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "⏳ Leyendo..." : "📖 Leer datos"}
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