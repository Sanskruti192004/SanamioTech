import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full text-gray-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              SANAM<span className="text-orange-500">IO</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Delivering innovative IT solutions and development services to
              help businesses thrive in the digital world.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-orange-400 cursor-pointer transition" />
              <Twitter className="w-5 h-5 hover:text-orange-400 cursor-pointer transition" />
              <Linkedin className="w-5 h-5 hover:text-orange-400 cursor-pointer transition" />
              <Github className="w-5 h-5 hover:text-orange-400 cursor-pointer transition" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Web Development</li>
              <li className="hover:text-white cursor-pointer">Mobile Development</li>
              <li className="hover:text-white cursor-pointer flex items-center gap-2">
                SEO Services <span className="w-2 h-2 bg-orange-500 rounded-full" />
              </li>
              <li className="hover:text-white cursor-pointer">
                E-commerce Solutions
              </li>
              <li className="hover:text-white cursor-pointer">
                Custom Software
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Portfolio</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                team@sanamio.tech
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                +91 8085539207<br />+91 7667939909
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                Kunal Avenue, Rajendra Nagar,<br />
                Indore (458553), India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <span>© 2025 Sanamio Tech. All rights reserved.</span>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>

      {/* MSME badge */}
      <div className="flex justify-center items-center gap-4 pb-12 text-gray-500 text-sm">
        <img
          src="/msme.png"
          alt="MSME"
          className="h-10 object-contain"
        />
        <span>
          Udyam Registered Enterprise (UDYAM-MP-23-0236569)
        </span>
      </div>
    </footer>
  );
};

export default Footer;
