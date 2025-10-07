"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, GraduationCap, Heart } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/diverse-group-of-young-professionals-collaborating.jpg"
            alt="Diverse professionals collaborating"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join EMANATE in Driving Change
            </h1>
            <p className="text-xl mb-8">
              Be part of a team dedicated to evidence-based solutions and community empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Join EMANATE?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a dynamic environment where your work directly impacts communities 
              and drives sustainable change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Inclusive Culture",
                description: "Work in a diverse, supportive environment that values every voice."
              },
              {
                icon: GraduationCap,
                title: "Growth & Learning",
                description: "Continuous learning opportunities and professional development support."
              },
              {
                icon: Heart,
                title: "Meaningful Impact",
                description: "Make a real difference in communities through evidence-based work."
              },
              {
                icon: Briefcase,
                title: "Work-Life Balance",
                description: "Flexible work arrangements and comprehensive benefits package."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-all"
              >
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our team and contribute to sustainable community development.
            </p>
          </motion.div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Research Coordinator",
                location: "Kigali, Rwanda",
                type: "Full-time",
                description: "Lead research projects focused on evidence-based community interventions."
              },
              {
                title: "Community Engagement Specialist",
                location: "Kigali, Rwanda",
                type: "Full-time",
                description: "Develop and implement community engagement strategies."
              },
              {
                title: "Data Analyst",
                location: "Kigali, Rwanda",
                type: "Full-time",
                description: "Analyze research data and create actionable insights."
              }
            ].map((position, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <p className="text-muted-foreground">{position.location} · {position.type}</p>
                  </div>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Apply Now
                  </button>
                </div>
                <p>{position.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Application Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply Online",
                  description: "Submit your application through our online portal"
                },
                {
                  step: "2",
                  title: "Initial Review",
                  description: "Our team reviews your application and qualifications"
                },
                {
                  step: "3",
                  title: "Interviews",
                  description: "Meet with team members and discuss your potential role"
                }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
        
      <NewsletterSection />
      <Footer />
    </div>
  )
}