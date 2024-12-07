'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Calendar, Clock, Map, MessageSquare, Bell, FileText, Hammer, MicVocal, BriefcaseBusiness, LibraryBig } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'

const features = [
  {
    icon: Bell,
    title: "Stay on track",
    description: "On home you are reminded of the upcoming assignments, and in the future, you'll be able to get notifications",
    image: "/screenshot-1.PNG",
    color: "bg-blue-100"
  },
  {
    icon: Calendar,
    title: "Midweek Scheduler",
    description: "Effortlessly organize and manage all CLM meetings with our intuitive scheduler, with part titles automatically filled in.",
    image: "/clm.PNG",
    color: "bg-green-100"
  },
  {
    icon: MicVocal,
    title: "Weekend Scheduler",
    description: "Schedule public talks, watchtower readers, hospitality for visiting speakers, and more.",
    image: "/weekend.PNG",
    color: "bg-amber-100"
  },
  {
    icon: Clock,
    title: "Ministry Timer",
    description: "Track ministry time and submit reports with ease using our built-in timer and reporting system.",
    image: "/screenshot-3.PNG",
    color: "bg-yellow-100"
  },
  {
    icon: LibraryBig,
    title: "Cart Schedules",
    description: "Create cart shifts in the app, and allow publishers to book in different slots according to their availability.",
    image: "/screenshot-4.PNG",
    color: "bg-lime-100"
  },
  {
    icon: Map,
    title: "Territory Management",
    description: "Efficiently manage and assign territories with our digital territory cards and management system.",
    image: "/territory.PNG",
    color: "bg-fuschia-100"
  },
  {
    icon: Hammer,
    title: "Duties Management",
    description: "Efficiently manage duties, like roving microphones, platform, video and sound operators, attendance, and cleaning groups.",
    image: "/duties.jpeg",
    color: "bg-emerald-100"
  },

  {
    icon: BriefcaseBusiness,
    title: "Efficient organisation",
    description: "Maintain an up-to-date digital directory of necessary information for easy access.",
    image: "/organize.jpeg",
    color: "bg-blue-100"
  },
  {
  icon: FileText,
  title: "PDF Generation",
  description: "Generate professional documents and reports automatically with our PDF creation tool.",
  image: "/pdf.jpg",
  color: "bg-indigo-100"
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Stay connected with publishers in your congregation through our messaging platform.",
    image: "/chat.PNG",
    color: "bg-purple-100"
  },
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
                      className="w-full h-auto max-w-md mx-auto max-h-[600px] object-contain"
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
                    className="w-full h-auto max-w-md mx-auto max-h-[600px] object-contain"
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