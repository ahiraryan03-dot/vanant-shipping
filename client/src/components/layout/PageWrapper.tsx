import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-secondary selection:text-white">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
  {children}
</div>
      </main>

      <Footer />
    </div>
  );
}