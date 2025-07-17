import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Progress as ProgressBar } from '../components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { TrendingUp, Award, Calendar, Clock, Target, Star, BookOpen, Camera } from 'lucide-react'

export function Progress() {
  const overallStats = {
    totalLessons: 8,
    completedLessons: 3,
    totalHours: 12.5,
    studyStreak: 7,
    averageScore: 87
  }

  const weeklyProgress = [
    { day: 'Lun', hours: 2, completed: true },
    { day: 'Mar', hours: 1.5, completed: true },
    { day: 'Mié', hours: 0, completed: false },
    { day: 'Jue', hours: 3, completed: true },
    { day: 'Vie', hours: 2.5, completed: true },
    { day: 'Sáb', hours: 1, completed: true },
    { day: 'Dom', hours: 0.5, completed: true },
  ]

  const achievements = [
    { id: 1, title: 'Primera Lección', description: 'Completaste tu primera lección', icon: BookOpen, earned: true, date: '2024-01-15' },
    { id: 2, title: 'Análisis Maestro', description: 'Realizaste 10 análisis faciales', icon: Camera, earned: true, date: '2024-01-18' },
    { id: 3, title: 'Estudiante Dedicado', description: '7 días consecutivos de estudio', icon: Calendar, earned: true, date: '2024-01-20' },
    { id: 4, title: 'Técnico Experto', description: 'Domina 5 técnicas diferentes', icon: Target, earned: false, date: null },
    { id: 5, title: 'Perfeccionista', description: 'Obtén 95% en todas las lecciones', icon: Star, earned: false, date: null },
  ]

  const recentActivity = [
    { id: 1, type: 'lesson', title: 'Completaste "Anatomía de las Cejas"', time: '2 horas', score: 92 },
    { id: 2, type: 'analysis', title: 'Análisis facial realizado', time: '4 horas', score: null },
    { id: 3, type: 'lesson', title: 'Completaste "Introducción al Microblading"', time: '1 día', score: 88 },
    { id: 4, type: 'achievement', title: 'Logro desbloqueado: "Estudiante Dedicado"', time: '2 días', score: null },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lesson': return BookOpen
      case 'analysis': return Camera
      case 'achievement': return Award
      default: return TrendingUp
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'lesson': return 'text-primary'
      case 'analysis': return 'text-secondary'
      case 'achievement': return 'text-yellow-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Tu Progreso</h1>
        <p className="text-gray-600">Seguimiento de tu aprendizaje</p>
      </div>

      {/* Overall Progress */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardContent className="p-4">
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-primary mb-1">
              {Math.round((overallStats.completedLessons / overallStats.totalLessons) * 100)}%
            </div>
            <p className="text-gray-600">Progreso General</p>
          </div>
          <ProgressBar 
            value={(overallStats.completedLessons / overallStats.totalLessons) * 100} 
            className="h-3 mb-4" 
          />
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-gray-900">{overallStats.completedLessons}/{overallStats.totalLessons}</div>
              <div className="text-sm text-gray-600">Lecciones</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900">{overallStats.totalHours}h</div>
              <div className="text-sm text-gray-600">Tiempo Total</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="text-xl font-bold text-gray-900">{overallStats.studyStreak}</div>
            <div className="text-sm text-gray-600">Días Consecutivos</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-xl font-bold text-gray-900">{overallStats.averageScore}%</div>
            <div className="text-sm text-gray-600">Puntuación Media</div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Progress */}
      <Tabs defaultValue="weekly" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weekly">Semanal</TabsTrigger>
          <TabsTrigger value="achievements">Logros</TabsTrigger>
          <TabsTrigger value="activity">Actividad</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Progreso Semanal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyProgress.map((day, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        day.completed ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {day.day.charAt(0)}
                      </div>
                      <span className="font-medium">{day.day}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{day.hours}h</span>
                      {day.completed && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4 mt-6">
          <div className="space-y-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon
              return (
                <Card key={achievement.id} className={`${
                  achievement.earned ? 'bg-primary/5 border-primary/20' : 'bg-gray-50 border-gray-200'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        achievement.earned 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${
                          achievement.earned ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        {achievement.earned && achievement.date && (
                          <p className="text-xs text-primary mt-1">
                            Desbloqueado el {new Date(achievement.date).toLocaleDateString('es-ES')}
                          </p>
                        )}
                      </div>
                      {achievement.earned && (
                        <Badge className="bg-primary/10 text-primary">
                          Completado
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = getActivityIcon(activity.type)
                  const colorClass = getActivityColor(activity.type)
                  
                  return (
                    <div key={activity.id} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100`}>
                        <Icon className={`w-5 h-5 ${colorClass}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{activity.title}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>hace {activity.time}</span>
                          {activity.score && (
                            <>
                              <span>•</span>
                              <span className="text-primary font-medium">{activity.score}%</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Motivation */}
      <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
        <CardHeader>
          <CardTitle className="text-lg text-secondary">🎯 Meta Semanal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700">Completar 2 lecciones más</span>
            <span className="text-sm font-medium text-secondary">1/2</span>
          </div>
          <ProgressBar value={50} className="h-2" />
          <p className="text-sm text-gray-600 mt-2">
            ¡Vas por buen camino! Solo una lección más para alcanzar tu meta semanal.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}