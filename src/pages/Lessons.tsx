import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Play, Lock, CheckCircle, Clock, Star, BookOpen } from 'lucide-react'

export function Lessons() {
  const lessonCategories = [
    {
      id: 'basics',
      title: 'Fundamentos',
      lessons: [
        {
          id: 1,
          title: 'Introducción al Microblading',
          duration: '30 min',
          difficulty: 'Básico',
          completed: true,
          locked: false,
          rating: 4.8,
          description: 'Aprende los conceptos básicos del microblading y las herramientas necesarias.'
        },
        {
          id: 2,
          title: 'Anatomía de las Cejas',
          duration: '45 min',
          difficulty: 'Básico',
          completed: true,
          locked: false,
          rating: 4.9,
          description: 'Comprende la estructura y anatomía de las cejas para mejores resultados.'
        },
        {
          id: 3,
          title: 'Higiene y Seguridad',
          duration: '25 min',
          difficulty: 'Básico',
          completed: false,
          locked: false,
          rating: 4.7,
          description: 'Protocolos de seguridad e higiene esenciales en microblading.'
        }
      ]
    },
    {
      id: 'techniques',
      title: 'Técnicas',
      lessons: [
        {
          id: 4,
          title: 'Técnicas de Trazado',
          duration: '60 min',
          difficulty: 'Intermedio',
          completed: false,
          locked: false,
          rating: 4.6,
          description: 'Domina las técnicas de trazado para crear cejas naturales.'
        },
        {
          id: 5,
          title: 'Manejo de la Herramienta',
          duration: '50 min',
          difficulty: 'Intermedio',
          completed: false,
          locked: false,
          rating: 4.8,
          description: 'Aprende el manejo correcto de las herramientas de microblading.'
        },
        {
          id: 6,
          title: 'Técnicas Avanzadas',
          duration: '75 min',
          difficulty: 'Avanzado',
          completed: false,
          locked: true,
          rating: 4.9,
          description: 'Técnicas avanzadas para casos complejos y efectos especiales.'
        }
      ]
    },
    {
      id: 'practice',
      title: 'Práctica',
      lessons: [
        {
          id: 7,
          title: 'Práctica en Piel Sintética',
          duration: '90 min',
          difficulty: 'Intermedio',
          completed: false,
          locked: true,
          rating: 4.7,
          description: 'Practica tus habilidades en piel sintética antes del trabajo real.'
        },
        {
          id: 8,
          title: 'Casos de Estudio',
          duration: '120 min',
          difficulty: 'Avanzado',
          completed: false,
          locked: true,
          rating: 4.8,
          description: 'Analiza casos reales y aprende de diferentes tipos de cejas.'
        }
      ]
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Básico': return 'bg-green-100 text-green-800'
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800'
      case 'Avanzado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Lecciones</h1>
        <p className="text-gray-600">Aprende microblading paso a paso</p>
      </div>

      {/* Progress Overview */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Tu Progreso</h3>
            <span className="text-sm font-medium text-primary">3 de 8 lecciones</span>
          </div>
          <Progress value={37.5} className="h-3 mb-2" />
          <p className="text-sm text-gray-600">¡Sigue así! Has completado el 37.5% del curso</p>
        </CardContent>
      </Card>

      {/* Lesson Categories */}
      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basics">Fundamentos</TabsTrigger>
          <TabsTrigger value="techniques">Técnicas</TabsTrigger>
          <TabsTrigger value="practice">Práctica</TabsTrigger>
        </TabsList>

        {lessonCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-4 mt-6">
            {category.lessons.map((lesson) => (
              <Card key={lesson.id} className={`transition-all duration-200 ${
                lesson.locked ? 'opacity-60' : 'hover:shadow-md'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    {/* Lesson Icon */}
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      lesson.completed 
                        ? 'bg-green-100 text-green-600' 
                        : lesson.locked 
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {lesson.completed ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : lesson.locked ? (
                        <Lock className="w-6 h-6" />
                      ) : (
                        <BookOpen className="w-6 h-6" />
                      )}
                    </div>

                    {/* Lesson Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 truncate">{lesson.title}</h3>
                        {!lesson.locked && (
                          <Button 
                            size="sm" 
                            className="ml-2 shrink-0"
                            variant={lesson.completed ? "outline" : "default"}
                          >
                            <Play className="w-4 h-4 mr-1" />
                            {lesson.completed ? 'Revisar' : 'Iniciar'}
                          </Button>
                        )}
                      </div>

                      <p className="text-sm text-gray-600 mb-3">{lesson.description}</p>

                      <div className="flex items-center space-x-3 text-sm">
                        <Badge className={getDifficultyColor(lesson.difficulty)}>
                          {lesson.difficulty}
                        </Badge>
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {lesson.duration}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                          {lesson.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      {/* Study Tips */}
      <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
        <CardHeader>
          <CardTitle className="text-lg text-secondary">📚 Consejos de Estudio</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Practica cada técnica al menos 3 veces antes de continuar</li>
            <li>• Toma notas durante las lecciones para repasar después</li>
            <li>• Usa el análisis facial antes de cada práctica</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}