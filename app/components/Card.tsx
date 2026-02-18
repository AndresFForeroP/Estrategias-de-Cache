export function Card({ title, children }: any) {
  return (
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "18px",
        maxWidth: "900px",
        margin: "40px auto",
        boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e2e8f0",
      }}
    >
      <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "2px solid #f1f5f9" }}>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>{title}</h1>
      </div>
      <div style={{ lineHeight: 1.7 }}>{children}</div>
      <style>{`
        pre {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          overflow-x: auto;
          font-size: 13px;
          line-height: 1.5;
        }
        button {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          margin-right: 12px;
          margin-bottom: 12px;
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
        }
        button:active {
          transform: translateY(0);
        }
        a[href="/"] {
          display: inline-block;
          color: #2563eb;
          font-weight: 500;
          margin-top: 20px;
          transition: all 0.2s ease;
        }
        a[href="/"]:hover {
          color: #7c3aed;
        }
      `}</style>
    </div>
  )
}