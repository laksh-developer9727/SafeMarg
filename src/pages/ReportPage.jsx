import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

const emojis = ['😊', '🙂', '😐', '😟', '😡']

export default function ReportPage() {
  const navigate = useNavigate()
  const [severity, setSeverity] = useState(null)
  const [details, setDetails] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      navigate('/dashboard')
    }, 2000)
  }

  return (
    <Layout>
      <div className="min-h-screen" style={{ background: '#080c18' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-12 pb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8892b0] hover:text-white transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <h1 className="text-lg font-bold text-white">Report Condition</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#8892b0]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#6b8cff]/30">
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a2c6b, #0f1a3d)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 space-y-6 pb-8">
          {/* Visual Evidence */}
          <div>
            <h2 className="text-base font-bold text-white mb-3">Visual Evidence</h2>
            <button className="w-full rounded-3xl flex flex-col items-center justify-center gap-3 py-10 transition-all hover:border-[#6b8cff]/40" style={{ background: 'rgba(15, 22, 41, 0.6)', border: '1.5px dashed rgba(107, 140, 255, 0.2)', minHeight: '130px' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(107, 140, 255, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="1.5">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <span className="text-[10px] font-bold tracking-[0.15em] text-[#4a5568]">TAP TO CAPTURE OR UPLOAD</span>
            </button>
          </div>

          {/* Road Severity */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-white">Road Severity</h2>
              {severity !== null && (
                <span className={`text-xs font-bold tracking-wider ${severity >= 4 ? 'text-[#ff4444]' : severity >= 3 ? 'text-[#ff8c42]' : 'text-[#00e5a0]'}`}>
                  {severity >= 4 ? 'CRITICAL IMPACT' : severity >= 3 ? 'CAUTION' : 'MILD'}
                </span>
              )}
            </div>
            <div className="rounded-2xl p-4" style={{ background: 'rgba(15, 22, 41, 0.6)', border: '1px solid rgba(107, 140, 255, 0.1)' }}>
              <div className="flex items-center gap-3">
                {emojis.map((emoji, i) => (
                  <button
                    key={i}
                    onClick={() => setSeverity(i)}
                    className={`severity-emoji ${severity === i ? 'active' : ''}`}
                    title={`Level ${i + 1}`}
                  >
                    {emoji}
                  </button>
                ))}
                {severity !== null && (
                  <div className="ml-auto text-right">
                    <div className="text-[#ff4444] text-2xl font-black">Level</div>
                    <div className="text-[#ff4444] text-4xl font-black leading-none">{severity + 1}</div>
                    <div className="text-[#8892b0] text-[9px] tracking-widest">{severity >= 4 ? 'HAZARDOUS' : severity >= 3 ? 'SEVERE' : severity >= 2 ? 'MODERATE' : severity >= 1 ? 'MINOR' : 'SAFE'}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details & Location */}
          <div>
            <h2 className="text-base font-bold text-white mb-3">Details &amp; Location</h2>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe the condition (e.g., deep pothole, standing water, debris)..."
              className="w-full rounded-2xl px-4 py-4 text-sm text-[#8892b0] outline-none resize-none transition-all duration-200"
              style={{ background: 'rgba(15, 22, 41, 0.6)', border: '1px solid rgba(107, 140, 255, 0.12)', minHeight: '110px', color: '#8892b0' }}
              onFocus={e => e.target.style.borderColor = 'rgba(107, 140, 255, 0.4)'}
              onBlur={e => e.target.style.borderColor = 'rgba(107, 140, 255, 0.12)'}
            />

            {/* Auto location */}
            <div className="flex items-center justify-between mt-3 px-4 py-3.5 rounded-2xl" style={{ background: 'rgba(15, 22, 41, 0.7)', border: '1px solid rgba(107, 140, 255, 0.1)' }}>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b8cff" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-white text-xs font-semibold">Automatic Location Detected</p>
                  <p className="text-[#8892b0] text-[11px]">Highway 101, Near North Exit</p>
                </div>
              </div>
              <button className="text-[10px] font-bold tracking-wider text-[#6b8cff] hover:text-white transition-colors">EDIT</button>
            </div>
          </div>

          {/* Submit */}
          {submitted ? (
            <div className="py-4 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2" style={{ background: 'rgba(0, 229, 160, 0.15)', border: '1.5px solid rgba(0, 229, 160, 0.4)', color: '#00e5a0' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              REPORT SUBMITTED
            </div>
          ) : (
            <button onClick={handleSubmit} className="btn-primary">
              <span>Submit Report</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12l14 0M12 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <p className="text-center text-[9px] font-bold tracking-[0.15em] text-[#4a5568]">
            YOUR CONTRIBUTION HELPS OTHERS STAY SAFE
          </p>
        </div>
      </div>
    </Layout>
  )
}
