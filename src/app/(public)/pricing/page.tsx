// src/app/(public)/pricing/page.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle, XCircle, Users, Zap, Target,
  BarChart, Globe, Mail, Phone, Building2,
  TrendingUp, Shield, Award, Clock, CreditCard,
  HelpCircle, ChevronDown, Star
} from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const plans = [
    {
      name: "Free",
      description: "To see if we are a good fit.",
      price: { monthly: 0, annual: 0 },
      credits: "100",
      creditsLabel: "CREDITS PER MONTH",
      features: [
        { name: "25 row selection limit", included: true },
        { name: "3 intent topics max", included: true },
        { name: "Basic filters", included: true },
        { name: "Advanced filters", included: false },
        { name: "CRM Integrations", included: false },
        { name: "Job change tracking", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Get Started",
      popular: false,
      gradient: "from-slate-50 to-slate-100"
    },
    {
      name: "Starter",
      description: "Start building your prospect lists with essential tools.",
      price: { monthly: 59, annual: 37 },
      credits: "24,000",
      creditsLabel: "CREDITS PER USER/YEAR",
      badge: "37% OFF LIFETIME",
      features: [
        { name: "20,000 row selection", included: true },
        { name: "6 intent topics max", included: true },
        { name: "Basic integrations", included: true },
        { name: "Advanced filters", included: true },
        { name: "CRM Integrations", included: false },
        { name: "Job change tracking", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Start Building",
      popular: false,
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      name: "Growth",
      description: "Scale outreach with advanced filters & CRM integrations.",
      price: { monthly: 119, annual: 74 },
      credits: "60,000",
      creditsLabel: "CREDITS PER USER/YEAR",
      badge: "37% OFF LIFETIME",
      features: [
        { name: "20,000 row selection", included: true },
        { name: "9 intent topics max", included: true },
        { name: "HubSpot & Salesforce Integration", included: true },
        { name: "Duplicate control", included: true },
        { name: "Job change tracking", included: true },
        { name: "Advanced filters", included: true },
        { name: "Priority support", included: true },
      ],
      cta: "Scale Now",
      popular: true,
      gradient: "from-purple-50 to-pink-50"
    },
    {
      name: "Pro",
      description: "Maximize lead gen with enterprise-grade rate limits.",
      price: { monthly: 249, annual: 187 },
      credits: "180,000",
      creditsLabel: "CREDITS PER USER/YEAR",
      badge: "37% OFF LIFETIME",
      features: [
        { name: "20,000 row selection", included: true },
        { name: "12 intent topics max", included: true },
        { name: "HubSpot & Salesforce Integration", included: true },
        { name: "Duplicate control", included: true },
        { name: "Job change tracking", included: true },
        { name: "Higher API rate limits", included: true },
        { name: "Priority support", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-amber-50 to-orange-50"
    }
  ];

  const comparisonFeatures = [
    { 
      category: "Core Limits",
      features: [
        { name: "Monthly Price (Annual Billing)", free: "$0", starter: "$37", growth: "$74", pro: "$187" },
        { name: "Monthly Credits", free: "100", starter: "2,000", growth: "5,000", pro: "15,000" },
        { name: "Max Intent Topics", free: "3", starter: "6", growth: "9", pro: "12" },
        { name: "Max Row Selection", free: "25", starter: "20,000", growth: "20,000", pro: "20,000" },
      ]
    },
    {
      category: "Features",
      features: [
        { name: "CSV Enrichment", free: true, starter: true, growth: true, pro: true },
        { name: "Technology Filter", free: false, starter: true, growth: true, pro: true },
        { name: "Job Posting Filter", free: false, starter: true, growth: true, pro: true },
        { name: "Revenue Filter", free: false, starter: true, growth: true, pro: true },
        { name: "Funding Filter", free: false, starter: true, growth: true, pro: true },
        { name: "Basic Integrations", free: false, starter: true, growth: true, pro: true },
        { name: "Job Change Filter", free: false, starter: false, growth: true, pro: true },
        { name: "Duplicate Control", free: false, starter: false, growth: true, pro: true },
        { name: "HubSpot Integration", free: false, starter: false, growth: true, pro: true },
        { name: "Salesforce Integration", free: false, starter: false, growth: true, pro: true },
        { name: "Job Change Tracking", free: false, starter: false, growth: true, pro: true },
      ]
    },
    {
      category: "API Limits",
      features: [
        { name: "API Rate Limit (second/minute/day)", free: "No access", starter: "5/300/2000", growth: "5/300/5000", pro: "30/1800/50000" },
      ]
    }
  ];

  const testimonials = [
    {
      quote: "We tested four enrichment tools side by side. Prospeo was the only one where the data didn't need cleaning after. Everything came back accurate and ready to use.",
      name: "Felix Fernandez",
      title: "CEO at Firefly Growth Accelerator",
      rating: 5
    },
    {
      quote: "The job change filter helps us reach qualified leads the moment they switch roles, before anyone else does.",
      name: "Sönke Venjacob",
      title: "Founder at Platinum Agency",
      rating: 5
    },
    {
      quote: "We've used a lot of email finders, but Prospeo is the only one where the emails are actually verified. The bounce rate dropped by over 70%.",
      name: "Pete Lipton",
      title: "Snr. Director of Sales at Snyk",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How do credits work?",
      answer: "One credit gives you one verified business email, while a direct mobile number costs 10 credits. Your full credit pack is added at the start of every billing cycle. Credits reset on renewal and do not roll over."
    },
    {
      question: "Is exporting company data free?",
      answer: "Exporting data without email and mobile information is completely free. You can export company data, firmographics, and other data points without using any credits when email and mobile fields are not included in your export."
    },
    {
      question: "What happens if I run out of credits?",
      answer: "If you hit zero, you can buy a credit add-on or upgrade your plan in a couple of clicks; both apply immediately. Unused credits disappear at renewal and are replaced by your next allocation."
    },
    {
      question: "Can I change my plan or billing cycle?",
      answer: "Absolutely. Go to Account Settings → Billing to upgrade, downgrade, or switch between monthly and yearly billing. Upgrades apply right away with pro-rated charges. Downgrades and cancellations take effect at the end of your current cycle."
    },
    {
      question: "Do you offer plans for solo founders?",
      answer: "Yes. Solo founders can scale with the most affordable data in the industry. Growing sales teams usually pick the Growth plan. Enterprises choose Pro plus add-ons, unlocking higher rate limits, job-change tracking, native Salesforce and HubSpot sync, and the option to add millions of credits when needed."
    },
    {
      question: "Which CRM integrations are available?",
      answer: "Every plan connects to Clay, Zapier, Outreach, Lemlist, and CSV export. Growth and Pro also offer native HubSpot and Salesforce sync, so enriched contacts flow straight into your CRM and sequences without manual work."
    }
  ];

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
          {/* Launch Offer Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg"
          >
            <Zap className="w-4 h-4" />
            🥳 LisTeg Launch Offer: 20% LIFETIME before March
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Pricing
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
          >
            Dominate your market
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-600 font-semibold mb-8"
          >
            With industry-leading B2B data
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`text-sm font-bold ${!isAnnual ? 'text-purple-600' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-slate-200 rounded-full p-1 transition-colors"
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-6 h-6 bg-purple-600 rounded-full shadow-md"
              />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-purple-600' : 'text-slate-500'}`}>
              Annual <span className="text-green-600">(Save 37%)</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`relative bg-gradient-to-br ${plan.gradient} rounded-3xl p-6 border-2 ${
                  plan.popular ? 'border-purple-400 shadow-xl' : 'border-slate-200'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-[10px] font-bold">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-extrabold text-slate-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.annual > 0 && (
                      <span className="text-sm text-slate-500 ml-2 line-through">
                        ${plan.price.monthly}/mo
                      </span>
                    )}
                    <span className="text-sm text-slate-500 ml-2">/mo</span>
                  </div>
                  <div className="bg-white/50 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-purple-600">{plan.credits}</div>
                    <div className="text-xs font-bold text-slate-500">{plan.creditsLabel}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200'
                      : 'bg-white border-2 border-slate-200 hover:border-purple-600 text-slate-700'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Add-ons Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 text-center"
          >
            <Link href="#" className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2">
              <span>📦 Yearly credits add-on: See our add-ons pricing</span>
              <span>20% OFF LIFETIME</span>
              <ChevronDown className="w-4 h-4 rotate-270" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12"
          >
            Compare plan features
          </motion.h2>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-slate-600">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-purple-600">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-purple-600">Growth</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-purple-600">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonFeatures.map((section, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="bg-slate-50/50">
                        <td colSpan={5} className="px-6 py-3 text-sm font-bold text-slate-700">
                          {section.category}
                        </td>
                      </tr>
                      {section.features.map((feature, fIdx) => (
                        <tr key={fIdx} className="hover:bg-slate-50">
                          <td className="px-6 py-4 text-sm text-slate-600">{feature.name}</td>
                          <td className="px-6 py-4 text-center text-sm">
                            {typeof feature.free === 'boolean' ? (
                              feature.free ? (
                                <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="font-medium">{feature.free}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center text-sm">
                            {typeof feature.starter === 'boolean' ? (
                              feature.starter ? (
                                <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="font-medium">{feature.starter}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center text-sm">
                            {typeof feature.growth === 'boolean' ? (
                              feature.growth ? (
                                <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="font-medium">{feature.growth}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center text-sm">
                            {typeof feature.pro === 'boolean' ? (
                              feature.pro ? (
                                <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="font-medium">{feature.pro}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-slate-600 font-medium mb-2">
              Join 15,000+ companies using LisTeg
            </p>
            <div className="flex items-center justify-center gap-4">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
              ))}
              <span className="text-sm font-bold text-slate-700">4.9/5 from 2,500+ reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-4"
          >
            The most accurate data
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-purple-600 font-semibold mb-12"
          >
            Sales Teams Winning with LisTeg's Data
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-4"
          >
            Your questions, answered
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-slate-600 mb-12"
          >
            Frequently asked questions
          </motion.p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-slate-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
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
              Ready to dominate your market?
            </h3>
            <p className="text-purple-100 mb-8 text-lg">
              Join 15,000+ companies using LisTeg to find their ideal customers
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition"
            >
              Get Started for FREE
            </motion.button>
            <p className="text-purple-200 text-sm mt-4">
              No credit card required • 100 free credits
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}