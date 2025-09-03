import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-200 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-4 text-lg">Ready to bring your ideas to life</p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <div className="text-center p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors">
            <MapPin className="mx-auto text-slate-300 mb-4" size={32} />
            <h3 className="font-bold mb-2 text-slate-100">Location</h3>
            <p className="text-slate-300">Greater Noida, India</p>
          </div>

          {/* Email */}
          <div className="text-center p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors">
            <Mail className="mx-auto text-slate-300 mb-4" size={32} />
            <h3 className="font-bold mb-2 text-slate-100">Email</h3>
            <a
              href="mailto:chandrabhushan.sah15@gmail.com"
              className="text-slate-300 hover:text-slate-100 transition-colors break-all"
            >
              chandrabhushan.sah15@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="text-center p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors sm:col-span-2 lg:col-span-1">
            <Phone className="mx-auto text-slate-300 mb-4" size={32} />
            <h3 className="font-bold mb-2 text-slate-100">Phone</h3>
            <a
              href="tel:+917352793942"
              className="text-slate-300 hover:text-slate-100 transition-colors"
            >
              +91 7352793942
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-slate-700">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Chandra Bhushan Sah — Crafted with passion
          </p>
        </div>
      </div>
    </section>
  );
}
