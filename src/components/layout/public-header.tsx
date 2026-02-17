// src/components/layout/public-header.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Menu, X, Users, Zap, Mail, Target, Phone,
  Building2, BookOpen, BarChart, Star, Gift 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navData = {
    products: [
      { title: 'Leads', desc: 'Instant access to 626M+ triple-verified leads ready for cold outreach.', icon: <Users className="text-blue-500" /> },
      { title: 'Intent Data', desc: 'Reach buyers searching for your solution with 21B+ real-time intent signals.', icon: <Zap className="text-blue-500" /> },
      { title: 'Email Engine', desc: 'Send emails that land and convert, using warm inboxes and smart automation.', icon: <Mail className="text-blue-500" /> },
      { title: 'Cold Email Setup', desc: 'Quickly launch your cold email campaigns with our easy setup guide.', icon: <Target className="text-blue-500" /> },
      { title: 'Phone Numbers', desc: 'Find mobile numbers for qualified prospects for your sales team.', icon: <Phone className="text-blue-500" /> },
    ],
    company: [
      { title: 'Careers', desc: 'Join a growing team that\'s revolutionizing the way businesses generate leads.', icon: <Building2 className="text-blue-500" /> },
      { title: 'Team', desc: 'Meet the innovators behind LisTeg, passionate about helping you grow.', icon: <Users className="text-blue-500" /> },
    ],
    resources: [
      { title: 'Blog', desc: 'Get expert tips, strategies, and insights on cold email marketing.', icon: <BookOpen className="text-blue-500" /> },
      { title: 'Case Studies', desc: 'See how businesses have scaled with LisTeg\'s proven approach.', icon: <BarChart className="text-blue-500" /> },
      { title: 'Testimonials', desc: 'Read success stories from users who\'ve transformed their outreach.', icon: <Star className="text-blue-500" /> },
      { title: 'Affiliate Program', desc: 'Earn commissions by referring new users to LisTeg.', icon: <Gift className="text-blue-500" /> },
    ]
  };

  // Animation Variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* NAVIGATION */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="fixed top-0 left-0 right-0 z-[100] bg-white"
      >
        <div className="relative flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          
          {/* LEFT SIDE - LOGO */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-600 p-1.5 rounded-lg"
            >
              <div className="w-5 h-5 border-2 border-white rounded-sm" />
            </motion.div>
            <span className="tracking-tight text-black">LisTeg</span>
          </motion.div>

          {/* CENTER MENU */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8 text-lg font-semibold text-black">
            {['Products', 'Resources', 'Company'].map((item) => (
              <div
                key={item}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.toLowerCase())}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button 
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1 hover:text-purple-600 transition"
                >
                  {item}
                  <motion.div
                    animate={{ rotate: activeDropdown === item.toLowerCase() ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.button>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {activeDropdown === item.toLowerCase() && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-3 w-[500px]"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid grid-cols-2 gap-2">
                        {navData[item.toLowerCase() as keyof typeof navData]?.map(
                          (sub, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ x: 5, backgroundColor: "#f8fafc" }}
                              className="flex gap-3 p-3 rounded-xl transition cursor-pointer"
                            >
                              <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                {React.cloneElement(sub.icon as React.ReactElement)}
                              </div>
                              <div>
                                <div className="font-bold text-slate-900 text-sm">
                                  {sub.title}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                  {sub.desc}
                                </div>
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <motion.a 
              href="#" 
              whileHover={{ y: -2 }}
              className="hover:text-purple-600 transition"
            >
              Pricing
            </motion.a>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="hidden sm:block text-base font-semibold text-black hover:text-purple-600 transition"
            >
              Log In
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition shadow-lg shadow-purple-200 whitespace-nowrap"
            >
              Get 100 Free Leads
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="lg:hidden fixed inset-0 z-[110] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 text-xl font-bold"
              >
                <div className="bg-purple-600 p-1.5 rounded-lg">
                  <div className="w-4 h-4 border-2 border-white rounded-sm" />
                </div>
                <span>LisTeg</span>
              </motion.div>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)} 
                className="p-2"
              >
                <X />
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 pb-20">
              <motion.div 
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="flex flex-col gap-2"
              >
                {['Products', 'Resources', 'Company'].map((item) => (
                  <motion.div 
                    key={item} 
                    variants={fadeInUp}
                    className="border-b border-slate-50"
                  >
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === item.toLowerCase() ? null : item.toLowerCase())}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-lg font-bold text-slate-900">{item}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === item.toLowerCase() ? 180 : 0 }}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.toLowerCase() && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pb-4 space-y-3 overflow-hidden"
                        >
                          {navData[item.toLowerCase() as keyof typeof navData]?.map((sub, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="bg-slate-50 p-4 rounded-2xl flex gap-4"
                            >
                              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 text-purple-600">
                                {sub.icon}
                              </div>
                              <div>
                                <div className="font-bold text-sm text-slate-900">{sub.title}</div>
                                <div className="text-xs text-slate-500 leading-relaxed mt-1">{sub.desc}</div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                
                <motion.a 
                  variants={fadeInUp}
                  href="#" 
                  className="text-lg font-bold text-slate-900 py-4 border-b border-slate-50"
                >
                  Pricing
                </motion.a>
                
                <motion.button 
                  variants={fadeInUp}
                  className="text-left text-lg font-bold text-slate-900 py-4 border-b border-slate-50"
                >
                  Log In
                </motion.button>
                
                <motion.div 
                  variants={fadeInUp}
                  className="mt-10"
                >
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-purple-600 text-white py-4 rounded-full font-bold shadow-lg"
                  >
                    Get 100 Free Leads
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;