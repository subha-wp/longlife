"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
  {
    id: "standard",
    name: "Standard Series",
    description: "Perfect for regular E-rickshaws",
    items: [
      {
        name: "E-Rick 2000",
        capacity: "100Ah",
        voltage: "48V",
        price: "₹45,999",
        image:
          "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80",
      },
      {
        name: "E-Rick 3000",
        capacity: "120Ah",
        voltage: "48V",
        price: "₹55,999",
        image:
          "https://images.unsplash.com/photo-1661956602153-23384936a1d3?auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "pro",
    name: "Pro Series",
    description: "Enhanced performance for heavy-duty use",
    items: [
      {
        name: "E-Rick Pro 5000",
        capacity: "150Ah",
        voltage: "48V",
        price: "₹65,999",
        image:
          "https://images.unsplash.com/photo-1662986327507-f7119a0e2723?auto=format&fit=crop&q=80",
      },
      {
        name: "E-Rick Pro 7000",
        capacity: "180Ah",
        voltage: "48V",
        price: "₹75,999",
        image:
          "https://images.unsplash.com/photo-1671287165224-95a68d7a2dd8?auto=format&fit=crop&q=80",
      },
    ],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 sm:py-32 bg-gradient-to-b from-primary/5 via-transparent to-transparent scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Our Products
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            E-Rickshaw Battery Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose from our range of high-performance lithium batteries
            specifically designed for E-rickshaws.
          </p>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-primary/5">
              <TabsTrigger
                value="standard"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Standard Series
              </TabsTrigger>
              <TabsTrigger
                value="pro"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Pro Series
              </TabsTrigger>
            </TabsList>
            {products.map((series) => (
              <TabsContent key={series.id} value={series.id}>
                <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                  {series.items.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-background rounded-2xl p-4 shadow-lg ring-1 ring-primary/10"
                    >
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover object-center group-hover:opacity-90 transition"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium">
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {product.capacity} • {product.voltage}
                          </p>
                        </div>
                        <p className="text-lg font-medium text-primary">
                          {product.price}
                        </p>
                      </div>
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                        Get Quote
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
