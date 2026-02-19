"use client"
import { useState, useEffect } from "react"
import { getEvents, subscribeToEventChanges } from "@/lib/events"

function getTypeColor(type?: string) {
  switch (type) {
    case "cache":
      return { bg: "#ecfdf5", border: "#a7f3d0", text: "#047857", label: "Cache" }
    case "db":
      return { bg: "#fef3c7", border: "#fcd34d", text: "#b45309", label: "BD" }
    case "app":
    default:
      return { bg: "#f3f4f6", border: "#d1d5db", text: "#4b5563", label: "App" }
  }
}

export function Timeline() {
  const [events, setEvents] = useState(getEvents())

  useEffect(() => {
    const unsubscribe = subscribeToEventChanges(() => {
      setEvents([...getEvents()])
    })

    return unsubscribe
  }, [])

  return (
    <div style={{ marginTop: 32, marginBottom: 24 }}>
      <style>{`
        .timeline-item:hover {
          border-color: #2563eb !important;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15) !important;
        }
        .legend {
          display: flex;
          gap: 24px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }
        .legend-box {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }
      `}</style>
      <h3 style={{ fontSize: "1.125rem", marginBottom: 16, color: "#0f172a" }}>🕒 Timeline de Operaciones</h3>

      <div className="legend">
        <div className="legend-item">
          <div className="legend-box" style={{ background: "#f3f4f6", border: "1px solid #d1d5db" }}></div>
          <span>Aplicación</span>
        </div>
        <div className="legend-item">
          <div className="legend-box" style={{ background: "#ecfdf5", border: "1px solid #a7f3d0" }}></div>
          <span>Cache</span>
        </div>
        <div className="legend-item">
          <div className="legend-box" style={{ background: "#fef3c7", border: "1px solid #fcd34d" }}></div>
          <span>Base de Datos</span>
        </div>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {events.map((e, i) => {
          const colors = getTypeColor(e.type)
          return (
            <li
              key={i}
              className="timeline-item"
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr auto",
                gap: 12,
                background: colors.bg,
                padding: "12px 16px",
                borderRadius: 10,
                marginBottom: 8,
                fontSize: 14,
                alignItems: "center",
                border: `1.5px solid ${colors.border}`,
                transition: "all 0.2s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  color: colors.text,
                  fontWeight: 600,
                  fontSize: "12px",
                }}
              >
                {e.time}
              </span>

              <span style={{ color: "#1f2937", fontWeight: 500 }}>{e.message}</span>

              {e.duration && (
                <span
                  style={{
                    background: colors.bg,
                    color: colors.text,
                    padding: "4px 12px",
                    borderRadius: 6,
                    fontSize: "12px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {e.duration}
                </span>
              )}
            </li>
          )
        })}
      </ul>
      {events.length === 0 && (
        <div style={{ textAlign: "center", color: "#9ca3af", padding: "32px 16px" }}>
          Realiza operaciones para ver el timeline
        </div>
      )}
    </div>
  )
}