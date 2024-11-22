"use client";

import { Shield, Zap, Battery, Recycle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "High Energy Density",
    description:
      "Maximum power in a compact form factor, perfect for all applications.",
    icon: Zap,
  },
  {
    name: "Extended Lifespan",
    description: "Engineered for longevity with over 2500+ charge cycles.",
    icon: Battery,
  },
  {
    name: "Safety Certified",
    description:
      "Built with multiple protection systems and certified safety features.",
    icon: Shield,
  },
  {
    name: "Eco-Friendly",
    description:
      "100% recyclable components with minimal environmental impact.",
    icon: Recycle,
  },
];

export default function Features() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Advanced Technology
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Superior Battery Features
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our lithium batteries combine cutting-edge technology with reliable
            performance, delivering power solutions that exceed industry
            standards.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <dt className="text-base font-semibold leading-7 flex flex-col items-center">
                  <div className="mb-6 flex  h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                    <feature.icon
                      className="h-7 w-7 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
