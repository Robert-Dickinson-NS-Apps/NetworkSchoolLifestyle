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
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold text-white mb-8 drop-shadow-lg">
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
          <p className="text-2xl text-white mb-12 max-w-4xl mx-auto drop-shadow-md">
            {t.heroSubtitle}
          </p>
          <div className="flex items-center justify-center text-xl text-white mb-8 drop-shadow-md">
            <MapPin className="mr-2 text-yellow-400" size={24} />
            Forest City, Malaysia • 15 minutes to Singapore
          </div>
          
          <div className="flex justify-center">
            <a 
              href="https://ns.com/apply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              {t.applyNow}
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-neutral mb-16">
            {t.advantagesTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Fitness */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-black/40"></div>
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Dumbbell className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.fitness.title}</h3>
                <p className="text-lg text-gray-700">
                  {t.fitness.description}
                </p>
              </CardContent>
            </Card>

            {/* Pools */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
              <img 
                src="/forest-city.png" 
                alt="Forest City" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-blue-600/20 to-black/40"></div>
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Waves className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.pools.title}</h3>
                <p className="text-lg text-gray-700">
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
              <CardContent className="p-8 relative z-10 bg-white/95 backdrop-blur-sm">
                <Utensils className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">{t.nutrition.title}</h3>
                <p className="text-lg text-gray-700">
                  {t.nutrition.description}
                </p>
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
                <p className="text-lg text-gray-700">
                  {t.globalCommunity.description}
                </p>
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