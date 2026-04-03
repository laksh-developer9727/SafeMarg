import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

export default function SOSPage() {
  const navigate = useNavigate()
  const [holding, setHolding] = useState(false)
  const [triggered, setTriggered] = useState(false)
  const holdTimer = useRef(null)

  const startHold = () => {
    setHolding(true)
    holdTimer.current = setTimeout(() => {
      setTriggered(true)
      setHolding(false)
    }, 3000)
  }

  const endHold = () => {
    setHolding(false)
    clearTimeout(holdTimer.current)
  }

  const contacts = [
    { name: 'Marcus Thorne', role: 'Primary', phone: '+1 (555) 012-3456', avatar: '👨‍💼' },
    { name: 'Elena Rodriguez', role: 'Secondary', phone: '+1 (555) 987-6543', avatar: '👩‍💼' },
  ]

  return (
    <Layout>
      <div className="min-h-screen overflow-y-auto" style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(255, 68, 68, 0.06) 0%, #080c18 60%)' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-12 pb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8892b0] hover:text-white transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] text-[#6b8cff] uppercase">Emergency Response</p>
              <p className="text-[9px] text-[#4a5568] tracking-wider">GET HELP INSTANTLY</p>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8892b0] hover:text-white transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>

        <div className="px-5 space-y-6 pb-8">
          {/* SOS Button */}
          <div className="flex flex-col items-center py-4">
            <div
              className={`sos-ring cursor-pointer select-none transition-all duration-300 ${holding ? 'scale-110' : 'scale-100'} ${triggered ? 'shadow-[0_0_80px_rgba(255,68,68,0.6)]' : ''}`}
              style={{ width: '200px', height: '200px' }}
              onMouseDown={startHold}
              onMouseUp={endHold}
              onMouseLeave={endHold}
              onTouchStart={startHold}
              onTouchEnd={endHold}
            >
              <div className="sos-inner w-full h-full" style={{ background: triggered ? 'radial-gradient(circle, #2a0505, #150202)' : 'radial-gradient(circle at 30% 30%, #1a2540, #080c18)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={triggered ? '#ff4444' : '#ff4444'} strokeWidth="1.5" className={triggered ? 'animate-pulse' : ''}>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <path d="M12 5 Q14 8 15 12 Q14 16 12 19" fill="none" />
                  <circle cx="12" cy="12" r="1" fill="#ff4444" />
                </svg>
                <span className="text-white font-black text-2xl tracking-widest mt-1">SOS</span>
              </div>
            </div>
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#4a5568] mt-4">
              {holding ? 'HOLD TIGHT...' : triggered ? 'ALARM TRIGGERED!' : 'HOLD 3 SECONDS TO TRIGGER ALARM'}
            </p>
          </div>

          {/* Call Emergency */}
          <button className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all hover:bg-[rgba(255,68,68,0.08)]" style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(107, 140, 255, 0.1)' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #ff4444, #ff6b6b)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21l3-.01a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.64-1.64a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <p className="text-white font-bold text-sm">Call Emergency Services</p>
              <p className="text-[#8892b0] text-xs">Direct line to local 911/112</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/contacts')}
              className="py-5 rounded-2xl flex flex-col items-center gap-3 transition-all hover:scale-105"
              style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(107, 140, 255, 0.1)' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(107, 140, 255, 0.1)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4" />
                </svg>
              </div>
              <p className="text-white text-xs font-semibold text-center">Share Live<br />Location</p>
            </button>
            <button
              onClick={() => navigate('/contacts')}
              className="py-5 rounded-2xl flex flex-col items-center gap-3 transition-all hover:scale-105"
              style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(0, 229, 160, 0.15)' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(0, 229, 160, 0.1)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e5a0" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="text-white text-xs font-semibold text-center">Alert All<br />Contacts</p>
            </button>
          </div>

          {/* Live Location */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-white">Live Location</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-[#00e5a0] rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-[#00e5a0]">Broadcasting</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '140px', background: 'radial-gradient(ellipse at center, #0a1428 0%, #080c18 80%)' }}>
              <div className="absolute inset-0 map-grid opacity-40" />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 140">
                <line x1="0" y1="70" x2="300" y2="70" stroke="rgba(107,140,255,0.15)" strokeWidth="0.5" />
                <line x1="150" y1="0" x2="150" y2="140" stroke="rgba(107,140,255,0.15)" strokeWidth="0.5" />
                <line x1="0" y1="35" x2="300" y2="35" stroke="rgba(107,140,255,0.08)" strokeWidth="0.5" />
                <line x1="0" y1="105" x2="300" y2="105" stroke="rgba(107,140,255,0.08)" strokeWidth="0.5" />
                <circle cx="150" cy="70" r="8" fill="#6b8cff" opacity="0.9" />
                <circle cx="150" cy="70" r="20" fill="rgba(107,140,255,0.15)" />
                <circle cx="150" cy="70" r="35" fill="rgba(107,140,255,0.05)" />
              </svg>
              <div className="absolute bottom-3 left-4">
                <span className="text-[10px] text-[#8892b0]">221B Baker St, London</span>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="text-base font-bold text-white mb-3">Emergency Contacts</h3>
            <div className="space-y-2 mb-3">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-center gap-4 px-4 py-3.5 rounded-2xl" style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(107, 140, 255, 0.08)' }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0" style={{ background: 'rgba(107, 140, 255, 0.1)', border: '1px solid rgba(107, 140, 255, 0.2)' }}>
                    {c.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">{c.name}</p>
                    <p className="text-[#8892b0] text-xs">{c.role} • {c.phone}</p>
                  </div>
                  <button className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(107, 140, 255, 0.15)', border: '1px solid rgba(107, 140, 255, 0.2)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21l3-.01a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.64-1.64a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/contacts')}
              className="w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all hover:bg-[rgba(107,140,255,0.08)]"
              style={{ border: '1.5px dashed rgba(107, 140, 255, 0.3)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <span className="text-[10px] font-bold tracking-[0.15em] text-[#6b8cff]">ADD MORE CONTACTS</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
