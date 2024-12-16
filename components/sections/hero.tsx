"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/animated-background";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background overflow-hidden pt-16">
      <div className="hero-animated-colors">
        <AnimatedBackground />
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto px-4 text-center z-10">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-primary">
            Dtree Labs
          </h2>
          <h3 className="text-2xl md:text-2xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Transforming Ideas into Digital Reality
          </h3>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            We are a product development company specializing in Ruby on Rails,
            React.js, and Mobile App Development.
          </p>
          <Button size="lg" className="group">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Button>
      </div>
    </section>
  );
}