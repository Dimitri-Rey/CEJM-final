import { useState, useCallback } from 'react'
import { loadState, saveState } from '../utils/storage.js'
import { createCard, reviewCard as sm2Review } from '../utils/sm2.js'
import { computeMasterScore, checkTierUnlocks, updateStreak } from '../utils/scoring.js'
import notions from '../data/content.js'
import casPratiques from '../data/casPratiques.js'

export default function useProgress() {
  const [state, setState] = useState(() => loadState())

  const persist = useCallback((newState) => {
    const unlocks = checkTierUnlocks(newState, notions, casPratiques)
    const masterScore = computeMasterScore(newState, notions, casPratiques)
    const updated = {
      ...newState,
      masterScore,
      tiers: {
        1: unlocks[1],
        2: unlocks[2],
        3: unlocks[3],
      },
      examBlanc: {
        ...newState.examBlanc,
        unlocked: unlocks.examBlancUnlocked,
      },
    }
    setState(updated)
    saveState(updated)
    return updated
  }, [])

  const markNotion = useCallback((notionId, field) => {
    setState(prev => {
      const updated = {
        ...prev,
        notions: {
          ...prev.notions,
          [notionId]: {
            ...(prev.notions[notionId] || {}),
            [field]: true,
            ...(field === 'read' ? { readAt: new Date().toISOString() } : {}),
          },
        },
        streak: updateStreak(prev),
      }
      return persist(updated)
    })
  }, [persist])

  const reviewCard = useCallback((cardId, grade) => {
    setState(prev => {
      const existing = prev.cards[cardId] || createCard(cardId)
      const reviewed = sm2Review(existing, grade)
      const updated = {
        ...prev,
        cards: { ...prev.cards, [cardId]: reviewed },
        streak: updateStreak(prev),
      }
      return persist(updated)
    })
  }, [persist])

  const recordConditionAttempt = useCallback((conditionSetId, score) => {
    setState(prev => {
      const existing = prev.conditions[conditionSetId] || { attempts: 0, bestScore: 0, lastAttempt: null }
      const updated = {
        ...prev,
        conditions: {
          ...prev.conditions,
          [conditionSetId]: {
            attempts: existing.attempts + 1,
            bestScore: Math.max(existing.bestScore, score),
            lastAttempt: new Date().toISOString(),
          },
        },
        streak: updateStreak(prev),
      }
      return persist(updated)
    })
  }, [persist])

  const recordCasScore = useCallback((casId, score, stepsCompleted) => {
    setState(prev => {
      const existing = prev.cas[casId] || { attempts: 0, scores: [], bestScore: 0 }
      const updated = {
        ...prev,
        cas: {
          ...prev.cas,
          [casId]: {
            attempts: existing.attempts + 1,
            scores: [...existing.scores, { date: new Date().toISOString(), score, stepsCompleted }],
            bestScore: Math.max(existing.bestScore, score),
          },
        },
        streak: updateStreak(prev),
      }
      return persist(updated)
    })
  }, [persist])

  const addStudyTime = useCallback((minutes) => {
    setState(prev => {
      const updated = { ...prev, totalStudyMinutes: (prev.totalStudyMinutes || 0) + minutes }
      return persist(updated)
    })
  }, [persist])

  return {
    state,
    markNotion,
    reviewCard,
    recordConditionAttempt,
    recordCasScore,
    addStudyTime,
    masterScore: state.masterScore,
    tiers: state.tiers,
  }
}
