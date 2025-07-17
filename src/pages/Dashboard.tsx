import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { Camera, BookOpen, Award, TrendingUp, Play, Clock, Star } from 'lucide-react'

export function Dashboard() {
  const recentLessons = [
    { id: 1, title: 'Fundamentos del Microblading', progress: 85, duration: '45 min', difficulty: 'Básico' },
    { id: 2, title: 'Técnicas de Trazado', progress: 60, duration: '60 min', difficulty: 'Intermedio' },
    { id: 3, title: 'Análisis Facial Avanzado', progress: 30, duration: '90 min', difficulty: 'Avanzado' },
  ]

  const achievements = [
    { id: 1, title: 'Primera Lección', icon: BookOpen, earned: true },
    { id: 2, title: 'Análisis Completado', icon: Camera, earned: true },
    { id: 3, title: 'Semana Completa', icon: Award, earned: false },
  ]

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">¡Hola, María!</h1>
        <p className="text-gray-600">Continúa tu entrenamiento en microblading</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-gray-600">Lecciones Completadas</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-secondary">85%</div>
            <div className="text-sm text-gray-600">Progreso General</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start h-12" size="lg">
            <Camera className="w-5 h-5 mr-3" />
            Iniciar Análisis Facial
          </Button>
          <Button variant="outline" className="w-full justify-start h-12" size="lg">
            <Play className="w-5 h-5 mr-3" />
            Continuar Última Lección
          </Button>
        </CardContent>
      </Card>

      {/* Recent Lessons */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Lecciones Recientes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentLessons.map((lesson) => (
            <div key={lesson.id} className="flex items-center space-x-4 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{lesson.title}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {lesson.difficulty}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {lesson.duration}
                  </div>
                </div>
                <div className="mt-2">
                  <Progress value={lesson.progress} className="h-2" />
                  <div className="text-xs text-gray-500 mt-1">{lesson.progress}% completado</div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Logros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon
              return (
                <div
                  key={achievement.id}
                  className={`text-center p-3 rounded-lg border ${
                    achievement.earned
                      ? 'bg-primary/10 border-primary/20 text-primary'
                      : 'bg-gray-50 border-gray-200 text-gray-400'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-xs font-medium">{achievement.title}</div>
                  {achievement.earned && (
                    <Star className="w-4 h-4 mx-auto mt-1 fill-current" />
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Daily Tip */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg text-primary">💡 Consejo del Día</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Recuerda siempre analizar la forma natural de las cejas antes de comenzar el trazado. 
            La simetría facial es clave para un resultado profesional.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}