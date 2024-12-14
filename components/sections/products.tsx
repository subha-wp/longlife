/* eslint-disable @next/next/no-img-element */
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: "standard",
    name: "Standard Series",
    description: "Perfect for regular E-rickshaws",
    items: [
      {
        name: "E-Rickshaw MASTER 48V - 3YEAR",
        capacity: "100Ah",
        voltage: "48V",
        price: "₹69,999",
        image:
          "https://gist.github.com/user-attachments/assets/660c4259-b249-46b1-a761-80b5e1351de9",
      },
      {
        name: "E-Rickshaw MASTER 48V - 3YEAR",
        capacity: "100Ah",
        voltage: "48V",
        price: "₹64,999",
        image:
          "https://gist.github.com/user-attachments/assets/660c4259-b249-46b1-a761-80b5e1351de9",
      },
      {
        name: "E-Rickshaw MASTER 48V - 5YEAR",
        capacity: "100Ah",
        voltage: "48V",
        price: "₹89,999",
        image:
          "https://gist.github.com/user-attachments/assets/b561df7b-0479-4e53-a500-5ef481664b9a",
      },
      {
        name: "E-Rickshaw MASTER 48V - 5YEAR",
        capacity: "100Ah",
        voltage: "48V",
        price: "₹94,999",
        image:
          "https://gist.github.com/user-attachments/assets/3bc980e4-764c-4768-957a-a192b02b90da",
      },
    ],
  },
  {
    id: "pro",
    name: "Pro Series",
    description: "Enhanced performance for heavy-duty use",
    items: [
      {
        name: "E-Rickshaw MASTER Pro - 5YEAR",
        capacity: "150Ah",
        voltage: "48V",
        price: "₹129,999",
        image:
          "https://gist.github.com/user-attachments/assets/bd28ecd4-1199-4835-a0b4-3263831f8504",
      },
      {
        name: "E-Rickshaw MASTER Pro - 8YEAR",
        capacity: "150Ah",
        voltage: "48V",
        price: "₹149,999",
        image:
          "https://gist.github.com/user-attachments/assets/586b3938-4b38-4f95-b3c5-b680787151ca",
      },
      {
        name: "E-Rickshaw MASTER Pro+ - 5YEAR",
        capacity: "200Ah",
        voltage: "48V",
        price: "₹179,999",
        image:
          "https://gist.github.com/user-attachments/assets/fdf6fff9-203f-4f30-833a-dfd69c96119e",
      },
      {
        name: "E-Rickshaw MASTER Pro+ - 8YEAR",
        capacity: "200Ah",
        voltage: "48V",
        price: "₹194,999",
        image:
          "https://gist.github.com/user-attachments/assets/3e56bb61-2d92-4efe-8667-ffca71eae711",
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
                        <Image
                          width={690}
                          height={460}
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
