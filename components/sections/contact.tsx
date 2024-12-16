import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" className="h-32" />
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <p>
                    304, Amar Business Park, Baner,
                    Pune, Maharashtra 411045
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>kapil@dtreelabs.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>+91 7972682376</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4220.268696575912!2d73.77320929999999!3d18.5744407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b96de86a57c5%3A0xf4787833c417171c!2sDTree%20Labs!5e1!3m2!1sen!2sin!4v1734333786115!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}