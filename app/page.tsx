import Header from "@/components/header"
import Hero from "@/components/hero"
import PriceList from "@/components/price-list"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 space-y-12 sm:px-6 lg:px-8">
        <Hero />
        <PriceList />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
