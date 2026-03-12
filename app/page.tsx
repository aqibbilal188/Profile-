"use client";

import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Reviews from "@/app/components/Reviews";
import Contact from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";
import Chatbot from "@/app/components/Chatbot";

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
      <Chatbot />
    </motion.main>
  );
}



