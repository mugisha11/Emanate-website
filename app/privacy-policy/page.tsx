"use client"

import { motion } from "framer-motion"
import { Shield, Lock, UserCheck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Hero */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-6xl font-bold mb-6"
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl lg:text-2xl text-white/90 text-balance"
            >
              At EMANATE, we take your privacy seriously. Learn how we collect, use, and protect your information.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {/* Key Points Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
          {
            icon: Shield,
            title: "Data Protection",
            description: "We implement strong security measures to protect your personal information.",
          },
          {
            icon: Lock,
            title: "Information Security",
            description: "Your data is encrypted and stored securely on our protected servers.",
          },
          {
            icon: UserCheck,
            title: "Your Rights",
            description: "You have full control over your personal data and how it's used.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
          >
            <item.icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Professional information for career applications</li>
              <li>Feedback and survey responses</li>
              <li>Communications with our team</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our programs</li>
              <li>Process applications and requests</li>
              <li>Send updates and newsletters (with your consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
            <p className="mb-4">
              EMANATE implements appropriate technical and organizational security measures to protect 
              your personal data against accidental or unlawful destruction, loss, alteration, 
              unauthorized disclosure, or access.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Request corrections to your data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Object to data processing</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p>Email: info@emanate.org</p>
              <p>Address: Kigali, Rwanda</p>
              <p>Registration: No 051/2014</p>
            </div>
          </section>
        </motion.div>
      </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  )
}