import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Dumbbell, 
  Users,
  Bot,
  Bitcoin,
  Code,
  Book,
  Heart,
  TheaterIcon,
  Guitar,
  Utensils,
  Sun,
  Globe,
  Waves,
  Video,
  ExternalLink,
  FileText,
  Droplets,
  BookOpen,
  Lightbulb
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <GraduationCap className="text-primary mr-2" size={28} />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral dark:text-white truncate">
                {t.siteTitle}
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-5">
              <a href="#mystory" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                My Story
              </a>
              <a href="#health" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                Health
              </a>
              <a href="#learning" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                Learning
              </a>
              <a href="#community" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                Community
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                About
              </a>
              <a 
                href="mailto:robert.dickinson@gmail.com?subject=Considering%20Network%20School%20at%2070%2B" 
                className="bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
              >
                Let's Talk
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center space-x-3 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 overflow-x-auto">
            <a href="#mystory" className="text-xs text-gray-600 dark:text-gray-300 hover:text-primary whitespace-nowrap">
              My Story
            </a>
            <a href="#health" className="text-xs text-gray-600 dark:text-gray-300 hover:text-primary whitespace-nowrap">
              Health
            </a>
            <a href="#learning" className="text-xs text-gray-600 dark:text-gray-300 hover:text-primary whitespace-nowrap">
              Learning
            </a>
            <a href="#community" className="text-xs text-gray-600 dark:text-gray-300 hover:text-primary whitespace-nowrap">
              Community
            </a>
            <a href="#about" className="text-xs text-gray-600 dark:text-gray-300 hover:text-primary whitespace-nowrap">
              About
            </a>
            <a 
              href="mailto:robert.dickinson@gmail.com?subject=Considering%20Network%20School%20at%2070%2B" 
              className="text-xs text-amber-600 font-semibold whitespace-nowrap"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Personal Intro Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-amber-200 dark:border-amber-800">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:py-5">
          <div className="flex items-center gap-4">
            <img 
              src="/images/robert-dickinson.jpg" 
              alt="Robert Dickinson"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-amber-400 flex-shrink-0"
            />
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold">I'm Robert Dickinson, 70 years old</span>, living long-term at Network School in Forest City, Malaysia. I attended for 100 days in 2025 and probably at least 120 days in 2026. Most residents here are in their 20s and 30s—ambitious builders, coders, and entrepreneurs. <span className="text-amber-700 dark:text-amber-400 font-medium">Here's why I love being part of this community.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-8 sm:py-12 overflow-hidden min-h-[50vh] sm:min-h-[60vh] flex items-center">
        <img 
          src="/images/ns-beach.png" 
          alt="Network School Beach at Forest City Malaysia" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg leading-tight">
            {t.heroTitle.includes('Network School') ? (
              <>
                {t.heroTitle.split('Network School')[0]}
                <span className="text-yellow-400">Network School</span>
                {t.heroTitle.split('Network School')[1]}
              </>
            ) : (
              t.heroTitle
            )}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto drop-shadow-md leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="flex items-center justify-center text-base sm:text-lg lg:text-xl text-white mb-8 drop-shadow-md">
            <MapPin className="mr-2 text-yellow-400" size={20} />
            <span className="text-center">Forest City, Malaysia • 15 minutes to Singapore</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="https://ns.com/apply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] flex items-center justify-center"
            >
              Visit for a Month & See for Yourself
            </a>
            <a 
              href="mailto:robert.dickinson@gmail.com?subject=Considering%20Network%20School%20at%2070%2B" 
              className="bg-amber-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] flex items-center justify-center"
            >
              Considering Something Different? Let's Talk
            </a>
          </div>
        </div>
      </section>

      {/* Intergenerational Magic Section */}
      <section id="mystory" className="py-12 sm:py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral dark:text-white mb-3">
              What I've Learned from My Young Neighbors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The magic of Network School isn't just the facilities—it's living and learning alongside brilliant people of all ages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white dark:bg-gray-800 shadow-lg p-6">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-lg font-bold text-neutral dark:text-white mb-2">What I Learn from My Young Neighbors</h3>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "What I learn from people 50, 40, and sometimes 60 years younger is how exciting it is to be alive, learning and creating with artistry and passion."
              </p>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 shadow-lg p-6">
              <div className="text-4xl mb-4">👧</div>
              <h3 className="text-lg font-bold text-neutral dark:text-white mb-2">From Kids Under 10</h3>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The children here are amazing vibe coders. They approach technology without fear. Watching them reminds me that learning should be playful, not stressful."
              </p>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 shadow-lg p-6">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-lg font-bold text-neutral dark:text-white mb-2">From the Morning Ruck Crew</h3>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Walking with startup founders half my age before 8am. They get my life experience; I get their energy. We solve problems together while the sun rises."
              </p>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              At 70, I'm not here to retire—I'm here to learn, create, and contribute. The intergenerational mix makes every day an adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Health & Fitness Section */}
      <section id="health" className="py-12 sm:py-16 bg-white dark:bg-gray-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral dark:text-white mb-2">
              Health & Fitness
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Stay active with world-class facilities</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Fitness */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden min-h-[280px] sm:min-h-[320px] transform hover:scale-105">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-black/40"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Dumbbell className="text-primary mb-3 sm:mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">{t.fitness.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.fitness.description}
                </p>
              </CardContent>
            </Card>

            {/* Pools */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden min-h-[280px] sm:min-h-[320px] transform hover:scale-105">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-blue-600/20 to-black/40"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Waves className="text-primary mb-3 sm:mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">{t.pools.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.pools.description}
                </p>
              </CardContent>
            </Card>

            {/* Nutrition */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-black/40"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Utensils className="text-primary mb-3 sm:mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.nutrition.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {t.nutrition.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.open('https://blueprint.bryanjohnson.com/?srsltid=AfmBOoqip8tEuQqYEOIO-UcAR6M0FbjbMaMoYKUo3DsFcJutb_cLvexq', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Learn Blueprint Protocol
                </Button>
              </CardContent>
            </Card>

            {/* Morning Ruck */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/forest-city.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Sun className="text-secondary mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.morningRuck.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {t.morningRuck.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-secondary hover:bg-secondary/90 text-white"
                  onClick={() => window.open('https://nsmorningruck.com/', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Join Morning Ruck
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning & Growth Section */}
      <section id="learning" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral dark:text-white mb-2">
              Learning & Growth
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Expand your mind with new skills and knowledge</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Smart Young People */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/forest-city.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Users className="text-secondary mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.smartYoungPeople.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {t.smartYoungPeople.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-secondary hover:bg-secondary/90 text-white"
                  onClick={() => window.open('https://balajis.com/p/network-school-fellowship', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Learn About Fellowship
                </Button>
              </CardContent>
            </Card>

            {/* AI Classes */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/forest-city.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Bot className="text-secondary mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.aiClasses.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                  {t.aiClasses.description}
                </p>
              </CardContent>
            </Card>

            {/* Book Classes */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/forest-city.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Book className="text-accent mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.bookClubs.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {t.bookClubs.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    className="bg-accent hover:bg-accent/90 text-white"
                    onClick={() => window.open('https://thenetworkstate.com/', '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Read The Network State
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => window.open('https://heinlein-chronicles.lovable.app', '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Heinlein Chronicles
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Vibe Coding */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/forest-city.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Code className="text-accent mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.coding.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {t.coding.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    className="bg-accent hover:bg-accent/90 text-white"
                    onClick={() => window.open('https://pudgypenguinpaddleplanets.com/', '_blank')}
                    title="A game I built for the Pengu coin community"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Pengu Coin Game
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-cyan-600 hover:bg-cyan-700 text-white"
                    onClick={() => window.open('https://pudgy-water-flow.lovable.app', '_blank')}
                    title="An Antarctic penguin water simulation"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Antarctic Penguins
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social & Community Section */}
      <section id="community" className="py-12 sm:py-16 bg-white dark:bg-gray-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral dark:text-white mb-2">
              Social & Community
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Connect with people from around the world</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Network States */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/forest-city.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Globe className="text-accent mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.networkStates.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {t.networkStates.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => window.open('https://yournetworkstate.com/', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Your Network State
                </Button>
              </CardContent>
            </Card>

            {/* Improv Classes */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/forest-city.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <TheaterIcon className="text-primary mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.improv.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                  {t.improv.description}
                </p>
              </CardContent>
            </Card>

            {/* Country Rock Night */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/forest-city.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Guitar className="text-primary mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.countryRock.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                  {t.countryRock.description}
                </p>
              </CardContent>
            </Card>

            {/* Better Person */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/forest-city.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Heart className="text-primary mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.betterPerson.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                  {t.betterPerson.description}
                </p>
              </CardContent>
            </Card>

            {/* Global Community */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/forest-city.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Users className="text-secondary mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.globalCommunity.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {t.globalCommunity.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    className="bg-secondary hover:bg-secondary/90 text-white"
                    onClick={() => window.open('https://nsvibecodingasiarainfall.com/', '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Explore Global Community
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://gator-village-spark.lovable.app', '_blank')}
                    title="My grad school married housing - reminds me of NS community living"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Grad School Memories
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Crypto & Web3 */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <img 
                src="/images/solana-outpost.png" 
                alt="Solana Network State Outpost at Network School" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Bitcoin className="text-secondary mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.cryptoWeb3.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                  {t.cryptoWeb3.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation & Future Section */}
      <section id="innovation" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral dark:text-white mb-2">
              Innovation & Future
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Be part of building the future</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Video Creation */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-pink-600/20 to-black/40"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Video className="text-red-600 mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.videoCreation.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                  {t.videoCreation.description}
                </p>
              </CardContent>
            </Card>

            {/* Sponge City */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-600/20 to-black/40"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Droplets className="text-blue-600 mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.spongeCity.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {t.spongeCity.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://boards.autodesk.com/icm', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Learn About ICM
                </Button>
              </CardContent>
            </Card>

            {/* Lifelong Learning */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-indigo-600/20 to-black/40"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <BookOpen className="text-purple-600 mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.lifelongLearning.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {t.lifelongLearning.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open('https://hardy-ramanujan-1729.lovable.app', '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Explore Math Games
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    onClick={() => window.open('https://mirror-pix-app.lovable.app', '_blank')}
                    title="Exploring 1729 - Ramanujan's famous taxicab number"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    1729 Ramanujan
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Idea Factory */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-orange-600/20 to-black/40"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Lightbulb className="text-yellow-600 mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{t.ideaFactory.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                  {t.ideaFactory.description}
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-12 sm:py-16 bg-white dark:bg-gray-800 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral dark:text-white mb-2">
              About the Creator
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/images/robert-dickinson.jpg" 
                alt="Robert Dickinson"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover shadow-lg border-4 border-primary"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral dark:text-white mb-2">
                Robert Dickinson
              </h3>
              <p className="text-primary font-medium mb-4">
                Autodesk Technologist | 50+ Years in Water Infrastructure | Network School Participant
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I attended Network School at Forest City for 70 days, coinciding with my 70th birthday. With over 50 years of experience in water infrastructure modeling (SWMM) and 20+ years at Autodesk/Innovyze, I created this website to share why it's beneficial to learn and exercise at Network School after age 70.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                My experience here has been transformative - engaging in learning, fitness, and connecting with smart young builders from around the world. Network School proves that lifelong learning has no age limit.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a 
                  href="https://x.com/RDickinson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/robertdickinson/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a 
                  href="https://swmm5.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People to Follow on X */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral dark:text-white mb-2">
              People to Follow on X
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Want to see Network School life in real-time? Follow these amazing people:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://x.com/nikkideyy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <div className="text-4xl mb-3">📸</div>
              <h3 className="font-bold text-lg text-neutral dark:text-white group-hover:text-primary transition-colors">@nikkideyy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">NS Life IRL - See daily life at Network School</p>
            </a>
            
            <a 
              href="https://x.com/rami_decodes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-bold text-lg text-neutral dark:text-white group-hover:text-primary transition-colors">@rami_decodes</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Vibe Coding - Learn how we build at NS</p>
            </a>
            
            <a 
              href="https://x.com/James_of_Arc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-bold text-lg text-neutral dark:text-white group-hover:text-primary transition-colors">@James_of_Arc</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Future Network States - Insights on what's next</p>
            </a>
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">{t.perfectLocation}</h2>
          <p className="text-2xl mb-8">
            {t.locationDescription}
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{t.minutes}</div>
              <div className="text-xl">{t.toSingapore}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{t.tropical}</div>
              <div className="text-xl">{t.perfectWeather}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{t.modern}</div>
              <div className="text-xl">{t.forestCity}</div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-neutral text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="mr-3" size={32} />
            <span className="text-2xl font-bold">Network School</span>
          </div>
          <p className="text-lg text-gray-300">
            {t.footerDescription}
          </p>
        </div>
      </footer>
    </div>
  );
}