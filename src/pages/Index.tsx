
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Activity, Shield, Code, Github, FileText, Mail, CheckCircle, ArrowRight, Stethoscope, Users, Zap } from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    chestPain: '',
    bloodPressure: '',
    cholesterol: '',
    bloodSugar: '',
    restingECG: '',
    maxHeartRate: '',
    exerciseAngina: '',
    stDepression: '',
    slope: '',
    majorVessels: '',
    thalassemia: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePredict = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPrediction({
        risk: Math.random() > 0.5 ? 'Low Risk' : 'High Risk',
        confidence: Math.floor(Math.random() * 20 + 80)
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">HeartDiseaseAPI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors">Demo</a>
              <a href="#docs" className="text-gray-600 hover:text-blue-600 transition-colors">API Docs</a>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-8">
              <Stethoscope className="h-4 w-4 mr-2" />
              AI-Powered Health Prediction
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Predict Heart Disease Early.
              <span className="text-blue-600 block">Empower Preventive Care</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform healthcare with our advanced AI-powered API. Get instant heart disease risk predictions 
              based on comprehensive health data analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Documentation
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
                <p className="text-gray-600 text-sm">Get predictions in under 100ms</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">99.9% Accuracy</h3>
                <p className="text-gray-600 text-sm">Trained on 500K+ medical records</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrate heart disease prediction into your application with just three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle className="text-xl mb-4">Register & Authenticate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sign up for your free API key and authenticate your application with our secure endpoints.
                </p>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">
                  GET /api/v1/auth
                </code>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle className="text-xl mb-4">Submit Health Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Send patient health metrics including age, blood pressure, cholesterol, and other key indicators.
                </p>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">
                  POST /api/v1/predict
                </code>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <CardTitle className="text-xl mb-4">Get Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Receive comprehensive risk assessment with confidence scores and actionable insights.
                </p>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">
                  {"{ risk: 'low', confidence: 94% }"}
                </code>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Try Our Live Demo
            </h2>
            <p className="text-xl text-gray-600">
              Experience the power of our API with real-time heart disease risk prediction
            </p>
          </div>
          
          <Card className="p-8 shadow-xl border-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Patient Health Data</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter age"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="sex">Sex</Label>
                      <Select value={formData.sex} onValueChange={(value) => handleInputChange('sex', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select sex" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bp">Blood Pressure</Label>
                      <Input
                        id="bp"
                        type="number"
                        placeholder="e.g. 120"
                        value={formData.bloodPressure}
                        onChange={(e) => handleInputChange('bloodPressure', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cholesterol">Cholesterol</Label>
                      <Input
                        id="cholesterol"
                        type="number"
                        placeholder="e.g. 200"
                        value={formData.cholesterol}
                        onChange={(e) => handleInputChange('cholesterol', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="chest-pain">Chest Pain Type</Label>
                    <Select value={formData.chestPain} onValueChange={(value) => handleInputChange('chestPain', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select chest pain type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="typical">Typical Angina</SelectItem>
                        <SelectItem value="atypical">Atypical Angina</SelectItem>
                        <SelectItem value="non-anginal">Non-Anginal Pain</SelectItem>
                        <SelectItem value="asymptomatic">Asymptomatic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="max-hr">Max Heart Rate</Label>
                      <Input
                        id="max-hr"
                        type="number"
                        placeholder="e.g. 150"
                        value={formData.maxHeartRate}
                        onChange={(e) => handleInputChange('maxHeartRate', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="exercise-angina">Exercise Angina</Label>
                      <Select value={formData.exerciseAngina} onValueChange={(value) => handleInputChange('exerciseAngina', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    onClick={handlePredict} 
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                  >
                    {isLoading ? (
                      <>
                        <Activity className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Heart className="mr-2 h-4 w-4" />
                        Predict Heart Disease Risk
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Prediction Results</h3>
                {prediction ? (
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${prediction.risk === 'Low Risk' ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'}`}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">{prediction.risk}</span>
                        <CheckCircle className={`h-6 w-6 ${prediction.risk === 'Low Risk' ? 'text-green-600' : 'text-red-600'}`} />
                      </div>
                      <p className="text-sm mt-2">Confidence: {prediction.confidence}%</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-medium mb-2">API Response:</h4>
                      <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
{`{
  "risk_level": "${prediction.risk.toLowerCase().replace(' ', '_')}",
  "confidence": ${prediction.confidence},
  "factors": ["age", "cholesterol", "blood_pressure"],
  "recommendations": ["regular_exercise", "diet_modification"]
}`}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Fill out the form and click "Predict" to see results</p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* API Documentation Preview */}
      <section id="docs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Developer-Friendly API
            </h2>
            <p className="text-xl text-gray-600">
              Simple integration with comprehensive documentation and code examples
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5 text-blue-600" />
                  Quick Start Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X POST "https://api.heartdisease.ai/v1/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "age": 45,
    "sex": "male",
    "chest_pain_type": "typical",
    "blood_pressure": 130,
    "cholesterol": 250,
    "blood_sugar": 0,
    "max_heart_rate": 150,
    "exercise_angina": 0
  }'`}
                </pre>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-600" />
                  Response Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "status": "success",
  "data": {
    "risk_level": "low",
    "confidence": 94.2,
    "risk_score": 0.12,
    "factors": {
      "age": "normal",
      "cholesterol": "elevated",
      "blood_pressure": "normal"
    },
    "recommendations": [
      "Regular cardiovascular exercise",
      "Monitor cholesterol levels"
    ]
  }
}`}
                </pre>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="mr-4">
              <FileText className="mr-2 h-5 w-5" />
              Full API Documentation
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers and healthcare innovators using our API to build better health solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Start Free Tier
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Contact Sales
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            ✓ 10,000 free predictions/month &nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp; ✓ 24/7 support
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">HeartDiseaseAPI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering healthcare innovation with AI-powered heart disease prediction.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  API Docs
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 HeartDiseaseAPI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
