// src/app/(public)/reviews/page.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { 
  Star, Quote, Users, MessageCircle, Award,
  ChevronLeft, ChevronRight, Twitter, Linkedin,
  Mail, Sparkles, ArrowRight, CheckCircle2,
  Filter, Search, ThumbsUp, Share2, Bookmark
} from 'lucide-react';

export default function ReviewsPage() {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const colors = {
    primary: '#843cff',
    secondary: '#37d4ff',
    gradient: 'linear-gradient(135deg, #00a6d3, #8944ff)'
  };

  const stats = [
    { value: "40,000+", label: "Happy Users", icon: <Users className="w-5 h-5" /> },
    { value: "4.9/5", label: "Average Rating", icon: <Star className="w-5 h-5 fill-current" /> },
    { value: "2,500+", label: "Reviews", icon: <MessageCircle className="w-5 h-5" /> },
    { value: "99%", label: "Would Recommend", icon: <ThumbsUp className="w-5 h-5" /> }
  ];

  const featuredReview = {
    name: "Mark Ben",
    role: "Co Founder",
    company: "Growth Accelerator",
    quote: "Mark Loves LisTeg",
    text: "I've specialised in email marketing since 2018 and in this time I've used almost every popular email outreach tool available on the market today – Instantly is hands down my favourite of them all",
    rating: 5,
    image: "/reviews/mark.jpg", // Add actual image
    date: "February 2026"
  };

  const reviews = [
    {
      name: "SAM WILSON",
      role: "Managing Director",
      company: "Firefly Growth",
      text: "I've specialised in email marketing since 2018 and in this time I've used almost every popular email outreach tool available on the market today – Instantly is hands down my favourite of them all.",
      rating: 5,
      date: "January 2026",
      helpful: 124,
      verified: true
    },
    {
      name: "SARAH CHEN",
      role: "Head of Sales",
      company: "Velocity Partners",
      text: "The data accuracy is incredible. We've seen our response rates triple since switching to LisTeg. The mobile numbers are a game-changer for our outbound team.",
      rating: 5,
      date: "January 2026",
      helpful: 98,
      verified: true
    },
    {
      name: "MICHAEL RODRIGUEZ",
      role: "GTM Strategist",
      company: "Aforza",
      text: "Finally a lead generation tool that actually works. The filters are incredibly powerful and the data is always fresh. Highly recommended for any sales team.",
      rating: 5,
      date: "December 2025",
      helpful: 156,
      verified: true
    },
    {
      name: "JENNIFER WALSH",
      role: "Sales Director",
      company: "Man Bites Dog",
      text: "We've tried multiple lead generation platforms, but LisTeg stands out for its accuracy and ease of use. The Chrome extension is brilliant for finding leads on LinkedIn.",
      rating: 5,
      date: "December 2025",
      helpful: 87,
      verified: true
    },
    {
      name: "DAVID THOMPSON",
      role: "CEO",
      company: "Nivoda",
      text: "As a founder, I need reliable data to build my pipeline. LisTeg delivers consistently accurate contact information. The unlimited exports are a huge plus.",
      rating: 4,
      date: "November 2025",
      helpful: 65,
      verified: true
    },
    {
      name: "LISA MARTINEZ",
      role: "RevOps Manager",
      company: "EM360Tech",
      text: "The integrations with Salesforce and HubSpot are seamless. We've streamlined our entire lead management process and seen a 40% increase in conversion rates.",
      rating: 5,
      date: "November 2025",
      helpful: 112,
      verified: true
    }
  ];

  const ratingBreakdown = [
    { stars: 5, count: 1875, percentage: 75 },
    { stars: 4, count: 500, percentage: 20 },
    { stars: 3, count: 100, percentage: 4 },
    { stars: 2, count: 20, percentage: 0.8 },
    { stars: 1, count: 5, percentage: 0.2 }
  ];

  const platforms = [
    { name: "G2", rating: 4.8, reviews: 850, icon: "⭐" },
    { name: "Capterra", rating: 4.9, reviews: 620, icon: "⭐" },
    { name: "Trustpilot", rating: 4.7, reviews: 430, icon: "⭐" },
    { name: "Google", rating: 4.9, reviews: 620, icon: "⭐" }
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

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-purple-100 text-[#843cff] px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Star className="w-4 h-4 fill-current" />
            4.9/5 from 2,500+ reviews
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            See why Thousands of Professionals{' '}
            <span className="bg-gradient-to-r from-[#00a6d3] to-[#8944ff] bg-clip-text text-transparent">
              Choose LisTeg
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. See what sales professionals, founders, 
            and marketing experts are saying about LisTeg.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-[#843cff] mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Ratings */}
      <section className="relative z-10 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-50 rounded-xl p-4 text-center hover:bg-purple-50 transition-colors"
              >
                <div className="text-lg font-bold text-slate-900 mb-1">{platform.name}</div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-xl font-bold text-[#843cff]">{platform.rating}</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-slate-500">{platform.reviews} reviews</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="relative z-10 py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">Rating Breakdown</h3>
            <div className="space-y-4">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-20">
                    <span className="text-sm font-medium text-slate-700">{item.stars}</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[#00a6d3] to-[#8944ff]"
                    />
                  </div>
                  <div className="w-16 text-sm text-slate-500 text-right">{item.count}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 -left-6 text-6xl text-[#843cff]/20">"</div>
            
            <div className="bg-gradient-to-r from-[#00a6d3] to-[#8944ff] rounded-3xl p-1">
              <div className="bg-white rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Left - Image */}
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#00a6d3] to-[#8944ff] p-1 mb-4">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <Users className="w-12 h-12 text-[#843cff]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{featuredReview.name}</h3>
                    <p className="text-[#843cff] font-medium">{featuredReview.role}</p>
                    <p className="text-sm text-slate-500">{featuredReview.company}</p>
                  </div>

                  {/* Right - Content */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-[#843cff] text-white text-xs px-3 py-1 rounded-full">
                        Featured Review
                      </span>
                      <span className="text-sm text-slate-500">{featuredReview.date}</span>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      "{featuredReview.quote}"
                    </h4>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      {featuredReview.text}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map((i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 rounded-lg hover:bg-slate-100 transition">
                          <ThumbsUp className="w-4 h-4 text-slate-500" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-slate-100 transition">
                          <Share2 className="w-4 h-4 text-slate-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative z-10 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === 'all' 
                    ? 'bg-[#843cff] text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Reviews
              </button>
              <button
                onClick={() => setFilter('5star')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === '5star' 
                    ? 'bg-[#843cff] text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                5 Star
              </button>
              <button
                onClick={() => setFilter('recent')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === 'recent' 
                    ? 'bg-[#843cff] text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Most Recent
              </button>
              <button
                onClick={() => setFilter('helpful')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === 'helpful' 
                    ? 'bg-[#843cff] text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Most Helpful
              </button>
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  className="pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:border-[#843cff] text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="relative z-10 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00a6d3] to-[#8944ff] flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{review.name}</h4>
                      <p className="text-xs text-[#843cff]">{review.role}</p>
                      <p className="text-xs text-slate-500">{review.company}</p>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="bg-green-100 text-green-600 text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i <= review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  "{review.text}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button className="flex items-center gap-2 text-xs text-slate-500 hover:text-[#843cff] transition">
                    <ThumbsUp className="w-4 h-4" />
                    Helpful ({review.helpful})
                  </button>
                  <button className="text-xs text-slate-500 hover:text-[#843cff] transition">
                    Share
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 rounded-full bg-white border-2 border-slate-200 hover:border-[#37d4ff] font-medium text-slate-700 transition">
              Load More Reviews
            </button>
          </motion.div>
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#00a6d3] to-[#8944ff] rounded-3xl p-12 text-center shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Share Your Experience
            </h3>
            <p className="text-purple-100 mb-8 text-lg">
              Help others make an informed decision. Write a review about your experience with LisTeg.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/write-review">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#843cff] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition"
                >
                  Write a Review
                </motion.button>
              </Link>
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
                >
                  Try LisTeg Free
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}