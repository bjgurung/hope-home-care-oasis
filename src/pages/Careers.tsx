
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Work with us</h1>
            <div className="h-1 w-24 bg-[#4A7C7C] mx-auto rounded-full"></div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              We are looking for a trustworthy and compassionate home care nurse to join our team. 
              The home care nurse's duties include monitoring their condition, performing tests, 
              and preparing reports for the physician.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              To be a successful home care nurse, you should be a caring someone who can handle 
              a wide range of tasks without becoming overwhelmed. Outstanding candidates have the 
              mental fortitude and strength to care for patients while also giving emotional 
              support to family members as needed.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">We are hiring:</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Nurses</li>
                <li>Nursing Assistants (ANM/Care Giver)</li>
                <li>Physiotherapists</li>
              </ul>
            </div>
            
            <div className="bg-[#4A7C7C]/10 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-gray-800">To join our team:</h3>
              <p className="text-lg text-gray-700 mb-4">Send your CV to <a href="mailto:info@hopehomecare.com" className="text-[#4A7C7C] font-medium hover:underline">info@hopehomecare.com</a></p>
              
              <Button className="bg-[#4A7C7C] hover:bg-[#3A6B6B] mt-2">
                <Mail className="mr-2 h-4 w-4" />
                Send your application
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
