
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleContactScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServicesScroll = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-white">
      <img 
        src="/lovable-uploads/4e9b31bd-5757-484e-a23c-089eb6fbf0db.png"
        alt="Hope Home Care Services"
        className="w-full h-full object-contain"
      />
      <div className="absolute left-0 right-0 bottom-0 p-6 bg-gradient-to-t from-[#1A1F2C]/90 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={handleContactScroll}
              className="bg-[#00A99D] text-white hover:bg-[#008C82] px-8 py-6 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Book a Service
            </Button>
            <Button 
              variant="outline" 
              onClick={handleServicesScroll}
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-full font-semibold transition-all"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
