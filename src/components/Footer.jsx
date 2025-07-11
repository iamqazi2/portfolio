import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      rotate: [0, 180, 360],
    },
  };

  // Footer sections data
  const footerSections = [
    {
      title: "Services",
      links: [
        "Web Development",
        "Mobile Apps",
        "UI/UX Design",
        "E-commerce",
        "Consulting",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Blog", "Contact"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Tutorials", "Support", "FAQ", "Community"],
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Cookies",
        "GDPR",
        "License",
      ],
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "GitHub", icon: "💻", href: "#" },
    { name: "Dribbble", icon: "🎨", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer Content */}
      <motion.div
        className="relative z-20 pt-24 pb-8 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onViewportEnter={() => setIsVisible(true)}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-[#915EFF]">
                DevXiour
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Crafting extraordinary digital experiences that push the
              boundaries of innovation
            </motion.p>
          </motion.div>

          {/* Newsletter Section with Glass Effect */}
          <motion.div
            variants={itemVariants}
            className="mb-16 flex justify-center"
          >
            <div className="relative group max-w-md w-full">
              {/* Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/10 to-[#7c3aed]/10 rounded-2xl backdrop-blur-xl border border-[#915EFF]/20 group-hover:border-[#915EFF]/40 transition-all duration-300" />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2,
                }}
              />

              <div className="relative p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Stay Updated
                </h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-black/20 border border-[#915EFF]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#915EFF] transition-colors"
                  />
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#915EFF]/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Glass Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 to-[#7c3aed]/5 rounded-xl backdrop-blur-sm border border-[#915EFF]/10 group-hover:border-[#915EFF]/20 transition-all duration-300" />

                <div className="relative p-6">
                  <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#7c3aed] mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          href="#"
                          className="text-gray-400 hover:text-[#915EFF] transition-colors duration-300 text-sm"
                        >
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Media Section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-16"
          >
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="relative group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glass Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/20 to-[#7c3aed]/20 rounded-full backdrop-blur-xl border border-[#915EFF]/30 group-hover:border-[#915EFF]/50 transition-all duration-300" />

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
                    variants={glowVariants}
                    animate={isVisible ? "animate" : ""}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />

                  <div className="relative w-12 h-12 flex items-center justify-center text-xl">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Section with Unique Shape */}
          <motion.div variants={itemVariants} className="relative">
            {/* Decorative Line */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-[#915EFF]/30 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-r from-[#915EFF] to-[#7c3aed] px-4 py-2 rounded-full">
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Copyright and Links */}
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <motion.p
                className="mb-4 md:mb-0"
                whileHover={{ color: "#915EFF" }}
              >
                © 2024 DevXiour. All rights reserved.
              </motion.p>
              <div className="flex gap-6">
                <motion.a
                  href="#"
                  className="hover:text-[#915EFF] transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-[#915EFF] transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#915EFF]/10 via-[#7c3aed]/5 to-transparent pointer-events-none" />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#915EFF] rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </footer>
  );
};

export default Footer;
