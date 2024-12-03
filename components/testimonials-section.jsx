'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "John Smith",
    role: "Congregation Secretary",
    content: "Zeal has completely transformed how we manage our congregation. The meeting scheduler alone has saved us countless hours.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Sarah Johnson",
    role: "Ministry Group Overseer",
    content: "The territory management feature is incredible. It's made organizing field service so much more efficient.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Michael Brown",
    role: "Elder",
    content: "I appreciate how user-friendly the app is. Even our older members find it easy to use for their ministry reports.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100"
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
          <p className="text-xl text-gray-600">
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
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700">{testimonial.content}</p>
    </motion.div>
  )
}

