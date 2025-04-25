
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Facebook, Twitter } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('team');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Medical Director",
      bio: "With over 15 years of experience in internal medicine and geriatrics, Dr. Kumar oversees all clinical operations.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Sunita Sharma",
      role: "Head Nurse",
      bio: "Sunita brings 10+ years of intensive care and home nursing experience, leading our nursing team with compassion.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Prakash Thapa",
      role: "Physiotherapist",
      bio: "Specializing in geriatric rehabilitation, Prakash helps patients regain mobility and independence safely.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&h=300&auto=format&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
            <div className="w-24 h-1 bg-[#4A7C7C] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our dedicated professionals committed to providing exceptional home healthcare services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`transition-all duration-500 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-[#4A7C7C] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <a 
                        href="https://www.facebook.com/HomeCareHope" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#4A7C7C] transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#4A7C7C] transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`mt-16 text-center transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.facebook.com/HomeCareHope" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#4A7C7C] hover:bg-[#3d6363] text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all hover:shadow-lg"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#4A7C7C] hover:bg-[#3d6363] text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all hover:shadow-lg"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
