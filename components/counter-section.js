'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const counters = [
    { label: 'congregations', endValue: 80, suffix: '+' },
    { label: 'profiles', endValue: 1500, suffix: '+' },
    { label: 'schedules', endValue: 1550, suffix: '+' },
]

export function CounterSection() {
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById('counter-section')
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [])

    return (
        <section id="counter-section" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {counters.map((counter, index) => (
                        <CounterItem key={index} {...counter} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function CounterItem({ label, endValue, suffix, inView }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (inView) {
            let start = 0
            const duration = 2000
            const step = (timestamp) => {
                if (!start) start = timestamp
                const progress = Math.min((timestamp - start) / duration, 1)
                setCount(Math.floor(progress * endValue))
                if (progress < 1) {
                    window.requestAnimationFrame(step)
                }
            }
            window.requestAnimationFrame(step)
        }
    }, [inView, endValue])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <h3 className="text-4xl font-bold mb-2">
                {count}
                {suffix}
            </h3>
            <p className="text-xl text-gray-600">{label}</p>
        </motion.div>
    )
}

