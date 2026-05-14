import { getCardMaturity } from './sm2.js'

export function computeTierScore(tierNumber, state, notions, casPratiques) {
  const tierNotions = notions.filter(n => n.tier === tierNumber)
  if (tierNotions.length === 0) return 0

  // Card maturity score (60% weight)
  let totalMaturity = 0
  let cardCount = 0
  tierNotions.forEach(notion => {
    notion.cards.forEach(card => {
      const cardState = state.cards[card.id]
      totalMaturity += cardState ? getCardMaturity(cardState) : 0
      cardCount++
    })
  })
  const cardScore = cardCount > 0 ? (totalMaturity / cardCount) * 100 : 0

  // Cas pratiques score (40% weight)
  const tierCas = casPratiques.filter(c => c.tier === tierNumber)
  let casScore = 0
  if (tierCas.length > 0) {
    const totalCasScore = tierCas.reduce((sum, cas) => {
      const casState = state.cas[cas.id]
      return sum + (casState ? casState.bestScore : 0)
    }, 0)
    casScore = totalCasScore / tierCas.length
  }

  return Math.round(cardScore * 0.6 + casScore * 0.4)
}

export function computeMasterScore(state, notions, casPratiques) {
  const t1 = computeTierScore(1, state, notions, casPratiques)
  const t2 = computeTierScore(2, state, notions, casPratiques)
  const t3 = computeTierScore(3, state, notions, casPratiques)
  return Math.round(t1 * 0.5 + t2 * 0.3 + t3 * 0.2)
}

export function checkTierUnlocks(state, notions, casPratiques) {
  const t1Score = computeTierScore(1, state, notions, casPratiques)
  const t2Score = computeTierScore(2, state, notions, casPratiques)
  const t3Score = computeTierScore(3, state, notions, casPratiques)

  return {
    1: { unlocked: true, score: t1Score },
    2: { unlocked: t1Score >= 60, score: t2Score },
    3: { unlocked: t2Score >= 60, score: t3Score },
    examBlancUnlocked: t1Score >= 70 && t2Score >= 70 && t3Score >= 70,
  }
}

export function getWeakPoints(state, notions) {
  const scored = notions
    .map(notion => {
      const reviewed = notion.cards.filter(c => state.cards[c.id]?.totalReviews > 0)
      if (reviewed.length === 0) return null
      const avgMaturity = reviewed.reduce((s, c) => s + (state.cards[c.id] ? getCardMaturity(state.cards[c.id]) : 0), 0) / reviewed.length
      return { notion, avgMaturity }
    })
    .filter(Boolean)
    .sort((a, b) => a.avgMaturity - b.avgMaturity)
  return scored.slice(0, 5).map(s => ({ notionId: s.notion.id, maturity: s.avgMaturity }))
}

export function updateStreak(state) {
  const today = new Date().toISOString().split('T')[0]
  const { lastStudyDate, current } = state.streak
  if (lastStudyDate === today) return state.streak
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yStr = yesterday.toISOString().split('T')[0]
  const newCurrent = lastStudyDate === yStr ? current + 1 : 1
  return { current: newCurrent, lastStudyDate: today }
}
