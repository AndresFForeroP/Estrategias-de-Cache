"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { writeBack, resetCache } from "@/lib/cache"
import { useState } from "react"

export default function WriteBackPage() {
  const [loading, setLoading] = useState(false)

  const handleWrite = async () => {
    setLoading(true)
    try {
      const value = Math.floor(Math.random() * 100)
      await writeBack(value)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="⚡ Write-Back">
      <div>
        <h3 style={{ marginBottom: 12, color: "#0f172a" }}>¿Qué es Write-Back?</h3>
        <p style={{ marginBottom: 16, color: "#475569", lineHeight: 1.6 }}>
          Escritura ultra-rápida. Los datos se guardan en caché inmediatamente, y la BD se actualiza en segundo plano:
          <br />
          1. Dato se escribe en caché (ACK inmediata)
          <br />
          2. BD se actualiza asincronamente en background
          <br />
          3. Aplicación no espera a la BD
        </p>

        <strong style={{ display: "block", marginBottom: 8 }}>✓ Ventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Máximo rendimiento en escrituras</li>
          <li>Usuario experimenta latencia mínima</li>
          <li>Ideal para operaciones no críticas</li>
        </ul>

        <strong style={{ display: "block", marginBottom: 8 }}>✗ Desventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Riesgo de pérdida de datos si caché falla</li>
          <li>Consistencia eventual (no inmediata)</li>
          <li>Requiere mecanismos de recuperación</li>
        </ul>

        <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: 8, padding: 12, marginBottom: 16 }}>
          <strong style={{ color: "#b91c1c" }}>⚠️ Caso de uso (con cuidado):</strong>
          <p style={{ margin: "8px 0 0 0", color: "#991b1b" }}>
            Likes en redes sociales, contadores de vistas — donde perder ocasionalmente es aceptable
          </p>
        </div>
      </div>

      <StatePanel />

      <button 
        onClick={handleWrite}
        disabled={loading}
        style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "⏳ Escribiendo..." : "⚡ Escribir rápido"}
      </button>

      <button onClick={resetCache}>🧹 Reset Cache</button>

      <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: 12, marginBottom: 16 }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#166534" }}>
          💬 Nota: La actualización en BD ocurre 3 segundos después. Observa el Timeline.
        </p>
      </div>

      <Timeline />
      <a href="/">⬅ Volver</a>
    </Card>
  )
}