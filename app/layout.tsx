export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          background: "#f4f6fb",
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  )
}