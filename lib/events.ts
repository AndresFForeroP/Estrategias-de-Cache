export type Event = {
  time: string
  message: string
  duration?: string
  type?: "cache" | "db" | "app"
}

let events: Event[] = []
let eventSubscribers: Array<() => void> = []
let startTimes: Map<string, number> = new Map()

function formatTimeWithMs(date: Date) {
  const time = date.toLocaleTimeString()
  const ms = date.getMilliseconds().toString().padStart(3, "0")
  return `${time}.${ms}`
}

export function subscribeToEventChanges(callback: () => void) {
  eventSubscribers.push(callback)
  return () => {
    eventSubscribers = eventSubscribers.filter(cb => cb !== callback)
  }
}

function notifyEventSubscribers() {
  eventSubscribers.forEach(cb => cb())
}

export function logEvent(message: string, type: "cache" | "db" | "app" = "app") {
  events.unshift({
    time: formatTimeWithMs(new Date()),
    message,
    type,
  })

  if (events.length > 20) events.pop()
  notifyEventSubscribers()
}

export function startTimer(id: string) {
  startTimes.set(id, performance.now())
}

export function endTimer(id: string, message: string, type: "cache" | "db" | "app" = "app") {
  const startTime = startTimes.get(id)
  if (startTime) {
    const duration = (performance.now() - startTime).toFixed(1)
    events.unshift({
      time: formatTimeWithMs(new Date()),
      message,
      duration: `${duration}ms`,
      type,
    })
    startTimes.delete(id)
  } else {
    logEvent(message, type)
  }

  if (events.length > 20) events.pop()
  notifyEventSubscribers()
}

export function getEvents() {
  return events
}

export function resetEvents() {
  events = []
  startTimes.clear()
  notifyEventSubscribers()
}