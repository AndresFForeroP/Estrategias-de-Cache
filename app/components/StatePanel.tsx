"use client"
import { useState, useEffect } from "react"
import { database, subscribeToDBChanges } from "@/lib/db"
import { getCacheState, subscribeToCacheChanges } from "@/lib/cache"

export function StatePanel() {
  const [mounted, setMounted] = useState(false)
  const [cacheState, setCacheState] = useState(getCacheState())
  const [dbState, setDbState] = useState(database)

  useEffect(() => {
    setMounted(true)
    const forceRefresh = () => {
      setCacheState(getCacheState())
      setDbState({ ...database })
    }

    const unsubscribeCache = subscribeToCacheChanges(forceRefresh)
    const unsubscribeDB = subscribeToDBChanges(forceRefresh)

    return () => {
      unsubscribeCache()
      unsubscribeDB()
    }
  }, [])

  if (!mounted) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
        <div style={{ background: "linear-gradient(135deg, #eef2ff 0%, #dbeafe 100%)", padding: 20, borderRadius: 14, border: "1px solid #c7d2fe" }}>
          <h3 style={{ margin: "0 0 12px 0", fontSize: "1.125rem", color: "#1e1b4b" }}>🗄️ Database</h3>
          <pre style={{ background: "rgba(255,255,255,0.7)", margin: 0, padding: 12, borderRadius: 8, fontSize: "12px", lineHeight: 1.5 }}>Cargando...</pre>
        </div>
        <div style={{ background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)", padding: 20, borderRadius: 14, border: "1px solid #a5f3fc" }}>
          <h3 style={{ margin: "0 0 12px 0", fontSize: "1.125rem", color: "#164e63" }}>🧊 Cache</h3>
          <pre style={{ background: "rgba(255,255,255,0.7)", margin: 0, padding: 12, borderRadius: 8, fontSize: "12px", lineHeight: 1.5 }}>Cargando...</pre>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
      <div style={{ background: "linear-gradient(135deg, #eef2ff 0%, #dbeafe 100%)", padding: 20, borderRadius: 14, border: "1px solid #c7d2fe" }}>
        <h3 style={{ margin: "0 0 12px 0", fontSize: "1.125rem", color: "#1e1b4b" }}>🗄️ Database</h3>
        <pre style={{ background: "rgba(255,255,255,0.7)", margin: 0, padding: 12, borderRadius: 8, fontSize: "12px", lineHeight: 1.5 }}>{JSON.stringify(dbState, null, 2)}</pre>
      </div>

      <div style={{ background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)", padding: 20, borderRadius: 14, border: "1px solid #a5f3fc" }}>
        <h3 style={{ margin: "0 0 12px 0", fontSize: "1.125rem", color: "#164e63" }}>🧊 Cache</h3>
        <pre style={{ background: "rgba(255,255,255,0.7)", margin: 0, padding: 12, borderRadius: 8, fontSize: "12px", lineHeight: 1.5 }}>{JSON.stringify(cacheState ?? "Vacío", null, 2)}</pre>
      </div>
    </div>
  )
}