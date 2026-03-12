"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, MapPin, Star, Quote } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollY } = useScroll();
  // Disable parallax on mobile for better performance
  const y1 = useTransform(scrollY, [0, 300], [0, isMobile ? 0 : 150]);
  const y2 = useTransform(scrollY, [0, 300], [0, isMobile ? 0 : -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, isMobile ? 1 : 0]);
  
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Featured reviews for hero section
  const featuredReviews = [
    {
      id: 1,
      client: "gautammalik209",
      country: "Italy",
      text: "Mohammad did i really good job, He built a fully customised WhatsApp chatbot system for me with server and even helped me set up. I highly recommend him for project like these.",
      rating: 5,
    },
    {
      id: 2,
      client: "lovelylj",
      country: "United States",
      text: "Mohammed is a very hard worker and I enjoy working with him. This project has taken a bit longer than we planned because I am an expert at user experience within design components. As such I asked him to revisit details and he did exactly as I asked. I am super grateful for him. He is a great developer. Thanks!",
      rating: 5,
    },
    {
      id: 3,
      client: "anum_danial",
      country: "Pakistan",
      text: "This is my second time working with Mohammed, and once again he did an excellent job. He understood my requirements clearly and delivered exactly what I wanted.",
      rating: 5,
    },
    {
      id: 4,
      client: "babarali677",
      country: "Pakistan",
      text: "A wonderful experience working with him. He is knowledgeable, hardworking, fast and delivers excellent work above and beyond expectations.",
      rating: 5,
    },
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % featuredReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredReviews.length]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background Image/Pattern Layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-animated-gradient opacity-10" />
      
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: y1 }}
      >
        {!isMobile && (
          <>
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </>
        )}
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: y2 }}
      >
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rounded-lg"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 border-2 border-secondary/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/10 rounded-lg"
          animate={{
            y: [0, -15, 0],
            rotate: [45, 50, 45],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-secondary/15 rounded-lg"
          animate={{
            y: [0, 15, 0],
            rotate: [-45, -50, -45],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
      
      {/* Overlay for better text readability */}
      <motion.div 
        className="absolute inset-0 bg-background/40 backdrop-blur-[0.5px]"
        style={{ opacity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 sm:pt-16 lg:pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
        >
          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src="/images/profile.jpg"
                alt="Mohammed Bilal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white text-4xl font-bold">
                        MB
                      </div>
                    `;
                  }
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            {/* 5-Star Fiverr Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-4 flex justify-center lg:justify-start"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-sm font-semibold text-foreground">5-Star Rated on Fiverr</span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-display font-extrabold mb-4 tracking-tight">
                <span className="text-foreground inline-block">
                  {"Mohammed Bilal".split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-lg sm:text-xl lg:text-3xl font-semibold text-foreground/80">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                AI Developer
              </motion.span>
              <motion.span 
                className="text-primary"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                |
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                Full-Stack Developer
              </motion.span>
              <motion.span 
                className="text-primary"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                |
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                Freelancer
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin size={18} className="text-primary" />
              <span className="text-sm lg:text-base text-foreground/70">
                Based in Saudi Arabia
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-primary/50 transition-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent backdrop-blur-sm border-2 border-primary/30 text-foreground rounded-lg font-semibold text-lg hover:border-primary hover:bg-primary/10 transition-all"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(6, 182, 212, 0.8)",
                color: "#06b6d4",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          </div>
        </motion.div>

        {/* Reviews Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16 lg:mt-20 max-w-4xl mx-auto px-4 relative z-10"
        >
          <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute top-4 left-4 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReviewIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-base lg:text-lg text-foreground/90 mb-4 leading-relaxed italic">
                    &ldquo;{featuredReviews[currentReviewIndex].text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="font-semibold text-foreground">
                        {featuredReviews[currentReviewIndex].client}
                      </div>
                      <div className="text-sm text-foreground/60">
                        {featuredReviews[currentReviewIndex].country}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {featuredReviews.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentReviewIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentReviewIndex
                              ? "bg-primary w-6"
                              : "bg-foreground/20 hover:bg-foreground/40"
                          }`}
                          aria-label={`Go to review ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <ArrowDown size={24} className="text-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



