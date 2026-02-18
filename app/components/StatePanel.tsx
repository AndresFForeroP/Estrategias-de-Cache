"use client"
import { useState, useEffect } from "react"
import { database, subscribeToDBChanges } from "@/lib/db"
import { getCacheState, subscribeToCacheChanges } from "@/lib/cache"

export function StatePanel() {
  const [cacheState, setCacheState] = useState(getCacheState())
  const [dbState, setDbState] = useState(database)

  useEffect(() => {
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

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div style={{ background: "#eef2ff", padding: 16, borderRadius: 12 }}>
        <h3>🗄️ Database</h3>
        <pre>{JSON.stringify(dbState, null, 2)}</pre>
      </div>

      <div style={{ background: "#ecfeff", padding: 16, borderRadius: 12 }}>
        <h3>🧊 Cache</h3>
        <pre>{JSON.stringify(cacheState ?? "Vacío", null, 2)}</pre>
      </div>
    </div>
  )
}