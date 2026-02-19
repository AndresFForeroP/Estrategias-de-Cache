"use client"

export default function PortadaPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <style>{`
        .portada-container {
          text-align: center;
          color: white;
          animation: fadeInUp 0.8s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .title {
          font-size: 4rem;
          font-weight: 800;
          margin: 0 0 16px 0;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        .subtitle {
          font-size: 1.875rem;
          font-weight: 300;
          margin: 0 0 40px 0;
          opacity: 0.95;
        }
        .tagline {
          font-size: 1.25rem;
          margin: 0 0 60px 0;
          opacity: 0.85;
          font-style: italic;
        }
        .presenter {
          font-size: 1.125rem;
          margin: 60px 0 0 0;
          padding-top: 40px;
          border-top: 2px solid rgba(255,255,255,0.3);
          opacity: 0.9;
        }
        .cta-buttons {
          margin-top: 60px;
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn {
          padding: 14px 32px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: 2px solid white;
          cursor: pointer;
        }
        .btn-primary {
          background: white;
          color: #667eea;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .btn-secondary {
          background: transparent;
          color: white;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="portada-container">
        <h1 className="title">🧠 Estrategias de Caché</h1>
        <p className="subtitle">en Desarrollo de Software</p>
        <p className="tagline">De la teoría a una demo visual</p>

        <div className="cta-buttons">
          <a href="/" className="btn btn-primary">
            📚 Iniciar Demo
          </a>
          <a href="/el-problema" className="btn btn-secondary">
            ➡️ El Problema
          </a>
        </div>

        <div className="presenter">
          <p style={{ margin: 0 }}>
            Presentador: <strong>Andrés Forero</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
