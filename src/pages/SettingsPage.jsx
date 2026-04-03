import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

export default function SettingsPage() {
  const navigate = useNavigate()
  const [safeMode, setSafeMode] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [sound, setSound] = useState(false)
  const [avoidZones, setAvoidZones] = useState(['High Traffic', 'Unsafe Zones'])

  const Toggle = ({ value, onChange }) => (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`relative w-10 h-5.5 rounded-full transition-all duration-300 flex-shrink-0 ${value ? 'bg-[#6b8cff]' : 'bg-[#2a3550]'}`}
      style={{ height: '22px', width: '40px' }}
    >
      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${value ? 'left-5' : 'left-0.5'}`} />
    </button>
  )

  const Section = ({ title, icon, children }) => (
    <div className="mb-5">
      {title && (
        <div className="flex items-center gap-2 mb-3">
          {icon && <span className="text-base">{icon}</span>}
          <h3 className="text-sm font-bold text-white tracking-wide">{title}</h3>
        </div>
      )}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(107, 140, 255, 0.08)' }}>
        {children}
      </div>
    </div>
  )

  const Row = ({ icon, label, sub, right, onClick, color = 'text-white', danger = false }) => (
    <button
      className={`w-full flex items-center gap-3 px-4 py-4 transition-all hover:bg-white/5 ${danger ? 'hover:bg-red-500/5' : ''}`}
      onClick={onClick}
      style={{ borderBottom: '1px solid rgba(107, 140, 255, 0.05)' }}
    >
      {icon && (
        <div className="w-8 h-8 flex items-center justify-center text-base flex-shrink-0">
          {icon}
        </div>
      )}
      <div className="flex-1 text-left">
        <p className={`text-sm font-medium ${danger ? 'text-[#ff4444]' : 'text-white'}`}>{label}</p>
        {sub && <p className="text-xs text-[#8892b0] mt-0.5">{sub}</p>}
      </div>
      {right !== undefined ? right : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  )

  return (
    <Layout>
      <div className="min-h-screen overflow-y-auto" style={{ background: '#080c18' }}>
        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-12 pb-5">
          <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8892b0] hover:text-white transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <div>
            <p className="text-xs font-black tracking-[0.15em] text-[#6b8cff] uppercase">Settings</p>
            <p className="text-[9px] text-[#4a5568] tracking-widest">SAFEMARGE</p>
          </div>
        </div>

        <div className="px-5 pb-8">
          {/* Profile Card */}
          <div className="rounded-3xl p-5 mb-5 flex flex-col items-center gap-3" style={{ background: 'rgba(15, 22, 41, 0.8)', border: '1px solid rgba(107, 140, 255, 0.1)' }}>
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: 'linear-gradient(135deg, #1a2c6b, #0f1a3d)', border: '2px solid rgba(107, 140, 255, 0.3)' }}>
                👩‍💻
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6b8cff, #a78bfa)' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-base">Alex Sterling</p>
              <p className="text-[#8892b0] text-xs">alex.sterling@safemarge.io</p>
            </div>
            <div className="flex gap-3">
              <button className="py-2 px-5 rounded-full text-xs font-semibold text-white transition-all hover:bg-white/10" style={{ border: '1px solid rgba(107, 140, 255, 0.3)' }}>
                Edit Profile
              </button>
              <button className="py-2 px-5 rounded-full text-xs font-semibold text-[#8892b0] transition-all hover:bg-white/5" style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                Switch Account
              </button>
            </div>
          </div>

          {/* Safety Sentinel */}
          <Section title="Safety Sentinel" icon="🛡️">
            <Row
              icon="📡"
              label="Emergency Contacts"
              sub="Manage your priority rescue team"
              onClick={() => navigate('/contacts')}
            />
            <Row
              icon="🆘"
              label="SOS Settings"
              sub="Auto-send location & call protocols"
              onClick={() => navigate('/sos')}
            />
            <div className="px-4 py-4 flex items-center gap-3" style={{ borderTop: '1px solid rgba(107, 140, 255, 0.05)' }}>
              <div className="w-8 h-8 flex items-center justify-center text-base">🔒</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Safe Mode</p>
                <p className="text-xs text-[#00e5a0] mt-0.5">Active real-time threat detection</p>
              </div>
              <Toggle value={safeMode} onChange={setSafeMode} />
            </div>
          </Section>

          {/* Account Access */}
          <Section title="Account Access" icon="👤">
            <Row icon="🔑" label="Change Password" />
            <Row icon="📋" label="Manage Contact Info" />
            <Row icon="🚪" label="Logout" danger onClick={() => navigate('/login')} right={null} />
          </Section>

          {/* Navigation */}
          <Section title="Navigation" icon="🧭">
            <div className="px-4 py-4">
              <p className="text-xs text-[#8892b0] mb-1">Default Route</p>
              <p className="text-xs text-[#4a5568]">Prioritize transit type</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-white text-sm font-medium">Safest</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
            <div className="px-4 pb-4" style={{ borderTop: '1px solid rgba(107, 140, 255, 0.05)' }}>
              <p className="text-[9px] font-bold tracking-widest text-[#4a5568] mb-2 mt-3">AVOID ZONES</p>
              <div className="flex flex-wrap gap-2">
                {['High Traffic', 'Unsafe Zones', 'Tolls'].map((zone) => (
                  <button
                    key={zone}
                    className="py-1.5 px-3 rounded-full text-[10px] font-bold transition-all"
                    style={{
                      background: avoidZones.includes(zone) ? 'rgba(255, 68, 68, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${avoidZones.includes(zone) ? 'rgba(255, 68, 68, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
                      color: avoidZones.includes(zone) ? '#ff6b6b' : '#8892b0',
                    }}
                    onClick={() => setAvoidZones(z => z.includes(zone) ? z.filter(x => x !== zone) : [...z, zone])}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>
          </Section>

          {/* Preferences */}
          <Section title="Preferences" icon="⚙️">
            {[
              { label: 'Dark Mode', value: darkMode, onChange: setDarkMode },
              { label: 'Notifications', value: notifications, onChange: setNotifications },
              { label: 'Sound/Vibration', value: sound, onChange: setSound },
            ].map((pref, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-4" style={{ borderTop: i > 0 ? '1px solid rgba(107, 140, 255, 0.05)' : 'none' }}>
                <span className="text-white text-sm">{pref.label}</span>
                <Toggle value={pref.value} onChange={pref.onChange} />
              </div>
            ))}
            <div className="flex items-center justify-between px-4 py-4" style={{ borderTop: '1px solid rgba(107, 140, 255, 0.05)' }}>
              <span className="text-white text-sm">Language</span>
              <span className="text-[#6b8cff] text-xs font-semibold">English (US) ▾</span>
            </div>
          </Section>

          {/* Privacy */}
          <Section title="Privacy" icon="🔐">
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-white text-sm">Location Access</span>
              <span className="text-[9px] font-bold tracking-wider px-2 py-1 rounded-full" style={{ background: 'rgba(0, 229, 160, 0.15)', color: '#00e5a0', border: '1px solid rgba(0, 229, 160, 0.3)' }}>WHILE USING</span>
            </div>
            <Row icon="📊" label="Data Sharing" />
            <Row icon="📱" label="App Permissions" />
          </Section>

          {/* Support */}
          <Section title="Support &amp; Legal" icon="❓">
            <div className="grid grid-cols-2 gap-0">
              {['HELP', 'ABOUT', 'TERMS', 'PRIVACY'].map((item, i) => (
                <button key={i} className="py-5 flex flex-col items-center gap-2 text-[#8892b0] hover:text-white hover:bg-white/5 transition-all" style={{ borderBottom: i < 2 ? '1px solid rgba(107, 140, 255, 0.05)' : 'none', borderRight: i % 2 === 0 ? '1px solid rgba(107, 140, 255, 0.05)' : 'none' }}>
                  <span className="text-xl">{['❓', 'ℹ️', '📄', '🔒'][i]}</span>
                  <span className="text-[9px] font-bold tracking-widest">{item}</span>
                </button>
              ))}
            </div>
          </Section>

          <p className="text-center text-[9px] font-bold tracking-[0.15em] text-[#2a3550] mt-2">
            SAFEMARGE V4.2.0 • SECURED BY SENTINEL AI
          </p>
        </div>
      </div>
    </Layout>
  )
}
