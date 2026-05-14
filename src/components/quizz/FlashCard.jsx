import { useState } from 'react'
import { SM2_GRADES } from '../../utils/sm2.js'

export default function FlashCard({ card, onGrade }) {
  const [flipped, setFlipped] = useState(false)

  function handleGrade(grade) {
    setFlipped(false)
    onGrade(grade)
  }

  return (
    <div className="flip-card w-full" style={{ minHeight: '280px' }}>
      <div className={`flip-card-inner relative w-full h-full ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div
          className="flip-card-front absolute inset-0 card p-6 flex flex-col justify-between cursor-pointer"
          onClick={() => !flipped && setFlipped(true)}
        >
          <div className="flex items-center justify-between mb-4">
            <span className={`badge-${card.matiere}`}>{card.notionTitre}</span>
            <span className="text-xs text-neutral-400">Appuie pour révéler</span>
          </div>
          <p className="font-display text-xl font-bold text-neutral-900 leading-snug">{card.question}</p>
          <div className="flex justify-center mt-4">
            <div className="w-8 h-1 bg-neutral-200 rounded-full" />
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back absolute inset-0 card p-6 flex flex-col justify-between bg-white">
          <div className="flex items-center gap-2 mb-4">
            <span className={`badge-${card.matiere}`}>{card.notionTitre}</span>
            <span className="text-xs text-neutral-400 ml-auto">Réponse</span>
          </div>

          <div className="flex-1 overflow-auto">
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Question</p>
            <p className="text-sm text-neutral-600 mb-4">{card.question}</p>
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Réponse</p>
            <p className="text-neutral-900 leading-relaxed">{card.reponse}</p>
          </div>

          {/* Grade buttons */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            <button
              onClick={() => handleGrade(SM2_GRADES.AGAIN)}
              className="flex flex-col items-center gap-1 p-2 rounded-lg bg-red-50 border border-red-100 text-red-600 text-xs font-medium hover:bg-red-100 transition-colors"
            >
              <span className="text-base">✗</span>
              <span>À revoir</span>
            </button>
            <button
              onClick={() => handleGrade(SM2_GRADES.HARD)}
              className="flex flex-col items-center gap-1 p-2 rounded-lg bg-orange-50 border border-orange-100 text-orange-600 text-xs font-medium hover:bg-orange-100 transition-colors"
            >
              <span className="text-base">△</span>
              <span>Difficile</span>
            </button>
            <button
              onClick={() => handleGrade(SM2_GRADES.GOOD)}
              className="flex flex-col items-center gap-1 p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium hover:bg-blue-100 transition-colors"
            >
              <span className="text-base">○</span>
              <span>Bien</span>
            </button>
            <button
              onClick={() => handleGrade(SM2_GRADES.EASY)}
              className="flex flex-col items-center gap-1 p-2 rounded-lg bg-green-50 border border-green-100 text-green-600 text-xs font-medium hover:bg-green-100 transition-colors"
            >
              <span className="text-base">★</span>
              <span>Facile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
