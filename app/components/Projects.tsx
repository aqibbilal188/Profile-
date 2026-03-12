"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe, ArrowUpRight, Code2, Play, X } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // Cleanup videos when component unmounts
  useEffect(() => {
    return () => {
      // Pause all videos on cleanup
      const videos = videoRefs.current;
      Object.values(videos).forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, []);

  // Function to check if video exists
  const checkVideoExists = (videoPath: string): boolean => {
    // This will be handled by the browser - if video doesn't exist, it won't play
    return true; // We'll let the browser handle 404s
  };

  // Reorder projects: first 3 should be video projects, then others
  const projects = [
    {
      id: 3,
      name: "Crypto AI Trading Bot",
      description: "AI-powered cryptocurrency trading bot with intelligent market analysis and automated trading strategies.",
      technologies: ["AI", "Crypto", "Trading", "Automation"],
      hasVideo: true,
      videoPath: "/videos/crypto-trading-bot.mp4",
    },
    {
      id: 4,
      name: "Crypto AI Powered DEX",
      description: "Decentralized exchange integrated with AI features for enhanced crypto trading experience.",
      technologies: ["Blockchain", "DEX", "AI", "Web3"],
      hasVideo: true,
      videoPath: "/videos/crypto-dex.mp4",
    },
    {
      id: 6,
      name: "AI Calling Agent",
      description: "AI-powered calling agent for business automation with natural language processing.",
      technologies: ["AI", "Voice", "Automation", "NLP"],
      hasVideo: true,
      videoPath: "/videos/ai-calling-agent.mp4",
    },
    {
      id: 1,
      name: "Fortva – All-in-One Document Management & Contract Lifecycle Platform",
      description: "Developed a comprehensive document management and contract lifecycle platform with military-grade security, AI-powered intelligence, zero-knowledge encryption, and workflow automation. Features unlimited users, compliance readiness, and seamless document organization.",
      link: "https://fortva.com/",
      technologies: ["AI", "AWS", "Document Management", "Contract Lifecycle", "Security", "Workflow Automation", "Web Development"],
      hasVideo: false,
      videoPath: null,
      hasImage: true,
      imagePath: "/images/fortva.png",
    },
    {
      id: 2,
      name: "GoodPappa – E-commerce Platform",
      description: "Large e-commerce platform with AI chatbot integration for enhanced customer experience.",
      link: "https://goodpappa.com/",
      technologies: ["E-commerce", "AI Chatbot", "Web Development"],
      hasVideo: false,
      videoPath: null,
      hasImage: true,
      imagePath: "/images/goodpappa.png",
    },
    {
      id: 7,
      name: "Orange County Rehab Cali – AI Chatbot with Live Chat",
      description: "AI chatbot connected with LLMs, featuring live chat support, lead generation, and multi-language support. Integrated chatbot interface with English and Spanish language options for Orange County Rehab Cali marketing services.",
      link: "https://orangecountyrehabcalimktg.com/",
      technologies: ["AI", "Chatbot", "LLM", "Live Chat", "Multi-language"],
      hasVideo: false,
      videoPath: null,
      hasImage: true,
      imagePath: "/images/orange-county-rehab-screenshot.jpg",
    },
    {
      id: 8,
      name: "AI WhatsApp Chatbots",
      description: "AI-powered WhatsApp chatbots connected with Gemini API and comprehensive admin dashboards.",
      technologies: ["WhatsApp", "AI", "Gemini API", "Dashboard"],
      hasVideo: true,
      videoPath: "/videos/whatsapp-chatbot.mp4",
      testNumber: "+1 (555) 849-5591",
    },
    {
      id: 9,
      name: "AI Powered Websites",
      description: "Websites integrated with AI features including image generation, video generation, voice-to-text, and text-to-voice using ElevenLabs.",
      technologies: ["AI", "Gemini", "ElevenLabs", "Web Development"],
      hasVideo: false,
      videoPath: null,
    },
    {
      id: 10,
      name: "Dental Appointment Booking",
      description: "Dental appointment booking system with AI chatbot integration for seamless patient experience.",
      link: "https://gotadental.se/",
      technologies: ["Booking System", "AI Chatbot", "Healthcare"],
      hasVideo: true,
      videoPath: "/videos/swedish-chatbot.mp4",
    },
    {
      id: 11,
      name: "Pakistan University Website",
      description: "University website with AI chatbot integration for student support and information access.",
      technologies: ["Education", "AI Chatbot", "Web Development"],
      hasVideo: true,
      videoPath: "/videos/university-website.mp4",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto font-light">
            Delivering exceptional results through innovative solutions
          </p>
        </motion.div>

        <motion.div
          key={showAll ? 'all-projects' : 'limited-projects'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {(showAll ? projects : projects.slice(0, 3)).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
              }}
              className="group relative bg-background border border-foreground/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Video Player - Full width at top */}
              {project.hasVideo && project.videoPath && (
                <div className="relative w-full aspect-video bg-black overflow-hidden group/video">
                  {playingVideo !== project.id ? (
                    <>
                      {/* Video thumbnail/preview */}
                      <video
                        src={project.videoPath}
                        className="w-full h-full object-cover"
                        preload="metadata"
                        muted
                        playsInline
                        onLoadedMetadata={(e) => {
                          // Set first frame as thumbnail
                          const video = e.target as HTMLVideoElement;
                          video.currentTime = 0.1;
                        }}
                      />
                      {/* Thumbnail/Preview with Play Button */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] group-hover/video:bg-black/30 transition-all cursor-pointer z-10"
                        onClick={() => {
                          setPlayingVideo(project.id);
                        }}
                      >
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingVideo(project.id);
                          }}
                          className="w-24 h-24 rounded-full bg-primary/95 backdrop-blur-md flex items-center justify-center shadow-2xl hover:bg-primary transition-all group/play border-4 border-white/20 z-20"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play className="w-12 h-12 text-white ml-1 fill-white" />
                        </motion.button>
                      </div>
                      <div className="absolute top-4 right-4 px-4 py-2 bg-primary/90 backdrop-blur-sm text-black text-sm font-bold rounded-full flex items-center gap-2 z-30 pointer-events-none">
                        <Play className="w-4 h-4" />
                        Watch Demo
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Full Quality Video Player */}
                      <video
                        key={`video-${project.id}-playing`}
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[project.id] = el;
                            // Force play when video element is ready
                            el.play().catch(err => {
                              console.error("Video play error:", err);
                            });
                          }
                        }}
                        src={project.videoPath}
                        controls
                        autoPlay
                        className="w-full h-full object-contain bg-black"
                        playsInline
                        preload="auto"
                        onLoadedData={(e) => {
                          // Ensure video plays when loaded
                          const video = e.target as HTMLVideoElement;
                          video.play().catch(err => {
                            console.error("Video play error:", err);
                          });
                        }}
                        onError={(e) => {
                          console.error("Video failed to load:", project.videoPath);
                          setPlayingVideo(null);
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <motion.button
                        onClick={() => {
                          // Pause video when closing
                          const video = videoRefs.current[project.id];
                          if (video) {
                            video.pause();
                            video.currentTime = 0;
                          }
                          setPlayingVideo(null);
                        }}
                        className="absolute top-4 right-4 px-4 py-2 bg-primary/90 backdrop-blur-sm text-black text-sm font-bold rounded-full hover:bg-primary transition-all flex items-center gap-2 z-10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <X className="w-4 h-4" />
                        Close
                      </motion.button>
                    </>
                  )}
                </div>
              )}

              {/* Project Image - Full width at top */}
              {!project.hasVideo && project.hasImage && project.imagePath && (
                <div className="relative w-full aspect-video bg-gradient-to-br from-foreground/5 to-foreground/10 overflow-hidden">
                  <Image
                    src={project.imagePath}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-black text-xs font-bold rounded-full">
                    Live Site
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-foreground/60 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 p-3 rounded-lg bg-foreground/5 hover:bg-primary/10 border border-foreground/10 hover:border-primary/30 transition-all group/link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-foreground/70 group-hover/link:text-primary transition-colors" />
                    </motion.a>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 text-xs font-medium bg-foreground/5 text-foreground/70 border border-foreground/10 rounded-lg hover:border-primary/30 hover:text-primary transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group/link"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                  {project.testNumber && (
                    <span className="text-xs text-foreground/40 font-mono">
                      {project.testNumber}
                    </span>
                  )}
                  {!project.link && !project.testNumber && (
                    <div className="flex items-center gap-2 text-xs text-foreground/40">
                      <Code2 className="w-4 h-4" />
                      <span>In Development</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        {!showAll && projects.length > 3 && (
          <div className="flex justify-center mt-12 w-full py-8">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowAll(true);
              }}
              className="px-6 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 sm:gap-3 group cursor-pointer z-50 relative hover:scale-105 active:scale-95"
              type="button"
            >
              <span className="font-bold">Show More Projects ({projects.length - 3} more)</span>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => {
                setShowAll(false);
                // Scroll to projects section smoothly
                setTimeout(() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
              className="px-8 py-4 bg-foreground/5 text-foreground font-semibold rounded-xl border border-foreground/10 hover:border-primary/30 transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Show Less</span>
            </motion.button>
          </motion.div>
        )}
      </div>

    </section>
  );
};

export default Projects;



