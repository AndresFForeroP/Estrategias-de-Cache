"use client"
import { Card } from "../components/Card"
import { StatePanel } from "../components/StatePanel"
import { Timeline } from "../components/Timeline"
import { writeAround, resetCache } from "@/lib/cache"
import { useState } from "react"

export default function WriteAroundPage() {
  const [loading, setLoading] = useState(false)

  const handleWrite = async () => {
    setLoading(true)
    try {
      const value = Math.floor(Math.random() * 100)
      await writeAround(value)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="🚫 Write-Around">
      <div>
        <h3 style={{ marginBottom: 12, color: "#0f172a" }}>¿Qué es Write-Around?</h3>
        <p style={{ marginBottom: 16, color: "#475569", lineHeight: 1.6 }}>
          Las escrituras evitan el caché y van directamente a BD. El caché se actualiza solo cuando se leen los datos:
          <br />
          1. Dato se escribe directamente en BD
          <br />
          2. Caché NO se actualiza automáticamente
          <br />
          3. Se carga en caché cuando se lee (si es necesario)
        </p>

        <strong style={{ display: "block", marginBottom: 8 }}>✓ Ventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>No desperdicia RAM en datos no leídos</li>
          <li>Evita contaminación del caché</li>
          <li>Eficiente con datos escribible-no-legibles</li>
        </ul>

        <strong style={{ display: "block", marginBottom: 8 }}>✗ Desventajas:</strong>
        <ul style={{ marginBottom: 16, marginLeft: 20 }}>
          <li>Primer acceso en lectura es lento (MISS)</li>
          <li>Complejidad en sincronización</li>
        </ul>

        <div style={{ background: "#fef3c7", border: "1px solid #fcd34d", borderRadius: 8, padding: 12, marginBottom: 16 }}>
          <strong style={{ color: "#b45309" }}>💡 Caso de uso:</strong>
          <p style={{ margin: "8px 0 0 0", color: "#92400e" }}>
            Logs, eventos, analytics — datos que se guardan pero se consultan raramente
          </p>
        </div>
      </div>

      <StatePanel />

      <button 
        onClick={handleWrite}
        disabled={loading}
        style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "⏳ Escribiendo..." : "🚫 Escribir solo en BD"}
      </button>

      <button onClick={resetCache}>🧹 Reset Cache</button>

      <Timeline />
      <a href="/">⬅ Volver</a>
    </Card>
  )
}