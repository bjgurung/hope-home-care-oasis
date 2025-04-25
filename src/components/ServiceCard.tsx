
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-all h-full bg-white group overflow-hidden">
      <CardContent className="p-6">
        <div className="bg-[#4A7C7C]/10 p-4 rounded-2xl mb-6 inline-flex items-center justify-center group-hover:bg-[#4A7C7C] transition-all duration-300">
          <Icon className="h-10 w-10 text-[#4A7C7C] group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#4A7C7C] transition-colors duration-200">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <a 
            href="#contact" 
            className="inline-flex items-center text-sm font-medium text-[#4A7C7C] hover:text-[#3d6363] group-hover:translate-x-1 transition-all duration-200"
          >
            Learn more
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
