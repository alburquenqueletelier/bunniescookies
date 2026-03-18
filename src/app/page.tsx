import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Delivery from '@/components/Delivery'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

export default function Home() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <Products />
        <Delivery />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
