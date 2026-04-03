import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

export default function DashboardPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <div className="relative min-h-screen" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 30, 80, 0.4) 0%, #080c18 50%)' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-12 pb-4 z-20 relative">
          <h1 className="text-xl font-black tracking-[0.1em] text-[#6b8cff] uppercase">Safe Marg</h1>
          <button
            onClick={() => navigate('/settings')}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#6b8cff]/40 hover:border-[#6b8cff] transition-all"
          >
            <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a2c6b, #0f1a3d)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-5 z-20 relative mb-3">
          <div className="flex items-center gap-3 px-4 py-3 rounded-full" style={{ background: 'rgba(15, 22, 41, 0.85)', border: '1px solid rgba(107, 140, 255, 0.2)', backdropFilter: 'blur(12px)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Where to?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-[#8892b0] text-sm outline-none"
            />
            <button onClick={() => navigate('/route')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3c0 2 3 6 3 6s3-4 3-6a3 3 0 0 0-3-3z" />
                <circle cx="12" cy="4" r="1" fill="#6b8cff" />
              </svg>
            </button>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="px-5 z-20 relative mb-3">
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl" style={{ background: 'rgba(255, 68, 68, 0.08)', border: '1px solid rgba(255, 68, 68, 0.3)' }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255, 68, 68, 0.15)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff4444" strokeWidth="2.5">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[#ff6b6b] text-xs font-bold tracking-wider">POTHOLE DETECTED</span>
              <span className="text-[#8892b0] text-xs ml-2">250m ahead. Margin reduced.</span>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="relative mx-5 rounded-3xl overflow-hidden flex-1" style={{ height: '340px', background: 'radial-gradient(ellipse at center, #0d1f3c 0%, #080c18 80%)' }}>
          {/* Map Grid */}
          <div className="absolute inset-0 map-grid opacity-60" />

          {/* Route line */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 340" preserveAspectRatio="none">
            <path d="M 50 280 Q 100 200 180 160 Q 220 140 260 80" stroke="rgba(107,140,255,0.5)" strokeWidth="2" fill="none" strokeDasharray="6 4" />
            <circle cx="180" cy="160" r="4" fill="#ff4444" />
          </svg>

          {/* Speed indicator */}
          <div className="absolute bottom-6 right-5">
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center" style={{ background: 'rgba(10, 14, 30, 0.9)', border: '2px solid rgba(107, 140, 255, 0.3)' }}>
                <span className="text-white font-black text-xl leading-none">45</span>
                <span className="text-[#8892b0] text-[8px] font-bold tracking-wider">KM/H</span>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            <button className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105" style={{ background: 'rgba(15, 22, 41, 0.9)', border: '1px solid rgba(107, 140, 255, 0.2)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </button>
            <button className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105" style={{ background: 'rgba(15, 22, 41, 0.9)', border: '1px solid rgba(107, 140, 255, 0.2)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                <line x1="8" y1="2" x2="8" y2="18" />
                <line x1="16" y1="6" x2="16" y2="22" />
              </svg>
            </button>
          </div>

          {/* Route FAB */}
          <button
            onClick={() => navigate('/route')}
            className="absolute bottom-6 right-20 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-light text-white shadow-brand-lg transition-all hover:scale-110 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #6b8cff, #a78bfa)', boxShadow: '0 4px 24px rgba(107, 140, 255, 0.5)' }}
          >
            +
          </button>
        </div>

        {/* Quick Actions Row */}
        <div className="px-5 pt-5 pb-2 flex gap-3">
          <button
            onClick={() => navigate('/safety-score')}
            className="flex-1 py-3 rounded-2xl flex flex-col items-center gap-1 transition-all hover:scale-105"
            style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(107, 140, 255, 0.12)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5a0" strokeWidth="2">
              <path d="M12 2L3 7v10l9 5 9-5V7z" />
            </svg>
            <span className="text-[9px] font-bold tracking-wider text-[#8892b0]">SAFETY</span>
          </button>
          <button
            onClick={() => navigate('/route')}
            className="flex-1 py-3 rounded-2xl flex flex-col items-center gap-1 transition-all hover:scale-105"
            style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(107, 140, 255, 0.12)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
            <span className="text-[9px] font-bold tracking-wider text-[#8892b0]">ROUTES</span>
          </button>
          <button className="flex-1 py-3 rounded-2xl flex flex-col items-center gap-1 transition-all hover:scale-105"
            style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(107, 140, 255, 0.12)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff8c42" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
            </svg>
            <span className="text-[9px] font-bold tracking-wider text-[#8892b0]">HAZARDS</span>
          </button>
          <button
            onClick={() => navigate('/settings')}
            className="flex-1 py-3 rounded-2xl flex flex-col items-center gap-1 transition-all hover:scale-105"
            style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(107, 140, 255, 0.12)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span className="text-[9px] font-bold tracking-wider text-[#8892b0]">SETTINGS</span>
          </button>
        </div>
      </div>
    </Layout>
  )
}
