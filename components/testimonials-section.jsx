'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Benjamin G.",
    role: "CLM Overseer",
    content: "Preparing S-140 schedules used to take so many hours, especially copying and pasting part titles. Now it's automatic with Zeal.",
    image: "/neutralAvatar.png"
  },
  {
    name: "Jules I.",
    role: "A/V Overseer",
    content: "Because duties in the app are synchronized, brothers know what they are going to do, and can prepare well before. I appreciate the nice design too.",
    image: "/neutralAvatar.png"
  },
  {
    name: "Philadephie M.",
    role: "Elder",
    content: "Managing Cart Witnessing was hard before, but now publishers can book for their slots at the time convenient for them, and do it ahead of time. ",
    image: "/neutralAvatar.png"
  },
  {
    name: "Christian M.",
    role: "Elder",
    content: "I appreciate how user-friendly the app is. Even our older publishers find it easy to use for their ministry reports.",
    image: "/neutralAvatar.png"
  },
  {
    name: "Medad M.",
    role: "Elder",
    content: "I love you the app generates nice PDFs after the scheduling, so that we can post them on the board. It even supports the second room feature, which we are using.",
    image: "/neutralAvatar.png"
  },
  {
    name: "Joachim I.",
    role: "WT Study Planner",
    content: "Making plans for the Watchtower Study is so much better now, you easily select public talks, and you can assign visiting speakers, hospitality and more. ",
    image: "/neutralAvatar.png"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Loved by Congregations</h2>
          <p className="text-lg text-gray-600">
            Here's what brothers and sisters are saying about Zeal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-bold">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial.content}</p>
    </motion.div>
  )
}

