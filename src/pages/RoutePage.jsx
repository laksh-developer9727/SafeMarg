import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

export default function RoutePage() {
  const navigate = useNavigate()

  const recent = [
    { icon: '🏠', name: 'Home', addr: '2424 Broadway Street, San Francisco' },
    { icon: '💼', name: 'Office', addr: 'Market Square, 1355 Market St' },
    { icon: '☕', name: 'Blue Bottle Coffee', addr: '66 Mint St, San Francisco' },
  ]

  return (
    <Layout>
      <div className="min-h-screen" style={{ background: '#080c18' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-12 pb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8892b0] hover:text-white hover:border-white/30 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <h1 className="text-lg font-bold text-white">Plan Your Route</h1>
          </div>
          <button onClick={() => navigate('/settings')} className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#6b8cff]/30">
            <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a2c6b, #0f1a3d)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
          </button>
        </div>

        <div className="px-5 space-y-4">
          {/* Location inputs */}
          <div className="relative space-y-2">
            <div className="flex items-center gap-3 py-4 px-5 rounded-2xl" style={{ background: 'rgba(15, 22, 41, 0.8)', border: '1px solid rgba(107, 140, 255, 0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4" />
              </svg>
              <span className="text-white text-sm font-medium">Current Location</span>
            </div>

            {/* Swap button */}
            <div className="absolute -right-0 left-1/2 -translate-x-1/2 z-10 flex justify-center" style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
              <button className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(10, 14, 30, 0.95)', border: '1.5px solid rgba(107, 140, 255, 0.3)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2.5">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4" />
                  <path d="M17 8v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 py-4 px-5 rounded-2xl" style={{ background: 'rgba(15, 22, 41, 0.8)', border: '1px solid rgba(107, 140, 255, 0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input type="text" placeholder="Where to?" className="bg-transparent text-[#8892b0] placeholder-[#8892b0]/60 text-sm font-medium outline-none flex-1" />
            </div>
          </div>

          {/* Find Route Button */}
          <button
            onClick={() => navigate('/safety-score')}
            className="btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L3 7v10l9 5 9-5V7z" />
            </svg>
            <span>Find Safest Route</span>
          </button>

          {/* Map preview */}
          <div className="relative rounded-3xl overflow-hidden" style={{ height: '200px', background: 'radial-gradient(ellipse at center, #0a1428 0%, #080c18 80%)' }}>
            <div className="absolute inset-0 map-grid opacity-50" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
              {/* Road network */}
              <path d="M0 100 Q75 80 150 100 Q225 120 300 100" stroke="rgba(107,140,255,0.3)" strokeWidth="1" fill="none" />
              <path d="M150 0 Q130 50 150 100 Q170 150 150 200" stroke="rgba(107,140,255,0.3)" strokeWidth="1" fill="none" />
              <path d="M0 150 Q100 140 150 100 Q200 60 300 50" stroke="rgba(107,140,255,0.2)" strokeWidth="1" fill="none" />
              {/* Nodes */}
              {[[150,100],[75,80],[225,65],[120,155],[230,130]].map(([x,y],i) => (
                <circle key={i} cx={x} cy={y} r="2.5" fill="rgba(107,140,255,0.5)" />
              ))}
              {/* Center dot */}
              <circle cx="150" cy="100" r="5" fill="#6b8cff" />
              <circle cx="150" cy="100" r="12" stroke="rgba(107,140,255,0.3)" strokeWidth="1" fill="none" />
            </svg>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#4a5568]">SCANNING LIVE HAZARDS</span>
            </div>
          </div>

          {/* Recent Destinations */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[10px] font-bold tracking-[0.15em] text-[#8892b0] uppercase">Recent Destinations</h3>
              <button className="text-xs text-[#6b8cff] font-semibold hover:text-white transition-colors">Clear All</button>
            </div>
            <div className="space-y-1">
              {recent.map((r, i) => (
                <button key={i} className="w-full flex items-center gap-4 py-4 px-4 rounded-2xl group transition-all hover:bg-[rgba(107,140,255,0.05)]">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'rgba(15, 22, 41, 0.8)', border: '1px solid rgba(107, 140, 255, 0.1)' }}>
                    {r.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white text-sm font-semibold">{r.name}</p>
                    <p className="text-[#8892b0] text-xs">{r.addr}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" className="group-hover:stroke-[#6b8cff] transition-colors">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
