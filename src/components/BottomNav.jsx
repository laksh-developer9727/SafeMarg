import { useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  {
    id: 'explore',
    label: 'EXPLORE',
    path: '/dashboard',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    id: 'sos',
    label: 'SOS',
    path: '/sos',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: 'report',
    label: 'REPORT',
    path: '/report',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: 'alerts',
    label: 'ALERTS',
    path: '/alerts',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    badge: true,
  },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="bottom-nav z-50">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          const isSOS = item.id === 'sos'

          if (isSOS) {
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center gap-1 cursor-pointer"
              >
                <div className={`relative p-2 rounded-xl transition-all duration-200 ${isActive ? 'bg-red-500/20' : ''}`}>
                  <span className={`${isActive ? 'text-red-400' : 'text-[#8892b0]/60'} transition-colors`}>
                    {item.icon}
                  </span>
                </div>
                <span className={`text-[9px] font-bold tracking-widest ${isActive ? 'text-red-400' : 'text-[#8892b0]/50'}`}>
                  {item.label}
                </span>
              </button>
            )
          }

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="nav-item relative"
            >
              <div className={`relative transition-all duration-200 ${isActive ? 'nav-icon-wrapper' : 'p-2'}`}>
                <span className={`transition-colors ${isActive ? 'text-[#6b8cff]' : 'text-[#8892b0]/60'}`}>
                  {item.icon}
                </span>
                {item.badge && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </div>
              <span className={`text-[9px] font-bold tracking-widest ${isActive ? 'text-[#6b8cff]' : ''}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
