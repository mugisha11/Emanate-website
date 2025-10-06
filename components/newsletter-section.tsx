"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function NewsletterSection() {
  const [agreed, setAgreed] = useState(false)

  return (
    <section className="py-16 lg:py-20 bg-primary text-white relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">Stay UPDATED</h2>
          <p className="text-lg mb-8">
            Sign up for occasional updates about <span className="font-semibold">EMANATE</span>
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Input type="text" placeholder="Name" className="bg-white text-foreground border-0 h-12" />
            <Input type="email" placeholder="Email" className="bg-white text-foreground border-0 h-12" />
          </div>

          <Button
            size="lg"
            className="w-full md:w-auto bg-white/20 hover:bg-white/30 text-white border-2 border-white h-12 px-12 mb-6"
          >
            SUBSCRIBE
          </Button>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-2">
              <Checkbox
                id="marketing"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-0.5 bg-white"
              />
              <label htmlFor="marketing" className="text-white/90 leading-relaxed">
                I agree to email marketing
              </label>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              We use Mailchimp as our marketing platform. By clicking subscribe, you acknowledge that your information
              will be transferred to Mailchimp for processing. Learn more about Mailchimp's privacy practices. You can
              unsubscribe at any time by clicking the link in the footer of our emails.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
