"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/dtree-logo.svg"
              alt="DTree Labs"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button>Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <Button className="w-full">Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <Link href="/" className="text-foreground/80 hover:text-foreground">
        Home
      </Link>
      <Link href="#about" className="text-foreground/80 hover:text-foreground">
        About
      </Link>
      <Link href="#services" className="text-foreground/80 hover:text-foreground">
        Services
      </Link>
      <Link href="#clients" className="text-foreground/80 hover:text-foreground">
        Clients
      </Link>
      <Link href="#portfolio" className="text-foreground/80 hover:text-foreground">
        Portfolio
      </Link>
      <Link href="#contact" className="text-foreground/80 hover:text-foreground">
        Contact
      </Link>
    </>
  );
}