"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Bot,
  MessageSquare,
  Brain,
  Server,
  Code2,
  Zap,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Globe,
      title: "Web Development",
      description: "React, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with modern frameworks",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Bot,
      title: "AI Agents & Automation",
      description: "Intelligent automation systems and AI-powered agents",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Chatbots",
      description: "AI-powered WhatsApp chatbots with Gemini API integration",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "LLMs, Gemini API, OpenAI, AI-powered features",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Server-side development, APIs, databases, cloud services",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end development from frontend to backend",
      color: "from-cyan-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "AI Tools Expertise",
      description: "Cursor, Claude, Anti Gravity, and modern AI development tools",
      color: "from-violet-500 to-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-gradient-to-b from-background to-background/50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-primary/5 rounded-lg blur-xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/5 rounded-full blur-xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I develop everything clients need - quickly and accurately with powerful AI tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  rotateY: 5,
                  z: 50,
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${skill.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;



