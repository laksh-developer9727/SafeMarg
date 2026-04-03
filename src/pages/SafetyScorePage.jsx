import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

const routes = [
  {
    label: 'SAFEST CHOICE',
    name: 'Route A',
    time: '24 mins',
    distance: '12.4 km',
    score: 85,
    barColor: '#00e5a0',
    labelColor: '#00e5a0',
  },
  {
    label: 'FASTER PATH',
    name: 'Route B',
    time: '19 mins',
    distance: '10.1 km',
    score: 62,
    barColor: '#6b8cff',
    labelColor: '#6b8cff',
  },
  {
    label: 'HEAVY HAZARDS',
    name: 'Route C',
    time: '32 mins',
    distance: '14.2 km',
    score: 34,
    barColor: '#ff4444',
    labelColor: '#ff4444',
  },
]

const insights = [
  {
    icon: '⚠️',
    color: '#ff4444',
    bg: 'rgba(255, 68, 68, 0.1)',
    title: 'High Accident Zone',
    desc: "Market St. Intersection shows 40% higher collision probability in wet conditions.",
    tag: 'AVOID AREA',
    tagColor: '#ff4444',
  },
  {
    icon: '🔧',
    color: '#8892b0',
    bg: 'rgba(136, 146, 176, 0.08)',
    title: 'Frequent Potholes',
    desc: 'Reports of severe surface damage on 5th Avenue. Recommended speed: 30km/h.',
    tag: 'CAUTION ADVISORY',
    tagColor: '#ff8c42',
  },
]

export default function SafetyScorePage() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="min-h-screen overflow-y-auto" style={{ background: '#080c18' }}>
        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-12 pb-4">
          <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8892b0] hover:text-white transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#6b8cff]/40">
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a2c6b, #0f1a3d)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
            </div>
            <span className="text-white font-semibold text-sm">Safe Marg</span>
          </div>
        </div>

        {/* Safety Score Gauge */}
        <div className="flex flex-col items-center py-6">
          <div className="relative w-40 h-40">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,229,160,0.08) 0%, transparent 70%)' }} />
            {/* SVG Gauge */}
            <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
              {/* Background ring */}
              <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
              {/* Progress */}
              <circle
                cx="80" cy="80" r="68"
                fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(85 / 100) * 427.5} 427.5`}
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00e5a0" />
                  <stop offset="100%" stopColor="#6b8cff" />
                </linearGradient>
              </defs>
            </svg>
            {/* Score text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-white">85</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#00e5a0]">SAFE</span>
            </div>
          </div>
          <h2 className="text-xl font-bold text-white mt-3">Route Safety Score</h2>
          <p className="text-[#8892b0] text-xs mt-1">Optimal conditions detected on primary path</p>
        </div>

        <div className="px-5 space-y-5 pb-8">
          {/* Recommended Routes */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-white">Recommended Routes</h3>
              <span className="text-[10px] font-bold tracking-wider text-[#6b8cff] text-right">3 OPTIONS<br />FOUND</span>
            </div>
            <div className="space-y-3">
              {routes.map((r, i) => (
                <div key={i} className="route-card">
                  <p className="text-[9px] font-bold tracking-[0.15em] mb-1" style={{ color: r.labelColor }}>{r.label}</p>
                  <p className="text-base font-bold text-white mb-3">{r.name}</p>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-[#8892b0]">Time</span>
                    <span className="text-white font-semibold">{r.time}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-[#8892b0]">Distance</span>
                    <span className="text-white font-semibold">{r.distance}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${r.score}%`, background: r.barColor }} />
                    </div>
                    <span className="text-sm font-bold" style={{ color: r.barColor }}>{r.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Predictive Sentinel Insights */}
          <div>
            <h3 className="text-base font-bold text-white mb-3">Predictive Sentinel Insights</h3>
            <div className="space-y-3">
              {insights.map((ins, i) => (
                <div key={i} className="rounded-2xl p-4" style={{ background: ins.bg, border: `1px solid ${ins.color}30` }}>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${ins.color}20` }}>
                      <span className="text-lg">{ins.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-bold text-sm mb-1">{ins.title}</p>
                      <p className="text-[#8892b0] text-xs leading-relaxed mb-2">{ins.desc}</p>
                      <span className="inline-block text-[9px] font-bold tracking-wider px-2 py-1 rounded-full" style={{ color: ins.tagColor, background: `${ins.tagColor}15`, border: `1px solid ${ins.tagColor}30` }}>
                        {ins.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
