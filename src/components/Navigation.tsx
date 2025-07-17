import { useNavigate, useLocation } from 'react-router-dom'
import { Home, BookOpen, Camera, TrendingUp, User } from 'lucide-react'
import { cn } from '../lib/utils'

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const tabs = [
    { id: 'dashboard', label: 'Inicio', icon: Home, path: '/dashboard' },
    { id: 'lessons', label: 'Lecciones', icon: BookOpen, path: '/lessons' },
    { id: 'analysis', label: 'Análisis', icon: Camera, path: '/analysis' },
    { id: 'progress', label: 'Progreso', icon: TrendingUp, path: '/progress' },
    { id: 'profile', label: 'Perfil', icon: User, path: '/profile' },
  ]

  const handleTabClick = (tab: typeof tabs[0]) => {
    setActiveTab(tab.id)
    navigate(tab.path)
  }

  const getCurrentTab = () => {
    const currentPath = location.pathname
    return tabs.find(tab => tab.path === currentPath)?.id || 'dashboard'
  }

  return (
    <nav className="bg-white border-t border-gray-200 px-4 py-2 safe-area-bottom">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = getCurrentTab() === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200",
                "min-w-[60px] min-h-[60px]",
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 mb-1 transition-transform duration-200",
                isActive && "scale-110"
              )} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}