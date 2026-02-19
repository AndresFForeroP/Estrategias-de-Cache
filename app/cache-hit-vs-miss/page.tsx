"use client"

import { useState } from "react"
import { logEvent } from "@/lib/events"

export default function CacheHitVsMissPage() {
  const [executing, setExecuting] = useState<"hit" | "miss" | null>(null)
  const [showTimeline, setShowTimeline] = useState<"hit" | "miss" | null>(null)

  const handleSimulateHit = () => {
    setExecuting("hit")
    setShowTimeline("hit")
    logEvent("📋 Request: GET /user/123", "app")
    setTimeout(() => logEvent("✓ Cache HIT en ~1ms", "cache"), 100)
    setTimeout(() => logEvent("✓ Response enviado al usuario", "app"), 200)
    setTimeout(() => setExecuting(null), 300)
  }

  const handleSimulateMiss = () => {
    setExecuting("miss")
    setShowTimeline("miss")
    logEvent("📋 Request: GET /user/456", "app")
    setTimeout(() => logEvent("✗ Cache MISS - no encontrado", "cache"), 100)
    setTimeout(() => logEvent("📀 Consultando BD...", "db"), 200)
    setTimeout(() => logEvent("✓ BD respondió en ~1000ms", "db"), 1100)
    setTimeout(() => logEvent("💾 Guardando en caché", "cache"), 1150)
    setTimeout(() => logEvent("✓ Response enviado al usuario", "app"), 1250)
    setTimeout(() => setExecuting(null), 1350)
  }

  const scenarios = [
    {
      type: "hit" as const,
      emoji: "✓",
      title: "Cache HIT",
      color: "#22c55e",
      lightBg: "#f0fdf4",
      lightBorder: "#86efac",
      darkText: "#166534",
      description: "El dato está en caché",
      flow: ["App solicita", "Cache busca", "✓ Encontrado", "Respuesta rápida"],
      time: "~1-5 ms",
      impact: "BD sin carga",
    },
    {
      type: "miss" as const,
      emoji: "✗",
      title: "Cache MISS",
      color: "#ef4444",
      lightBg: "#fef2f2",
      lightBorder: "#fca5a5",
      darkText: "#b91c1c",
      description: "El dato NO está en caché",
      flow: ["App solicita", "Cache busca", "✗ No encontrado", "Consulta BD", "Guarda en cache", "Respuesta lenta"],
      time: "~1000+ ms",
      impact: "Latencia de red",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "60px 20px" }}>
      <style>{`
        .scenario-container {
          background: white;
          border-radius: 16px;
          padding: 32px;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .scenario-container.active {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        .scenario-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .scenario-emoji {
          font-size: 2rem;
        }
        .scenario-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          color: #0f172a;
        }
        .flow-items {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .flow-item {
          background: #f1f5f9;
          border-radius: 6px;
          padding: 8px 12px;
          font-size: 12px;
          color: #475569;
          white-space: nowrap;
        }
        .stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        .stat-box {
          padding: 16px;
          border-radius: 10px;
          text-align: center;
        }
        .stat-label {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 6px;
        }
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .btn-simulate {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
        }
        .btn-simulate:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .btn-simulate:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        .comparison-table {
          width: 100%;
          margin-top: 60px;
          border-collapse: collapse;
          background: white;
          border-radius: 14px;
          border: 2px solid #e2e8f0;
          overflow: hidden;
        }
        .comparison-table th {
          background: #f8fafc;
          padding: 16px;
          text-align: left;
          font-weight: 700;
          color: #0f172a;
          border-bottom: 2px solid #e2e8f0;
        }
        .comparison-table td {
          padding: 16px;
          border-bottom: 1px solid #e2e8f0;
        }
        .comparison-table tr:last-child td {
          border-bottom: none;
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h1 style={{ fontSize: "3rem", margin: "0 0 16px 0", color: "#0f172a" }}>⚔️ Cache HIT vs Cache MISS</h1>
          <p style={{ color: "#64748b", fontSize: "1.125rem", maxWidth: 600, margin: "0 auto" }}>
            El corazón de todo. Cuando alguien solicita un dato, dos cosas pueden pasar.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 32, marginBottom: 60 }}>
          {scenarios.map((scenario) => (
            <div key={scenario.type} className={`scenario-container ${executing === scenario.type ? "active" : ""}`} style={{ borderColor: scenario.color }}>
              <div className="scenario-header" style={{ borderBottom: `2px solid ${scenario.color}`, paddingBottom: 16 }}>
                <span className="scenario-emoji" style={{ color: scenario.color }}>
                  {scenario.emoji}
                </span>
                <h2 className="scenario-title" style={{ color: scenario.color }}>
                  {scenario.title}
                </h2>
              </div>

              <p style={{ color: "#475569", marginBottom: 16, fontSize: "14px" }}>{scenario.description}</p>

              <div className="flow-items">
                {scenario.flow.map((item, i) => (
                  <div key={i} className="flow-item" style={{ background: `${scenario.color}15`, color: scenario.color }}>
                    {item}
                  </div>
                ))}
              </div>

              <div className="stats">
                <div className="stat-box" style={{ background: `${scenario.color}10` }}>
                  <div className="stat-label" style={{ color: scenario.darkText }}>⏱️ Tiempo Total</div>
                  <div className="stat-value" style={{ color: scenario.color }}>
                    {scenario.time}
                  </div>
                </div>
                <div className="stat-box" style={{ background: `${scenario.color}10` }}>
                  <div className="stat-label" style={{ color: scenario.darkText }}>📊 Impacto</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: scenario.color, marginTop: 4 }}>
                    {scenario.impact}
                  </div>
                </div>
              </div>

              <button
                className="btn-simulate"
                style={{ background: scenario.color, color: "white" }}
                onClick={scenario.type === "hit" ? handleSimulateHit : handleSimulateMiss}
                disabled={executing !== null}
              >
                {executing === scenario.type ? `⏳ Simulando...` : `▶️ Simular ${scenario.title}`}
              </button>
            </div>
          ))}
        </div>

        <div style={{ background: "#f0f9ff", border: "2px solid #93c5fd", borderRadius: 14, padding: 32, marginBottom: 60 }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e3a8a", fontSize: "1.25rem" }}>🎯 La Diferencia Crítica</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
            <div>
              <p style={{ margin: "0 0 8px 0", fontWeight: 700, color: "#1e3a8a" }}>✓ En un HIT:</p>
              <p style={{ margin: 0, color: "#1e40af", lineHeight: 1.6 }}>
                La aplicación obtiene la respuesta en milisegundos. El usuario no espera. La base de datos no se molesta.
              </p>
            </div>
            <div>
              <p style={{ margin: "0 0 8px 0", fontWeight: 700, color: "#dc2626" }}>✗ En un MISS:</p>
              <p style={{ margin: 0, color: "#b91c1c", lineHeight: 1.6 }}>
                La aplicación espera 1000+ ms. Se consulta la BD, se guarda en caché, luego se devuelve.
              </p>
            </div>
          </div>
          <p style={{ margin: "16px 0 0 0", fontSize: "1rem", fontWeight: 700, color: "#991b1b" }}>
            📈 Diferencia: <strong style={{ color: "#dc2626" }}>200x más rápido</strong>
          </p>
        </div>

        <div style={{ background: "#ecfdf5", border: "2px solid #86efac", borderRadius: 14, padding: 32, marginBottom: 60 }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#166534", fontSize: "1.25rem" }}>💡 El Objetivo</h3>
          <p style={{ margin: 0, color: "#15803d", lineHeight: 1.8, fontSize: "1.0625rem" }}>
            <strong>Maximizar HITs y minimizar MISSes.</strong> Si bien el primer acceso es MISS, la segunda, tercera y
            subsecuentes solicitudes serán HIT. La ventaja acumulativa es enorme: centenares de usuarios accediendo a
            los mismos datos, casi todos en caché.
          </p>
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/que-es-cache" style={{ padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 600, background: "white", color: "#0f172a", border: "2px solid #e2e8f0", transition: "all 0.3s ease", cursor: "pointer" }}>
            ⬅️ Qué es Caché
          </a>
          <a href="/trade-offs" style={{ padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 600, background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)", color: "white", border: "none", transition: "all 0.3s ease", cursor: "pointer" }}>
            ➡️ Trade-offs
          </a>
        </div>
      </div>
    </div>
  )
}
