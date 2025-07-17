import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { Dashboard } from './pages/Dashboard'
import { Lessons } from './pages/Lessons'
import { FacialAnalysis } from './pages/FacialAnalysis'
import { Progress } from './pages/Progress'
import { Profile } from './pages/Profile'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <div className="flex flex-col h-screen">
          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/analysis" element={<FacialAnalysis />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          
          {/* Bottom Navigation */}
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </Router>
  )
}

export default App