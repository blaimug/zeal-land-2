'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import { Calendar, Clock, Map, MessageSquare, Settings, Users, FileText, Bell, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FeaturesSection } from '@/components/features-section'
import { TestimonialsSection } from '@/components/testimonials-section'

export default function Home() {
  return (
    <>
     {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-blue-50" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/grid.svg")',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full blur-[100px] opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full blur-[100px] opacity-20" />
        <div className="container mx-auto px-4 pt-32 text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 py-10">
            Your Complete Congregation Assistant
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule meetings, manage territories, track ministry reports, and more - all in one place.
            Available in multiple languages, completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-[#006cff] hover:bg-[#006cff]/90">
              <a href="https://apps.apple.com/us/app/zeal-congregation-assisstant/id6737194361" className="flex items-center">
                <img src="/app-store-badge.svg" alt="Download on the App Store" className="h-6 mr-2" />
                Download on App Store
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#" className="flex items-center">
                <img src="/play-store-badge.svg" alt="Get it on Google Play" className="h-6 mr-2" />
                Get it on Google Play
              </a>
            </Button>
          </div>
          <div className="mt-12">
            <img
              src="/app-preview.png"
              alt="Zeal App Interface"
              className="mx-auto max-w-4xl w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Zeal Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">What is Zeal?</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Zeal is a comprehensive congregation assistant app designed to streamline the management of Christian congregations. It offers a suite of tools to help with scheduling, territory management, ministry reporting, and more, all in one easy-to-use platform.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Support</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <FAQItem
                question="How do I get started with Zeal?"
                answer="Download the app from the App Store, create an account, and start exploring the features. It's completely free to use!"
                isOpenByDefault={true}
              />
              <FAQItem
                question="Is Zeal available in my language?"
                answer="Zeal is available in multiple languages. Check the App Store listing for the current list of supported languages."
              />
              <FAQItem
                question="How can I report an issue?"
                answer="Use the contact form above to report any issues you encounter. Our support team will get back to you as soon as possible."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FAQItem({ question, answer, isOpenByDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-4">
              <p className="text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

