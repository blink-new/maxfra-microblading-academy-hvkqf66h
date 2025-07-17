import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Separator } from '../components/ui/separator'
import { Settings, Edit, Award, BookOpen, Camera, Clock, Star, ChevronRight } from 'lucide-react'

export function Profile() {
  const userProfile = {
    name: 'María González',
    email: 'maria.gonzalez@email.com',
    joinDate: '2024-01-10',
    level: 'Intermedio',
    totalHours: 12.5,
    completedLessons: 3,
    totalLessons: 8,
    averageScore: 87,
    streak: 7
  }

  const certificates = [
    { id: 1, title: 'Fundamentos del Microblading', date: '2024-01-18', score: 92 },
    { id: 2, title: 'Anatomía de las Cejas', date: '2024-01-20', score: 88 },
  ]

  const preferences = [
    { id: 1, title: 'Notificaciones', description: 'Recordatorios de estudio', enabled: true },
    { id: 2, title: 'Modo Oscuro', description: 'Tema de la aplicación', enabled: false },
    { id: 3, title: 'Análisis Automático', description: 'Guardar análisis faciales', enabled: true },
  ]

  const menuItems = [
    { id: 1, title: 'Editar Perfil', icon: Edit, action: 'edit' },
    { id: 2, title: 'Configuración', icon: Settings, action: 'settings' },
    { id: 3, title: 'Mis Certificados', icon: Award, action: 'certificates' },
    { id: 4, title: 'Historial de Análisis', icon: Camera, action: 'analysis-history' },
  ]

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Mi Perfil</h1>
        <p className="text-gray-600">Gestiona tu cuenta y preferencias</p>
      </div>

      {/* Profile Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder-avatar.jpg" alt={userProfile.name} />
              <AvatarFallback className="text-xl bg-primary/10 text-primary">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{userProfile.name}</h2>
              <p className="text-gray-600">{userProfile.email}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge className="bg-primary/10 text-primary">{userProfile.level}</Badge>
                <Badge variant="outline">
                  Miembro desde {new Date(userProfile.joinDate).toLocaleDateString('es-ES', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </Badge>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-primary/5 rounded-lg">
              <div className="text-2xl font-bold text-primary">{userProfile.totalHours}h</div>
              <div className="text-sm text-gray-600">Tiempo Total</div>
            </div>
            <div className="text-center p-3 bg-secondary/5 rounded-lg">
              <div className="text-2xl font-bold text-secondary">{userProfile.completedLessons}/{userProfile.totalLessons}</div>
              <div className="text-sm text-gray-600">Lecciones</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{userProfile.averageScore}%</div>
              <div className="text-sm text-gray-600">Puntuación</div>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{userProfile.streak}</div>
              <div className="text-sm text-gray-600">Días Seguidos</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Menu Items */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Configuración</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.id}>
                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="font-medium text-gray-900">{item.title}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                {index < menuItems.length - 1 && <Separator />}
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Recent Certificates */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Certificados Recientes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {certificates.map((cert) => (
            <div key={cert.id} className="flex items-center space-x-4 p-3 bg-primary/5 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{cert.title}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>{new Date(cert.date).toLocaleDateString('es-ES')}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-500 fill-current" />
                    <span className="font-medium text-primary">{cert.score}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {certificates.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Award className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Aún no tienes certificados</p>
              <p className="text-sm">Completa lecciones para obtener certificados</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Learning Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Preferencias de Aprendizaje</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {preferences.map((pref, index) => (
            <div key={pref.id}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{pref.title}</h3>
                  <p className="text-sm text-gray-600">{pref.description}</p>
                </div>
                <div className={`w-12 h-6 rounded-full transition-colors ${
                  pref.enabled ? 'bg-primary' : 'bg-gray-200'
                } relative`}>
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    pref.enabled ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </div>
              </div>
              {index < preferences.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Study Goals */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg text-primary">🎯 Objetivos de Estudio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Lecciones por semana</span>
              <span className="font-medium">2 lecciones</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Tiempo de estudio diario</span>
              <span className="font-medium">30 minutos</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Análisis faciales</span>
              <span className="font-medium">3 por semana</span>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            <Settings className="w-4 h-4 mr-2" />
            Modificar Objetivos
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}