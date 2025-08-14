import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

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
  ExternalLink
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <GraduationCap className="text-primary mr-3" size={40} />
              <span className="text-3xl font-bold text-neutral">{t.siteTitle}</span>
            </div>
            <LanguageSelector />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <img 
          src="/forest-city.png" 
          alt="Forest City Malaysia" 
          className="absolute inset-0 w-full h-full object-cover animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 shimmer-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold text-white mb-8 text-glow animate-fade-in-up">
            {t.heroTitle.includes('Network School') ? (
              <>
                {t.heroTitle.split('Network School')[0]}
                <span className="text-gradient animate-pulse">Network School</span>
                {t.heroTitle.split('Network School')[1]}
              </>
            ) : (
              t.heroTitle
            )}
          </h1>
          <p className="text-2xl text-white mb-12 max-w-4xl mx-auto text-glow animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {t.heroSubtitle}
          </p>
          <div className="flex items-center justify-center text-xl text-white mb-8 text-glow animate-fade-in-up animate-float" style={{animationDelay: '0.4s'}}>
            <MapPin className="mr-2 text-yellow-400 animate-pulse" size={24} />
            Forest City, Malaysia • 15 minutes to Singapore
          </div>
          
          <div className="flex justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="https://ns.com/apply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gradient-primary text-white px-12 py-6 rounded-xl text-2xl font-bold card-hover-effect animate-pulse-glow shadow-2xl text-glow"
            >
              <Calendar className="inline mr-3 animate-bounce" size={28} />
              {t.applyNow}
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-neutral mb-16 text-gradient animate-fade-in-up">
            {t.advantagesTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Fitness */}
            <Card className="h-full shadow-lg card-hover-effect relative overflow-hidden min-h-[300px] animate-fade-in-up group" style={{animationDelay: '0.1s'}}>
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-black/40 group-hover:from-blue-500/40 group-hover:via-purple-500/30 transition-all duration-500"></div>
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm group-hover:bg-white/98 transition-all duration-300">
                <Dumbbell className="text-primary mb-4 animate-float" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-gradient">{t.fitness.title}</h3>
                <p className="text-lg text-gray-700">
                  {t.fitness.description}
                </p>
              </CardContent>
            </Card>

            {/* Pools */}
            <Card className="h-full shadow-lg card-hover-effect relative overflow-hidden min-h-[300px] animate-fade-in-up group" style={{animationDelay: '0.2s'}}>
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-blue-600/20 to-black/40 group-hover:from-green-500/40 group-hover:via-blue-500/30 transition-all duration-500"></div>
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm group-hover:bg-white/98 transition-all duration-300">
                <Waves className="text-primary mb-4 animate-float" size={48} style={{animationDelay: '0.5s'}} />
                <h3 className="text-2xl font-bold mb-4 text-gradient">{t.pools.title}</h3>
                <p className="text-lg text-gray-700">
                  {t.pools.description}
                </p>
              </CardContent>
            </Card>

            {/* Nutrition */}
            <Card className="h-full shadow-lg card-hover-effect relative overflow-hidden min-h-[300px] animate-fade-in-up group" style={{animationDelay: '0.3s'}}>
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-black/40 group-hover:from-purple-500/40 group-hover:via-pink-500/30 transition-all duration-500"></div>
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm group-hover:bg-white/98 transition-all duration-300">
                <Utensils className="text-primary mb-4 animate-float" size={48} style={{animationDelay: '1s'}} />
                <h3 className="text-2xl font-bold mb-4 text-gradient">{t.nutrition.title}</h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t.nutrition.description}
                </p>
                <Button 
                  size="sm" 
                  className="gradient-primary text-white card-hover-effect animate-pulse shadow-lg"
                  onClick={() => window.open('https://blueprint.bryanjohnson.com/?srsltid=AfmBOoqip8tEuQqYEOIO-UcAR6M0FbjbMaMoYKUo3DsFcJutb_cLvexq', '_blank')}
                >
                  <ExternalLink className="mr-2 animate-pulse" size={16} />
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Sun className="text-secondary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.morningRuck.title}</h3>
                <p className="text-lg text-gray-700 mb-4">
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Users className="text-secondary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.smartYoungPeople.title}</h3>
                <p className="text-lg text-gray-700 mb-4">
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Bot className="text-secondary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.aiClasses.title}</h3>
                <p className="text-lg text-gray-700">
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Book className="text-accent mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.bookClubs.title}</h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t.bookClubs.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => window.open('https://thenetworkstate.com/', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Read The Network State
                </Button>
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Code className="text-accent mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.coding.title}</h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t.coding.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => window.open('https://pudgypenguinpaddleplanets.com/', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Try Vibe Coding
                </Button>
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Globe className="text-accent mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.networkStates.title}</h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t.networkStates.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => window.open('https://yournetworkstate.com/', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Learn More
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <TheaterIcon className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.improv.title}</h3>
                <p className="text-lg text-gray-700">
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Guitar className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.countryRock.title}</h3>
                <p className="text-lg text-gray-700">
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Heart className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.betterPerson.title}</h3>
                <p className="text-lg text-gray-700">
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Users className="text-secondary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.globalCommunity.title}</h3>
                <p className="text-lg text-gray-700 mb-4">
                  {t.globalCommunity.description}
                </p>
                <Button 
                  size="sm" 
                  className="bg-secondary hover:bg-secondary/90 text-white"
                  onClick={() => window.open('https://nsvibecodingasiarainfall.com/', '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Explore Global Community
                </Button>
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Bitcoin className="text-secondary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.cryptoWeb3.title}</h3>
                <p className="text-lg text-gray-700">
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Video className="text-red-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.videoCreation.title}</h3>
                <p className="text-lg text-gray-700">
                  {t.videoCreation.description}
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-20 gradient-rainbow text-white relative overflow-hidden">
        <div className="absolute inset-0 shimmer-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-glow animate-fade-in-up">{t.perfectLocation}</h2>
          <p className="text-2xl mb-8 text-glow animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {t.locationDescription}
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up card-hover-effect bg-white/10 backdrop-blur-sm rounded-xl p-6" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold mb-2 animate-float text-glow">{t.minutes}</div>
              <div className="text-xl">{t.toSingapore}</div>
            </div>
            <div className="animate-fade-in-up card-hover-effect bg-white/10 backdrop-blur-sm rounded-xl p-6" style={{animationDelay: '0.4s'}}>
              <div className="text-5xl font-bold mb-2 animate-float text-glow" style={{animationDelay: '0.5s'}}>{t.tropical}</div>
              <div className="text-xl">{t.perfectWeather}</div>
            </div>
            <div className="animate-fade-in-up card-hover-effect bg-white/10 backdrop-blur-sm rounded-xl p-6" style={{animationDelay: '0.5s'}}>
              <div className="text-5xl font-bold mb-2 animate-float text-glow" style={{animationDelay: '1s'}}>{t.modern}</div>
              <div className="text-xl">{t.forestCity}</div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-neutral text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 shimmer-bg opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-4 animate-fade-in-up">
            <GraduationCap className="mr-3 animate-float" size={32} />
            <span className="text-2xl font-bold text-glow">Network School</span>
          </div>
          <p className="text-lg text-gray-300 animate-fade-in-up text-glow" style={{animationDelay: '0.2s'}}>
            {t.footerDescription}
          </p>
        </div>
      </footer>
    </div>
  );
}