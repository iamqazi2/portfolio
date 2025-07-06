import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Animation variants for better organization
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Counter animation hook
const useCountUp = (end, duration = 2, delay = 0) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const startValue = 0;

      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(
          startValue + (end - startValue) * easeOutQuart
        );

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      updateCount();
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay, hasStarted]);

  return [count, () => setHasStarted(true)];
};

const Hero = () => {
  // Counter hooks for each stat - faster animation
  const [projectsCount, startProjectsCount] = useCountUp(50, 1.2, 0);
  const [clientsCount, startClientsCount] = useCountUp(25, 1.2, 0.1);
  const [experienceCount, startExperienceCount] = useCountUp(5, 1.2, 0.2);

  // Stats data with enhanced styling
  const statsData = [
    {
      number: projectsCount,
      suffix: "+",
      label: "Projects Completed",
      gradient: "from-[#915EFF] via-[#7c3aed] to-[#915EFF]",
      bgGradient: "from-[#915EFF]/20 via-[#7c3aed]/10 to-[#915EFF]/20",
      borderGradient: "from-[#915EFF]/50 via-[#7c3aed]/30 to-[#915EFF]/50",
      startCount: startProjectsCount,
    },
    {
      number: clientsCount,
      suffix: "+",
      label: "Happy Clients",
      gradient: "from-[#7c3aed] via-[#915EFF] to-[#7c3aed]",
      bgGradient: "from-[#7c3aed]/20 via-[#915EFF]/10 to-[#7c3aed]/20",
      borderGradient: "from-[#7c3aed]/50 via-[#915EFF]/30 to-[#7c3aed]/50",
      startCount: startClientsCount,
    },
    {
      number: experienceCount,
      suffix: "+",
      label: "Years Experience",
      gradient: "from-[#915EFF] via-[#7c3aed] to-[#915EFF]",
      bgGradient: "from-[#915EFF]/20 via-[#7c3aed]/10 to-[#915EFF]/20",
      borderGradient: "from-[#915EFF]/50 via-[#7c3aed]/30 to-[#915EFF]/50",
      startCount: startExperienceCount,
    },
  ];
  return (
    <section className="relative w-full h-fit mx-auto ">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs with Enhanced Animation */}
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7c3aed] opacity-10 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#915EFF] opacity-15 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-[#915EFF]/30 to-[#7c3aed]/30 opacity-20 blur-lg"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen ${styles.paddingX} pt-20`}
      >
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center max-w-6xl mx-auto text-center"
        >
          {/* Enhanced Main Title */}
          <motion.div variants={fadeInUp} className="mb-8">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to{" "}
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
            </motion.h1>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            At DevXiour, we specialize in creating{" "}
            <span className="text-[#915EFF] font-semibold">
              innovative web solutions
            </span>
            , modern user interfaces, and cutting-edge applications that
            transform businesses and elevate digital experiences.
          </motion.p>

          {/* Enhanced Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 items-center mb-16"
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white font-semibold rounded-full text-lg transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[#915EFF]/25 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Your Project</span>
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
                View Our Work
              </span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </motion.button>
          </motion.div>

          {/* Enhanced Company Stats with Counter Animation - Compact Size */}
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-4xl mx-auto mt-8 px-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                    ease: "easeOut",
                  }}
                  onViewportEnter={() => {
                    // Start counter animation when card comes into view
                    setTimeout(() => stat.startCount(), index * 100);
                  }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Card Container - Compact */}
                  <div className="relative h-full min-h-[120px] sm:min-h-[130px] rounded-xl sm:rounded-2xl p-4 sm:p-5 backdrop-blur-xl border transition-all duration-300 group-hover:shadow-xl">
                    {/* Dynamic Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-80 rounded-xl sm:rounded-2xl transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    {/* Border Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.borderGradient} rounded-xl sm:rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
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
                      className="absolute inset-0 opacity-10 rounded-xl sm:rounded-2xl"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${
                          stat.gradient.includes("915EFF")
                            ? "#915EFF"
                            : "#7c3aed"
                        } 0%, transparent 70%)`,
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

                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                      {/* Counter Number */}
                      <motion.div
                        className="flex items-baseline justify-center mb-2"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      >
                        <motion.span
                          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} leading-none`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {stat.number}
                        </motion.span>
                        <motion.span
                          className={`text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} ml-1`}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 1.2 + index * 0.1,
                          }}
                        >
                          {stat.suffix}
                        </motion.span>
                      </motion.div>

                      {/* Label */}
                      <motion.p
                        className="text-gray-200 group-hover:text-white text-xs sm:text-sm font-medium leading-relaxed transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                      >
                        {stat.label}
                      </motion.p>

                      {/* Decorative Elements - Smaller */}
                      <motion.div
                        className={`absolute -top-1 -right-1 w-12 h-12 rounded-full bg-gradient-to-br ${stat.gradient} opacity-20 blur-lg`}
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
                      <motion.div
                        className={`absolute -bottom-1 -left-1 w-10 h-10 rounded-full bg-gradient-to-br ${stat.gradient} opacity-15 blur-md`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.15, 0.25, 0.15],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.8,
                        }}
                      />
                    </div>

                    {/* Hover Effect Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-8 rounded-xl sm:rounded-2xl transition-opacity duration-300`}
                      whileHover={{ opacity: 0.12 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Optional: Uncomment to add 3D canvas */}
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
