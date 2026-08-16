import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, Cpu, Code, Wifi, Users, Target, Shield, Mail, Linkedin, ChevronRight, MessageSquare } from 'lucide-react'

function App() {
  const [visibleSections, setVisibleSections] = useState({})
  const sectionRefs = {
    services: useRef(null),
    capabilities: useRef(null),
    whyUs: useRef(null),
    contact: useRef(null)
  }
  const animatedSections = useRef(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedSections.current.has(entry.target.id)) {
            animatedSections.current.add(entry.target.id)
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.2 }
    )

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-900/95 backdrop-blur-sm border-b border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-ember-500">YOTTA</span>
              <span className="text-2xl font-bold text-steel-500 ml-1">FORGE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-steel-400 hover:text-ember-500 transition-colors">What We Do</a>
              <a href="#capabilities" className="text-steel-400 hover:text-ember-500 transition-colors">What We Can Build</a>
              <a href="#why-us" className="text-steel-400 hover:text-ember-500 transition-colors">Why Us</a>
              <a href="#contact" className="text-steel-400 hover:text-ember-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-900"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
            <span className="text-offwhite">YOTTA</span>
            <span className="text-ember-500">FORGE</span>
          </h1>
          <p className="text-2xl md:text-3xl text-steel-400 mb-10 font-medium tracking-wide">
            Software and hardware, built together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center px-10 py-4 bg-ember-500 text-white font-semibold rounded-none hover:bg-ember-600 transition-all spark-glow-hover group animate-spark">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-steel-500 rotate-90" />
        </div>
      </section>


      {/* Services Section */}
      <section id="services" ref={sectionRefs.services} className="py-24 bg-charcoal-900 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${visibleSections.services ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4 text-offwhite">
              <span className="text-ember-500">//</span> WHAT WE DO
            </h2>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto">
              We build the digital and physical systems that businesses run on
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="w-10 h-10" />,
                title: "Custom Software",
                description: "Web applications, mobile apps, and backend systems tailored to your business needs."
              },
              {
                icon: <Cpu className="w-10 h-10" />,
                title: "Embedded Systems",
                description: "Smart devices, controllers, and firmware that power physical equipment."
              },
              {
                icon: <Wifi className="w-10 h-10" />,
                title: "IoT Solutions",
                description: "Connected devices that collect data and automate operations in real time."
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Automation",
                description: "Systems that reduce manual work and improve consistency across your operations."
              }
            ].map((service, index) => (
              <div key={index} className="bg-charcoal-800 p-8 border border-charcoal-700 hover:border-ember-500 transition-all group hover:scale-105 transform duration-300">
                <div className="text-ember-500 mb-4 group-hover:spark-glow transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-offwhite mb-3">{service.title}</h3>
                <p className="text-steel-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" ref={sectionRefs.capabilities} className="py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${visibleSections.capabilities ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4 text-offwhite">
              <span className="text-ember-500">//</span> WHAT WE CAN BUILD
            </h2>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto">
              Demo projects that show what's possible
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Factory Dashboard",
                description: "A real-time monitoring system for manufacturing equipment. Tracks machine health, production output, and alerts operators to issues before they cause downtime.",
                tech: "React, Node.js, MQTT, Raspberry Pi",
                type: "Demo Project"
              },
              {
                title: "Warehouse Inventory Tracker",
                description: "Automated inventory management using RFID tags and barcode scanners. Updates stock levels in real time and generates reorder alerts when supplies run low.",
                tech: "Python, PostgreSQL, RFID Hardware",
                type: "Demo Project"
              },
              {
                title: "Remote Equipment Controller",
                description: "Web-based interface to control and monitor industrial equipment from anywhere. Includes safety interlocks, user authentication, and activity logging.",
                tech: "Vue.js, Arduino, WebSocket",
                type: "Demo Project"
              }
            ].map((project, index) => (
              <div key={index} className="bg-charcoal-900 border border-charcoal-700 overflow-hidden group hover:border-ember-500 transition-all hover:scale-105 transform duration-300">
                <div className="h-48 bg-gradient-to-br from-charcoal-700 to-charcoal-900 flex items-center justify-center">
                  <div className="text-steel-600 text-6xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-ember-500 uppercase tracking-wider">{project.type}</span>
                  <h3 className="text-2xl font-bold text-offwhite mt-2 mb-3">{project.title}</h3>
                  <p className="text-steel-400 text-sm mb-4">{project.description}</p>
                  <p className="text-xs text-steel-500">Tech: {project.tech}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-steel-500 italic">More case studies coming soon as we work with clients like you</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" ref={sectionRefs.whyUs} className="py-24 bg-charcoal-900 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${visibleSections.whyUs ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4 text-offwhite">
              <span className="text-ember-500">//</span> WHY YOTTA FORGE
            </h2>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto">
              Small team, big capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-12 h-12" />,
                title: "Full-Stack Expertise",
                description: "We understand both software and hardware. You won't need to coordinate multiple vendors—we handle the complete system."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Direct Communication",
                description: "You work directly with our founders and engineers. No account managers, no runaround—just clear, honest communication."
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Fixed-Scope Delivery",
                description: "We define clear project scopes and deliverables upfront. No surprise bills, no scope creep—just predictable results."
              }
            ].map((point, index) => (
              <div key={index} className="bg-charcoal-800 p-8 border border-charcoal-700 hover:border-ember-500 transition-all group hover:scale-105 transform duration-300">
                <div className="text-ember-500 mb-4 group-hover:spark-glow transition-all">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-bold text-offwhite mb-3">{point.title}</h3>
                <p className="text-steel-400 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="py-24 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${visibleSections.contact ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4 text-offwhite">
              <span className="text-ember-500">//</span> LET'S TALK
            </h2>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <form 
              action="https://formspree.io/f/mgawnwne" 
              method="POST"
              className="space-y-6"
            >
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-charcoal-900 border border-charcoal-700 text-offwhite focus:border-ember-500 focus:outline-none transition-colors peer"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="name"
                  className="absolute left-4 top-3 text-steel-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-ember-500 peer-focus:bg-charcoal-900 peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-charcoal-900 peer-not-placeholder-shown:px-1"
                >
                  Your Name
                </label>
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-charcoal-900 border border-charcoal-700 text-offwhite focus:border-ember-500 focus:outline-none transition-colors peer"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="email"
                  className="absolute left-4 top-3 text-steel-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-ember-500 peer-focus:bg-charcoal-900 peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-charcoal-900 peer-not-placeholder-shown:px-1"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <textarea 
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-charcoal-900 border border-charcoal-700 text-offwhite focus:border-ember-500 focus:outline-none transition-colors resize-none peer"
                  placeholder=" "
                  required
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-4 top-3 text-steel-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-ember-500 peer-focus:bg-charcoal-900 peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-charcoal-900 peer-not-placeholder-shown:px-1"
                >
                  Tell us about your project
                </label>
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-ember-500 text-white font-semibold hover:bg-ember-600 transition-all spark-glow-hover"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:yottaforgeofficial@gmail.com" className="flex items-center text-steel-400 hover:text-ember-500 transition-colors group">
                <Mail className="w-5 h-5 mr-2 group-hover:spark-glow" />
                <span>yottaforgeofficial@gmail.com</span>
              </a>
              <span className="text-steel-600 hidden sm:block">|</span>
              <a href="https://www.linkedin.com/in/yottaforge/" target="_blank" rel="noopener noreferrer" className="flex items-center text-steel-400 hover:text-ember-500 transition-colors group">
                <Linkedin className="w-5 h-5 mr-2 group-hover:spark-glow" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-charcoal-900 border-t border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-xl font-bold text-ember-500">YOTTA</span>
              <span className="text-xl font-bold text-steel-500 ml-1">FORGE</span>
            </div>
            <p className="text-steel-500 text-sm">
              © 2024 Yotta Forge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
