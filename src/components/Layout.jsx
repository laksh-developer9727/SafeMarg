import BottomNav from './BottomNav'

export default function Layout({ children, className = '' }) {
  return (
    <div className={`page-wrapper ${className}`} style={{ paddingBottom: '80px' }}>
      {children}
      <BottomNav />
    </div>
  )
}
