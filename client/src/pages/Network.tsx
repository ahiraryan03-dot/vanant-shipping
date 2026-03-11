import { Globe, Users, MapPin, Navigation } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import networkMapImage from "@/assets/images/world-map-accurate.png";

import ChatGPT_Image_Mar_12__2026__12_15_39_AM from "@assets/ChatGPT Image Mar 12, 2026, 12_15_39 AM.png";

export default function Network() {
  const regions = [
    {
      name: "Asia Pacific",
      description: "Strong presence in major manufacturing hubs including China, India, Vietnam, and Southeast Asia."
    },
    {
      name: "North America",
      description: "Extensive network across major US and Canadian ports and inland logistics centers."
    },
    {
      name: "Europe",
      description: "Comprehensive coverage of Western and Eastern European trade routes and customs zones."
    },
    {
      name: "Middle East & Africa",
      description: "Strategic partnerships facilitating trade through crucial global transit points."
    }
  ];

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Global Network</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Connecting your business to the world through our robust network of international partners and agents.
          </p>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Worldwide Logistics Reach</h2>
            <p className="text-muted-foreground text-lg">
              Vanant Shipping collaborates with a carefully vetted network of international agents, freight forwarders, and logistics providers to ensure reliable service delivery in every corner of the globe.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border mb-20 bg-muted/20">
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none z-10"></div>
            <img 
              src={ChatGPT_Image_Mar_12__2026__12_15_39_AM} 
              alt="Global logistics network map" 
              className="w-full h-auto max-h-[600px] object-cover"
            />
            
            {/* Overlay stats */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8 md:p-12 z-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-[#ffffff]">150+</div>
                  <div className="text-sm md:text-base font-medium text-white/80">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-white">400+</div>
                  <div className="text-sm md:text-base font-medium text-white/80">Partner Agents</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm md:text-base font-medium text-white/80">Major Ports</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm md:text-base font-medium text-white/80">Global Operations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Focus */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:border-secondary/50 transition-colors">
                <Globe className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">{region.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Strategic Partners Callout */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <Users className="h-16 w-16 mx-auto mb-6 text-secondary" />
          <h2 className="text-3xl font-bold mb-4">Strategic Partnerships</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Our strong connections with major shipping lines, airlines, and local ground transport operators guarantee competitive rates and secured capacity for your shipments, regardless of market volatility.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}