// src/app/(public)/team/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { 
  Linkedin, Twitter, Mail, Globe, Award,
  Users, Target, Zap, Shield, Star, ArrowRight,
  BookOpen, MessageCircle, Briefcase, MapPin
} from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Md Nasir Uddin",
      role: "Founder & CEO",
      image: "/team/nasir.jpg", // You'll need to add this image
      bio: "Brandon Bornancin is a serial salesperson, entrepreneur, speaker, author, and strategist who is obsessed with helping people maximize their sales, income, and potential. Throughout his career, he studied the greats and became a top 1% performer and seven figure earner. Now Mr. Bornancin develops sales technologies and strategies to help companies crush sales quota's at thousands of companies including Google, eBay, IBM, HP, Amazon, and hundreds of others.",
      expertise: ["Sales Strategy", "Leadership", "Product Vision"],
      linkedin: "https://linkedin.com/in/nasir",
      twitter: "https://twitter.com/nasir",
      email: "nasir@listeg.com",
      achievement: "Top 1% Performer"
    },
    {
      name: "Md Naeem Islam",
      role: "Co Founder & Director",
      image: "/team/naeem.jpg", // You'll need to add this image
      bio: "Brandon Bornancin is a serial salesperson, entrepreneur, speaker, author, and strategist who is obsessed with helping people maximize their sales, income, and potential. Throughout his career, he studied the greats and became a top 1% performer and seven figure earner. Now Mr. Bornancin develops sales technologies and strategies to help companies crush sales quota's at thousands of companies including Google, eBay, IBM, HP, Amazon, and hundreds of others.",
      expertise: ["Operations", "Business Development", "Partnerships"],
      linkedin: "https://linkedin.com/in/naeem",
      twitter: "https://twitter.com/naeem",
      email: "naeem@listeg.com",
      achievement: "7-Figure Earner"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Sales",
      image: "/team/sarah.jpg", // Placeholder - add actual image
      bio: "Sarah leads our global sales team with over 12 years of experience in B2B SaaS. She's passionate about building high-performing teams and helping customers achieve their revenue goals through innovative sales strategies.",
      expertise: ["Sales Leadership", "GTM Strategy", "Team Building"],
      linkedin: "https://linkedin.com/in/sarah",
      twitter: "https://twitter.com/sarah",
      email: "sarah@listeg.com",
      achievement: "Built $50M Pipeline"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/team/michael.jpg", // Placeholder - add actual image
      bio: "Michael brings 15 years of engineering leadership experience from top tech companies. He oversees our platform architecture, AI algorithms, and ensures we deliver the most accurate B2B data in the industry.",
      expertise: ["AI/ML", "Data Architecture", "Engineering"],
      linkedin: "https://linkedin.com/in/michael",
      twitter: "https://twitter.com/michael",
      email: "michael@listeg.com",
      achievement: "99% Data Accuracy"
    }
  ];

  const stats = [
    { value: "40,000+", label: "Users", icon: <Users className="w-5 h-5" /> },
    { value: "220M+", label: "Leads", icon: <Target className="w-5 h-5" /> },
    { value: "99%", label: "Accuracy", icon: <Shield className="w-5 h-5" /> },
    { value: "24/7", label: "Support", icon: <Star className="w-5 h-5" /> }
  ];

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from data accuracy to customer support."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customer Success",
      description: "Our customers' success is our success. We're committed to helping you win."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "We constantly innovate to provide the most advanced lead generation tools."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust",
      description: "We build trust through transparency, reliability, and data integrity."
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-purple-100 text-[#843cff] px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Users className="w-4 h-4" />
            Meet the People Behind LisTeg
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Meet the{' '}
            <span className="bg-gradient-to-r from-[#00a6d3] to-[#8944ff] bg-clip-text text-transparent">
              LisTeg Team
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We're a passionate team of sales experts, engineers, and data scientists 
            dedicated to helping you find the best B2B leads.
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

      {/* Team Grid */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Header with Gradient */}
                <div className="h-24 bg-gradient-to-r from-[#00a6d3] to-[#8944ff] relative">
                  {/* Achievement Badge */}
                  <div className="absolute -bottom-6 left-8">
                    <div className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#843cff]" />
                      <span className="text-xs font-bold text-slate-900">{member.achievement}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{member.name}</h2>
                      <p className="text-[#843cff] font-medium mt-1">{member.role}</p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex gap-2">
                      <Link href={member.linkedin} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-[#843cff] hover:text-white transition-colors"
                        >
                          <Linkedin size={16} />
                        </motion.div>
                      </Link>
                      <Link href={member.twitter} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-[#843cff] hover:text-white transition-colors"
                        >
                          <Twitter size={16} />
                        </motion.div>
                      </Link>
                      <Link href={`mailto:${member.email}`}>
                        <motion.div
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-[#843cff] hover:text-white transition-colors"
                        >
                          <Mail size={16} />
                        </motion.div>
                      </Link>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Read More Button */}
                  <button className="text-[#843cff] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mb-4">
                    Read full bio <ArrowRight size={14} />
                  </button>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto"
          >
            The principles that guide everything we do
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-[#843cff] mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#00a6d3] to-[#8944ff] rounded-3xl p-12 text-center shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-purple-100 mb-8 text-lg">
              We're always looking for passionate people to join us
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/careers">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#843cff] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition"
                >
                  View Open Positions
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
          >
            Try LisTeg for FREE, No Credit Card Required
          </motion.h3>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 mb-8"
          >
            Join 40,000+ companies finding better B2B leads with LisTeg
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/get-started">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#843cff] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition"
              >
                Get 100 Free Leads
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}