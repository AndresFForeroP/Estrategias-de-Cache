"use client"

export default function TradeOffsPage() {
  const tradeoffs = [
    {
      icon: "📖",
      title: "Lectura Frecuente / Escritura Esporádica",
      scenarios: [
        {
          desc: "Si lectura es frecuente",
          result: "✓ Cache-Aside funciona bien",
          color: "#22c55e",
        },
        {
          desc: "Si escritura es constante",
          result: "✗ Requiere otra estrategia",
          color: "#ef4444",
        },
      ],
    },
    {
      icon: "⚖️",
      title: "Consistencia vs Velocidad",
      scenarios: [
        {
          desc: "Queremos dato exacto",
          result: "Sacrificamos velocidad",
          color: "#f59e0b",
        },
        {
          desc: "Queremos respuesta rápida",
          result: "Aceptamos obsolescencia",
          color: "#f59e0b",
        },
      ],
    },
    {
      icon: "🔄",
      title: "Obsolescencia vs Carga DB",
      scenarios: [
        {
          desc: "Datos viven poco en caché",
          result: "Caducan pronto, más refrescos",
          color: "#8b5cf6",
        },
        {
          desc: "Datos viven siempre",
          result: "Presión en BD al actualizar",
          color: "#8b5cf6",
        },
      ],
    },
  ]

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "60px 20px" }}>
      <style>{`
        .tradeoff-card {
          background: white;
          border-radius: 16px;
          padding: 32px;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .tradeoff-card:hover {
          box-shadow: 0 20px 25px rgba(0,0,0,0.1);
          border-color: #2563eb;
        }
        .tradeoff-icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }
        .tradeoff-title {
          font-size: 1.375rem;
          font-weight: 700;
          margin: 0 0 20px 0;
          color: #0f172a;
        }
        .scenario-item {
          padding: 16px;
          background: #f8fafc;
          border-radius: 10px;
          margin-bottom: 12px;
          border-left: 4px solid #e2e8f0;
        }
        .scenario-item:last-child {
          margin-bottom: 0;
        }
        .scenario-desc {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 8px;
        }
        .scenario-result {
          font-weight: 600;
          font-size: 15px;
        }
        .key-insight {
          background: linear-gradient(135deg, #fef3c7 0%, #fef08a 100%);
          border: 2px solid #fcd34d;
          border-radius: 16px;
          padding: 32px;
          margin: 40px 0;
          text-align: center;
        }
        .insight-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: #78350f;
          margin: 0;
        }
        .strategies-overview {
          background: white;
          border-radius: 16px;
          border: 2px solid #e2e8f0;
          padding: 32px;
          margin: 40px 0;
        }
        .strategy-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 20px;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 16px;
          background: #f8fafc;
        }
        .strategy-row:last-child {
          margin-bottom: 0;
        }
        .strategy-name {
          font-weight: 700;
          color: #0f172a;
        }
        .strategy-uses {
          color: #475569;
          font-size: 14px;
          line-height: 1.6;
        }
      `}</style>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h1 style={{ fontSize: "3rem", margin: "0 0 16px 0", color: "#0f172a" }}>⚙️ Trade-offs en Caché</h1>
          <p style={{ color: "#64748b", fontSize: "1.125rem", maxWidth: 600, margin: "0 auto" }}>
            No existe una estrategia mágica que funcione para todo. Cada una tiene compensaciones.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, marginBottom: 40 }}>
          {tradeoffs.map((tradeoff, idx) => (
            <div key={idx} className="tradeoff-card">
              <div className="tradeoff-icon">{tradeoff.icon}</div>
              <h2 className="tradeoff-title">{tradeoff.title}</h2>
              {tradeoff.scenarios.map((scenario, i) => (
                <div
                  key={i}
                  className="scenario-item"
                  style={{ borderLeftColor: scenario.color }}
                >
                  <div className="scenario-desc">{scenario.desc}</div>
                  <div className="scenario-result" style={{ color: scenario.color }}>
                    {scenario.result}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="key-insight">
          <p className="insight-text">🎯 No hay bala de plata</p>
          <p style={{ color: "#92400e", margin: "12px 0 0 0", fontSize: "1rem" }}>
            Todo depende de tu caso de uso. Debes entender los trade-offs y elegir la estrategia adecuada.
          </p>
        </div>

        <div className="strategies-overview">
          <h2 style={{ marginTop: 0, marginBottom: 24, color: "#0f172a" }}>📊 Resumen de Estrategias</h2>

          <div className="strategy-row">
            <div className="strategy-name">🧩 Cache-Aside</div>
            <div className="strategy-uses">
              ✓ Más popular en aplicaciones reales. Control total, resiliente pero primer acceso lento.
            </div>
          </div>

          <div className="strategy-row">
            <div className="strategy-name">🔁 Read-Through</div>
            <div className="strategy-uses">
              ✓ Código limpio. El caché es transparente, centralización de lógica pero más complejo.
            </div>
          </div>

          <div className="strategy-row">
            <div className="strategy-name">🔄 Refresh-Ahead</div>
            <div className="strategy-uses">
              ✓ Alto rendimiento. Datos siempre frescos, pero requiere predicción y análisis.
            </div>
          </div>

          <div className="strategy-row">
            <div className="strategy-name">✍️ Write-Through</div>
            <div className="strategy-uses">
              ✓ Alta confiabilidad. Cero pérdida, pero escrituras lentas (2 saltos).
            </div>
          </div>

          <div className="strategy-row">
            <div className="strategy-name">🚫 Write-Around</div>
            <div className="strategy-uses">
              ✓ Eficiencia. No desperdicia RAM, pero primer acceso en lectura es lento.
            </div>
          </div>

          <div className="strategy-row">
            <div className="strategy-name">⚡ Write-Back</div>
            <div className="strategy-uses">
              ✓ Máximo rendimiento. Escrituras instantáneas, pero riesgo de pérdida de datos.
            </div>
          </div>
        </div>

        <div style={{ background: "#f0f9ff", border: "2px solid #93c5fd", borderRadius: 14, padding: 32, marginBottom: 60 }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e3a8a", fontSize: "1.25rem" }}>🤔 Preguntas para decidir</h3>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, color: "#1e40af" }}>
            <li>¿Los datos son críticos? → Write-Through</li>
            <li>¿Se leen mucho pero escriben poco? → Cache-Aside o Read-Through</li>
            <li>¿La latencia es crítica? → Refresh-Ahead o Write-Back</li>
            <li>¿Escribimos mucho pero leemos poco? → Write-Around</li>
            <li>¿Necesitamos código limpio? → Read-Through</li>
            <li>¿Necesitamos control total? → Cache-Aside</li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/cache-hit-vs-miss" style={{ padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 600, background: "white", color: "#0f172a", border: "2px solid #e2e8f0", transition: "all 0.3s ease", cursor: "pointer" }}>
            ⬅️ Cache HIT vs MISS
          </a>
          <a href="/" style={{ padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 600, background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)", color: "white", border: "none", transition: "all 0.3s ease", cursor: "pointer" }}>
            ➡️ A las Estrategias
          </a>
        </div>
      </div>
    </div>
  )
}
