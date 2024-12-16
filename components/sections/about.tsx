import Image from "next/image";
import { CheckCircle } from "lucide-react";

export function About() {
  const features = [
    "Agile Development Methodology",
    "Test-Driven Development",
    "Continuous Integration/Deployment",
    "Code Quality & Best Practices",
    "Scalable Architecture Design",
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About DTree Labs</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/about-team.jpg"
              alt="DTree Labs Team"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Expert Development Team
            </h3>
            <p className="text-muted-foreground mb-6">
              DTree Labs is a product development company that helps startups and
              enterprises build scalable applications. Our team brings extensive
              expertise in Ruby on Rails, React.js, and mobile development to every
              project, ensuring high-quality, maintainable solutions.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}