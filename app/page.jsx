'use client';

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import { Calendar, Clock, Map, MessageSquare, Settings, Users, FileText, Bell, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
          <h1 className="text-5xl py-10 md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">
            Your Complete Congregation Assistant
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule meetings, manage territories, track ministry reports, and more - all in one place.
            Available in multiple languages, completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-[#006cff] hover:bg-[#006cff]/90">
              <a href="https://apps.apple.com/us/app/zeal-congregation-assisstant/id6737194361">
                Download on App Store
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="https://app.zealapp.com">Sign In to Web App</a>
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Everything You Need
          </h2>
          <div className="space-y-20">
            <FeatureRow
              icon={Calendar}
              title="Meeting Scheduler"
              description="Create and manage Christian Life & Ministry meeting parts and weekend meeting schedules with ease."
              imageUrl="https://picsum.photos/seed/feature1/600/400"
              imageAlt="Meeting Scheduler Feature"
              isImageRight={true}
            />
            <FeatureRow
              icon={Clock}
              title="Ministry Timer"
              description="Track your ministry time and submit monthly reports directly from your mobile device."
              imageUrl="https://picsum.photos/seed/feature2/600/400"
              imageAlt="Ministry Timer Feature"
              isImageRight={false}
            />
            <FeatureRow
              icon={Map}
              title="Territory Management"
              description="Draw and assign territories digitally, making field service organization simpler."
              imageUrl="https://picsum.photos/seed/feature3/600/400"
              imageAlt="Territory Management Feature"
              isImageRight={true}
            />
            <FeatureRow
              icon={MessageSquare}
              title="Communication"
              description="Stay connected with your congregation through built-in messaging features."
              imageUrl="https://picsum.photos/seed/feature4/600/400"
              imageAlt="Communication Feature"
              isImageRight={false}
            />
            <FeatureRow
              icon={Bell}
              title="Smart Reminders"
              description="Get notifications for your assignments, duties, and cart witnessing shifts."
              imageUrl="https://picsum.photos/seed/feature5/600/400"
              imageAlt="Smart Reminders Feature"
              isImageRight={true}
            />
            <FeatureRow
              icon={FileText}
              title="Automatic PDFs"
              description="Generate professional PDFs for information boards automatically."
              imageUrl="https://picsum.photos/seed/feature6/600/400"
              imageAlt="Automatic PDFs Feature"
              isImageRight={false}
            />
          </div>
        </div>
      </section>

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

function FeatureRow({ icon: Icon, title, description, imageUrl, imageAlt, isImageRight }) {
  const contentOrder = isImageRight ? "order-1" : "order-2";
  const imageOrder = isImageRight ? "order-2" : "order-1";

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className={`md:w-1/2 ${contentOrder}`}>
        <div className="flex items-center gap-4 mb-4">
          <Icon className="w-8 h-8 text-[#006cff]" />
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className={`md:w-1/2 ${imageOrder}`}>
        <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-[#006cff] mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
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
