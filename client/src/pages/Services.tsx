import { Anchor, Plane, ShieldCheck, Truck, PackageCheck, Briefcase } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import servicesImage from "@/assets/images/services-logistics.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const allServices = [
    {
      icon: <Anchor className="h-12 w-12 text-secondary" />,
      title: "Ocean Freight",
      description: "Cost-effective, reliable container shipping across the globe. We handle Full Container Load (FCL), Less than Container Load (LCL), and non-containerized loads with optimized routing to minimize transit times and costs."
    },
    {
      icon: <Plane className="h-12 w-12 text-secondary" />,
      title: "Air Freight",
      description: "When time is critical, our air freight solutions ensure your high-value and time-sensitive shipments reach their destination rapidly. We offer direct flights, consolidations, and chartered operations."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-secondary" />,
      title: "Customs Clearance",
      description: "Navigate the complexities of international trade compliance. Our expert brokers handle documentation, tariff classification, and duty management to ensure swift customs clearance and prevent costly delays."
    },
    {
      icon: <PackageCheck className="h-12 w-12 text-secondary" />,
      title: "Import & Export Handling",
      description: "Comprehensive management of your inbound and outbound shipments. We coordinate with port authorities, terminals, and carriers to ensure smooth cargo flow from origin to final destination."
    },
    {
      icon: <Truck className="h-12 w-12 text-secondary" />,
      title: "Door-to-Door Logistics",
      description: "A complete end-to-end service. We pick up your cargo from the supplier's facility and deliver it directly to your warehouse or customer, managing every transit mode and transfer point in between."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-secondary" />,
      title: "Project Cargo",
      description: "Specialized handling for oversized, heavy, or complex shipments that require custom logistical planning, specialized equipment, and precise execution."
    }
  ];

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive logistics and freight forwarding solutions tailored to your unique supply chain needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {allServices.map((service, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 bg-muted/50 p-4 rounded-xl h-fit">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section with Image */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Integrated Supply Chain Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By combining our core services, we create seamless supply chain solutions that adapt to your business requirements. From a single pallet to complex industrial projects, our approach remains the same: meticulous planning, proactive communication, and flawless execution.
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 mt-4" asChild>
                <Link href="/contact">Discuss Your Requirements</Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={servicesImage} 
                alt="Cargo containers at port" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}