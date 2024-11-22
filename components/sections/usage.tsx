"use client"

import { motion } from "framer-motion"
import { Battery, Timer, Wallet, Wrench } from "lucide-react"

const benefits = [
  {
    title: "Increased Daily Income",
    description: "Run your E-rickshaw longer with quick charging, enabling more trips and higher earnings.",
    icon: Wallet,
  },
  {
    title: "Longer Range",
    description: "Cover more distance on a single charge with our high-capacity batteries.",
    icon: Battery,
  },
  {
    title: "Quick Charging",
    description: "Full charge in just 2-3 hours, minimizing downtime and maximizing earnings.",
    icon: Timer,
  },
  {
    title: "Low Maintenance",
    description: "Forget about regular maintenance - our batteries are designed for hassle-free operation.",
    icon: Wrench,
  },
]

export default function Usage() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">E-Rickshaw Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Maximize Your E-Rickshaw Business
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Switch to our lithium batteries and experience the difference in your daily operations and earnings.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-4 text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}