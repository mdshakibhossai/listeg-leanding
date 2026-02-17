// src/app/(public)/privacy-policy/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, FileText, 
  Mail, Phone, Globe, Download,
  CheckCircle, AlertCircle, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const lastUpdated = "February 15, 2026";

  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact support. This may include your name, email address, phone number, company name, and billing information.",
      points: [
        "Account registration information",
        "Payment and billing details",
        "Communication preferences",
        "Usage data and analytics"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about our products and services.",
      points: [
        "To provide and maintain our services",
        "To process your payments securely",
        "To send you updates and marketing communications",
        "To improve and personalize your experience"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Information Sharing and Disclosure",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
      points: [
        "With your consent",
        "To comply with legal obligations",
        "To protect our rights and property",
        "With service providers who assist in our operations"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      points: [
        "Encryption of sensitive data",
        "Regular security assessments",
        "Access controls and authentication",
        "Secure data storage and transmission"
      ]
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

  return (
    <div className="min-h-screen bg-white">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-100/30 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-100/30 blur-[120px]"
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Back Link */}
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

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-2xl mb-6"
          >
            <Shield className="w-10 h-10 text-purple-600" />
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Privacy Policy
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto"
          >
            We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.
          </motion.p>

          {/* Last Updated */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full"
          >
            <AlertCircle className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-600">Last Updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Quick Summary Cards */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          >
            {[
              { icon: <Lock />, label: "Encrypted Data", value: "256-bit SSL" },
              { icon: <Eye />, label: "Data Collection", value: "Minimal & Required" },
              { icon: <Globe />, label: "GDPR Compliant", value: "Yes" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 text-center hover:border-purple-200 transition-all"
              >
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                    {item.icon}
                  </div>
                </div>
                <div className="text-xs font-medium text-slate-500">{item.label}</div>
                <div className="text-sm font-bold text-slate-900">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Policy Sections */}
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
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 flex-shrink-0">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {section.content}
                    </p>
                    <ul className="space-y-2">
                      {section.points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-purple-50 rounded-3xl p-8 border border-purple-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Your Rights and Choices
            </h3>
            <p className="text-slate-600 mb-6">
              You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:privacy@listeg.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition"
              >
                <Mail className="w-4 h-4" />
                privacy@listeg.com
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-xl font-semibold border border-slate-200 hover:border-purple-300 transition"
              >
                <Download className="w-4 h-4" />
                Download Policy
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm text-slate-500"
          >
            <p>
              For any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@listeg.com" className="text-purple-600 hover:underline">
                privacy@listeg.com
              </a>
              {' '}or call{' '}
              <a href="tel:+8801872379422" className="text-purple-600 hover:underline">
                +880 1872379422
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;