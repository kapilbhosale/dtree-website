import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/dtree-logo.svg"
              alt="DTree Labs"
              width={60}
              height={40}
              className="mb-4"
            />
            <p className="text-primary-foreground/80">
              Transforming ideas into digital reality with cutting-edge technology
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:underline">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="mb-2">Email: kapil@dtreelabs.com</p>
            <p className="mb-2">Phone: +91 7972682376</p>
            <p>Pune, Maharashtra, India</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/dtreelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/dtreelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/dtreelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/dtreelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p>© 2024 DTree Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}