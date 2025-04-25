
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Us</h2>
          <div className="h-1 w-24 bg-[#4A7C7C] mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#4A7C7C]">Welcome to Hope Home Care</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We provide reliable nursing services at patient's home which involves basic and professional care.
                </p>
                <p>
                  Nursing care service distinctly is needed for elderly care, post-surgical care, and chronic illness disables care or cognitively impaired care. Hence, when in need of such assistance, you can rely on Hope Home Care because Hope Home Care aids you with the best intervention of Nursing care services in Kathmandu, with the process of outstanding selection method.
                </p>
                <p>
                  Heal Home Care enrolls completely certified and verified nurses for the nursing home care service. This assistance helps patients in recovering at greater pace as they are served in their comfort zone.
                </p>
                <p>
                  Hope Home Care pioneer aim in providing home nursing service is to assert that the person can live in an independent environment in their own home with their beloved family members. The continuous care under our expert nurses provides an assurance to the patients about their safety. The service is customized according to the need of the patients.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
