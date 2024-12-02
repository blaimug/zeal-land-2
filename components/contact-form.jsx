'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import ReCAPTCHA from 'react-google-recaptcha'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captchaToken, setCaptchaToken] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!captchaToken) {
      alert('Please complete the captcha')
      return
    }
    setIsSubmitting(true)
    
    // Handle form submission here
    // You'll need to implement the API route and backend logic
    
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full min-h-[150px]"
        />
      </div>
      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={setCaptchaToken}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-[#006cff] hover:bg-[#006cff]/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

