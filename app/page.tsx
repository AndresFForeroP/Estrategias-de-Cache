
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
    <main style={{ padding: 40 }}>
      <h1>🧠 Estrategias de Caché</h1>
      <p>Demo interactiva para charlas técnicas</p>

      <div style={{ margin: "30px 0", textAlign: "center" }}>
        <a
          href="https://estrategiascachediapositivas.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#007bff",
            color: "white",
            padding: "12px 30px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          📊 Diapositivas
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 20 }}>
        {pages.map(p => (
          <a
            key={p.path}
            href={p.path}
            style={{
              background: "white",
              padding: 20,
              borderRadius: 12,
              textDecoration: "none",
              color: "#333",
              boxShadow: "0 10px 20px rgba(0,0,0,.08)",
            }}
          >
            <h2>{p.emoji} {p.title}</h2>
            <p>Ver demo</p>
          </a>
        ))}
      </div>
    </main>
  )
}