import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Floating Glow Shapes */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-pink-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-purple-500/20 rounded-full animate-pulse-slow"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-4 text-lg">Ready to bring your ideas to life</p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <div className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden text-center">
            {/* Top Gradient Strip */}
            <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500"></div>
            <div className="p-8">
              <MapPin className="mx-auto text-cyan-400 mb-4" size={32} />
              <h3 className="font-bold mb-2 text-slate-100">Location</h3>
              <p className="text-slate-300">Greater Noida, India</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden text-center">
            <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500"></div>
            <div className="p-8">
              <Mail className="mx-auto text-pink-400 mb-4" size={32} />
              <h3 className="font-bold mb-2 text-slate-100">Email</h3>
              <a
                href="mailto:chandrabhushan.sah15@gmail.com"
                className="text-slate-300 hover:text-slate-100 transition-colors break-all"
              >
                chandrabhushan.sah15@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden text-center sm:col-span-2 lg:col-span-1">
            <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500"></div>
            <div className="p-8">
              <Phone className="mx-auto text-purple-400 mb-4" size={32} />
              <h3 className="font-bold mb-2 text-slate-100">Phone</h3>
              <a
                href="tel:+917352793942"
                className="text-slate-300 hover:text-slate-100 transition-colors"
              >
                +91 7352793942
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Chandra Bhushan Sah — Crafted with passion .
          </p>
        </div>
      </div>
    </section>
  );
}
