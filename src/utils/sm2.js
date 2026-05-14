// SM-2 Spaced Repetition Algorithm
export const SM2_GRADES = { AGAIN: 0, HARD: 1, GOOD: 3, EASY: 5 }

export function createCard(id) {
  const today = new Date().toISOString().split('T')[0]
  return { id, interval: 1, easeFactor: 2.5, repetitions: 0, nextReview: today, totalReviews: 0, lastGrade: null }
}

export function reviewCard(card, grade) {
  const now = new Date()
  let { interval, easeFactor, repetitions } = card

  if (grade < 2) {
    repetitions = 0
    interval = 1
  } else {
    if (repetitions === 0) interval = 1
    else if (repetitions === 1) interval = 6
    else interval = Math.round(interval * easeFactor)
    repetitions += 1
  }

  easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)))

  const nextDate = new Date(now)
  nextDate.setDate(nextDate.getDate() + interval)

  return {
    ...card,
    interval,
    easeFactor: Math.round(easeFactor * 100) / 100,
    repetitions,
    nextReview: nextDate.toISOString().split('T')[0],
    totalReviews: card.totalReviews + 1,
    lastGrade: grade,
  }
}

export function isCardDue(card) {
  const today = new Date().toISOString().split('T')[0]
  return card.nextReview <= today
}

export function getCardMaturity(card) {
  if (card.totalReviews === 0) return 0
  const repScore = Math.min(card.repetitions / 5, 1)
  const intervalScore = Math.min(card.interval / 21, 1)
  return Math.round(repScore * intervalScore * 100) / 100
}
