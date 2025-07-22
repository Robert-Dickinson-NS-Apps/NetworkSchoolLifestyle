import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
  Waves
} from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <GraduationCap className="text-primary mr-3" size={40} />
              <span className="text-3xl font-bold text-neutral">Network School Forest City</span>
            </div>
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
            Life After 70 in <span className="text-yellow-400">Malaysia</span>
          </h1>
          <p className="text-2xl text-white mb-12 max-w-4xl mx-auto drop-shadow-md">
            Discover the advantages of living at Network School in Forest City, Malaysia - 
            just 15 minutes across a small bridge to Singapore
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
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-neutral mb-16">
            Why Network School After 70?
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
                <h3 className="text-2xl font-bold mb-4">Burn Exercise Tent</h3>
                <p className="text-lg text-gray-700">
                  Dedicated instructor with dozens of weight equipment designed specifically for your age group. 
                  Stay strong and healthy with professional guidance.
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
                <h3 className="text-2xl font-bold mb-4">Many Pools</h3>
                <p className="text-lg text-gray-700">
                  Multiple swimming pools for exercise, therapy, and relaxation. 
                  Water activities perfect for joint health and social connection.
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
                <h3 className="text-2xl font-bold mb-4">Blueprint Food</h3>
                <p className="text-lg text-gray-700">
                  Scientifically designed nutrition plan optimized for longevity and health. 
                  Never worry about meal planning again.
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
                <h3 className="text-2xl font-bold mb-4">Morning Ruck</h3>
                <p className="text-lg text-gray-700">
                  Start every day with a group walk. Build community, stay active, 
                  and enjoy the beautiful Malaysian weather together.
                </p>
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
                <h3 className="text-2xl font-bold mb-4">Smart Younger People</h3>
                <p className="text-lg text-gray-700">
                  Get fresh perspectives on life from brilliant young minds. 
                  Learn from each other and stay mentally sharp.
                </p>
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
                <h3 className="text-2xl font-bold mb-4">AI Classes</h3>
                <p className="text-lg text-gray-700">
                  Learn about artificial intelligence in practical, easy-to-understand ways. 
                  Stay current with the future of technology.
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
                <h3 className="text-2xl font-bold mb-4">Book Classes</h3>
                <p className="text-lg text-gray-700">
                  Discuss great books with fellow lifelong learners. 
                  Expand your mind through literature and ideas.
                </p>
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
                <h3 className="text-2xl font-bold mb-4">Vibe Coding</h3>
                <p className="text-lg text-gray-700">
                  Learn new tools like vibe coding - modern programming made accessible. 
                  Create and build in the digital age.
                </p>
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
                <h3 className="text-2xl font-bold mb-4">Build Network States</h3>
                <p className="text-lg text-gray-700">
                  Help design the future by building ideas for other network states. 
                  Be part of creating tomorrow's communities.
                </p>
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
                <h3 className="text-2xl font-bold mb-4">Improv Classes</h3>
                <p className="text-lg text-gray-700">
                  Express yourself creatively through improvisational theater. 
                  Have fun while building confidence and social skills.
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
                <h3 className="text-2xl font-bold mb-4">Country Rock Night</h3>
                <p className="text-lg text-gray-700">
                  Enjoy live music and entertainment with your community. 
                  Dance, sing along, and make memories together.
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
                <h3 className="text-2xl font-bold mb-4">How to Be a Better Person</h3>
                <p className="text-lg text-gray-700">
                  Focus on personal growth and development. 
                  Learn strategies for living your best life after 70.
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
                <h3 className="text-2xl font-bold mb-4">People from All Over the World</h3>
                <p className="text-lg text-gray-700">
                  Meet fascinating people from dozens of different countries. 
                  Expand your worldview through diverse friendships.
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
                <h3 className="text-2xl font-bold mb-4">Learn Crypto & Web3</h3>
                <p className="text-lg text-gray-700">
                  Understand the future of money and the internet. 
                  Get expert guidance on digital currencies and blockchain technology.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Perfect Location</h2>
          <p className="text-2xl mb-8">
            Located in Malaysia, just across a small bridge to Singapore
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15 Minutes</div>
              <div className="text-xl">To Singapore</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Tropical</div>
              <div className="text-xl">Perfect Weather</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Modern</div>
              <div className="text-xl">Forest City</div>
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
            Forest City, Malaysia • Your next chapter starts here
          </p>
        </div>
      </footer>
    </div>
  );
}