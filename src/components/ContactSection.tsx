import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-[#4A7C7C]" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">Basundhara, Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 text-[#4A7C7C]" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">01-5915197</p>
                    <p className="text-gray-600">9851216996</p>
                    <p className="text-gray-600">9851105197</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 text-[#4A7C7C]" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">info@hopecare.com.np</p>
                  </div>
                </div>
              </div>
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
          <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.845845425544!2d85.3297!3d27.7372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1920c7245f89%3A0x42d0275f9ac2be83!2sBasundhara%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1650000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
