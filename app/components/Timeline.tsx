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
    <div style={{ marginTop: 24 }}>
      <h3>🕒 Timeline (ms)</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((e, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              gap: 12,
              background: "#f8fafc",
              padding: "10px 12px",
              borderRadius: 8,
              marginBottom: 8,
              fontSize: 14,
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                color: "#475569",
                minWidth: 120,
              }}
            >
              {e.time}
            </span>

            <span>{e.message}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}