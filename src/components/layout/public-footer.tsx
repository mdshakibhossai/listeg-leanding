// src/components/layout/public-footer.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, Linkedin, Facebook, Instagram, Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative bg-[#eff5ff] text-slate-900 pt-20 pb-10 overflow-hidden z-10"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-slate-100 pt-16 mb-16">
          
          {/* Brand & Socials */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 space-y-6 text-slate-900"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-purple-600 p-2 rounded-lg"
              >
                <div className="w-5 h-5 border-2 border-white rounded-sm" />
              </motion.div>
              <span className="text-3xl font-bold tracking-tighter">LisTeg</span>
            </motion.div>
            <p className="font-medium">Best B2B Lead Database</p>
            
            <div className="flex gap-3">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-slate-900" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-3">
              <motion.a 
                whileHover={{ x: 5 }}
                href="mailto:hello@listeg.com" 
                className="flex items-center gap-3 p-3 rounded-2xl border border-purple-100 bg-purple-50/30 w-fit pr-10 hover:bg-purple-50 transition shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Mail className="w-4 h-4 text-purple-600" />
                </div>
                <span className="font-bold text-black text-sm">hello@listeg.com</span>
              </motion.a>
              <motion.a 
                whileHover={{ x: 5 }}
                href="tel:+8801872379422" 
                className="flex items-center gap-3 p-3 rounded-2xl border border-purple-100 bg-purple-50/30 w-fit pr-10 hover:bg-purple-50 transition shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Phone className="w-4 h-4 text-purple-600" />
                </div>
                <span className="font-bold text-black text-sm">+880 1872379422</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 text-black">
            {/* Products */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold text-lg mb-6">Products</h4>
              <ul className="space-y-4">
                {['People Leads', 'Company Search', 'Data Enrichment', 'Unlimited Export', 'LinkedIn Enrichment'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a href="#" className="text-sm hover:text-purple-600 font-medium transition">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                {['About', 'Pricing', 'Reviews', 'Team', 'Affiliate', 'Blog', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a href="about-us" className="text-sm hover:text-purple-600 font-medium transition">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Comparison */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2 sm:col-span-1"
            >
              <h4 className="font-bold text-lg mb-6">Comparison</h4>
              <ul className="space-y-4">
                {[
                  'LisTeg vs Apollo', 'LisTeg vs Lusha', 'LisTeg vs Seamless', 
                  'LisTeg vs Clearbit', 'LisTeg vs Snov.io', 'LisTeg vs A-Leads',
                  'LisTeg vs Zoominfo', 'LisTeg vs Wiza'
                ].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a href="#" className="text-sm hover:text-purple-600 font-medium transition">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-slate-100 pt-8 mt-8 text-black"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex gap-6 text-xs font-bold">
              <motion.a whileHover={{ scale: 1.05 }} href="privacy" className="hover:text-slate-900 transition">Privacy Policy</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="terms" className="hover:text-slate-900 transition">Terms & Conditions</motion.a>
            </div>
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-[11px] font-bold"
            >
              2026 — ©LisTeg. All product trademarks, names, logos, and brands are property of their respective owners
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;