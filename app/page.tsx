
const pages = [
  { path: "/cache-aside", title: "Cache-Aside", emoji: "🧩" },
  { path: "/read-through", title: "Read-Through", emoji: "🔁" },
  { path: "/refresh-ahead", title: "Refresh-Ahead", emoji: "🔄" },
  { path: "/write-through", title: "Write-Through", emoji: "✍️" },
  { path: "/write-around", title: "Write-Around", emoji: "🚫" },
  { path: "/write-back", title: "Write-Back", emoji: "⚡" },
]

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "60px 20px", background: "#f8fafc" }}>
      <style>{`
        .slide-button {
          transition: all 0.3s ease;
        }
        .slide-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(37, 99, 235, 0.4) !important;
        }
        .strategy-card {
          transition: all 0.3s ease;
        }
        .strategy-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1) !important;
          border-color: #2563eb !important;
        }
        .section {
          margin-bottom: 80px;
        }
        .section-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin: 0 0 32px 0;
          color: #0f172a;
          padding-bottom: 16px;
          border-bottom: 2px solid #e2e8f0;
        }
        .nav-grid {
          display: grid;
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))";
          gap: 24;
        }
      `}</style>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Encabezado Principal */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1 style={{ marginBottom: "16px", fontSize: "3.5rem", color: "#0f172a" }}>🧠 Estrategias de Caché</h1>
          <p style={{ fontSize: "1.125rem", opacity: 0.7, marginBottom: "40px", color: "#475569" }}>Demo interactiva para charlas técnicas</p>

          <a
            href="https://estrategiascachediapositivas.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="slide-button"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
              color: "white",
              padding: "14px 40px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: "0 10px 20px rgba(37, 99, 235, 0.3)",
              cursor: "pointer",
            }}
          >
            📊 Diapositivas de Presentación
          </a>
        </div>

        {/* Sección Educativa */}
        <div className="section">
          <h2 className="section-title">📚 Aprende los Conceptos</h2>
          <div className="nav-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            <a
              href="/portada"
              className="strategy-card"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "32px 24px",
                borderRadius: "16px",
                textDecoration: "none",
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                cursor: "pointer",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "12px", margin: 0 }}>📌 Portada</h2>
              <p style={{ opacity: 0.9, marginBottom: 0 }}>Inicio de la presentación</p>
            </a>
            
            <a
              href="/el-problema"
              className="strategy-card"
              style={{
                background: "white",
                padding: "32px 24px",
                borderRadius: "16px",
                textDecoration: "none",
                color: "#0f172a",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                cursor: "pointer",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "12px", margin: 0 }}>❌ El Problema</h2>
              <p style={{ opacity: 0.6, marginBottom: 0 }}>Entiende los desafíos</p>
            </a>

            <a
              href="/que-es-cache"
              className="strategy-card"
              style={{
                background: "white",
                padding: "32px 24px",
                borderRadius: "16px",
                textDecoration: "none",
                color: "#0f172a",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                cursor: "pointer",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "12px", margin: 0 }}>🧊 ¿Qué es Caché?</h2>
              <p style={{ opacity: 0.6, marginBottom: 0 }}>La solución fundamental</p>
            </a>

            <a
              href="/cache-hit-vs-miss"
              className="strategy-card"
              style={{
                background: "white",
                padding: "32px 24px",
                borderRadius: "16px",
                textDecoration: "none",
                color: "#0f172a",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                cursor: "pointer",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "12px", margin: 0 }}>⚔️ HIT vs MISS</h2>
              <p style={{ opacity: 0.6, marginBottom: 0 }}>El corazón del caché</p>
            </a>

            <a
              href="/trade-offs"
              className="strategy-card"
              style={{
                background: "white",
                padding: "32px 24px",
                borderRadius: "16px",
                textDecoration: "none",
                color: "#0f172a",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                cursor: "pointer",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "12px", margin: 0 }}>⚙️ Trade-offs</h2>
              <p style={{ opacity: 0.6, marginBottom: 0 }}>No hay bala de plata</p>
            </a>
          </div>
        </div>

        {/* Sección de Estrategias */}
        <div className="section">
          <h2 className="section-title">🎯 Explora las Estrategias</h2>
          <p style={{ fontSize: "1.0625rem", color: "#475569", marginBottom: "32px" }}>
            Interactúa con cada estrategia. Usa los botones para simular operaciones y observa los timelines en tiempo real.
          </p>
          <div className="nav-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {pages.map(p => (
              <a
                key={p.path}
                href={p.path}
                className="strategy-card"
                style={{
                  background: "white",
                  padding: "32px 24px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  color: "#0f172a",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                  cursor: "pointer",
                }}
              >
                <h2 style={{ fontSize: "1.5rem", marginBottom: "12px", margin: 0 }}>{p.emoji} {p.title}</h2>
                <p style={{ opacity: 0.6, marginBottom: 0 }}>Ver demo interactiva</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}