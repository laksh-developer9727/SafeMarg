import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Input from '../components/ui/Input'

export default function LoginPage() {
  const navigate = useNavigate()
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col justify-between px-6 py-10" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(107, 140, 255, 0.12) 0%, #080c18 60%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #6b8cff, transparent)' }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />
      </div>

      <div className="relative z-10 flex flex-col gap-8 animate-fade-in pt-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6b8cff, #a78bfa)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L3 7v10l9 5 9-5V7z" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-[0.2em] text-[#6b8cff] uppercase">Safe Marg</span>
          </div>
          <h1 className="text-4xl font-black text-white leading-tight">
            Welcome<br /><span className="text-gradient">Back</span>
          </h1>
          <p className="text-[#8892b0] text-sm leading-relaxed max-w-xs mx-auto">
            Authenticate to access your predictive flight deck and secure transit telemetry.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <Input
              id="contact"
              label="Contact Number"
              type="text"
              placeholder="User ID"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[10px] font-bold tracking-[0.15em] text-[#6b8cff] uppercase">Password</label>
              <Link to="#" className="text-[10px] font-bold tracking-[0.1em] text-[#6b8cff] uppercase hover:text-white transition-colors">
                Forgot Password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Google Sign-in */}
          <button type="button" className="btn-google mt-4">
            <GoogleIcon />
            <span>Sign in with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 py-1">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[#8892b0] text-[10px] tracking-widest font-medium">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Login button */}
          <button type="submit" className="btn-primary">
            <span>LOGIN</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        </form>

        {/* Footer links */}
        <div className="text-center space-y-6">
          <p className="text-[#8892b0] text-sm">
            New to the network?{' '}
            <Link to="/signup" className="text-[#6b8cff] font-bold hover:text-white transition-colors">
              Establish Account
            </Link>
          </p>

          {/* Biometric */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-[#4a5568] text-[9px] tracking-[0.2em] font-medium">BIOMETRIC ACCESS</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="flex justify-center gap-4">
              <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#8892b0] hover:border-[#6b8cff]/40 hover:text-[#6b8cff] transition-all duration-200">
                <FingerprintIcon />
              </button>
              <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#ff6b6b] hover:border-[#ff6b6b]/40 transition-all duration-200">
                <FaceIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Version */}
      <div className="text-center space-y-1">
        <p className="text-[#2a3550] text-[9px] tracking-[0.2em] font-medium uppercase">Safe Marg System Protocol</p>
        <p className="text-[#2a3550] text-[9px] tracking-[0.15em]">V2.4.0 Sentinel</p>
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function FingerprintIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 9a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3z" />
      <path d="M6.8 8.8a6 6 0 0 1 10.4 0" />
      <path d="M4 7a9 9 0 0 1 16 0" />
      <path d="M9 21a3 3 0 0 0 6 0" />
    </svg>
  )
}

function FaceIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 9h.01" strokeWidth="3" />
      <path d="M16 9h.01" strokeWidth="3" />
      <path d="M9 14s1 2 3 2 3-2 3-2" />
    </svg>
  )
}
