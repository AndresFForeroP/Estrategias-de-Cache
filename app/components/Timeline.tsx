"use client"
import { useState, useEffect } from "react"
import { getEvents, subscribeToEventChanges } from "@/lib/events"

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
          background: #f8fafc;
          border-color: #2563eb;
        }
      `}</style>
      <h3 style={{ fontSize: "1.125rem", marginBottom: 16, color: "#0f172a" }}>🕒 Timeline (ms)</h3>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {events.map((e, i) => (
          <li
            key={i}
            className="timeline-item"
            style={{
              display: "flex",
              gap: 12,
              background: "#ffffff",
              padding: "12px 16px",
              borderRadius: 10,
              marginBottom: 8,
              fontSize: 14,
              alignItems: "center",
              border: "1px solid #e2e8f0",
              transition: "all 0.2s ease",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                color: "#2563eb",
                minWidth: 120,
                fontWeight: 600,
                fontSize: "12px",
              }}
            >
              {e.time}
            </span>

            <span style={{ color: "#475569" }}>{e.message}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}