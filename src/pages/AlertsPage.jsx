import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

const alerts = [
  {
    severity: 'danger',
    icon: '⚠️',
    iconBg: 'rgba(255, 68, 68, 0.15)',
    time: '2M AGO',
    title: 'Pothole Collision Risk',
    desc: 'Critical cluster detected on 5th Ave. Surface degradation exceeds safety threshold by 42%.',
    tags: ['IMMEDIATE ACTION', 'SECTOR 7G'],
    tagColors: ['#ff4444', '#4a5568'],
  },
  {
    severity: 'danger',
    icon: '📍',
    iconBg: 'rgba(255, 68, 68, 0.1)',
    time: '14M AGO',
    title: 'Proximity Breach',
    desc: 'Automated buffer zone narrowing. Heavy freight vehicle maintaining sub-optimal margin.',
    tags: ['CAUTION'],
    tagColors: ['#ff8c42'],
  },
  {
    severity: 'success',
    icon: '🛡️',
    iconBg: 'rgba(0, 229, 160, 0.1)',
    time: '1H AGO',
    title: 'Shield Optimized',
    desc: 'Dynamic routing protocols updated. 12% increase in safety margin efficiency for current route.',
    tags: ['SYSTEM UPDATE'],
    tagColors: ['#00e5a0'],
  },
  {
    severity: 'danger',
    icon: '🚗',
    iconBg: 'rgba(255, 68, 68, 0.1)',
    time: '3H AGO',
    title: 'Hazard Ahead',
    desc: 'Debris detected in lane 2. Guardian suggests immediate lane shift to leftmost corridor.',
    tags: [],
    tagColors: [],
  },
  {
    severity: 'warning',
    icon: '🔋',
    iconBg: 'rgba(255, 140, 66, 0.1)',
    time: '5H AGO',
    title: 'Sensor Power Low',
    desc: 'Rear-facing proximity sensor is operating on reserve power. Accuracy may be degraded.',
    tags: [],
    tagColors: [],
  },
]

export default function AlertsPage() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="min-h-screen" style={{ background: '#080c18' }}>
        {/* Header */}
        <div className="px-5 pt-12 pb-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6b8cff, #a78bfa)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v10l9 5 9-5V7z" /></svg>
            </div>
            <span className="text-xs font-black tracking-[0.2em] text-[#6b8cff] uppercase">Guardian_OS</span>
            <button onClick={() => navigate('/settings')} className="ml-auto w-9 h-9 rounded-full overflow-hidden border border-[#6b8cff]/20">
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a2c6b, #0f1a3d)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] font-bold tracking-[0.2em] text-[#4a5568] mb-1">CONTROL CENTER</p>
              <h1 className="text-4xl font-black text-white">Alerts</h1>
            </div>
            <button className="flex items-center gap-2 py-2 px-4 rounded-full text-[10px] font-bold tracking-wider text-[#00e5a0] transition-all hover:bg-[rgba(0,229,160,0.1)]" style={{ border: '1.5px solid rgba(0, 229, 160, 0.3)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              MARK ALL AS READ
            </button>
          </div>
        </div>

        <div className="px-5 space-y-3 pb-8">
          {alerts.map((alert, i) => (
            <div key={i} className={`alert-card ${alert.severity}`}>
              <div className="flex items-start gap-3 pl-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: alert.iconBg }}>
                  <span className="text-lg">{alert.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-white font-bold text-sm leading-tight">{alert.title}</p>
                    <span className="text-[9px] text-[#4a5568] font-medium tracking-wider flex-shrink-0">{alert.time}</span>
                  </div>
                  <p className="text-[#8892b0] text-xs leading-relaxed mb-2">{alert.desc}</p>
                  {alert.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {alert.tags.map((tag, j) => (
                        <span key={j} className="text-[9px] font-bold tracking-wider px-2 py-1 rounded-full" style={{ color: alert.tagColors[j], background: `${alert.tagColors[j]}15`, border: `1px solid ${alert.tagColors[j]}30` }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Regional Grid status */}
          <div className="mt-6 rounded-2xl py-8 flex flex-col items-center gap-3" style={{ background: 'rgba(15, 22, 41, 0.4)', border: '1px solid rgba(107, 140, 255, 0.06)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#4a5568]">REGIONAL SAFETY GRID ACTIVE</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
