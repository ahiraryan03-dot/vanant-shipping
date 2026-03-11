import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import contactImage from "@/assets/images/contact-office.jpg";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description: "Our team will get back to you within 24 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Get in touch with our experts for quotes, inquiries, and logistics support.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Information */}
            <div className="lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Whether you need a quick freight quote or a comprehensive supply chain consultation, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Head Office</h3>
                    <p className="text-muted-foreground">
                      123 Logistics Way, Suite 400<br />
                      Global Trade Center, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: +91 99799 23477<br />
                      Support: +91 75748 28065
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@vanantshipping.com<br />
                      cs@vanantshipping.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM (EST)<br />
                      Saturday: 9:00 AM - 1:00 PM (EST)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-7/12">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">Request a Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last Name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="xyz@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 1234567890" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <select 
                      id="service" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      required
                    >
                      <option value="" disabled selected>Select a service...</option>
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
                      <option value="customs">Customs Clearance</option>
                      <option value="door">Door-to-Door</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Shipment Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your shipment (origin, destination, weight, dimensions, etc.).." 
                      className="min-h-[150px] resize-y"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-base">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Integration Placeholder Section */}
      <section className="h-[400px] bg-muted relative">
        <img 
          src={contactImage} 
          alt="Office desk" 
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm border border-border">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-1">Vanant Shipping Office</h3>
            <p className="text-muted-foreground text-sm">Find our team supporting international cargo movements and logistics solutions.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}