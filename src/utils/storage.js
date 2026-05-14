export const STORAGE_KEY = 'cejm_v1'
export const CURRENT_VERSION = 1

export function defaultState() {
  return {
    _version: CURRENT_VERSION,
    cards: {},
    notions: {},
    conditions: {},
    cas: {},
    tiers: {
      1: { unlocked: true, score: 0 },
      2: { unlocked: false, score: 0 },
      3: { unlocked: false, score: 0 },
    },
    examBlanc: { unlocked: false, sessions: [] },
    masterScore: 0,
    streak: { current: 0, lastStudyDate: null },
    totalStudyMinutes: 0,
  }
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw)
    if (!parsed._version || parsed._version < CURRENT_VERSION) {
      return migrateState(parsed)
    }
    return { ...defaultState(), ...parsed }
  } catch {
    return defaultState()
  }
}

export function saveState(state) {
  try {
    const toSave = { ...state, _version: CURRENT_VERSION, _lastSaved: new Date().toISOString() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
  } catch (e) {
    console.warn('Failed to save state:', e)
  }
}

export function migrateState(raw) {
  // v0 → v1: discard old format, start fresh
  const fresh = defaultState()
  // Preserve any recognizable data
  if (raw && typeof raw === 'object') {
    if (raw.masterScore && typeof raw.masterScore === 'number') {
      // Old data present but schema incompatible — return fresh
    }
  }
  return fresh
}
