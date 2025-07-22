import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm, NewsletterForm } from "@/components/contact-form";
import { 
  GraduationCap, 
  Menu, 
  Calendar, 
  Play, 
  MapPin, 
  Dumbbell, 
  Stethoscope,
  Car,
  Clock,
  Users,
  Route,
  Bot,
  Bitcoin,
  Code,
  Book,
  Lightbulb,
  Heart,
  TheaterIcon,
  Guitar,
  CalendarDays,
  BusFront,
  Plane,
  DollarSign,
  UmbrellaIcon,
  Download,
  Video,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail
} from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <GraduationCap className="text-3xl text-primary mr-3" size={32} />
              <span className="text-2xl font-bold text-neutral">Network School</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('amenities')}
                className="text-lg text-neutral hover:text-primary transition-colors"
              >
                Amenities
              </button>
              <button 
                onClick={() => scrollToSection('learning')}
                className="text-lg text-neutral hover:text-primary transition-colors"
              >
                Learning
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-lg text-neutral hover:text-primary transition-colors"
              >
                Community
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-lg text-neutral hover:text-primary transition-colors"
              >
                Location
              </button>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-6 py-3 text-lg font-medium hover:bg-blue-700"
            >
              Schedule Visit
            </Button>
            <Button variant="ghost" className="md:hidden text-neutral">
              <Menu size={24} />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern skyline of Forest City Malaysia"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral leading-tight mb-6">
                Redefine Retirement at <span className="text-primary">70+</span>
              </h1>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                Join Malaysia's most innovative learning community in Forest City. Stay active, learn cutting-edge skills, and connect with brilliant minds from around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary text-white btn-senior hover:bg-blue-700 flex items-center justify-center"
                >
                  <Calendar className="mr-3" size={20} />
                  Book Your Tour
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-primary text-primary btn-senior hover:bg-primary hover:text-white flex items-center justify-center"
                >
                  <Play className="mr-3" size={20} />
                  Watch Virtual Tour
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-lg text-gray-600">Countries Represented</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-lg text-gray-600">Wellness Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">15min</div>
                  <div className="text-lg text-gray-600">To Singapore</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Active seniors exercising in modern facility" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-2xl text-secondary" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Forest City, Malaysia</div>
                    <div className="text-gray-600">15 minutes to Singapore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Showcase */}
      <section id="amenities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">World-Class Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every facility designed with your health, comfort, and growth in mind
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-light hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Modern senior fitness facility" 
                  className="rounded-xl mb-6 w-full h-64 object-cover"
                />
                <h3 className="text-2xl font-bold text-neutral mb-4">Burn Exercise Tent</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Dedicated instructor-led sessions with dozens of specialized weight equipment designed for 70+ fitness goals
                </p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Dumbbell className="mr-1" size={16} />
                    40+ Equipment
                  </span>
                  <span className="flex items-center">
                    <Stethoscope className="mr-1" size={16} />
                    Personal Trainers
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-light hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Resort-style pools and wellness facilities" 
                  className="rounded-xl mb-6 w-full h-64 object-cover"
                />
                <h3 className="text-2xl font-bold text-neutral mb-4">Multiple Pool Complex</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Therapeutic pools, lap pools, and social areas for water-based fitness and relaxation
                </p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Car className="mr-1" size={16} />
                    5 Pools
                  </span>
                  <span className="flex items-center">
                    <Heart className="mr-1" size={16} />
                    Spa Features
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-light hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Blueprint nutrition healthy meals" 
                  className="rounded-xl mb-6 w-full h-64 object-cover"
                />
                <h3 className="text-2xl font-bold text-neutral mb-4">Blueprint Nutrition</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Scientifically optimized meals designed for longevity and peak performance after 70
                </p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Heart className="mr-1" size={16} />
                    Organic
                  </span>
                  <span className="flex items-center">
                    <Bot className="mr-1" size={16} />
                    Science-Based
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Start Every Day Right</h3>
            <p className="text-xl mb-6">Join our morning ruck march - a gentle group walk that builds community and starts your day with energy</p>
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center">
                <Clock className="text-2xl mr-3" size={24} />
                <span className="text-lg">6:30 AM Daily</span>
              </div>
              <div className="flex items-center">
                <Users className="text-2xl mr-3" size={24} />
                <span className="text-lg">Group Activity</span>
              </div>
              <div className="flex items-center">
                <Route className="text-2xl mr-3" size={24} />
                <span className="text-lg">Scenic Routes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Opportunities */}
      <section id="learning" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">Never Stop Learning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge courses taught by industry experts and brilliant younger minds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI & Machine Learning",
                description: "Understand and harness the power of artificial intelligence in practical, accessible ways",
                nextSession: "Monday, 2:00 PM",
                color: "text-primary"
              },
              {
                icon: Bitcoin,
                title: "Crypto & Web3",
                description: "Learn about digital currencies, blockchain, and the future of finance from experts",
                nextSession: "Wednesday, 10:00 AM",
                color: "text-secondary"
              },
              {
                icon: Code,
                title: "Vibe Coding",
                description: "Learn modern programming tools designed for creators, not just programmers",
                nextSession: "Friday, 3:00 PM",
                color: "text-accent"
              },
              {
                icon: Book,
                title: "Book Clubs",
                description: "Discuss cutting-edge ideas and timeless wisdom with fellow lifelong learners",
                nextSession: '"Sapiens" Discussion',
                color: "text-primary"
              },
              {
                icon: Lightbulb,
                title: "Network State Building",
                description: "Help design and build the future of digital communities and governance",
                nextSession: "Digital Governance",
                color: "text-secondary"
              },
              {
                icon: Heart,
                title: "Better Living",
                description: "Personal development, mindfulness, and strategies for thriving in your 70s and beyond",
                nextSession: "Mindful Aging",
                color: "text-accent"
              }
            ].map((course, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <course.icon className={`text-4xl ${course.color} mb-4 mx-auto`} size={48} />
                  <h3 className="text-2xl font-bold text-neutral mb-4">{course.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {course.description}
                  </p>
                  <div className="bg-light rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-2">Next Session</div>
                    <div className="font-semibold">{course.nextSession}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-primary text-white btn-senior hover:bg-blue-700">
              View Full Course Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Community & Social */}
      <section id="community" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">Vibrant Community Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with brilliant minds from around the world and enjoy rich social experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse international community of seniors socializing" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-neutral mb-6">Global Perspectives, Local Friendships</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our residents come from over 50 countries, bringing diverse experiences and fresh perspectives. 
                Connect with younger mentors who offer new ways of seeing the world.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-2xl text-primary mr-4" size={24} />
                  <span className="text-lg">50+ Countries Represented</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-2xl text-secondary mr-4" size={24} />
                  <span className="text-lg">Cross-Generational Mentorship</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-2xl text-accent mr-4" size={24} />
                  <span className="text-lg">Daily Social Activities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <TheaterIcon className="text-4xl mb-4 mx-auto" size={48} />
                <h4 className="text-2xl font-bold mb-4">Improv Classes</h4>
                <p className="text-lg mb-4">Build confidence, have fun, and exercise your creativity with our weekly improv workshops</p>
                <div className="text-sm opacity-90">Thursdays, 7:00 PM</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary to-green-600 text-white">
              <CardContent className="p-8 text-center">
                <Guitar className="text-4xl mb-4 mx-auto" size={48} />
                <h4 className="text-2xl font-bold mb-4">Country Rock Night</h4>
                <p className="text-lg mb-4">Live music, dancing, and good times every Saturday evening in our community hall</p>
                <div className="text-sm opacity-90">Saturdays, 8:00 PM</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent to-red-600 text-white">
              <CardContent className="p-8 text-center">
                <CalendarDays className="text-4xl mb-4 mx-auto" size={48} />
                <h4 className="text-2xl font-bold mb-4">Cultural Events</h4>
                <p className="text-lg mb-4">Celebrate festivals and traditions from our global community throughout the year</p>
                <div className="text-sm opacity-90">Monthly Events</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section id="location" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">Perfect Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best of Malaysia with easy access to Singapore's world-class amenities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-neutral mb-6">Forest City, Malaysia</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: BusFront,
                    title: "15 Minutes to Singapore",
                    description: "Cross the causeway for world-class healthcare, shopping, and cultural experiences",
                    color: "text-primary"
                  },
                  {
                    icon: Plane,
                    title: "International Connectivity",
                    description: "Easy access to global destinations through Singapore Changi Airport",
                    color: "text-secondary"
                  },
                  {
                    icon: DollarSign,
                    title: "Cost-Effective Living",
                    description: "Enjoy high-quality amenities at a fraction of Western retirement community costs",
                    color: "text-accent"
                  },
                  {
                    icon: UmbrellaIcon,
                    title: "Year-Round Comfort",
                    description: "Tropical climate perfect for outdoor activities and healthy living",
                    color: "text-primary"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <feature.icon className={`text-2xl ${feature.color} mr-4 mt-1`} size={24} />
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                      <p className="text-lg text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Forest City Malaysia aerial view with Singapore connection" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
              <Card className="mt-6 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">🇲🇾</div>
                      <div className="text-sm text-gray-600">Forest City</div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="border-t-2 border-dashed border-gray-300 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-600">15 min</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">🇸🇬</div>
                      <div className="text-sm text-gray-600">Singapore</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-6">What Residents Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our thriving community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
                name: "Margaret Chen",
                age: "Age 74, Former Engineer",
                content: "At 74, I'm learning to code and understanding blockchain! The young mentors here have opened my mind to possibilities I never imagined."
              },
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
                name: "David Kumar",
                age: "Age 72, Retired Doctor",
                content: "The morning ruck and burn exercise tent have transformed my fitness. I feel stronger at 72 than I did at 60!"
              },
              {
                image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
                name: "Sarah Johnson",
                age: "Age 76, Former Teacher",
                content: "The diversity here is incredible. I have friends from 6 continents, and every conversation teaches me something new."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-light">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name}, Network School resident`} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-neutral">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.age}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your 70s?</h2>
          <p className="text-2xl mb-12 opacity-90">
            Join Malaysia's most innovative retirement community and discover what's possible when you never stop growing.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Schedule Your Visit</h3>
                <ContactForm />
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-white">Direct Contact</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-white">
                      <Phone className="text-xl mr-3" size={20} />
                      <span className="text-lg">+60 7-123-4567</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Mail className="text-xl mr-3" size={20} />
                      <span className="text-lg">hello@networkschool.my</span>
                    </div>
                    <div className="flex items-center text-white">
                      <MapPin className="text-xl mr-3" size={20} />
                      <span className="text-lg">Forest City, Johor, Malaysia</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-white">Quick Facts</h4>
                  <div className="space-y-2 text-left text-lg text-white">
                    <div>• 15 minutes to Singapore</div>
                    <div>• 50+ countries represented</div>
                    <div>• 24/7 wellness support</div>
                    <div>• All-inclusive amenities</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary btn-senior hover:bg-gray-100 flex items-center justify-center">
              <Download className="mr-3" size={20} />
              Download Brochure
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white btn-senior hover:bg-white hover:text-primary flex items-center justify-center"
            >
              <Video className="mr-3" size={20} />
              Watch Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="text-2xl text-primary mr-3" size={24} />
                <span className="text-xl font-bold">Network School</span>
              </div>
              <p className="text-gray-300 mb-4">
                Redefining retirement through learning, community, and active living in Forest City, Malaysia.
              </p>
              <div className="flex space-x-4">
                <Facebook className="text-2xl text-gray-400 hover:text-white cursor-pointer" size={24} />
                <Twitter className="text-2xl text-gray-400 hover:text-white cursor-pointer" size={24} />
                <Linkedin className="text-2xl text-gray-400 hover:text-white cursor-pointer" size={24} />
                <Instagram className="text-2xl text-gray-400 hover:text-white cursor-pointer" size={24} />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => scrollToSection('amenities')}
                    className="hover:text-white transition-colors"
                  >
                    Amenities
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('learning')}
                    className="hover:text-white transition-colors"
                  >
                    Learning
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('community')}
                    className="hover:text-white transition-colors"
                  >
                    Community
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('location')}
                    className="hover:text-white transition-colors"
                  >
                    Location
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+60 7-123-4567</li>
                <li>hello@networkschool.my</li>
                <li>Forest City, Johor, Malaysia</li>
                <li>15 min to Singapore</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Stay updated on community news and events</p>
              <NewsletterForm />
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Network School Forest City. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
