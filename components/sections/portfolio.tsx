"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const apps = [
  {
    name: "Unique Academy of Commerce, Pune",
    description: "Educational app for students with comprehensive study materials and tests",
    image: "/portfolio/unique-classes.jpg",
    link: "https://play.google.com/store/apps/details?id=com.dtree.unique",
  },
  {
    name: "Renukai Coaching Classes",
    description: "Learning platform for competitive exam preparation",
    image: "/portfolio/rcc-logo.png",
    link: "https://play.google.com/store/apps/details?id=com.at_and_a.rcc_new",
  },
  {
    name: "Konale Coaching Classes",
    description: "Interactive learning app for students in Nanded",
    image: "/portfolio/konale-logo.png",
    link: "https://play.google.com/store/apps/details?id=com.at_and_a.konaleclasses&hl=en_IN",
  },
  {
    name: "Stark Classes",
    description: "Educational platform for students in Latur",
    image: "/portfolio/stark-logo.png",
    link: "https://play.google.com/store/apps/details?id=com.ata.stark&hl=en_IN",
  },
  {
    name: "Joshi Maths Classes",
    description: "Comprehensive learning of Mathematics for ITT-JEE and CET aspirants",
    image: "/portfolio/joshi.png",
    link: "https://play.google.com/store/apps/details?id=com.joshi_maths&hl=en_IN",
  },
  {
    name: "Scholars Academy",
    description: "Established in the year 2006, Scholars Academy in Satrasta, Solapur is a top player in the category Tutorials in the Solapur",
    image: "/portfolio/scholars.png",
    link: "https://play.google.com/store/apps/details?id=com.at_and_a.scholars&hl=en_IN",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Portfolio</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover our collection of successful mobile applications that have helped
          transform education and learning across India.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group">
                <div className="relative h-48">
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Image
                      src={app.image}
                      alt={app.name}
                      className="object-cover"
                      width={200}
                      height={70}
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground flex items-center gap-2 hover:underline"
                    >
                      View on Play Store
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{app.name}</h3>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://play.google.com/store/apps/dev?id=9188179906226283618"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            View All Apps on Google Play
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}