"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    content: "Switching to these lithium batteries was the best decision for my E-rickshaw. I can now work longer hours with less charging time.",
    author: "Rajesh Kumar",
    role: "E-Rickshaw Owner",
    rating: 5,
  },
  {
    content: "My daily income has increased by 40% since installing this battery. The quick charging saves so much time.",
    author: "Amit Singh",
    role: "E-Rickshaw Driver",
    rating: 5,
  },
  {
    content: "Excellent battery life and the service support is outstanding. Worth every rupee invested.",
    author: "Suresh Patel",
    role: "Fleet Owner",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by E-Rickshaw Drivers
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col justify-between bg-secondary/30 px-8 py-10 rounded-2xl"
              >
                <div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-7">{testimonial.content}</p>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <p className="text-base font-semibold">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}