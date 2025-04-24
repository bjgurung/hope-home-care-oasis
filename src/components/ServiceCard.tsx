
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-all h-full bg-white">
      <CardContent className="p-6">
        <div className="bg-[#4A7C7C]/10 p-3 inline-block rounded-xl mb-4">
          <Icon className="h-8 w-8 text-[#4A7C7C]" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
