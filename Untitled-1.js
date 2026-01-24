'use client';

import React, { useState } from 'react';
import { Menu, X, Hammer, ShieldCheck, Home, Phone, ArrowRight, Star } from 'lucide-react';

/**
 * COMPONENT: Navbar
 * UX GOAL: Sticky navigation ensures the "Get Quote" button is always accessible.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Home className="h-8 w-8 text-brand-accent" />
            <span className="ml-2 text-2xl font-bold text-brand-dark tracking-tight">
              My House <span className="text-brand-primary">Roofing</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-brand-primary font-medium transition">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-brand-primary font-medium transition">Projects</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-primary font-medium transition">Reviews</a>
            
            {/* Primary CTA - High Contrast */}
            <button className="bg-brand-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold transition shadow-lg flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-dark">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-700 font-medium">Services</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 font-medium">Projects</a>
            <button className="w-full mt-4 bg-brand-accent text-white px-4 py-3 rounded font-bold">
              Call Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

/**
 * COMPONENT: Hero Section
 * UX GOAL: Establish authority immediately. Use a dark overlay on images to make text pop.
 */
const Hero = () => {
  return (
    <div className="relative bg-brand-dark text-white pt-24 pb-32 overflow-hidden">
      {/* Abstract Background Shape */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-primary opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-200 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4 mr-2" /> Licensed & Insured Construction
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Roofing & Construction <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">
              Done Right.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Protect your biggest investment with My House Roofing. We provide top-tier craftsmanship, 
            transparent pricing, and a 15-year warranty on all structural work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-accent hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl flex items-center justify-center">
              Request Inspection <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition backdrop-blur-sm">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * COMPONENT: Service Card
 * REUSABLE: Keeps the code DRY (Don't Repeat Yourself).
 */
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
      <Icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
    <a href="#" className="inline-block mt-4 text-brand-primary font-semibold hover:text-brand-accent transition">
      Learn more &rarr;
    </a>
  </div>
);

/**
 * COMPONENT: Services Section
 * UX GOAL: Grid layout for easy scanning.
 */
const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Roof Replacement",
      description: "Complete tear-offs and replacements using premium asphalt shingles, metal, or tile materials."
    },
    {
      icon: Hammer,
      title: "General Construction",
      description: "From framing to finishing, we handle structural repairs, additions, and exterior renovations."
    },
    {
      icon: ShieldCheck,
      title: "Siding & Gutters",
      description: "Boost curb appeal and drainage with high-quality vinyl siding and seamless gutter systems."
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">Comprehensive Home Solutions</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * COMPONENT: Trust Indicators
 * UX GOAL: Build confidence before asking for the sale.
 */
const Stats = () => {
  return (
    <div className="bg-brand-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-4xl font-bold mb-1">15+</div>
            <div className="text-blue-200 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">1.2k</div>
            <div className="text-blue-200 text-sm">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">100%</div>
            <div className="text-blue-200 text-sm">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">24/7</div>
            <div className="text-blue-200 text-sm">Emergency Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * COMPONENT: Contact Form
 * UX GOAL: Simple inputs. Don't ask for too much info upfront.
 */
const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Text Side */}
          <div className="p-12 md:w-1/2 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Ready to start your project?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get a free, no-obligation estimate. Our team will inspect your property and provide a detailed report within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-brand-accent mr-4" />
                <span className="text-xl font-semibold">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 text-brand-accent mr-4" />
                <span className="text-lg">Rated 4.9/5 on Google</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-12 md:w-1/2">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition" placeholder="(555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition bg-white">
                  <option>Roof Replacement</option>
                  <option>Repair</option>
                  <option>Siding/Gutters</option>
                  <option>Other</option>
                </select>
              </div>
              <button className="w-full bg-brand-dark hover:bg-gray-900 text-white font-bold py-4 rounded-lg transition shadow-lg">
                Get My Free Estimate
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

/**
 * COMPONENT: Footer
 */
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p>&copy; {new Date().getFullYear()} My House Roofing and Construction Works. All rights reserved.</p>
    </div>
  </footer>
);

/**
 * MAIN PAGE LAYOUT
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a', // Midnight Navy for backgrounds/footers
          primary: '#1e40af', // Trustworthy Blue for headers
          accent: '#f97316', // Safety Orange for Buttons/CTAs
          light: '#f8fafc', // Off-white for section backgrounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
