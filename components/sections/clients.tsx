"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    name: "TicketMaster",
    description: "Ticketmaster is a global leader in ticket sales and distribution for the arts and entertainment industry",
    image: "/clients/Ticketmaster.png"
  },
  {
    name: "LaneOne",
    description: "LaneOne is a joint venture between Azoff Company and Live Nation Entertainment created to reimagine the sales, distribution, and services for the premium tier category of the live event business.",
    image: "/clients/lane-one.jpeg"
  },
  {
    name: "VerticalFox",
    description: "Vertical Fox Platform eliminates paper from your organization to transform employee benefits.",
    image: "/clients/vf.png"
  },
  {
    name: "Lodgistics",
    description: "Cloud Based Hotel Management Platform. Cloud-based tools to help manage your hotels.",
    image: "/clients/Lodgistics.png"
  },
  {
    name: "Avegen Healthcare",
    description: "Avegen is a leading provider of cloud-based software solutions for the healthcare industry.",
    image: "/clients/avegen.jpeg"
  },
  {
    name: "Instachk",
    description: "HyperLocal Advertisement Platform in SouthEast Asia. Got funded by Grab.",
    image: "/clients/Instachk.png"
  },
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Clients</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          List of clients who have trusted us with their app development needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group">
                <div className="relative h-48">
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Image
                      src={client.image}
                      alt={client.name}
                      className="object-cover"
                      width={200}
                      height={70}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{client.name}</h3>
                  <p className="text-muted-foreground text-sm">{client.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}