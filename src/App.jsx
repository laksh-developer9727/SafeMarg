import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import RoutePage from './pages/RoutePage'
import SOSPage from './pages/SOSPage'
import ReportPage from './pages/ReportPage'
import AlertsPage from './pages/AlertsPage'
import SafetyScorePage from './pages/SafetyScorePage'
import SettingsPage from './pages/SettingsPage'
import ContactsPage from './pages/ContactsPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/route" element={<RoutePage />} />
          <Route path="/sos" element={<SOSPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/safety-score" element={<SafetyScorePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
