import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Input from '../components/ui/Input'

export default function SignupPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', dob: '', email: '', contact: '', verCode: '', password: ''
  })
  const [agreed, setAgreed] = useState(false)

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleRegister = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <div className="min-h-screen px-6 py-10 overflow-y-auto" style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(107, 140, 255, 0.1) 0%, #080c18 60%)' }}>
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #6b8cff, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />
      </div>

      <div className="relative z-10 space-y-7 animate-fade-in">
        {/* Back + header */}
        <div className="flex items-center gap-3 pt-2">
          <button onClick={() => navigate('/login')} className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-[#8892b0] hover:text-white hover:border-white/30 transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6b8cff, #a78bfa)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v10l9 5 9-5V7z" /></svg>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#6b8cff] uppercase">Safe Marg</span>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-white leading-tight">
            Create Your <span className="text-gradient">Shield</span>
          </h1>
          <p className="text-[#8892b0] text-sm leading-relaxed">
            Initialize your Guardian Protocol. Secure your transit telemetry with encrypted road safety alerts.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <Input id="name" label="Full Name" placeholder="John Doe" value={form.name} onChange={update('name')} />
          <Input id="dob" label="Date of Birth" type="date" placeholder="mm/dd/yyyy" value={form.dob} onChange={update('dob')} />
          <Input id="email" label="Email Address" type="email" placeholder="alex.st@safemarg.io" value={form.email} onChange={update('email')} />
          <Input id="contact" label="Contact Number" placeholder="+1 (555) 000-0000" value={form.contact} onChange={update('contact')} />

          {/* Verification Code with REQUEST button */}
          <div>
            <label className="block text-[10px] font-bold tracking-[0.15em] text-[#6b8cff] mb-2 uppercase">
              Verification Code
            </label>
            <div className="flex gap-2">
              <input
                id="verCode"
                type="text"
                placeholder="0 0 0 0 0 0"
                value={form.verCode}
                onChange={update('verCode')}
                className="input-field flex-1 text-center tracking-widest"
                maxLength={6}
              />
              <button
                type="button"
                className="flex-shrink-0 px-4 rounded-full text-xs font-bold tracking-wider text-white transition-all duration-200"
                style={{ background: 'rgba(19, 29, 53, 0.9)', border: '1.5px solid rgba(107, 140, 255, 0.3)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(107, 140, 255, 0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(19, 29, 53, 0.9)'}
              >
                REQUEST
              </button>
            </div>
          </div>

          <Input id="password" label="Secure Password" type="password" placeholder="••••••••••••" value={form.password} onChange={update('password')} />

          {/* Terms checkbox */}
          <div className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: 'rgba(15, 22, 41, 0.6)', border: '1px solid rgba(107, 140, 255, 0.1)' }}>
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 mt-0.5 ${agreed ? 'bg-[#6b8cff] border-[#6b8cff]' : 'border-[#4a5568]'}`}
            >
              {agreed && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
            <p className="text-xs text-[#8892b0] leading-relaxed">
              I acknowledge the{' '}
              <span className="text-[#6b8cff] font-semibold cursor-pointer hover:underline">Privacy Protocol</span>
              {' '}and{' '}
              <span className="text-[#6b8cff] font-semibold cursor-pointer hover:underline">Sentinel Terms</span>.
              {' '}I consent to secure telemetry data processing for road hazard mitigation.
            </p>
          </div>

          {/* Google */}
          <button type="button" className="btn-google">
            <GoogleIcon />
            <span>Sign in with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[#8892b0] text-[10px] tracking-widest font-medium">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Register button */}
          <button type="submit" className="btn-primary">
            <span>REGISTER</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        </form>

        {/* Already have account */}
        <div className="text-center">
          <p className="text-[#8892b0] text-sm">
            Already part of the network?{' '}
            <Link to="/login" className="text-[#6b8cff] font-bold hover:text-white transition-colors">
              Sign In
            </Link>
          </p>
        </div>

        {/* Biometric */}
        <div className="space-y-4 pb-8">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-[#4a5568] text-[9px] tracking-[0.2em] font-medium">BIOMETRIC QUICK-START</span>
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

        {/* Version */}
        <div className="text-center pb-6">
          <p className="text-[#2a3550] text-[9px] tracking-[0.2em] uppercase">Safe Marg System Protocol</p>
          <p className="text-[#2a3550] text-[9px] tracking-[0.15em]">V2.4.0 Sentinel</p>
        </div>
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
