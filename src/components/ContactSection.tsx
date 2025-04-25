
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <div className="h-1 w-24 bg-[#4A7C7C] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to schedule service? Get in touch with our team today.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A7C7C] focus:border-transparent transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A7C7C] focus:border-transparent transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A7C7C] focus:border-transparent transition-all" rows={4} placeholder="How can we help you?"></textarea>
                </div>
                <Button className="w-full bg-[#4A7C7C] text-white py-3 px-4 rounded-lg hover:bg-[#3A6B6B] transition-all font-medium">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
