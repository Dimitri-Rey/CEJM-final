import { useMemo } from 'react'
import { isCardDue, createCard } from '../utils/sm2.js'
import notions from '../data/content.js'

export default function useDueCards(state, notionIdFilter = null) {
  return useMemo(() => {
    const allCards = notions
      .filter(n => !notionIdFilter || n.id === notionIdFilter)
      .flatMap(n => n.cards.map(c => ({ ...c, notionId: n.id, notionTitre: n.titre, tier: n.tier, matiere: n.matiere })))

    return allCards.filter(card => {
      const cardState = state.cards[card.id] || createCard(card.id)
      return isCardDue(cardState)
    }).sort((a, b) => {
      const aState = state.cards[a.id]
      const bState = state.cards[b.id]
      if (!aState) return -1
      if (!bState) return 1
      return aState.nextReview.localeCompare(bState.nextReview)
    })
  }, [state.cards, notionIdFilter])
}
