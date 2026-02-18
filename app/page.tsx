
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
    <main style={{ minHeight: "100vh", padding: "60px 20px" }}>
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
      `}</style>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ marginBottom: "16px", fontSize: "3.5rem" }}>🧠 Estrategias de Caché</h1>
          <p style={{ fontSize: "1.125rem", opacity: 0.7, marginBottom: "40px" }}>Demo interactiva para charlas técnicas</p>

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
            📊 Diapositivas
          </a>
        </div>

        <h2 style={{ textAlign: "center", marginBottom: "40px", opacity: 0.6, fontSize: "1.25rem" }}>Elige una estrategia</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
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
              <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>{p.emoji} {p.title}</h2>
              <p style={{ opacity: 0.6, marginBottom: 0 }}>Ver demo</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}