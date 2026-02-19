"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { writeThrough, resetCache } from "@/lib/cache"
import { useState } from "react"

export default function WriteThroughPage() {
  const [loading, setLoading] = useState(false)

  const handleWrite = async () => {
    setLoading(true)
    try {
      const value = Math.floor(Math.random() * 100)
      await writeThrough(value)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="✍️ Write-Through">
      <div>
        <h3 style={{ marginBottom: 12, color: "#0f172a" }}>¿Qué es Write-Through?</h3>
        <p style={{ marginBottom: 16, color: "#475569", lineHeight: 1.6 }}>
          Toda escritura actualiza caché Y BD simultáneamente. La confirmación se envía cuando ambas se actualizan:
          <br />
          1. Dato se escribe en caché
          <br />
          2. Dato se escribe en BD (sincrónico)
          <br />
          3. Confirmación a la aplicación
        </p>

        <strong style={{ display: "block", marginBottom: 8 }}>✓ Ventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Cero pérdida de datos</li>
          <li>Sincronización total caché-BD</li>
          <li>Alto nivel de confiabilidad</li>
        </ul>

        <strong style={{ display: "block", marginBottom: 8 }}>✗ Desventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Escrituras lentas (2 saltos)</li>
          <li>Mayor latencia en operaciones</li>
          <li>No ideal para alta concurrencia</li>
        </ul>

        <div style={{ background: "#fef3c7", border: "1px solid #fcd34d", borderRadius: 8, padding: 12, marginBottom: 16 }}>
          <strong style={{ color: "#b45309" }}>💡 Caso de uso:</strong>
          <p style={{ margin: "8px 0 0 0", color: "#92400e" }}>
            Transacciones financieras, donde la integridad es crítica
          </p>
        </div>
      </div>

      <StatePanel />

      <button 
        onClick={handleWrite}
        disabled={loading}
        style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "⏳ Escribiendo..." : "✍️ Escribir valor"}
      </button>

      <button onClick={resetCache}>🧹 Reset Cache</button>

      <Timeline />
      <a href="/">⬅ Volver</a>
    </Card>
  )
}