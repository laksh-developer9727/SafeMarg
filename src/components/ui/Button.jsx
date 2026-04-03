export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  full = true,
}) {
  const base = `flex items-center justify-center gap-2 font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`
  
  const sizes = {
    sm: 'py-2 px-4 text-xs rounded-full',
    md: 'py-3.5 px-6 text-sm rounded-full',
    lg: 'py-4 px-8 text-sm rounded-full',
  }

  const variants = {
    primary: 'btn-primary',
    google: 'btn-google',
    danger: 'btn-danger',
    secondary: 'py-3 px-6 rounded-full text-sm border border-[rgba(107,140,255,0.3)] text-[#6b8cff] hover:bg-[rgba(107,140,255,0.1)] transition-all duration-200',
    ghost: 'py-3 px-6 rounded-full text-sm text-[#8892b0] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all duration-200',
    outline: 'py-3 px-6 rounded-full text-sm border border-[rgba(0,229,160,0.4)] text-[#00e5a0] hover:bg-[rgba(0,229,160,0.1)] transition-all duration-200',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${base}
        ${variant === 'primary' || variant === 'google' || variant === 'danger' ? '' : sizes[size]}
        ${variants[variant]}
        ${full ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
