import { motion } from "framer-motion";
import { useState } from "react";

// Icons components (using lucide-react style)
const CodeIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
);

const RocketIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4.5 16.5c-1.5 1.5-2 4.5-2 4.5s3-0.5 4.5-2l7-7 2-2-2-2-7 7z" />
    <path d="M13.5 6.5a4.5 4.5 0 0 1 6 6l-7 7a4.5 4.5 0 0 1-6-6z" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Cards data
  const cardsData = [
    {
      icon: CodeIcon,
      title: "Expert Development",
      description:
        "Our skilled developers create robust, scalable solutions using cutting-edge technologies and best practices to deliver exceptional results.",
      gradient: "from-[#915EFF] via-[#7c3aed] to-[#915EFF]",
      bgGradient: "from-[#915EFF]/20 via-[#7c3aed]/10 to-[#915EFF]/20",
      borderGradient: "from-[#915EFF]/50 via-[#7c3aed]/30 to-[#915EFF]/50",
      glowColor: "#915EFF",
    },
    {
      icon: RocketIcon,
      title: "Lightning Fast",
      description:
        "We deliver projects with incredible speed without compromising quality, ensuring your business stays ahead of the competition.",
      gradient: "from-[#7c3aed] via-[#915EFF] to-[#7c3aed]",
      bgGradient: "from-[#7c3aed]/20 via-[#915EFF]/10 to-[#7c3aed]/20",
      borderGradient: "from-[#7c3aed]/50 via-[#915EFF]/30 to-[#7c3aed]/50",
      glowColor: "#7c3aed",
    },
    {
      icon: ShieldIcon,
      title: "Secure & Reliable",
      description:
        "Your data and applications are protected with enterprise-grade security measures and reliable infrastructure you can trust.",
      gradient: "from-[#915EFF] via-[#7c3aed] to-[#915EFF]",
      bgGradient: "from-[#915EFF]/20 via-[#7c3aed]/10 to-[#915EFF]/20",
      borderGradient: "from-[#915EFF]/50 via-[#7c3aed]/30 to-[#915EFF]/50",
      glowColor: "#915EFF",
    },
    {
      icon: HeartIcon,
      title: "Client-Focused",
      description:
        "We prioritize your success with personalized attention, clear communication, and ongoing support throughout your journey.",
      gradient: "from-[#7c3aed] via-[#915EFF] to-[#7c3aed]",
      bgGradient: "from-[#7c3aed]/20 via-[#915EFF]/10 to-[#7c3aed]/20",
      borderGradient: "from-[#7c3aed]/50 via-[#915EFF]/30 to-[#7c3aed]/50",
      glowColor: "#7c3aed",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7c3aed] opacity-8 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#915EFF] opacity-10 blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-[#915EFF]/40 to-[#7c3aed]/40 opacity-15 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#7c3aed]">
                DevXiour
              </span>
              {/* Subtle glow effect */}
              <motion.span
                className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#7c3aed] blur-sm opacity-50"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                DevXiour
              </motion.span>
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We combine innovation, expertise, and dedication to deliver
            exceptional results that exceed your expectations and drive your
            business forward.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateX: 5,
                rotateY: hoveredCard === index ? 5 : 0,
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Card Container with Glass Effect */}
              <div className="relative h-full min-h-[320px] sm:min-h-[350px] rounded-2xl p-6 sm:p-8 backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover:border-white/20 overflow-hidden">
                {/* Dynamic Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-60 rounded-2xl transition-opacity duration-500 group-hover:opacity-90`}
                />

                {/* Border Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.borderGradient} rounded-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
                  style={{
                    mask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                    maskComposite: "xor",
                    WebkitMask:
                      "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                  }}
                />

                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-20 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${card.glowColor} 0%, transparent 60%)`,
                  }}
                  animate={{
                    scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                    opacity: hoveredCard === index ? [0.2, 0.4, 0.2] : 0.2,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredCard === index ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                />

                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, ${card.glowColor}20, transparent, ${card.glowColor}20)`,
                  }}
                  animate={{
                    opacity: hoveredCard === index ? [0, 0.6, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredCard === index ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mb-6 relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl opacity-20 blur-sm`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl opacity-80`}
                    />
                    <div className="relative z-10 w-full h-full flex items-center justify-center text-white p-4">
                      <card.icon />
                    </div>

                    {/* Icon Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(45deg, ${card.glowColor}40, transparent, ${card.glowColor}40)`,
                        filter: "blur(8px)",
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className={`text-xl sm:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${card.gradient} group-hover:scale-105 transition-transform duration-300`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    {card.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-gray-200 group-hover:text-white text-sm sm:text-base leading-relaxed transition-colors duration-300 flex-grow flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    {card.description}
                  </motion.p>

                  {/* Decorative Elements */}
                  <motion.div
                    className={`absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br ${card.gradient} opacity-10 blur-xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                  <motion.div
                    className={`absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-gradient-to-br ${card.gradient} opacity-15 blur-lg`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8,
                    }}
                  />
                </div>

                {/* Hover Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                  }}
                  animate={{
                    x: hoveredCard === index ? ["-100%", "100%"] : "-100%",
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: hoveredCard === index ? Infinity : 0,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
