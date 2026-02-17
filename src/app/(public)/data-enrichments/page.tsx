// src/app/(public)/data-enrichments/page.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Upload, Link as LinkIcon, Database, Zap, CheckCircle,
  Users, Mail, Phone, Building2, ArrowRight, Sparkles,
  Download, Filter, RefreshCw, Globe, Shield
} from 'lucide-react';

export default function DataEnrichmentsPage() {
  const [activeTab, setActiveTab] = useState<'upload' | 'linkedin'>('upload');

  // Sample data for the leads table (from your screenshot)
  const sampleLeads = [
    { name: "James Snider", title: "Co-founder & CEO", company: "Punch!—The Smart B2B", quality: "high" },
    { name: "Chris Turner", title: "Managing Director/CEO", company: "Business Advantage", quality: "high" },
    { name: "Stan Woods", title: "CEO & Co-founder", company: "Velocity Partners", quality: "high" },
    { name: "Chris Bagnall", title: "CEO & Founder", company: "Transmission", quality: "high" },
    { name: "Claire Mason", title: "Founder and CEO", company: "Man Bites Dog", quality: "high" },
    { name: "Charles Thiede", title: "CEO and Co-Founder", company: "Zapnito", quality: "high" },
    { name: "Terry Brissenden", title: "Founder CEO", company: "The Frameworks", quality: "high" },
    { name: "Michael Lodge", title: "Founder & CEO", company: "EM360Tech", quality: "high" },
    { name: "Dominic Dinardo", title: "CEO & Co-Founder", company: "Aforza", quality: "high" },
    { name: "Dan Thompson", title: "CEO and Co-Founder", company: "Kluster", quality: "high" },
    { name: "David Sutton", title: "Founder & CEO", company: "Nivoda", quality: "high" },
    { name: "Daria Dubinina", title: "Founder, CEO", company: "Crassula", quality: "high" },
    { name: "David Freedman", title: "CEO / Founder", company: "Confero Contact Centres", quality: "high" },
    { name: "Vladimir Potapenko", title: "CEO and Founder", company: "Magora", quality: "high" },
  ];

  const features = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Upload Your Existing Lead List",
      description: "Keep your B2B database fresh and accurate by simply uploading your lead lists into our data enrichment engine. We'll return verified emails and additional contact details in seconds."
    },
    {
      icon: <LinkIcon className="w-6 h-6" />,
      title: "Turn LinkedIn URL List to a Completed Lead List",
      description: "Upload your LinkedIn URL list and get back a complete lead list enriched with verified emails and contact information."
    }
  ];

  const stats = [
    { value: "220M+", label: "Contacts" },
    { value: "99%", label: "Accuracy" },
    { value: "10M+", label: "Enriched Daily" },
    { value: "<2s", label: "Response Time" }
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

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-100/30 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-100/30 blur-[120px]"
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Zap className="w-4 h-4" />
            Powered by AI • 220M+ Verified Contacts
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Enrich Unlimited Emails using our{' '}
            <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Advanced Data Enrichments
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            With advanced data enrichment, you can upload your existing lead lists, instantly enrich thousands of emails with verified B2B contact data, and export unlimited enriched leads to power scalable outreach campaigns.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-200 flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Upload Your List
            </motion.button>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-slate-200 hover:border-purple-600 px-8 py-4 rounded-full font-bold text-lg text-slate-700 flex items-center gap-2"
            >
              <LinkIcon className="w-5 h-5" />
              Enrich LinkedIn URLs
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-purple-600">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 text-purple-600 font-semibold flex items-center gap-2 group"
                >
                  Try it now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              See Data Enrichment in Action
            </h2>
            <p className="text-xl text-slate-600">
              Upload your list and watch as we enrich it with verified contact data
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="bg-slate-100 p-1 rounded-full inline-flex">
              <button
                onClick={() => setActiveTab('upload')}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  activeTab === 'upload' 
                    ? 'bg-white text-purple-600 shadow-md' 
                    : 'text-slate-600 hover:text-purple-600'
                }`}
              >
                <Upload className="w-4 h-4 inline mr-2" />
                Upload CSV
              </button>
              <button
                onClick={() => setActiveTab('linkedin')}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  activeTab === 'linkedin' 
                    ? 'bg-white text-purple-600 shadow-md' 
                    : 'text-slate-600 hover:text-purple-600'
                }`}
              >
                <LinkIcon className="w-4 h-4 inline mr-2" />
                LinkedIn URLs
              </button>
            </div>
          </motion.div>

          {/* Demo Area - Exactly matching your screenshot */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Table Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
              <div className="grid grid-cols-12 gap-4 text-white text-sm font-semibold">
                <div className="col-span-3">NAME</div>
                <div className="col-span-3">JOB TITLE</div>
                <div className="col-span-1">QUALITY</div>
                <div className="col-span-2">COMPANY</div>
                <div className="col-span-1">EMAILS</div>
                <div className="col-span-2">PHONE NUMBERS</div>
              </div>
            </div>

            {/* Table Body - Scrollable */}
            <div className="max-h-[500px] overflow-y-auto">
              {sampleLeads.map((lead, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-100 hover:bg-purple-50/50 transition-colors"
                >
                  <div className="col-span-3 font-semibold text-slate-900">{lead.name}</div>
                  <div className="col-span-3 text-sm text-slate-600">{lead.title}</div>
                  <div className="col-span-1">
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                      <CheckCircle className="w-3 h-3" />
                      High
                    </span>
                  </div>
                  <div className="col-span-2 text-sm text-slate-600 truncate">{lead.company}</div>
                  <div className="col-span-1">
                    <button className="text-purple-600 hover:text-purple-700 text-xs font-semibold flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      Access
                    </button>
                  </div>
                  <div className="col-span-2">
                    <button className="text-purple-600 hover:text-purple-700 text-xs font-semibold flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      Access Mobile
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 font-medium">
                  Showing {sampleLeads.length} of 220M+ enriched contacts
                </span>
                <button className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View all 235.4M contacts
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Features under demo */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {[
              { icon: <Shield />, text: "99% Email Accuracy" },
              { icon: <Zap />, text: "Real-time Enrichment" },
              { icon: <Globe />, text: "Global Coverage" },
              { icon: <Download />, text: "Unlimited Exports" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-4 flex items-center gap-3">
                <div className="text-purple-600">{item.icon}</div>
                <span className="text-xs font-semibold text-slate-700">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-16"
          >
            How Data Enrichment Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Your Data",
                description: "Upload your existing lead list or LinkedIn URLs in CSV format. We accept any list with names, companies, or profiles.",
                icon: <Upload className="w-8 h-8" />
              },
              {
                step: "02",
                title: "AI-Powered Enrichment",
                description: "Our engine instantly matches and verifies each entry against our 220M+ database of B2B contacts.",
                icon: <Sparkles className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Export Enriched Leads",
                description: "Download your complete, verified lead list with emails, phone numbers, and firmographics - unlimited exports.",
                icon: <Download className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative"
              >
                <div className="text-6xl font-black text-purple-100 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Enrich Unlimited B2B Leads Today
            </h3>
            <p className="text-purple-100 mb-8 text-lg">
              Start with 100 free credits - no credit card required
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition"
              >
                Upload Your List
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-purple-400 transition border-2 border-white/20"
              >
                Try LinkedIn Enrichment
              </motion.button>
            </div>
            <p className="text-purple-200 text-sm mt-4 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              No credit card required • 100 free credits
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}