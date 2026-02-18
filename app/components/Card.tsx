export function Card({ title, children }: any) {
  return (
    <div
      style={{
        background: "white",
        padding: 24,
        borderRadius: 16,
        maxWidth: 800,
        margin: "40px auto",
        boxShadow: "0 10px 30px rgba(0,0,0,.1)",
      }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  )
}