import { useSyncExternalStore } from 'react'

import { CV } from '@/types/cv'

let cv: CV | null = null
const listeners = new Set<() => void>()

function emitChange() {
  for (const listener of listeners) {
    listener()
  }
}

// useSyncExternalStore contract
// -----------------------------

const store = {
  subscribe(listener: () => void) {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  },

  getSnapshot() {
    return cv
  },

  getServerSnapshot() {
    return null
  },
}

// Actions
// -------

function saveCV(data: CV) {
  cv = data
  emitChange()
}

function clearCV() {
  cv = null
  emitChange()
}

// Hook
// ----

function useCV() {
  return useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot,
  )
}

export { saveCV, clearCV, useCV }
