import { useState } from 'react'

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  id,
  className = '',
  dark = false,
  rightElement,
  leftElement,
}) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-[10px] font-bold tracking-[0.15em] text-[#6b8cff] mb-2 uppercase">
          {label}
        </label>
      )}
      <div className="relative">
        {leftElement && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8892b0]">
            {leftElement}
          </div>
        )}
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            ${dark ? 'input-dark' : 'input-field'}
            ${leftElement ? 'pl-11' : ''}
            ${isPassword || rightElement ? 'pr-12' : ''}
            ${className}
          `}
        />
        {(isPassword || rightElement) && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {isPassword ? (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`transition-colors ${dark ? 'text-[#8892b0] hover:text-white' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            ) : rightElement}
          </div>
        )}
      </div>
    </div>
  )
}
