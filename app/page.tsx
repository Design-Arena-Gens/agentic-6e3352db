'use client';

import { useState } from 'react';
import {
  Brain,
  Code,
  Phone,
  BarChart3,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Zap,
  Target,
  Users
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Automation & ML",
      description: "Custom AI automations with optional machine learning capabilities tailored to your business needs",
      features: ["Process Automation", "Predictive Analytics", "Custom ML Models", "Data Processing"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Creation & Redesign",
      description: "Modern, responsive websites built from scratch or complete redesigns of existing platforms",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Modern Frameworks"]
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "AI Callers & Messaging",
      description: "Intelligent AI-powered communication systems for calls and automated messaging",
      features: ["24/7 Availability", "Natural Conversations", "Multi-Language", "Smart Routing"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Dashboard & Management",
      description: "Comprehensive dashboard solutions for social media and market management",
      features: ["Real-time Analytics", "Social Media Integration", "Market Insights", "Custom Reports"]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "Every solution is tailored to your specific business needs and goals"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "End-to-End Service",
      description: "We handle everything from A to Z, so you can focus on your business"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to delivering excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Nexia
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
              <a href="#benefits" className="hover:text-blue-400 transition">Benefits</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
            <div className="px-4 py-4 space-y-4">
              <a href="#services" className="block hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#benefits" className="block hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Benefits</a>
              <a href="#contact" className="block hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              AI Solutions for Every Business
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From AI automation to machine learning, websites, AI callers, and complete management solutions.
              We deliver custom solutions from A to Z.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive AI solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition transform hover:-translate-y-1"
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Nexia?</h2>
            <p className="text-xl text-gray-300">We deliver excellence in every project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 hover:border-blue-500/50 transition"
              >
                <div className="inline-block p-4 bg-blue-500/20 rounded-full mb-4 text-blue-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Let's discuss your custom AI solution. We're here to help you succeed from A to Z.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contact@nexia.agency"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center space-x-2 bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-900 transition"
            >
              <Phone className="w-5 h-5" />
              <span>Schedule a Call</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">Nexia</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 Nexia. Custom AI solutions for every business.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
