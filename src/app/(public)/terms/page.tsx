// src/app/(public)/terms-conditions/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Scale, AlertTriangle, 
  CreditCard, Clock, Users, ArrowLeft,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const TermsConditions = () => {
  const lastUpdated = "February 15, 2026";

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: "By accessing or using LisTeg's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Subscription and Billing",
      content: "Our services are offered on a subscription basis. You agree to pay all fees associated with your chosen plan. Fees are non-refundable except as required by law.",
      points: [
        "Billing occurs monthly or annually based on your selection",
        "You can upgrade or downgrade your plan at any time",
        "Cancellation takes effect at the end of your billing period",
        "All prices are in USD unless otherwise specified"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.",
      points: [
        "Provide accurate and complete information",
        "Keep your login credentials secure",
        "Notify us immediately of unauthorized access",
        "Comply with all applicable laws and regulations"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: "LisTeg shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-100/30 blur-[120px]"
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6"
          >
            <Scale className="w-10 h-10 text-blue-600" />
          </motion.div>

          <motion.h1 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Terms & Conditions
          </motion.h1>

          <motion.p 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 mb-6"
          >
            Please read these terms carefully before using our services
          </motion.p>

          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full"
          >
            <AlertTriangle className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Last Updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* Content Sections - Similar structure to privacy policy */}
      <section className="relative z-10 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {section.content}
                    </p>
                    {section.points && (
                      <ul className="space-y-2">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;