"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Have questions about our products? We're here to help.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-xl"
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <Input
                placeholder="Your name"
                {...form.register("name")}
                className="w-full"
              />
              {form.formState.errors.name && (
                <p className="mt-1 text-sm text-red-500">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div>
              <Input
                placeholder="Your email"
                type="email"
                {...form.register("email")}
                className="w-full"
              />
              {form.formState.errors.email && (
                <p className="mt-1 text-sm text-red-500">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                {...form.register("message")}
                className="w-full"
              />
              {form.formState.errors.message && (
                <p className="mt-1 text-sm text-red-500">{form.formState.errors.message.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}