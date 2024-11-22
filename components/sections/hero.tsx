"use client";

import { Button } from "@/components/ui/button";
import { Battery, Zap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/tuk-tuk-removebg-preview.png";
import Image from "next/image";

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-20 xl:pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Eco-Friendly Power Solutions
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Power Your E-Rickshaw with Advanced Lithium Technology
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Transform your E-rickshaw with our high-performance lithium
                batteries. Longer range, faster charging, and superior
                reliability for maximum earnings.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={scrollToProducts}
                >
                  View E-Rickshaw Batteries
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Calculate Savings
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-x-6 justify-center lg:justify-start">
                <div className="flex items-center gap-x-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    6-8 Hour Runtime
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Battery className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    2500+ Cycles
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 0.6 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="  ">
                <Image
                  className="w-full object-cover"
                  src={heroImage}
                  width={100}
                  height={100}
                  alt="E-Rickshaw with Lithium Battery"
                />
                {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10" /> */}
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary/20 w-72 h-72 rounded-full blur-3xl" />
              <div className="absolute -top-10 -right-10 bg-primary/10 w-72 h-72 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
