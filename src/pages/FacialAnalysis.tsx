import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Camera, Upload, RotateCcw, Zap, Eye, Ruler, Palette } from 'lucide-react'

export function FacialAnalysis() {
  const [analysisMode, setAnalysisMode] = useState<'camera' | 'upload' | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analysisResults = {
    faceShape: 'Ovalado',
    eyebrowShape: 'Arqueado Natural',
    symmetry: 85,
    recommendations: [
      'Mantener la forma natural arqueada',
      'Rellenar ligeramente la cola de la ceja',
      'Definir mejor el arco natural'
    ],
    measurements: {
      eyebrowLength: '5.2 cm',
      archHeight: '0.8 cm',
      thickness: '0.4 cm',
      distance: '3.1 cm'
    }
  }

  const handleStartAnalysis = (mode: 'camera' | 'upload') => {
    setAnalysisMode(mode)
    setIsAnalyzing(true)
    
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 3000)
  }

  const resetAnalysis = () => {
    setAnalysisMode(null)
    setIsAnalyzing(false)
  }

  return (
    <div className="p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Análisis Facial</h1>
        <p className="text-gray-600">Analiza la estructura facial para mejores resultados</p>
      </div>

      {!analysisMode ? (
        /* Analysis Options */
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Iniciar Análisis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                className="w-full h-16 text-left justify-start"
                onClick={() => handleStartAnalysis('camera')}
              >
                <Camera className="w-6 h-6 mr-4" />
                <div>
                  <div className="font-semibold">Usar Cámara</div>
                  <div className="text-sm opacity-80">Análisis en tiempo real</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full h-16 text-left justify-start"
                onClick={() => handleStartAnalysis('upload')}
              >
                <Upload className="w-6 h-6 mr-4" />
                <div>
                  <div className="font-semibold">Subir Foto</div>
                  <div className="text-sm opacity-80">Analizar imagen existente</div>
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* Analysis Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">¿Qué Analizamos?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Forma Facial</div>
                    <div className="text-sm text-gray-600">Estructura ósea</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Ruler className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium">Mediciones</div>
                    <div className="text-sm text-gray-600">Proporciones</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Simetría</div>
                    <div className="text-sm text-gray-600">Balance facial</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium">Recomendaciones</div>
                    <div className="text-sm text-gray-600">Sugerencias</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* Analysis Interface */
        <div className="space-y-4">
          {/* Camera/Upload Interface */}
          <Card>
            <CardContent className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                {isAnalyzing ? (
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Analizando rostro...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      {analysisMode === 'camera' ? 'Cámara activada' : 'Imagen cargada'}
                    </p>
                  </div>
                )}
                
                {/* Analysis overlay points */}
                {!isAnalyzing && (
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full"></div>
                    <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={resetAnalysis}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reiniciar
                </Button>
                <Button className="flex-1">
                  <Zap className="w-4 h-4 mr-2" />
                  Analizar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          {!isAnalyzing && (
            <Tabs defaultValue="results" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="results">Resultados</TabsTrigger>
                <TabsTrigger value="measurements">Medidas</TabsTrigger>
                <TabsTrigger value="recommendations">Consejos</TabsTrigger>
              </TabsList>

              <TabsContent value="results" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Análisis Facial</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Forma del Rostro</span>
                      <Badge variant="secondary">{analysisResults.faceShape}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Forma de Cejas</span>
                      <Badge variant="secondary">{analysisResults.eyebrowShape}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Simetría</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${analysisResults.symmetry}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{analysisResults.symmetry}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="measurements" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Mediciones</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(analysisResults.measurements).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recommendations" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recomendaciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {analysisResults.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                            <span className="text-xs font-medium text-primary">{index + 1}</span>
                          </div>
                          <span className="text-gray-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      )}

      {/* Tips */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg text-primary">💡 Consejos para el Análisis</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Asegúrate de tener buena iluminación</li>
            <li>• Mantén el rostro centrado en la cámara</li>
            <li>• Evita expresiones faciales exageradas</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}