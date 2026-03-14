import { CheckCircle2, Target, Eye, Zap } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import aboutImage from "@/assets/images/about-team.jpg";

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Reliability",
      description: "We deliver on our promises, ensuring your cargo arrives safely and on time, every time."
    },
    {
      icon: <Eye className="h-8 w-8 text-secondary" />,
      title: "Transparency",
      description: "Clear communication and proactive tracking throughout the entire shipping process."
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "Efficiency",
      description: "Optimized logistics solutions designed to save you time and reduce operational costs."
    }
  ];

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Vanant Shipping</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Your trusted partner in international freight forwarding and comprehensive supply chain solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-3xl transform -rotate-3 z-0"></div>
              <img 
                src={aboutImage} 
                alt="Logistics team reviewing documents" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover"
              />
              
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-border hidden md:block">
                <div className="text-4xl font-bold text-primary mb-1">12+</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Navigating the Complexities of Global Trade
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Vanant Shipping was founded with a singular vision: to simplify international logistics for businesses of all sizes. In a highly fragmented industry, we serve as the central hub connecting importers, exporters, and logistics partners worldwide.
                </p>
                <p>
                  Our deep expertise in international freight movements and intricate customs clearance procedures allows us to navigate challenges before they become delays. We don't just move boxes; we orchestrate seamless supply chain solutions tailored to your specific requirements.
                </p>
              </div>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Dedicated Account Managers",
                  "24/7 Cargo Tracking",
                  "Global Carrier Network",
                  "Compliance Experts"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that drive our operations and define our relationships with clients and partners globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 border border-border shadow-sm text-center flex flex-col items-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}