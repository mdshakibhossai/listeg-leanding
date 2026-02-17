// src/app/(public)/leads/page.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { 
  ChevronDown, CheckCircle2, Mail, CreditCard,
  Download, Filter, Search, Star, ArrowRight, 
  X, Phone, Building2, Users, Target,
  Zap, Shield, Globe, BarChart, Award,
  TrendingUp, Clock, MessageCircle, Play,
  Layers, Sliders, Database, Upload, Sparkles,
  CheckSquare, Square, UserCheck, Briefcase,
  MapPin, Hash, Network, PieChart
} from 'lucide-react';

export default function LeadsPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Sample leads data from your screenshot
  const leadsData = [
    { name: "James Snider", title: "Co-founder & CEO", company: "Punch!—The Smart B2B", quality: "high", email: "james.snider@punch.com", phone: "+1 (415) 555-0123" },
    { name: "Chris Turner", title: "Managing Director/CEO", company: "Business Advantage", quality: "high", email: "chris.turner@businessadvantage.com", phone: "+1 (416) 555-0456" },
    { name: "Stan Woods", title: "CEO & Co-founder", company: "Velocity Partners", quality: "high", email: "stan.woods@velocity.com", phone: "+1 (425) 555-0789" },
    { name: "Chris Bagnall", title: "CEO & Founder", company: "Transmission", quality: "high", email: "chris.bagnall@transmission.com", phone: "+1 (604) 555-0321" },
    { name: "Claire Mason", title: "Founder and CEO", company: "Man Bites Dog", quality: "high", email: "claire.mason@manbitesdog.com", phone: "+1 (212) 555-0654" },
    { name: "Charles Thiede", title: "CEO and Co-Founder", company: "Zapnito", quality: "high", email: "charles.thiede@zapnito.com", phone: "+44 20 5555 1234" },
    { name: "Terry Brissenden", title: "Founder CEO", company: "The Frameworks", quality: "high", email: "terry.brissenden@frameworks.com", phone: "+1 (512) 555-0987" },
    { name: "Michael Lodge", title: "Founder & CEO", company: "EM360Tech", quality: "high", email: "michael.lodge@em360tech.com", phone: "+44 113 555 6789" },
    { name: "Dominic Dinardo", title: "CEO & Co-Founder", company: "Aforza", quality: "high", email: "dominic.dinardo@aforza.com", phone: "+1 (650) 555-0432" },
    { name: "Dan Thompson", title: "CEO and Co-Founder", company: "Kluster", quality: "high", email: "dan.thompson@kluster.com", phone: "+1 (857) 555-0765" },
    { name: "David Sutton", title: "Founder & CEO", company: "Nivoda", quality: "high", email: "david.sutton@nivoda.com", phone: "+44 20 5555 9876" },
    { name: "Daria Dubinina", title: "Founder, CEO", company: "Crassula", quality: "high", email: "daria.dubinina@crassula.com", phone: "+372 555 12345" },
    { name: "David Freedman", title: "CEO / Founder", company: "Confero Contact Centres", quality: "high", email: "david.freedman@confero.com", phone: "+1 (905) 555-0543" },
    { name: "Vladimir Potapenko", title: "CEO and Founder", company: "Magora", quality: "high", email: "vladimir.potapenko@magora.com", phone: "+44 20 5555 8765" },
  ];

  // Filter categories from your second screenshot
  const filterCategories = [
    { name: "Lists", icon: <Layers size={16} /> },
    { name: "Persona", icon: <UserCheck size={16} /> },
    { name: "Email Status", icon: <Mail size={16} /> },
    { name: "Job Titles", icon: <Briefcase size={16} /> },
    { name: "People Lookalikes", icon: <Users size={16} /> },
    { name: "Company", icon: <Building2 size={16} /> },
    { name: "Company Lookalikes", icon: <Network size={16} /> },
    { name: "Location", icon: <MapPin size={16} /> },

  ];

  const stats = [
    { value: "220M+", label: "B2B Contacts" },
    { value: "99%", label: "Data Accuracy" },
    { value: "40k+", label: "Happy Users" },
    { value: "24/7", label: "Live Support" }
  ];

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI Lead Finder",
      description: "Find the right buyers with our intelligent lead discovery engine"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "220M+ Contacts",
      description: "Access verified B2B contacts & companies worldwide"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Unlimited Exports",
      description: "Download unlimited leads from your saved lists"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "99% Accuracy",
      description: "Verified emails with industry-leading accuracy"
    }
  ];

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

  const colors = {
    primary: '#843cff',
    secondary: '#37d4ff',
    gradient: 'linear-gradient(135deg, #00a6d3, #8944ff)'
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#00a6d3]/10 to-[#8944ff]/10 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-r from-[#8944ff]/10 to-[#00a6d3]/10 blur-[120px]"
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-purple-100 text-[#843cff] px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Zap className="w-4 h-4" />
            Access 220M+ Verified B2B Leads
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-4xl"
          >
            Get Unlimited Access to{' '}
            <span className="bg-gradient-to-r from-[#00a6d3] to-[#8944ff] bg-clip-text text-transparent">
              220M+ B2B prospects
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mb-8 leading-relaxed"
          >
            Access 220M+ verified B2B contacts and use our AI-powered Lead Finder to enrich 
            and personalize prospect emails with confidence. Apply advanced filters to precisely 
            target companies and decision-makers that match your ICP, then export unlimited leads 
            directly from your saved lists with no restrictions or hidden limits.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group px-8 py-4 rounded-full font-bold text-white shadow-xl"
              style={{ background: colors.gradient }}
            >
              <motion.span
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white/20"
              />
              <span className="relative z-10 flex items-center gap-2">
                Start Finding Leads <Sparkles size={18} />
              </span>
            </motion.button>
            
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-[#37d4ff] transition-all"
            >
              View Pricing
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#843cff]">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Screenshot 1 - Leads Table (Picture 1) */}
      <section className="relative z-10 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="relative">
              <Image
                src="https://listeg.com/wp-content/uploads/2025/12/Screenshot_194.png"
                alt="Leads Dashboard Preview"
                width={1400}
                height={800}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Caption */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-sm text-slate-600">
              <span className="font-medium">Preview:</span> 220M+ verified B2B contacts at your fingertips
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Filters Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Get Your Ideal Prospect Leads Using Our{' '}
                <span className="text-[#843cff]">Advanced Lead Filters</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Create hyper-targeted lead lists using advanced filters that let you segment 
                prospects by job title, company size, industry, location, and keywords, helping 
                you improve response rates and outreach performance.
              </p>

              {/* Filter Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Popular Filters</h3>
                  <span className="text-xs text-[#843cff] font-medium">+23 more</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {filterCategories.slice(0, 6).map((filter, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer"
                    >
                      <div className="text-[#843cff]">{filter.icon}</div>
                      <span className="text-sm text-slate-700">{filter.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Filters Screenshot (Picture 2) */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <Image
                  src="https://listeg.com/wp-content/uploads/2026/01/Screenshot_210.png"
                  alt="Advanced Filters Preview"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats Overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
              >
                <div className="flex gap-4">
                  <div>
                    <div className="text-2xl font-bold text-[#843cff]">234.5M</div>
                    <div className="text-xs text-slate-500">Total Leads</div>
                  </div>
                  <div className="w-px bg-slate-200" />
                  <div>
                    <div className="text-2xl font-bold text-[#37d4ff]">5</div>
                    <div className="text-xs text-slate-500">Saved Lists</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-[#843cff] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Search Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Find Your Targeted Company Leads using our{' '}
                <span className="text-[#843cff]">Company Search</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With our advanced company filters, you can identify and target companies based 
                on industry, location, company size, revenue, and technology stack, then 
                effortlessly export millions of company leads for your campaigns.
              </p>
              <ul className="space-y-3">
                {[
                  "Filter by industry, location, and company size",
                  "Target based on revenue and funding",
                  "Technology stack filtering",
                  "Export unlimited company records"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#37d4ff] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="bg-gradient-to-br from-[#00a6d3]/10 to-[#8944ff]/10 p-8 rounded-3xl border border-slate-200">
                <Building2 className="w-12 h-12 text-[#843cff] mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Company Search</h3>
                <p className="text-sm text-slate-600 mb-4">Search from millions of companies</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>15M+ companies in database</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Real-time firmographics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Technology insights</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Enrichment Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#00a6d3]/10 to-[#8944ff]/10 p-8 rounded-3xl border border-slate-200">
                <Upload className="w-12 h-12 text-[#843cff] mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Bulk Enrichment</h3>
                <p className="text-sm text-slate-600 mb-4">Upload your lists, get verified data</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-[#37d4ff]" />
                    <span>10,000 records per batch</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-[#37d4ff]" />
                    <span>Real-time verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-[#37d4ff]" />
                    <span>CSV, XLSX, Google Sheets</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Enrich Unlimited Emails using our{' '}
                <span className="text-[#843cff]">Advanced Data Enrichments</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With advanced data enrichment, you can upload your existing lead lists, 
                enrich thousands of emails instantly with verified contact data, and export 
                unlimited enriched leads.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#843cff] text-white rounded-xl font-bold hover:bg-purple-700 transition"
              >
                Try Enrichment Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Export Unlimited Leads from your{' '}
            <span className="text-[#843cff]">Saved Lists</span>
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Export unlimited leads from your saved lists and stay in full control of your data, 
            whether you're running small tests or large-scale outbound campaigns.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-2">
              <Download className="w-5 h-5 text-[#37d4ff]" />
              <span className="font-medium">No export limits</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-2">
              <Database className="w-5 h-5 text-[#37d4ff]" />
              <span className="font-medium">CSV, XLSX, API</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#37d4ff]" />
              <span className="font-medium">Real-time sync</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-purple-100 text-[#843cff] px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Users className="w-4 h-4" />
            Trusted by 40,000+ users
          </motion.div>
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
          >
            Thousands of agencies, marketing experts, Sales Leaders, and GTM teams choose LisTeg
          </motion.h3>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-1 mb-6"
          >
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-slate-600 ml-2">4.9/5 from 2,500+ reviews</span>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#00a6d3] to-[#8944ff] rounded-3xl p-12 text-center shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Finding Quality Leads Today
            </h3>
            <p className="text-purple-100 mb-8 text-lg">
              Get 100 free credits - no credit card required
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#843cff] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition"
            >
              Get Started for Free
            </motion.button>
            <p className="text-purple-200 text-sm mt-4">
              Access 220M+ leads • Unlimited exports • 24/7 support
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}