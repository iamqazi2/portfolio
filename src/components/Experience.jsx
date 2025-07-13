import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Smartphone,
  Database,
  Palette,
  Cloud,
  Shield,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation variants for text content
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  const servicesData = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies, responsive design, and optimal performance.",
      gradient: "from-[#915EFF] to-[#7c3aed]",
      bgColor: "bg-[#915EFF]",
      iconColor: "#ffffff",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      gradient: "from-[#7c3aed] to-[#915EFF]",
      bgColor: "bg-[#7c3aed]",
      iconColor: "#ffffff",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive user interfaces and experiences that engage users and drive conversions.",
      gradient: "from-[#915EFF] to-[#7c3aed]",
      bgColor: "bg-[#915EFF]",
      iconColor: "#ffffff",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Scalable server-side solutions, APIs, and database management systems for robust applications.",
      gradient: "from-[#7c3aed] to-[#915EFF]",
      bgColor: "bg-[#7c3aed]",
      iconColor: "#ffffff",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure setup, deployment, and management for scalable and reliable applications.",
      gradient: "from-[#915EFF] to-[#7c3aed]",
      bgColor: "bg-[#915EFF]",
      iconColor: "#ffffff",
    },
    {
      icon: Shield,
      title: "Security & Optimization",
      description:
        "Comprehensive security implementations and performance optimization for enhanced application protection.",
      gradient: "from-[#7c3aed] to-[#915EFF]",
      bgColor: "bg-[#7c3aed]",
      iconColor: "#ffffff",
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    const section = sectionRef.current;

    if (!cards.length || !section) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Set initial positions - only first card visible, others hidden below
    cards.forEach((card, index) => {
      gsap.set(card, {
        y: index === 0 ? 0 : 300, // Others start further below for clearer separation
        opacity: index === 0 ? 1 : 0, // Only first card visible
        scale: index === 0 ? 1 : 0.9, // Slight scale for depth
        zIndex: servicesData.length - index,
      });
    });

    // Create ScrollTrigger for sequential card reveal
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${servicesData.length * 100}%`, // Increased scroll distance for slower transitions
      pin: true,
      pinSpacing: true,
      scrub: 0.5, // Smoother scrub for fluid animation
      onUpdate: (self) => {
        const progress = self.progress;
        const totalCards = cards.length;
        const cardDuration = 1 / (totalCards - 1); // Equal time per card transition

        cards.forEach((card, index) => {
          // Calculate when this card should be active
          const cardStartProgress = index * cardDuration;
          const cardEndProgress = (index + 1) * cardDuration;

          let cardY, cardOpacity, cardScale, cardZIndex;

          if (index === 0 && progress < cardDuration) {
            // First card stays visible initially
            cardY = 0;
            cardOpacity = 1;
            cardScale = 1;
            cardZIndex = servicesData.length;
          } else if (
            progress >= cardStartProgress &&
            progress < cardEndProgress &&
            index !== 0
          ) {
            // Card is currently being revealed
            const cardProgress = (progress - cardStartProgress) / cardDuration;
            cardY = 300 * (1 - cardProgress); // Smooth slide up
            cardOpacity = cardProgress; // Gradual fade in
            cardScale = 0.9 + cardProgress * 0.1; // Subtle scale
            cardZIndex = servicesData.length + index; // Bring to front
          } else if (progress >= cardEndProgress) {
            // Card is fully revealed, stays in place
            cardY = 0;
            cardOpacity = 1;
            cardScale = 1;
            cardZIndex = servicesData.length + index;
          } else {
            // Card hasn't been revealed yet
            cardY = 300;
            cardOpacity = 0;
            cardScale = 0.9;
            cardZIndex = servicesData.length - index;
          }

          // Apply smooth transitions
          gsap.to(card, {
            y: cardY,
            opacity: cardOpacity,
            scale: cardScale,
            zIndex: cardZIndex,
            duration: 0.8, // Slower for smoother transitions
            ease: "power3.out", // Smoother easing
          });
        });
      },
    });

    // Cleanup
    return () => {
      scrollTrigger.kill();
    };
  }, [servicesData.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 mx-auto overflow-hidden bg-black"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
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
      <div className="relative z-10 px-6 max-w-7xl mx-auto h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center space-y-8"
          >
            {/* Section Title */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#7c3aed]">
                    Services
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
                    Services
                  </motion.span>
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-300 text-lg sm:text-xl leading-relaxed"
              >
                At DevXiour, we specialize in creating{" "}
                <span className="text-[#915EFF] font-semibold">
                  innovative web solutions
                </span>
                , modern user interfaces, and cutting-edge applications that
                transform businesses and elevate digital experiences.
              </motion.p>
            </motion.div>

            {/* Additional Content */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7c3aed] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Fast & Reliable
                  </h3>
                  <p className="text-gray-400">
                    Lightning-fast delivery with 99.9% uptime
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#915EFF] flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Expert Team
                  </h3>
                  <p className="text-gray-400">
                    Skilled professionals with 5+ years experience
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7c3aed] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Growth Focused
                  </h3>
                  <p className="text-gray-400">
                    Solutions designed to scale with your business
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white font-semibold rounded-full text-lg transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[#915EFF]/25 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started Today</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#915EFF] opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initializing={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Sequential Card Reveal */}
          <div className="flex justify-center items-center">
            <div
              ref={containerRef}
              className="relative w-full max-w-md h-96"
              style={{ perspective: "1200px" }}
            >
              {servicesData.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Solid Background Card */}
                    <div
                      className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ${service.bgColor}`}
                    >
                      {/* Content with High Contrast */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                        {/* Icon */}
                        <div className="mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 p-4 shadow-lg border border-white/20">
                            <IconComponent
                              size={32}
                              className="text-white w-full h-full"
                            />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-4 text-white">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-100 leading-relaxed text-base font-medium">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
