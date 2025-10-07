import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">EMANATE</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Evidences Matter - Harnessing evidence for sustainable solutions to population and family challenges.
            </p>
            <p className="text-xs text-white/60">Registered: No 051/2014</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-white/80 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-white/80 hover:text-white transition-colors">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-white/80 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programmes</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Women & Girls' Involvement</li>
              <li>Men Engage</li>
              <li>Equality</li>
              <li>Climate Change</li>
              <li>Critical Thinking</li>
              <li>Capacity Building</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-white/80">
                <Mail className="w-4 h-4 inline mr-2" />
                info@emanate.org
              </p>
              <p className="text-sm text-white/80">Kigali, Rwanda</p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {currentYear} EMANATE. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                PRIVACY POLICY
              </Link>
              <Link href="/careers" className="hover:text-white transition-colors">
                CAREERS
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
