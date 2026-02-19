"use client"

export default function QueEsCachePage() {
  const concepts = [
    {
      icon: "💾",
      title: "Almacenamiento Temporal",
      description: "Guarda datos temporalmente para acceso rápido",
    },
    {
      icon: "⚡",
      title: "Vive en Memoria (RAM)",
      description: "Acceso extremadamente rápido (microsegundos)",
    },
    {
      icon: "🚀",
      title: "Velocidad Extrema",
      description: "Microsegundos vs milisegundos en comparación",
    },
    {
      icon: "🔄",
      title: "Política de Expiración",
      description: "Los datos caducan y se refrescan automáticamente",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "60px 20px" }}>
      <style>{`
        .concept-card {
          background: white;
          border-radius: 14px;
          padding: 24px;
          border: 1.5px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .concept-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.1);
          border-color: #2563eb;
        }
        .concept-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }
        .concept-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #0f172a;
        }
        .concept-description {
          color: #475569;
          margin: 0;
          font-size: 14px;
        }
        .definition-box {
          background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
          border: 2px solid #93c5fd;
          border-radius: 14px;
          padding: 32px;
          margin-bottom: 40px;
          text-align: center;
        }
        .definition-text {
          font-size: 1.125rem;
          color: #1e40af;
          font-style: italic;
          font-weight: 500;
          margin: 0;
          line-height: 1.8;
        }
        .flow-diagram {
          background: white;
          border-radius: 14px;
          padding: 32px;
          border: 2px solid #e2e8f0;
          margin-bottom: 40px;
        }
        .flow-step {
          text-align: center;
          margin: 24px 0;
        }
        .flow-number {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          color: white;
          border-radius: 50%;
          line-height: 40px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .flow-text {
          font-size: 1rem;
          color: #1f2937;
          font-weight: 600;
        }
        .flow-arrow {
          color: #9ca3af;
          font-size: 1.5rem;
          margin: 12px 0;
        }
        .comparison-table {
          width: 100%;
          background: white;
          border-radius: 14px;
          border: 2px solid #e2e8f0;
          overflow: hidden;
          margin-bottom: 40px;
        }
        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid #e2e8f0;
        }
        .comparison-row:last-child {
          border-bottom: none;
        }
        .comparison-cell {
          padding: 20px;
        }
        .comparison-cell:first-child {
          background: #f8fafc;
          font-weight: 600;
          color: #0f172a;
          border-right: 1px solid #e2e8f0;
        }
        .comparison-value {
          color: #475569;
        }
      `}</style>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: "3rem", margin: "0 0 16px 0", color: "#0f172a" }}>🧊 ¿Qué es Caché?</h1>
          <p style={{ color: "#64748b", margin: 0 }}>Entendamos el concepto fundamental detrás de los caches</p>
        </div>

        <div className="definition-box">
          <p className="definition-text">
            "Un componente de hardware o software que almacena datos para que las solicitudes futuras de esos datos
            se puedan atender con mayor rapidez."
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 40 }}>
          {concepts.map((concept, idx) => (
            <div key={idx} className="concept-card">
              <div className="concept-icon">{concept.icon}</div>
              <h3 className="concept-title">{concept.title}</h3>
              <p className="concept-description">{concept.description}</p>
            </div>
          ))}
        </div>

        <div className="flow-diagram">
          <h2 style={{ marginTop: 0, marginBottom: 24, color: "#0f172a", textAlign: "center" }}>🔄 Cómo funciona el caché</h2>

          <div>
            <div className="flow-step">
              <div className="flow-number">1</div>
              <div className="flow-text">Usuario solicita datos</div>
            </div>
            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <div className="flow-number">2</div>
              <div className="flow-text">Sistema consulta caché</div>
            </div>
            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <div className="flow-number">3</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 16 }}>
                <div>
                  <div style={{ background: "#dcfce7", border: "2px solid #86efac", borderRadius: 10, padding: 12 }}>
                    <strong style={{ color: "#166534" }}>✓ Si está en caché</strong>
                    <p style={{ margin: "8px 0 0 0", color: "#166534", fontSize: "14px" }}>
                      Se devuelve inmediatamente (~1ms)
                    </p>
                  </div>
                </div>
                <div>
                  <div style={{ background: "#fee2e2", border: "2px solid #fca5a5", borderRadius: 10, padding: 12 }}>
                    <strong style={{ color: "#b91c1c" }}>✗ Si no está</strong>
                    <p style={{ margin: "8px 0 0 0", color: "#b91c1c", fontSize: "14px" }}>
                      Se consulta BD (~1000ms)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <div className="flow-number">4</div>
              <div className="flow-text">Se guarda en caché para próximas solicitudes</div>
            </div>
          </div>
        </div>

        <div className="comparison-table">
          <div className="comparison-row">
            <div className="comparison-cell">📊 Métrica</div>
            <div className="comparison-cell">Velocidad</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">⚡ Lectura desde RAM (Caché)</div>
            <div className="comparison-cell comparison-value">~0.1 ms</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">💾 Lectura desde Disco (BD)</div>
            <div className="comparison-cell comparison-value">~1000 ms</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">🔢 Diferencia</div>
            <div className="comparison-cell comparison-value">
              <strong style={{ color: "#dc2626" }}>10,000x más rápido</strong>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/el-problema" style={{ padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 600, background: "white", color: "#0f172a", border: "2px solid #e2e8f0", transition: "all 0.3s ease", cursor: "pointer" }}>
            ⬅️ El Problema
          </a>
          <a href="/cache-hit-vs-miss" style={{ padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 600, background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)", color: "white", border: "none", transition: "all 0.3s ease", cursor: "pointer" }}>
            ➡️ Cache HIT vs MISS
          </a>
        </div>
      </div>
    </div>
  )
}
