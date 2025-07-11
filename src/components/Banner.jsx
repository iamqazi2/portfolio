import React from "react";
import { motion } from "framer-motion";

const FloatingTechBanner = () => {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Python", icon: "🐍" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "GraphQL", icon: "🔄" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Vue.js", icon: "💚" },
    { name: "Firebase", icon: "🔥" },
    { name: "Kubernetes", icon: "⚓" },
    { name: "Redis", icon: "🔴" },
    { name: "Next.js", icon: "▲" },
    { name: "Express", icon: "🚀" },
    { name: "MySQL", icon: "🐬" },
    { name: "Git", icon: "🌳" },
    { name: "Nginx", icon: "🌐" },
    { name: "Jenkins", icon: "🔧" },
  ];

  // Create multiple rows with different speeds and directions
  const createFloatingRow = (
    items,
    direction = "left",
    speed = 60,
    delay = 0
  ) => {
    return (
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        initial={{ x: direction === "left" ? "100%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "100%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
      >
        {items.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="group relative flex items-center gap-3 px-6 py-4 rounded-full backdrop-blur-xl border transition-all duration-300 min-w-fit overflow-hidden"
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 10, 0],
            }}
            transition={{
              duration: 3 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          >
            {/* Dynamic Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/20 via-[#7c3aed]/10 to-[#915EFF]/20 opacity-80 rounded-full transition-opacity duration-300 group-hover:opacity-100" />

            {/* Border Gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/50 via-[#7c3aed]/30 to-[#915EFF]/50 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
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
              className="absolute inset-0 opacity-10 rounded-full"
              style={{
                background: `radial-gradient(circle at 50% 50%, #915EFF 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            />

            <motion.div
              className="relative z-10 text-2xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {tech.icon}
            </motion.div>
            <span className="relative z-10 text-white font-medium text-sm group-hover:text-[#915EFF] transition-colors duration-300">
              {tech.name}
            </span>

            {/* Hover Effect Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#915EFF] to-[#7c3aed] opacity-0 group-hover:opacity-8 rounded-full transition-opacity duration-300"
              whileHover={{ opacity: 0.12 }}
            />

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#915EFF] to-[#7c3aed] opacity-20 blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Enhanced Background Elements - Matching Hero */}

      {/* Header - Matching Hero Style */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our{" "}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#7c3aed]">
              Tech Stack
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
              Tech Stack
            </motion.span>
          </span>
        </motion.h2>
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Cutting-edge technologies powering{" "}
          <span className="text-[#915EFF] font-semibold">
            innovative solutions
          </span>{" "}
          and transforming digital experiences
        </p>
      </motion.div>

      {/* Floating Tech Rows */}
      <div className="relative space-y-6">
        {/* Row 1 - Left to Right */}
        <div className=" flex justify-center items-center py-8 overflow-hidden">
          {createFloatingRow(techStack.slice(0, 10), "left", 80, 0)}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex justify-center items-center py-8 overflow-hidden">
          {createFloatingRow(techStack.slice(10, 20), "right", 70, 0)}
        </div>

        {/* Row 3 - Left to Right (Faster) */}
        <div className="flex justify-center items-center py-8 overflow-hidden">
          {createFloatingRow(techStack.slice(0, 8), "left", 90, 4)}
        </div>
      </div>

      {/* Bottom CTA - Matching Hero Style */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16 relative z-10"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white font-semibold rounded-full text-lg transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[#915EFF]/25 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let's Build Something Amazing</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#915EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="group relative px-8 py-4 border-2 border-[#915EFF] text-white font-semibold rounded-full text-lg transition-all duration-300 hover:bg-[#915EFF]/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-[#915EFF] transition-colors duration-300">
              Explore Our Tech
            </span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default FloatingTechBanner;
