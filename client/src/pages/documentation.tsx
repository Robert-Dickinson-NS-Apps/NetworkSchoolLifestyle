import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { 
  Code, 
  FileText, 
  Github, 
  Globe, 
  Palette, 
  Database,
  Server,
  Smartphone,
  ExternalLink,
  BookOpen,
  Settings
} from "lucide-react";

export default function Documentation() {
  const { t } = useLanguage();

  const techStack = [
    { name: "React 18", description: "Frontend framework with TypeScript", icon: Code },
    { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: Palette },
    { name: "shadcn/ui", description: "Beautiful UI components", icon: Settings },
    { name: "Wouter", description: "Lightweight client-side routing", icon: Globe },
    { name: "Express.js", description: "Backend API server", icon: Server },
    { name: "PostgreSQL", description: "Database with Drizzle ORM", icon: Database },
    { name: "Vite", description: "Build tool and development server", icon: FileText },
    { name: "TanStack Query", description: "Server state management", icon: Smartphone }
  ];

  const features = [
    "Multilingual support (13 languages)",
    "Responsive design for all devices", 
    "Dark/light theme switching",
    "Contact form with database storage",
    "Newsletter subscription system",
    "External resource links",
    "SEO optimized",
    "Performance optimized"
  ];

  const sourceFiles = [
    {
      name: "App.tsx",
      description: "Main application component with routing",
      path: "client/src/App.tsx",
      lines: 30
    },
    {
      name: "home.tsx", 
      description: "Main landing page with all content",
      path: "client/src/pages/home.tsx",
      lines: 500
    },
    {
      name: "i18n.ts",
      description: "Translation system with 13 languages",
      path: "client/src/lib/i18n.ts", 
      lines: 1200
    },
    {
      name: "schema.ts",
      description: "Database schema and validation",
      path: "shared/schema.ts",
      lines: 50
    },
    {
      name: "routes.ts",
      description: "Backend API endpoints",
      path: "server/routes.ts",
      lines: 100
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Network School Documentation</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-sm">
              Version 2.0
            </Badge>
            <Link href="/">
              <Button variant="outline" size="sm">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="source">Source Code</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Project Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Network School Forest City website showcases lifestyle and amenities for people aged 70+ 
                  in Forest City, Malaysia. The site highlights 14 unique features and advantages of living 
                  at the Network School with comprehensive multilingual support.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Target Audience</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Adults aged 70+</li>
                      <li>• International community</li>
                      <li>• Lifelong learners</li>
                      <li>• Health-conscious seniors</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Goals</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Showcase lifestyle advantages</li>
                      <li>• Enable campus visit bookings</li>
                      <li>• Provide multilingual accessibility</li>
                      <li>• Connect to external resources</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <tech.icon className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">{tech.name}</h4>
                        <p className="text-xs text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Website Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>14 Lifestyle Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <Badge variant="secondary">State-of-the-Art Fitness</Badge>
                  <Badge variant="secondary">Beautiful Swimming Pools</Badge>
                  <Badge variant="secondary">Blueprint Food Nutrition</Badge>
                  <Badge variant="secondary">Morning Ruck Walks</Badge>
                  <Badge variant="secondary">Smart Young People</Badge>
                  <Badge variant="secondary">AI Classes</Badge>
                  <Badge variant="secondary">Book Classes</Badge>
                  <Badge variant="secondary">Vibe Coding</Badge>
                  <Badge variant="secondary">Network States</Badge>
                  <Badge variant="secondary">Improv Classes</Badge>
                  <Badge variant="secondary">Country Rock Nights</Badge>
                  <Badge variant="secondary">Global Community</Badge>
                  <Badge variant="secondary">Crypto & Web3</Badge>
                  <Badge variant="secondary">Video Creation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Supported Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <Badge variant="outline">English</Badge>
                  <Badge variant="outline">Spanish</Badge>
                  <Badge variant="outline">Chinese</Badge>
                  <Badge variant="outline">French</Badge>
                  <Badge variant="outline">German</Badge>
                  <Badge variant="outline">Japanese</Badge>
                  <Badge variant="outline">Korean</Badge>
                  <Badge variant="outline">Portuguese</Badge>
                  <Badge variant="outline">Italian</Badge>
                  <Badge variant="outline">Dutch</Badge>
                  <Badge variant="outline">Thai</Badge>
                  <Badge variant="outline">Indonesian</Badge>
                  <Badge variant="outline">Russian</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Source Code Tab */}
          <TabsContent value="source" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Github className="h-5 w-5" />
                  <span>Source Files</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sourceFiles.map((file, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Code className="h-4 w-4 text-primary" />
                          <h4 className="font-medium">{file.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {file.lines} lines
                          </Badge>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(`/api/source/${file.path}`, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{file.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{file.path}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Components</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <strong>LanguageContext.tsx</strong> - Manages language switching and translations
                  </div>
                  <Separator />
                  <div className="text-sm">
                    <strong>ThemeContext.tsx</strong> - Handles dark/light theme switching
                  </div>
                  <Separator />
                  <div className="text-sm">
                    <strong>LanguageSelector.tsx</strong> - Language dropdown component
                  </div>
                  <Separator />
                  <div className="text-sm">
                    <strong>queryClient.ts</strong> - TanStack Query configuration
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Code className="h-4 w-4 mr-2 text-blue-500" />
                      Frontend
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• React 18 with TypeScript</li>
                      <li>• Wouter routing</li>
                      <li>• shadcn/ui components</li>
                      <li>• Tailwind CSS styling</li>
                      <li>• TanStack Query</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Server className="h-4 w-4 mr-2 text-green-500" />
                      Backend
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Express.js server</li>
                      <li>• TypeScript runtime</li>
                      <li>• RESTful API design</li>
                      <li>• Zod validation</li>
                      <li>• Hot reload with tsx</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Database className="h-4 w-4 mr-2 text-purple-500" />
                      Database
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• PostgreSQL (Neon)</li>
                      <li>• Drizzle ORM</li>
                      <li>• Type-safe queries</li>
                      <li>• Migration support</li>
                      <li>• Schema validation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                    <span>User interacts with React components</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                    <span>Form validation with Zod schemas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                    <span>TanStack Query handles API requests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                    <span>Express routes process requests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">5</div>
                    <span>Drizzle ORM stores data in PostgreSQL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">6</div>
                    <span>Success/error feedback via toast notifications</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}