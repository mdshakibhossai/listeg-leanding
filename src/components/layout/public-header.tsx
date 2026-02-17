"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, Menu, X, Users, Zap, Mail, Globe, BarChart, 
  Award, TrendingUp, Star, BookOpen, Target, Phone, Sparkles,
  Shield, CheckCircle, ArrowRight, ExternalLink, Briefcase,
  Building2, DollarSign, Filter, Download, Gift, MessageCircle,
  PieChart, Rocket, Share2, Settings, HelpCircle, FileText,
  Database, Activity, Map, Code, Layers, Clock, CreditCard,
  Headphones, Shield as ShieldIcon, Lock, Eye, Radio,
  Network, UserCheck, Briefcase as BriefcaseIcon, TrendingUp as TrendingUpIcon
} from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Brand Colors
  const colors = {
    primary: '#843cff',
    secondary: '#37d4ff',
    gradient: 'linear-gradient(135deg, #00a6d3 0%, #8944ff 100%)',
    banner: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
  };

  // Platform dropdown items - 2 columns
  const platformItems = [
    // Column 1
    [
      { 
        title: 'Leads', 
        desc: 'Data enrichment for B2B leads', 
        icon: <Users size={20} className="text-[#843cff]" />, 
        href: '/leads',
        badge: 'New'
      },
      { 
        title: 'Email Finder', 
        desc: 'Verified email addresses with 98% accuracy', 
        icon: <Mail size={20} className="text-[#843cff]" />, 
        href: '/email-finder',
        badge: 'Popular'
      },
      { 
        title: 'Phone Finder', 
        desc: 'Direct dials & mobile numbers for prospects', 
        icon: <Phone size={20} className="text-[#843cff]" />, 
        href: '/phone-finder' 
      },
      { 
        title: 'Intent Data', 
        desc: 'Reach buyers searching for your solution', 
        icon: <Zap size={20} className="text-[#843cff]" />, 
        href: '/intent-data' 
      },
    ],
    // Column 2
    [
      { 
        title: 'Data Enrichment', 
        desc: 'Enhance your existing lists in real-time', 
        icon: <Rocket size={20} className="text-[#843cff]" />, 
        href: '/data-enrichments' 
      },
      { 
        title: 'Email Engine', 
        desc: 'Send emails that land and convert', 
        icon: <Mail size={20} className="text-[#843cff]" />, 
        href: '/email-engine' 
      },
      { 
        title: 'Cold Email Setup', 
        desc: 'Quickly launch your cold email campaigns', 
        icon: <Target size={20} className="text-[#843cff]" />, 
        href: '/cold-email-setup' 
      },
      { 
        title: 'API Access', 
        desc: 'Integrate Company into your workflows', 
        icon: <Code size={20} className="text-[#843cff]" />, 
        href: '/api' 
      },
    ]
  ];

  // Company dropdown items - 2 columns
  const ourDataItems = [
    // Column 1
    [
      { 
        title: 'About Us', 
        desc: 'About Instantly and our mission', 
        icon: <Database size={20} className="text-[#843cff]" />, 
        href: '/about-us',
        badge: '280M+'
      },
      { 
        title: 'Team', 
        desc: 'The team behind Instantly', 
        icon: <Award size={20} className="text-[#843cff]" />, 
        href: '/team',
        badge: '99%'
      }
    ],
    // Column 2
    [
      { 
        title: 'Reviews', 
        desc: 'What our 40,000+ users say', 
        icon: <Building2 size={20} className="text-[#843cff]" />, 
        href: '/reviews' 
      }
    ]
  ];

  // Why LisTeg dropdown items - 2 columns
  const whyItems = [
    // Column 1
    [
      { 
        title: 'Case Studies', 
        desc: 'See how companies win with Company Data', 
        icon: <BookOpen size={20} className="text-[#843cff]" />, 
        href: '/case-studies' 
      },
      { 
        title: 'Testimonials', 
        desc: 'What our 40,000+ users say', 
        icon: <Star size={20} className="text-[#843cff]" />, 
        href: '/testimonials' 
      },
      { 
        title: 'ROI Calculator', 
        desc: 'Calculate your potential returns', 
        icon: <PieChart size={20} className="text-[#843cff]" />, 
        href: '/roi-calculator' 
      },
      { 
        title: 'Integrations', 
        desc: 'Connect with your favorite tools', 
        icon: <Share2 size={20} className="text-[#843cff]" />, 
        href: '/integrations' 
      },
    ],
    // Column 2
    [
      { 
        title: 'Reviews', 
        desc: 'See what G2 & Capterra say', 
        icon: <MessageCircle size={20} className="text-[#843cff]" />, 
        href: '/reviews' 
      },
      { 
        title: 'Comparison', 
        desc: 'How we compare to competitors', 
        icon: <BarChart size={20} className="text-[#843cff]" />, 
        href: '/comparison' 
      },
      { 
        title: 'Success Stories', 
        desc: 'Real results from real customers', 
        icon: <Award size={20} className="text-[#843cff]" />, 
        href: '/success-stories' 
      },
      { 
        title: 'Trust Center', 
        desc: 'Security & compliance information', 
        icon: <Shield size={20} className="text-[#843cff]" />, 
        href: '/trust' 
      },
    ]
  ];

  // Resources dropdown items - 2 columns
  const resourcesItems = [
    // Column 1
    [
      { 
        title: 'Blog', 
        desc: 'Latest insights on lead generation', 
        icon: <BookOpen size={20} className="text-[#843cff]" />, 
        href: '/blog' 
      },
      { 
        title: 'Guides', 
        desc: 'In-depth resources for sales teams', 
        icon: <Target size={20} className="text-[#843cff]" />, 
        href: '/guides' 
      },
      { 
        title: 'Help Center', 
        desc: 'Get support and documentation', 
        icon: <HelpCircle size={20} className="text-[#843cff]" />, 
        href: '/help' 
      },
      { 
        title: 'Chrome Extension', 
        desc: 'Find leads anywhere on the web', 
        icon: <Download size={20} className="text-[#843cff]" />, 
        href: '/chrome-extension',
        badge: 'Free'
      },
    ],
    // Column 2
    [
      { 
        title: 'Affiliate Program', 
        desc: 'Earn commissions by referring users', 
        icon: <Gift size={20} className="text-[#843cff]" />, 
        href: '/affiliate' 
      },
      { 
        title: 'Documentation', 
        desc: 'API docs & developer resources', 
        icon: <FileText size={20} className="text-[#843cff]" />, 
        href: '/docs' 
      },
      { 
        title: 'Webinars', 
        desc: 'Live and on-demand training sessions', 
        icon: <Radio size={20} className="text-[#843cff]" />, 
        href: '/webinars' 
      },
      { 
        title: 'Community', 
        desc: 'Join our community of sales pros', 
        icon: <Users size={20} className="text-[#843cff]" />, 
        href: '/community' 
      },
    ]
  ];

  return (
    <>
      {/* TOP ANNOUNCEMENT BANNER */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[110] h-10 flex items-center justify-center bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white"
      >
        <div className="flex items-center gap-3 text-sm font-medium">
          <span className="bg-white/20 px-2 py-0.5 rounded text-xs uppercase tracking-wide">🥳 Offer</span>
          <span>LisTeg Launch offer: 20% LIFETIME before March.</span>
          <Link 
            href="/pricing" 
            className="flex items-center gap-1 text-white/90 hover:text-white underline underline-offset-2 transition-all"
          >
            See Plans <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>

      {/* MAIN NAVIGATION */}
      <header 
        className={`fixed left-0 right-0 z-[100] transition-all duration-300`}
        style={{ top: '40px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={`
              flex items-center justify-between px-4 sm:px-6 
              bg-white/90 backdrop-blur-lg 
              border border-slate-200/50 
              rounded-2xl shadow-lg 
              transition-all duration-300
              ${isScrolled ? 'py-2 shadow-xl' : 'py-3'}
            `}
          >
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md"
                style={{ background: colors.gradient }}
              >
                <div className="w-4 h-4 border-2 border-white rounded-sm" />
              </motion.div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                LisTeg
              </span>
            </Link>

            {/* CENTER LINKS - Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Platform Dropdown - 2 Columns */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('platform')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`
                    flex items-center gap-1.5 px-4 py-2 text-sm font-medium 
                    transition-all rounded-full
                    ${activeDropdown === 'platform' 
                      ? 'text-[#843cff] bg-purple-50' 
                      : 'text-slate-700 hover:text-[#843cff] hover:bg-purple-50/50'
                    }
                  `}
                >
                  Platform
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      activeDropdown === 'platform' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'platform' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[600px]"
                    >
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl overflow-hidden">
                        <div className="px-6 py-3 bg-gradient-to-r from-[#667eea]/5 to-[#764ba2]/5 border-b border-slate-100">
                          <span className="text-xs font-semibold text-[#843cff] uppercase tracking-wider">
                            Platform Features
                          </span>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            {platformItems[0].map((item, idx) => (
                              <Link 
                                key={idx} 
                                href={item.href} 
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                              >
                                <div className="mt-0.5 text-[#843cff] bg-purple-50 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-slate-900">
                                      {item.title}
                                    </span>
                                    {item.badge && (
                                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#37d4ff] text-white">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-1">
                            {platformItems[1].map((item, idx) => (
                              <Link 
                                key={idx} 
                                href={item.href} 
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                              >
                                <div className="mt-0.5 text-[#843cff] bg-purple-50 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-slate-900">
                                    {item.title}
                                  </span>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="p-3 bg-slate-50 border-t border-slate-100">
                          <Link 
                            href="/platform"
                            className="flex items-center justify-between text-xs font-medium text-[#843cff] hover:gap-2 transition-all"
                          >
                            <span>View all platform features</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Dropdown - 2 Columns */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('ourData')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`
                    flex items-center gap-1.5 px-4 py-2 text-sm font-medium 
                    transition-all rounded-full
                    ${activeDropdown === 'ourData' 
                      ? 'text-[#843cff] bg-purple-50' 
                      : 'text-slate-700 hover:text-[#843cff] hover:bg-purple-50/50'
                    }
                  `}
                >
                  Company
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      activeDropdown === 'ourData' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'ourData' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[600px]"
                    >
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl overflow-hidden">
                        <div className="px-6 py-3 bg-gradient-to-r from-[#667eea]/5 to-[#764ba2]/5 border-b border-slate-100">
                          <span className="text-xs font-semibold text-[#843cff] uppercase tracking-wider">
                            Company
                          </span>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            {ourDataItems[0].map((item, idx) => (
                              <Link 
                                key={idx} 
                                href={item.href} 
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                              >
                                <div className="mt-0.5 text-[#843cff] bg-purple-50 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-slate-900">
                                      {item.title}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-1">
                            {ourDataItems[1].map((item, idx) => (
                              <Link 
                                key={idx} 
                                href={item.href} 
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                              >
                                <div className="mt-0.5 text-[#843cff] bg-purple-50 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-slate-900">
                                    {item.title}
                                  </span>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="p-3 bg-slate-50 border-t border-slate-100">
                          <Link 
                            href="/our-data"
                            className="flex items-center justify-between text-xs font-medium text-[#843cff] hover:gap-2 transition-all"
                          >
                            <span>Explore all data features</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Why LisTeg Dropdown - 2 Columns */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('why')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`
                    flex items-center gap-1.5 px-4 py-2 text-sm font-medium 
                    transition-all rounded-full
                    ${activeDropdown === 'why' 
                      ? 'text-[#843cff] bg-purple-50' 
                      : 'text-slate-700 hover:text-[#843cff] hover:bg-purple-50/50'
                    }
                  `}
                >
                  Why LisTeg
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      activeDropdown === 'why' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'why' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[600px]"
                    >
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl overflow-hidden">
                        <div className="px-6 py-3 bg-gradient-to-r from-[#667eea]/5 to-[#764ba2]/5 border-b border-slate-100">
                          <span className="text-xs font-semibold text-[#843cff] uppercase tracking-wider">
                            Why Choose LisTeg
                          </span>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            {whyItems[0].map((item, idx) => (
                              <Link 
                                key={idx} 
                                href={item.href} 
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                              >
                                <div className="mt-0.5 text-[#843cff] bg-purple-50 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-slate-900">
                                    {item.title}
                                  </span>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-1">
                            {whyItems[1].map((item, idx) => (
                              <Link 
                                key={idx} 
                                href={item.href} 
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                              >
                                <div className="mt-0.5 text-[#843cff] bg-purple-50 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-slate-900">
                                    {item.title}
                                  </span>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="p-3 bg-slate-50 border-t border-slate-100">
                          <Link 
                            href="/why-listeg"
                            className="flex items-center justify-between text-xs font-medium text-[#843cff] hover:gap-2 transition-all"
                          >
                            <span>See why customers choose us</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown - 2 Columns */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`
                    flex items-center gap-1.5 px-4 py-2 text-sm font-medium 
                    transition-all rounded-full
                    ${activeDropdown === 'resources' 
                      ? 'text-[#843cff] bg-purple-50' 
                      : 'text-slate-700 hover:text-[#843cff] hover:bg-purple-50/50'
                    }
                  `}
                >
                  Resources
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      activeDropdown === 'resources' ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[600px]"
                    >
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl overflow-hidden">
                        <div className="px-6 py-3 bg-gradient-to-r from-[#667eea]/5 to-[#764ba2]/5 border-b border-slate-100">
                          <span className="text-xs font-semibold text-[#843cff] uppercase tracking-wider">
                            Resources
                          </span>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            {resourcesItems[0].map((item, idx) => (
                              <Link 
                                key={idx} 
                                href={item.href} 
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                              >
                                <div className="mt-0.5 text-[#843cff] bg-purple-50 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-slate-900">
                                      {item.title}
                                    </span>
                                    {item.badge && (
                                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#37d4ff] text-white">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-1">
                            {resourcesItems[1].map((item, idx) => (
                              <Link 
                                key={idx} 
                                href={item.href} 
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                              >
                                <div className="mt-0.5 text-[#843cff] bg-purple-50 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-slate-900">
                                    {item.title}
                                  </span>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="p-3 bg-slate-50 border-t border-slate-100">
                          <Link 
                            href="/resources"
                            className="flex items-center justify-between text-xs font-medium text-[#843cff] hover:gap-2 transition-all"
                          >
                            <span>Explore all resources</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing - No Dropdown */}
              <Link 
                href="/pricing" 
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#843cff] rounded-full hover:bg-purple-50/50 transition-all"
              >
                Pricing
              </Link>
            </div>

            {/* RIGHT SIDE - Buttons */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full">
                <Users size={14} className="text-[#843cff]" />
                <span className="text-xs font-medium text-slate-700">40k+</span>
              </div>

              <Link 
                href="/login" 
                className="hidden sm:block text-sm font-medium text-slate-600 hover:text-[#843cff] px-3 py-2 transition-colors"
              >
                Log in
              </Link>

              <Link href="/get-started">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden group px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
                  style={{ background: colors.gradient }}
                >
                  <motion.span
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white/20"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started <Sparkles size={16} />
                  </span>
                </motion.button>
              </Link>

              <Link href="/dashboard" className="hidden lg:block">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  className="px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all"
                  style={{ borderColor: colors.secondary, color: colors.primary }}
                >
                  Go to Dashboard
                </motion.button>
              </Link>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* MOBILE MENU - Full Screen Overlay with Slide Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="lg:hidden fixed inset-0 z-[120] bg-white flex flex-col"
            style={{ paddingTop: 'calc(20px)' }}
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
                {/* Platform Dropdown - 2 Columns */}
                <motion.div 
                  variants={fadeInUp}
                  className="border-b border-slate-50"
                >
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'platform' ? null : 'platform')}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-lg font-bold text-slate-900">Products</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === 'platform' ? 180 : 0 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'platform' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pb-4 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {[...platformItems[0], ...platformItems[1]].map((sub, idx) => (
                            <Link 
                              key={idx}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-slate-50 p-3 rounded-xl flex flex-col gap-2"
                              >
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-purple-600">
                                  {React.cloneElement(sub.icon as React.ReactElement)}
                                </div>
                                <div>
                                  <div className="font-bold text-xs text-slate-900">{sub.title}</div>
                                  <div className="text-[10px] text-slate-500 leading-relaxed mt-0.5 line-clamp-2">{sub.desc}</div>
                                </div>
                                {sub.badge && (
                                  <span className="text-[8px] font-bold px-1 py-0.5 rounded-full bg-[#37d4ff] text-white w-fit">
                                    {sub.badge}
                                  </span>
                                )}
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Company Dropdown - 2 Columns */}
                <motion.div 
                  variants={fadeInUp}
                  className="border-b border-slate-50"
                >
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'ourData' ? null : 'ourData')}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-lg font-bold text-slate-900">Company</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === 'ourData' ? 180 : 0 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'ourData' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pb-4 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {[...ourDataItems[0], ...ourDataItems[1]].map((sub, idx) => (
                            <Link 
                              key={idx}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-slate-50 p-3 rounded-xl flex flex-col gap-2"
                              >
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-purple-600">
                                  {React.cloneElement(sub.icon as React.ReactElement)}
                                </div>
                                <div>
                                  <div className="font-bold text-xs text-slate-900">{sub.title}</div>
                                  <div className="text-[10px] text-slate-500 leading-relaxed mt-0.5 line-clamp-2">{sub.desc}</div>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Why LisTeg Dropdown - 2 Columns */}
                <motion.div 
                  variants={fadeInUp}
                  className="border-b border-slate-50"
                >
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'why' ? null : 'why')}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-lg font-bold text-slate-900">Why LisTeg</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === 'why' ? 180 : 0 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'why' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pb-4 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {[...whyItems[0], ...whyItems[1]].map((sub, idx) => (
                            <Link 
                              key={idx}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-slate-50 p-3 rounded-xl flex flex-col gap-2"
                              >
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-purple-600">
                                  {React.cloneElement(sub.icon as React.ReactElement)}
                                </div>
                                <div>
                                  <div className="font-bold text-xs text-slate-900">{sub.title}</div>
                                  <div className="text-[10px] text-slate-500 leading-relaxed mt-0.5 line-clamp-2">{sub.desc}</div>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Resources Dropdown - 2 Columns */}
                <motion.div 
                  variants={fadeInUp}
                  className="border-b border-slate-50"
                >
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-lg font-bold text-slate-900">Resources</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === 'resources' ? 180 : 0 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'resources' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pb-4 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {[...resourcesItems[0], ...resourcesItems[1]].map((sub, idx) => (
                            <Link 
                              key={idx}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-slate-50 p-3 rounded-xl flex flex-col gap-2"
                              >
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-purple-600">
                                  {React.cloneElement(sub.icon as React.ReactElement)}
                                </div>
                                <div>
                                  <div className="font-bold text-xs text-slate-900">{sub.title}</div>
                                  <div className="text-[10px] text-slate-500 leading-relaxed mt-0.5 line-clamp-2">{sub.desc}</div>
                                </div>
                                {sub.badge && (
                                  <span className="text-[8px] font-bold px-1 py-0.5 rounded-full bg-[#37d4ff] text-white w-fit">
                                    {sub.badge}
                                  </span>
                                )}
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Pricing Link */}
                <motion.a 
                  variants={fadeInUp}
                  href="/pricing" 
                  className="text-lg font-bold text-slate-900 py-4 border-b border-slate-50 block"
                >
                  Pricing
                </motion.a>
                
                {/* Log In Button */}
                <motion.button 
                  variants={fadeInUp}
                  className="text-left text-lg font-bold text-slate-900 py-4 border-b border-slate-50"
                >
                  Log In
                </motion.button>
                
                {/* CTA Button */}
                <motion.div 
                  variants={fadeInUp}
                  className="mt-10"
                >
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#00a6d3] to-[#8944ff] text-white py-4 rounded-full font-bold shadow-lg"
                  >
                    Get 100 Free Leads
                  </motion.button>
                </motion.div>

                {/* User Count Badge - Mobile */}
                <motion.div 
                  variants={fadeInUp}
                  className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-600"
                >
                  <Users size={16} className="text-[#843cff]" />
                  <span>Join 40,000+ users trusting LisTeg</span>
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