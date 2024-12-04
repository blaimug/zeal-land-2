'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Calendar, Clock, Map, MessageSquare, Bell, FileText, Users, Settings } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'

const features = [
  {
    icon: Calendar,
    title: "Meeting Scheduler",
    description: "Effortlessly organize and manage all congregation meetings with our intuitive scheduler.",
    image: "/screenshot-1.PNG",
    color: "bg-blue-100"
  },
  {
    icon: Clock,
    title: "Ministry Timer",
    description: "Track ministry time and submit reports with ease using our built-in timer and reporting system.",
    image: "/screenshot-2.PNG",
    color: "bg-green-100"
  },
  {
    icon: Map,
    title: "Territory Management",
    description: "Efficiently manage and assign territories with our digital territory cards and management system.",
    image: "/screenshot-3.PNG",
    color: "bg-yellow-100"
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Stay connected with your congregation members through our integrated messaging platform.",
    image: "/screenshot-4.PNG",
    color: "bg-purple-100"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss an assignment or meeting again with our intelligent reminder system.",
    image: "/screenshot-5.PNG",
    color: "bg-red-100"
  },
  {
    icon: FileText,
    title: "Automatic PDFs",
    description: "Generate professional documents and reports automatically with our PDF creation tool.",
    image: "/screenshot-1.PNG",
    color: "bg-indigo-100"
  },
  {
    icon: Users,
    title: "Congregation Directory",
    description: "Maintain an up-to-date digital directory of all congregation members for easy access.",
    image: "/screenshot-1.PNG",
    color: "bg-pink-100"
  },
  {
    icon: Settings,
    title: "Customizable Settings",
    description: "Tailor the app to your congregation's specific needs with our flexible settings options.",
    image: "/screenshot-1.PNG",
    color: "bg-orange-100"
  }
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    if (!isDesktop) {
      setActiveFeature(0) // Ensure the first feature is open on mobile by default
    }
  }, [isDesktop])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Everything You Need</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 space-y-4">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                feature={feature}
                isActive={index === activeFeature}
                onClick={() => setActiveFeature(index)}
                isDesktop={isDesktop}
              />
            ))}
          </div>
          {isDesktop && (
            <div className="lg:w-1/2 sticky top-24 self-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-lg overflow-hidden ${features[activeFeature].color}`}
                >
                  <div className="p-8">
                    <img
                      src={features[activeFeature].image}
                      alt={features[activeFeature].title}
                      className="w-full h-auto max-w-md mx-auto"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ feature, isActive, onClick, isDesktop }) {
  const Icon = feature.icon

  return (
    <motion.div
      className={`rounded-lg ${isActive ? 'bg-white shadow-md' : 'bg-transparent'}`}
      initial={false}
      animate={{ backgroundColor: isActive ? '#FFFFFF' : 'transparent' }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="w-full text-left px-6 py-4 flex items-center justify-between"
        onClick={onClick}
      >
        <div className="flex items-center">
          <Icon className={`w-6 h-6 mr-4 ${isActive ? 'text-blue-500' : 'text-gray-500'}`} />
          <h3 className={`text-lg font-semibold ${isActive ? 'text-blue-500' : 'text-gray-700'}`}>
            {feature.title}
          </h3>
        </div>
        {isActive ? (
          <ChevronUp className="w-5 h-5 text-blue-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-4 text-gray-600">{feature.description}</p>
            {!isDesktop && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 rounded-lg overflow-hidden ${feature.color}`}
              >
                <div className="p-8">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto max-w-md mx-auto"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

