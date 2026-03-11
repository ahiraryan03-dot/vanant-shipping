import { Link } from "wouter";
import { ArrowRight, Anchor, Plane, ShieldCheck, Truck, Globe, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/layout/PageWrapper";
import heroImage from "@/assets/images/hero-cargo.jpg";
import whyUsImage from "@/assets/images/home-why-us.jpg";

export default function Home() {
  const services = [
    {
      icon: <Anchor className="h-10 w-10 text-secondary" />,
      title: "Ocean Freight",
      description: "Cost-effective and reliable global container shipping for FCL and LCL cargo."
    },
    {
      icon: <Plane className="h-10 w-10 text-secondary" />,
      title: "Air Freight",
      description: "Express delivery worldwide for time-sensitive and high-value shipments."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      title: "Customs Clearance",
      description: "Smooth and compliant customs brokerage to avoid delays at borders."
    },
    {
      icon: <Truck className="h-10 w-10 text-secondary" />,
      title: "Door-to-Door",
      description: "End-to-end logistics handling from origin pickup to final destination delivery."
    }
  ];

  const features = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "Connecting your business to major ports and airports worldwide through our extensive network."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Industry Expertise",
      description: "Decades of combined experience in handling complex international freight movements."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Delivery",
      description: "Optimized routing and proactive tracking to ensure your cargo arrives on schedule."
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10" />
          <img 
            src={heroImage} 
            alt="Cargo ship carrying containers" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm font-semibold text-secondary-foreground border border-secondary/30 backdrop-blur-sm">
              Global Logistics Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Reliable Global <span className="text-secondary">Freight Forwarding</span> & Customs Clearance
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              Seamlessly connecting businesses across borders with secure, efficient, and transparent supply chain solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-base h-14 px-8" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 h-14 px-8 backdrop-blur-sm" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Global Logistics Solutions</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive shipping services tailored to meet the demands of international trade and commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border group"
              >
                <div className="bg-muted w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Vanant Shipping?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand that your cargo is more than just goods—it's the lifeblood of your business. We prioritize transparency, efficiency, and reliability in every shipment we handle.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 bg-primary/5 p-3 rounded-lg h-fit">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={whyUsImage} 
                  alt="Logistics professional at work" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                  <div className="text-white text-3xl font-bold mb-2">150+</div>
                  <div className="text-white/90 text-lg">Countries Served Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Ship with Confidence?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Let our experts handle your logistics while you focus on growing your business. Get a customized quote today.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-white hover:text-primary transition-colors text-white text-lg h-14 px-10 rounded-full" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              Contact Our Team <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}