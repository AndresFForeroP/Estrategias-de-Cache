export type Event = {
  time: string
  message: string
}

let events: Event[] = []
let eventSubscribers: Array<() => void> = []

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

export function logEvent(message: string) {
  events.unshift({
    time: formatTimeWithMs(new Date()),
    message,
  })

  if (events.length > 15) events.pop()
  notifyEventSubscribers()
}

export function getEvents() {
  return events
}

export function resetEvents() {
  events = []
  notifyEventSubscribers()
}