import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Ship, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/network", label: "Global Network" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group shrink-0 mr-4" data-testid="link-home">
              <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors">
                <Ship className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary whitespace-nowrap">Vanant Shipping</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8 lg:flex-1 lg:justify-end">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`text-sm font-medium transition-colors hover:text-secondary whitespace-nowrap ${
                      location === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                    data-testid={`link-nav-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 ml-2 border-l pl-4 shrink-0">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap">
                <Phone className="h-4 w-4" />
                <span>+91 99799 23477</span>
              </div>
              <Button asChild className="bg-[#072752] hover:bg-[#072752]/90 whitespace-nowrap text-white">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`block py-2 text-base font-medium ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="pt-4 border-t space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 99799 23477</span>
              </div>
              <Button asChild className="w-full bg-[#072752] hover:bg-[#072752]/90 text-white">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}