import { Code2, Globe2, Smartphone, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Ruby on Rails",
    description:
      "Expert Ruby on Rails development for scalable and maintainable web applications.",
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: "React.js",
    description:
      "Modern and responsive frontend applications with React.js and Next.js.",
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Web Apps",
    description:
      "Full-stack web applications built with modern technologies and best practices.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile solutions for iOS and Android platforms.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}