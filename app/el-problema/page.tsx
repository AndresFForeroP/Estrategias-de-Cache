"use client"

export default function ElProblemaPage() {
  const problems = [
    {
      icon: "⏱️",
      title: "Latencia / Bases de Datos Lentas",
      description: "El acceso a disco es 1000 veces más lento que memoria. Cada consulta impacta el tiempo de respuesta.",
      details: [
        "📊 Lectura de disco: ~1000ms",
        "🔌 Lectura de RAM: ~0.1ms",
        "👥 Múltiples usuarios = múltiples consultas lentas",
      ],
    },
    {
      icon: "💰",
      title: "Costo de Escalar DB",
      description: "Escalar bases de datos es costoso y requiere inversión significativa en infraestructura.",
      details: [
        "💳 Hardware especilizado = alto costo",
        "🔧 Mantenimiento complejo",
        "📈 Crecimiento exponencial de gasto",
      ],
    },
    {
      icon: "🔁",
      title: "Procesamiento Repetitivo",
      description: "Las mismas consultas se ejecutan una y otra vez, desperdiciando recursos.",
      details: [
        "🔄 Mismo usuario consultado 100 veces/día",
        "⚙️ BD procesando la misma query constantemente",
        "🌊 Desperdicio de CPU, memoria, ancho de banda",
      ],
    },
  ]

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "60px 20px" }}>
      <style>{`
        .problem-card {
          background: white;
          border-radius: 16px;
          padding: 32px;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.07);
        }
        .problem-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px rgba(0,0,0,0.1);
          border-color: #ef4444;
        }
        .problem-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }
        .problem-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #0f172a;
        }
        .problem-description {
          color: #475569;
          margin: 0 0 20px 0;
          line-height: 1.6;
        }
        .details-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .details-list li {
          padding: 8px 0;
          color: #64748b;
          font-size: 14px;
        }
        .header {
          text-align: center;
          margin-bottom: 60px;
        }
        .header h1 {
          font-size: 3rem;
          margin: 0 0 16px 0;
          color: #0f172a;
        }
        .header p {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .nav-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-top: 60px;
          flex-wrap: wrap;
        }
        .nav-btn {
          padding: 12px 24px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .nav-btn-primary {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
        }
        .nav-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(239, 68, 68, 0.3);
        }
        .nav-btn-secondary {
          background: white;
          color: #0f172a;
          border: 2px solid #e2e8f0;
        }
        .nav-btn-secondary:hover {
          border-color: #ef4444;
          color: #ef4444;
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="header">
          <h1>❌ El Problema</h1>
          <p>
            Piensen en una aplicación web típica: múltiples usuarios consultando los mismos datos constantemente.
            Aquí están los principales desafíos que las aplicaciones enfrentan.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, marginBottom: 60 }}>
          {problems.map((problem, idx) => (
            <div key={idx} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <h2 className="problem-title">{problem.title}</h2>
              <p className="problem-description">{problem.description}</p>
              <ul className="details-list">
                {problem.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fef08a 100%)", borderRadius: 16, padding: 32, marginBottom: 60, border: "2px solid #fcd34d" }}>
          <p style={{ margin: 0, fontSize: "1.125rem", color: "#1f2937", fontWeight: 600 }}>
            💡 <strong>La solución existe:</strong> Caché. Un componente de hardware o software que almacena datos
            temporalmente para que las solicitudes futuras sean más rápidas.
          </p>
        </div>

        <div className="nav-buttons">
          <a href="/portada" className="nav-btn nav-btn-secondary">
            ⬅️ Portada
          </a>
          <a href="/que-es-cache" className="nav-btn nav-btn-primary">
            ➡️ ¿Qué es Caché?
          </a>
        </div>
      </div>
    </div>
  )
}
