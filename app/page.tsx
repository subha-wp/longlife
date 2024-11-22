import Hero from '@/components/sections/hero'
import Features from '@/components/sections/features'
import Products from '@/components/sections/products'
import Testimonials from '@/components/sections/testimonials'
import Contact from '@/components/sections/contact'
import Usage from '@/components/sections/usage'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Usage />
      <Features />
      <Products />
      <Testimonials />
      <Contact />
    </main>
  )
}