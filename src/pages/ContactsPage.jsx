import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

const initial = [
  { name: 'Elena Rodriguez', phone: '+1 (555) 123-4567', avatar: '👩‍💼' },
  { name: 'Marcus Chen', phone: '+1 (555) 987-6543', avatar: '👨‍💻' },
]

export default function ContactsPage() {
  const navigate = useNavigate()
  const [primary, setPrimary] = useState({ name: 'Julian V. Sterling', phone: '+1 (555) 892-0192' })
  const [contacts, setContacts] = useState(initial)
  const [saved, setSaved] = useState(false)

  const removeContact = (i) => setContacts(contacts.filter((_, j) => j !== i))

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <Layout>
      <div className="min-h-screen overflow-y-auto" style={{ background: '#080c18' }}>
        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-12 pb-6">
          <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8892b0] hover:text-white transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-white">Manage Contacts</h1>
        </div>

        <div className="px-5 space-y-6 pb-8">
          {/* Primary Guardian */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[9px] font-bold tracking-[0.2em] text-[#8892b0]">PRIMARY GUARDIAN</p>
              <span className="flex items-center gap-1.5 text-[9px] font-bold tracking-wider px-3 py-1.5 rounded-full" style={{ background: 'rgba(0, 229, 160, 0.1)', color: '#00e5a0', border: '1px solid rgba(0, 229, 160, 0.3)' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                SENTINEL BADGE
              </span>
            </div>
            <div className="rounded-3xl p-5 space-y-4" style={{ background: 'rgba(15, 22, 41, 0.8)', border: '1px solid rgba(107, 140, 255, 0.12)' }}>
              <div>
                <p className="text-[9px] font-bold tracking-[0.15em] text-[#6b8cff] mb-2">FULL NAME</p>
                <input
                  type="text"
                  value={primary.name}
                  onChange={(e) => setPrimary({ ...primary, name: e.target.value })}
                  className="bg-transparent text-white text-lg font-bold w-full outline-none border-b border-transparent focus:border-[#6b8cff] pb-1 transition-all"
                />
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-[0.15em] text-[#6b8cff] mb-3">SECURE PHONE LINE</p>
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21l3-.01a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.64-1.64a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <input
                    type="tel"
                    value={primary.phone}
                    onChange={(e) => setPrimary({ ...primary, phone: e.target.value })}
                    className="bg-transparent text-white text-lg font-semibold w-full outline-none border-b border-transparent focus:border-[#6b8cff] pb-1 transition-all"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00e5a0]" />
                <span className="text-[11px] text-[#8892b0] italic">Active Sentinel Link Established</span>
              </div>
            </div>
          </div>

          {/* Additional Guardians */}
          <div>
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#8892b0] mb-3">ADDITIONAL GUARDIANS (OPTIONAL)</p>
            <div className="space-y-2 mb-3">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-center gap-4 px-4 py-4 rounded-2xl transition-all" style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(107, 140, 255, 0.1)' }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0" style={{ background: 'rgba(107, 140, 255, 0.1)', border: '1px solid rgba(107, 140, 255, 0.2)' }}>
                    {c.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-bold">{c.name}</p>
                    <p className="text-[#8892b0] text-xs">{c.phone}</p>
                  </div>
                  <button
                    onClick={() => removeContact(i)}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[#4a5568] hover:text-[#ff4444] hover:bg-[rgba(255,68,68,0.1)] transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            {/* Add New */}
            <button className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 transition-all hover:bg-[rgba(107,140,255,0.08)]" style={{ border: '1.5px dashed rgba(107, 140, 255, 0.3)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#6b8cff]">ADD NEW CONTACT</span>
            </button>
          </div>

          {/* Save Protocol */}
          {saved ? (
            <div className="py-4 rounded-full flex items-center justify-center gap-2 text-sm font-bold tracking-widest" style={{ background: 'rgba(0, 229, 160, 0.15)', border: '1.5px solid rgba(0, 229, 160, 0.4)', color: '#00e5a0' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
              PROTOCOL SAVED
            </div>
          ) : (
            <button onClick={handleSave} className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L3 7v10l9 5 9-5V7z" />
              </svg>
              <span>Save Protocol</span>
            </button>
          )}

          <p className="text-center text-[9px] font-bold tracking-[0.1em] text-[#4a5568]">
            CHANGES WILL BE ENCRYPTED AND SYNCED TO SENTINEL CLOUD
          </p>
        </div>
      </div>
    </Layout>
  )
}
