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
        <nav className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <GraduationCap className="text-primary mr-2 sm:mr-3" size={32} />
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral dark:text-white truncate">
                {t.siteTitle}
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/docs" className="hidden sm:block">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Documentation</span>
                </Button>
              </Link>
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative py-8 sm:py-12 overflow-hidden min-h-[50vh] sm:min-h-[60vh] flex items-center">
        <img 
          src="/forest-city.png" 
          alt="Forest City Malaysia" 
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
          
          <div className="flex justify-center">
            <a 
              href="https://ns.com/apply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] flex items-center justify-center"
            >
              {t.applyNow}
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-12 sm:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-neutral dark:text-white mb-8 sm:mb-16 leading-tight">
            {t.advantagesTitle}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Fitness */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden min-h-[280px] sm:min-h-[320px] transform hover:scale-105">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-black/40"></div>
              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Dumbbell className="text-primary mb-3 sm:mb-4" size={36} />
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
                <Waves className="text-primary mb-3 sm:mb-4" size={36} />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">{t.pools.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.pools.description}
                </p>
              </CardContent>
            </Card>

            {/* Nutrition */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-black/40"></div>
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Utensils className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.nutrition.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
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
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Sun className="text-secondary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.morningRuck.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
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

            {/* Smart Young People */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Users className="text-secondary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.smartYoungPeople.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
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
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Bot className="text-secondary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.aiClasses.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {t.aiClasses.description}
                </p>
              </CardContent>
            </Card>

            {/* Book Classes */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Book className="text-accent mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.bookClubs.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
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
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Code className="text-accent mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.coding.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {t.coding.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    className="bg-accent hover:bg-accent/90 text-white"
                    onClick={() => window.open('https://pudgypenguinpaddleplanets.com/', '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Pudgy Penguin Game
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-cyan-600 hover:bg-cyan-700 text-white"
                    onClick={() => window.open('https://pudgy-water-flow.lovable.app', '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Pudgy Water Flow
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Network States */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Globe className="text-accent mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.networkStates.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
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
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <TheaterIcon className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.improv.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {t.improv.description}
                </p>
              </CardContent>
            </Card>

            {/* Country Rock Night */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Guitar className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.countryRock.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {t.countryRock.description}
                </p>
              </CardContent>
            </Card>

            {/* Better Person */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Heart className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.betterPerson.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {t.betterPerson.description}
                </p>
              </CardContent>
            </Card>

            {/* Global Community */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Users className="text-secondary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.globalCommunity.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
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
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Gator Village
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Crypto & Web3 */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
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
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Bitcoin className="text-secondary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.cryptoWeb3.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {t.cryptoWeb3.description}
                </p>
              </CardContent>
            </Card>

            {/* Video Creation */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-pink-600/20 to-black/40"></div>
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Video className="text-red-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.videoCreation.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {t.videoCreation.description}
                </p>
              </CardContent>
            </Card>

            {/* Sponge City */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-600/20 to-black/40"></div>
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Droplets className="text-blue-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.spongeCity.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
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
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-indigo-600/20 to-black/40"></div>
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <BookOpen className="text-purple-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.lifelongLearning.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
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
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Pi Machine
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Idea Factory */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-orange-600/20 to-black/40"></div>
              <CardContent className="p-8 relative z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                <Lightbulb className="text-yellow-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.ideaFactory.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {t.ideaFactory.description}
                </p>
              </CardContent>
            </Card>

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