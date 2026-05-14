function getStrokeColor(score) {
  if (score >= 70) return '#2D5A3D' // management green
  if (score >= 40) return '#C4622D' // eco orange
  return '#f87171' // red-400
}

export default function MasterScore({ score = 0, variant = 'header' }) {
  const clampedScore = Math.min(100, Math.max(0, score))
  const strokeColor = getStrokeColor(clampedScore)

  if (variant === 'header') {
    const size = 40
    const strokeWidth = 3.5
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (clampedScore / 100) * circumference

    return (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E5E5E5"
            strokeWidth={strokeWidth}
          />
          {/* Progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.6s ease, stroke 0.4s ease' }}
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center font-body font-bold"
          style={{ fontSize: 10, color: strokeColor }}
        >
          {clampedScore}
        </span>
      </div>
    )
  }

  // variant === 'sidebar'
  const size = 64
  const strokeWidth = 5
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (clampedScore / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E5E5E5"
            strokeWidth={strokeWidth}
          />
          {/* Progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.6s ease, stroke 0.4s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-body font-bold leading-none" style={{ fontSize: 18, color: strokeColor }}>
            {clampedScore}
          </span>
          <span className="font-body leading-none" style={{ fontSize: 9, color: '#A3A3A3', marginTop: 2 }}>
            /100
          </span>
        </div>
      </div>
      <p className="text-xs text-neutral-400 text-center leading-tight">
        Préparation au 10
      </p>
    </div>
  )
}
