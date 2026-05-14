import { useState } from 'react'
import { SM2_GRADES } from '../../utils/sm2.js'

const MATIERE_LABEL = { eco: 'Économie', droit: 'Droit', management: 'Management' }

export default function FlashCard({ card, onGrade }) {
  const [flipped, setFlipped] = useState(false)

  function handleGrade(grade) {
    setFlipped(false)
    onGrade(grade)
  }

  return (
    <div className="w-full">
      {/* FACE QUESTION */}
      {!flipped && (
        <div
          className="card p-6 flex flex-col cursor-pointer select-none"
          style={{ minHeight: '260px' }}
          onClick={() => setFlipped(true)}
        >
          <div className="flex items-center justify-between mb-5">
            <span className={`badge-${card.matiere}`}>{MATIERE_LABEL[card.matiere] || card.matiere}</span>
            <span className="text-xs text-neutral-400 italic">Appuie pour révéler</span>
          </div>

          <div className="flex-1 flex items-center">
            <p className="font-display text-xl font-bold text-neutral-900 leading-snug">
              {card.question}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-neutral-200" />
              <div className="w-2 h-2 rounded-full bg-neutral-200" />
              <div className="w-2 h-2 rounded-full bg-neutral-200" />
            </div>
          </div>
        </div>
      )}

      {/* FACE RÉPONSE */}
      {flipped && (
        <div className="card p-6 flex flex-col" style={{ minHeight: '260px' }}>
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <span className={`badge-${card.matiere}`}>{MATIERE_LABEL[card.matiere] || card.matiere}</span>
            <span className="text-xs font-medium text-eco uppercase tracking-wide">Réponse</span>
          </div>

          {/* Question rappel */}
          <div className="bg-neutral-50 rounded-lg px-4 py-3 mb-4">
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wide mb-1">Question</p>
            <p className="text-sm text-neutral-600">{card.question}</p>
          </div>

          {/* Réponse */}
          <div className="flex-1 mb-5">
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wide mb-2">Réponse</p>
            <p className="text-neutral-900 leading-relaxed">{card.reponse}</p>
          </div>

          {/* Boutons de notation */}
          <div>
            <p className="text-[11px] text-neutral-400 text-center mb-3">Comment tu t'en es sorti·e ?</p>
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => handleGrade(SM2_GRADES.AGAIN)}
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-red-50 border border-red-100 text-red-600 hover:bg-red-100 active:scale-95 transition-all"
              >
                <span className="text-lg leading-none">✗</span>
                <span className="text-[11px] font-semibold">À revoir</span>
              </button>
              <button
                onClick={() => handleGrade(SM2_GRADES.HARD)}
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 hover:bg-orange-100 active:scale-95 transition-all"
              >
                <span className="text-lg leading-none">△</span>
                <span className="text-[11px] font-semibold">Difficile</span>
              </button>
              <button
                onClick={() => handleGrade(SM2_GRADES.GOOD)}
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 hover:bg-blue-100 active:scale-95 transition-all"
              >
                <span className="text-lg leading-none">○</span>
                <span className="text-[11px] font-semibold">Bien</span>
              </button>
              <button
                onClick={() => handleGrade(SM2_GRADES.EASY)}
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-green-50 border border-green-100 text-green-600 hover:bg-green-100 active:scale-95 transition-all"
              >
                <span className="text-lg leading-none">★</span>
                <span className="text-[11px] font-semibold">Facile</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
