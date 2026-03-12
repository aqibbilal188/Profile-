"use client";

import { motion } from "framer-motion";
import { Code, Rocket, Star, Briefcase } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Briefcase, value: "20+", label: "Projects Delivered" },
    { icon: Star, value: "5.0", label: "Fiverr Rating" },
    { icon: Rocket, value: "2+", label: "Years Experience" },
    { icon: Code, value: "5★", label: "Fiverr Rating" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 border border-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-secondary/10 rounded-full blur-2xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Picture for About Section (if not in Hero) */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block lg:order-2"
          >
            <motion.div
              className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl mx-auto"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src="/images/profile.jpg"
                alt="Mohammed Bilal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white text-6xl font-bold">
                        MB
                      </div>
                    `;
                  }
                }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:order-1"
          >
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
              Hello! I&apos;m <span className="text-primary font-semibold">Mohammed Bilal</span>, an
              AI Developer with a passion for creating innovative solutions that combine the power
              of artificial intelligence with modern web and mobile technologies.
            </p>
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
              With over <span className="text-primary font-semibold">2 years</span> of freelancing
              experience, I&apos;ve successfully delivered <span className="text-primary font-semibold">20+ real-world projects</span> for
              clients worldwide. My expertise spans across web development, mobile applications,
              AI agents, WhatsApp chatbots, and AI automation systems.
            </p>
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
              I leverage cutting-edge AI tools like <span className="text-secondary font-semibold">Cursor</span>,{" "}
              <span className="text-secondary font-semibold">Claude</span>, and{" "}
              <span className="text-secondary font-semibold">Anti Gravity</span> to deliver
              high-quality solutions quickly and accurately. My work is characterized by speed,
              precision, and a deep understanding of modern development practices.
            </p>
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
              Currently based in <span className="text-primary font-semibold">Saudi Arabia</span>, I&apos;m
              actively seeking full-time opportunities to bring my expertise to innovative teams
              and challenging projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateZ: 2,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center transition-all cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-foreground/70">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Fiverr Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg backdrop-blur-sm">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <div className="text-left">
              <div className="font-semibold text-lg">5-Star Rated on Fiverr</div>
              <div className="text-sm text-foreground/70">Level 1 Seller • 10 Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



