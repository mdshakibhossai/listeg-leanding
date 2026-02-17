// src/app/(public)/page.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { 
  ChevronDown, CheckCircle2, Mail, CreditCard,
  Download, Filter, Search, Star, ArrowRight, 
  X, Phone, Building2, Users, Target,
  Zap, Shield 
} from 'lucide-react';


export default function LisTegClone() {
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState(2);

  const testimonials = [
    {
      name: "SAM WILSON",
      title: "Managing Director",
      text: "I've specialised in email marketing since 2018 and in this time I've used almost every popular email outreach tool available on the market today – Instantly is hands down my favourite of them all."
    },
    {
      name: "SARAH CHEN", 
      title: "Head of Sales",
      text: "I've specialised in email marketing since 2018 and in this time I've used almost every popular email outreach tool available on the market today – Instantly is hands down my favourite of them all."
    },
    {
      name: "MICHAEL RODRIGUEZ",
      title: "GTM Strategist", 
      text: "I've specialised in email marketing since 2018 and in this time I've used almost every popular email outreach tool available on the market today – Instantly is hands down my favourite of them all."
    }
  ];

  const stats = [
    { value: "220M+", label: "Lead Database" },
    { value: "99%", label: "Email Accuracy" },
    { value: "1,000+", label: "Happy Users" },
    { value: "24/7", label: "Live Support" }
  ];

  const features = [
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "AI Lead Finder",
      description: "Find the right buyers with our intelligent lead discovery engine"
    },
    {
      icon: <Building2 className="w-6 h-6 text-purple-600" />,
      title: "220M+ Contacts",
      description: "Access verified B2B contacts & companies worldwide"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Unlimited Exports",
      description: "Download unlimited leads from your saved lists"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "99% Accuracy",
      description: "Verified emails with industry-leading accuracy"
    }
  ];

  const faqs = [
    {
      question: "What is LisTeg?",
      answer: "LisTeg is a powerful B2B lead generation platform that helps you find and connect with the right decision-makers using AI-driven search and verified data."
    },
    {
      question: "Can I try the platform for free?",
      answer: "Yes! We offer 100 free credits for new users so you can test our lead finder and export capabilities without any credit card required."
    },
    {
      question: "How many leads are available in your database?",
      answer: "LisTeg gives you access to a massive database of 220 million+ verified B2B contacts and company leads, all ready to be searched, filtered, and exported to support your outreach and lead generation goals."
    },
    {
      question: "How many leads can I export?",
      answer: "Depending on your plan, we offer unlimited exports from your saved lists, allowing you to scale your outreach without worrying about export limits."
    },
    {
      question: "What filters can I use to search for leads & company?",
      answer: "You can filter by job title, industry, company size, location, technologies used, and much more to build a hyper-targeted lead list."
    },
    {
      question: "Is Lead Email verification required?",
      answer: "No, our database is regularly updated and verified. However, we also provide real-time enrichment to ensure the highest deliverability for your emails."
    }
  ];

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

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 overflow-x-hidden">
      
      {/* ANIMATED BACKGROUND GRADIENT BLOBS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-100/40 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] rounded-full bg-pink-50/30 blur-[120px]"
        />
      </div>

      {/* Hero section padding */}
      <div className="pt-20" />

      {/* HERO SECTION */}
      <header className="relative z-10 pt-8 sm:pt-16 pb-12 px-4 sm:px-6 text-center max-w-7xl mx-auto">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-2 bg-white border border-purple-200 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-slate-700 mb-6 sm:mb-8 shadow-sm"
        >
          <span className="flex items-center gap-1">
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-100 rounded-full flex items-center justify-center"
            >
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-600 rounded-full animate-pulse" />
            </motion.span>
            220M+ B2B Leads
          </span>
        </motion.div>

        <motion.h1 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-4 sm:mb-6 leading-[1.1]"
        >
          Find Your Ideal Customers with <br className="hidden sm:block" />
          <motion.span 
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%]"
          >
            AI Lead Finder
          </motion.span>
        </motion.h1>

        <motion.p 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-4"
        >
          Access 220M+ verified B2B contacts & companies to find the right buyers, 
          enrich leads, and build a hyper-targeted list for outbound campaigns.
        </motion.p>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
        >
          <motion.button 
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-purple-900 hover:bg-black text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-xl"
          >
            Get Started for FREE
          </motion.button>
          <motion.button 
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white border border-slate-200 hover:border-purple-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-sm"
          >
            Get a demo
          </motion.button>
        </motion.div>

        {/* Online Dashboard Screenshot */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
          className="mt-12 flex justify-center px-4"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-full max-w-6xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition" />
            <Image
              src="https://listeg.com/wp-content/uploads/2025/12/Screenshot_194.png"
              alt="LisTeg Dashboard Preview"
              width={1400}
              height={800}
              className="rounded-3xl shadow-2xl border border-slate-200 relative"
              priority
            />
          </motion.div>
        </motion.div>

        {/* View All Link */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ x: 10 }}
          className="mt-4 text-right text-xs sm:text-sm text-purple-600 font-medium px-4 cursor-pointer"
        >
          View all 235.4M contacts →
        </motion.div>
      </header>

      {/* SOCIAL PROOF */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-8 sm:py-12 text-center relative z-10 px-4"
      >
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-slate-500 font-medium mb-3 sm:mb-4"
        >
          Over 1,000+ top agencies, GTM experts, and sales teams find leads with LisTeg
        </motion.p>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 text-white p-1.5 rounded-full text-[8px] sm:text-[10px] font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              G
            </div>
            <span className="font-bold text-slate-800 text-xs sm:text-sm">50+ User Reviews</span>
          </div>
          <div className="flex text-purple-500 gap-0.5 ml-0 sm:ml-2">
            {[1,2,3,4,5].map((s, i) => (
              <motion.div
                key={s}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Star size={16} className="fill-current text-purple-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* FEATURES SECTION */}
      <section className="py-32 bg-white"> 
        <div className="max-w-6xl mx-auto px-6"> 

          {/* Section Title */}
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-slate-900"
          >
            How It Works?
          </motion.h2>

          <div className="space-y-12"> 

            {/* CARD 1 */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50 }}
              className="bg-[#F1F5F9] rounded-[2.5rem] p-12 md:p-16 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Visual Side */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-indigo-400/20 rounded-full blur-[80px]" />
                  <div className="order-1 md:order-2 relative">
                    <div className="absolute -top-8 -right-8 w-56 h-56 bg-purple-400/20 rounded-full blur-[80px]" />
                    <div className="relative bg-white/80 p-6 rounded-3xl shadow-xl border border-white">
                      <Image 
                        src="https://listeg.com/wp-content/uploads/2025/12/Adam-Roberts.png" 
                        alt="Filters" 
                        width={500} 
                        height={350} 
                        className="rounded-xl w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
                    Access to 220M+ B2B Contacts and Company
                  </h3>
                  <p className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed">
                    Find the right companies and decision-makers using our B2B data. Connect only with companies and buyers that actually fit your ICP.
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black border border-slate-200 rounded-full font-bold text-base md:text-lg shadow-md hover:shadow-lg transition"
                  >
                    Get Started for FREE
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50 }}
              className="bg-[#F1F5F9] rounded-[2.5rem] p-12 md:p-16 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Text Side */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="order-2 md:order-1"
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
                    Build the hyper-targeted Lead Filter with AI
                  </h3>
                  <p className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed">
                    Use our advanced filters to narrow down prospects by job title, company size, location, industry, and keywords.
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black border border-slate-200 rounded-full font-bold text-base md:text-lg shadow-md hover:shadow-lg transition"
                  >
                    Get Started for FREE
                  </motion.button>
                </motion.div>
                
                {/* Visual Side */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="order-1 md:order-2 relative"
                >
                  <div className="absolute -top-8 -right-8 w-56 h-56 bg-purple-400/20 rounded-full blur-[80px]" />
                  <div className="relative bg-white/80 p-6 rounded-3xl shadow-xl border border-white">
                    <Image 
                      src="https://listeg.com/wp-content/uploads/2025/12/Adam-Roberts-1.png" 
                      alt="Filters" 
                      width={500} 
                      height={350} 
                      className="rounded-xl w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50 }}
              className="bg-[#F1F5F9] rounded-[2.5rem] p-12 md:p-16 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Visual Side */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-indigo-400/20 rounded-full blur-[80px]" />
                  <div className="order-1 md:order-2 relative">
                    <div className="absolute -top-8 -right-8 w-56 h-56 bg-purple-400/20 rounded-full blur-[80px]" />
                    <div className="relative bg-white/80 p-6 rounded-3xl shadow-xl border border-white">
                      <Image 
                        src="https://listeg.com/wp-content/uploads/2025/12/Adam-Roberts.png" 
                        alt="Filters" 
                        width={500} 
                        height={350} 
                        className="rounded-xl w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
                    Find anyone's accurate email address in seconds
                  </h3>
                  <p className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed">
                    Access 220M+ verified B2B contacts to enrich and personalize your prospect emails with our AI Lead Finder!
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black border border-slate-200 rounded-full font-bold text-base md:text-lg shadow-md hover:shadow-lg transition"
                  >
                    Get Started for FREE
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Top Header */}
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-[1000] text-slate-900 text-center mb-24 tracking-tight"
          >
            Explore the most up-to-date B2B data
          </motion.h2>

          {/* Feature Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto mb-32">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-[52px] font-[1000] text-slate-900 leading-[1.05] mb-8 tracking-tight">
                Effortlessly scale cold outreach with LisTeg and unlimited exports.
              </h3>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3.5 rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(124,58,237,0.3)] transition-all active:scale-95"
              >
                Get Started for FREE
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Access 220M+ verified B2B contacts to enrich and personalize prospect emails with our AI Lead Finder. Use advanced filters to build hyper-targeted lists, then download unlimited leads from your saved lists with no export limits.
              </p>
              <ul className="space-y-4">
                {[
                  "220M+ Contacts & Companies Lead Database",
                  "Use our advanced filters like industry, company size, and location etc",
                  "Upload LinkedIn lists and find verified emails in seconds",
                  "Export unlimited leads from your saved lists"
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <div className="bg-[#7C3AED] rounded-full p-1 flex-shrink-0">
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    <span className="text-sm font-bold">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-14">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left relative group cursor-pointer"
              >
                {index !== 0 && (
                  <div className="hidden md:block absolute left-[-24px] top-1/2 -translate-y-1/2 h-16 w-[1px] bg-slate-200" />
                )}
                
                <div className="text-5xl md:text-6xl font-[1000] text-[#A855F7] mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto bg-[#F3F0FF] rounded-[50px] p-12 md:p-20 relative overflow-hidden">
          
          {/* Background Dot Patterns with Animation */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute top-12 left-12 opacity-20"
          >
            <div className="grid grid-cols-4 gap-3">
              {[...Array(12)].map((_, i) => <div key={i} className="w-2 h-2 bg-purple-400 rounded-full" />)}
            </div>
          </motion.div>

          {/* Header */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">Testimonials</h2>
            <p className="text-base md:text-lg text-slate-700 font-medium">
              See why thousands of agencies, salespeople, and GTM teams choose LisTeg
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-lg flex flex-col justify-between hover:shadow-xl transition duration-300"
              >
                <div>
                  <p className="text-sm md:text-base leading-relaxed text-black font-semibold mb-6">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src="https://listeg.com/wp-content/uploads/2025/12/6697274132daf24911799683_6635609f1211ec0f632803ec_p3OwakLL_bGV8_raw.jpeg" 
                    alt="Profile" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                  />
                  <div>
                    <div className="font-black text-sm text-black uppercase tracking-tight">{testimonial.name}</div>
                    <div className="text-xs text-slate-500 font-bold">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white border border-slate-200 px-8 py-3 rounded-full text-sm md:text-base font-black text-black hover:bg-slate-50 transition shadow-md"
            >
              View More Reviews <span className="text-xl">→</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-[#eff5ff] rounded-[50px] p-12 md:p-20 shadow-lg border border-slate-100">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center text-black mb-16 tracking-tight"
          >
            FAQs
          </motion.h2>

          <div className="space-y-0 border-t border-slate-200">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-slate-200"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between py-8 md:py-10 text-left group transition-all"
                >
                  <span className={`text-base md:text-lg font-bold transition-colors ${openIndex === i ? 'text-black' : 'text-slate-800 group-hover:text-purple-600'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-6 h-6 md:w-7 md:h-7 ${openIndex === i ? 'text-purple-600' : 'text-slate-400'}`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-base md:text-[16px] text-slate-600 leading-relaxed font-medium pr-12 md:pr-16 pb-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Background Gradient + Animated Blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50" />

          <motion.div
            animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-20 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-200/40 rounded-full blur-[80px] sm:blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-0 right-[-10%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-blue-100/30 rounded-full blur-[80px] sm:blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm mb-8"
          >
            <CheckCircle2 className="w-4 h-4 text-slate-900" />
            <span className="text-sm font-semibold text-slate-900">Empower your sales growth</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-[900] text-slate-900 mb-6 tracking-tight leading-[1.1]"
          >
            Find and generate B2B leads today
          </motion.h1>

          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-medium"
          >
            Supercharge your team with a modern AI Lead Finder, access to 220M+ B2B leads, and unlimited exports.
          </motion.p>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12 text-[10px] sm:text-xs font-black tracking-[0.1em] text-slate-800 uppercase"
          >
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-900" />
              <span>100 FREE CREDITS</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-slate-900" />
              <span>NO CREDIT CARD REQUIRED</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-900" />
              <span>ACCESS 520M+ B2B LEADS</span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#9333EA] hover:bg-purple-700 text-white px-10 py-4 rounded-full font-bold text-base transition duration-300 shadow-[0_10px_25px_-5px_rgba(147,51,234,0.4)]"
            >
              Get 100 Free Leads
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white border border-slate-200 hover:border-purple-300 text-slate-900 px-10 py-4 rounded-full font-bold text-base transition duration-300 shadow-sm"
            >
              View Pricing Plan
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}