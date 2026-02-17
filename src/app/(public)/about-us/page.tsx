"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { 
  Users, Target, Zap, Shield, Award, Heart, 
  ChevronRight, Star, Mail, Phone, MapPin,
  Linkedin, Twitter, Facebook, Instagram
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const stats = [
  { value: "220M+", label: "B2B Contacts", icon: <Users className="w-6 h-6" /> },
  { value: "99%", label: "Data Accuracy", icon: <Shield className="w-6 h-6" /> },
  { value: "1,000+", label: "Happy Clients", icon: <Award className="w-6 h-6" /> },
  { value: "24/7", label: "Support", icon: <Zap className="w-6 h-6" /> },
];

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    bio: "15+ years in sales intelligence and lead generation",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    bio: "Former product lead at major tech companies",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    bio: "AI and machine learning expert",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Emma Watson",
    role: "Head of Customer Success",
    bio: "Passionate about helping businesses grow",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
];

const values = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions",
    icon: <Zap className="w-8 h-8 text-purple-600" />
  },
  {
    title: "Customer Success",
    description: "Your growth is our success. We're committed to your results",
    icon: <Heart className="w-8 h-8 text-purple-600" />
  },
  {
    title: "Data Accuracy",
    description: "We maintain 99% accuracy through continuous verification",
    icon: <Shield className="w-8 h-8 text-purple-600" />
  },
  {
    title: "Global Reach",
    description: "Serving customers in 50+ countries worldwide",
    icon: <Target className="w-8 h-8 text-purple-600" />
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-100/40 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-bold mb-8"
            >
              <Heart className="w-4 h-4" />
              <span>About LisTeg</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6"
            >
              We're on a mission to{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                transform B2B lead generation
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed"
            >
              LisTeg was founded in 2020 with a simple idea: make B2B lead generation 
              accessible, accurate, and automated. Today, we serve over 1,000+ companies 
              across the globe with our AI-powered platform.
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact" className="btn-primary">
                Join Our Team
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Sales
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center mb-4 text-purple-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  LisTeg started in a small garage in San Francisco with three founders 
                  who were frustrated with existing lead generation tools. They were either 
                  too expensive, inaccurate, or difficult to use.
                </p>
                <p>
                  We built LisTeg to solve these problems. Our AI-powered platform combines 
                  the largest B2B database with intelligent filtering and real-time verification 
                  to deliver the most accurate leads in the industry.
                </p>
                <p>
                  Today, we're proud to serve over 1,000+ companies, from fast-growing startups 
                  to Fortune 500 enterprises, helping them find their ideal customers and scale 
                  their outreach.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Our team"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-purple-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-slate-600">
              Passionate experts dedicated to your success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-50" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-purple-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-slate-500 mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href={member.social.linkedin} className="text-slate-400 hover:text-purple-600 transition">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.social.twitter} className="text-slate-400 hover:text-purple-600 transition">
                    <Twitter size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to transform your lead generation?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands of companies using LisTeg to find their ideal customers
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/get-started" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105">
                Get Started Free
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}