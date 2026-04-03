export default function Card({ children, className = '', glow = false, glowColor = 'brand' }) {
  const glowStyles = {
    brand: 'shadow-[0_0_20px_rgba(107,140,255,0.15)] border-[rgba(107,140,255,0.2)]',
    green: 'shadow-[0_0_20px_rgba(0,229,160,0.15)] border-[rgba(0,229,160,0.2)]',
    red: 'shadow-[0_0_20px_rgba(255,68,68,0.15)] border-[rgba(255,68,68,0.2)]',
  }

  return (
    <div className={`
      glass-card
      ${glow ? glowStyles[glowColor] : 'border-[rgba(107,140,255,0.08)]'}
      ${className}
    `}>
      {children}
    </div>
  )
}
