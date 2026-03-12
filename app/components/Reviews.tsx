"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      client: "gautammalik209",
      country: "Italy",
      rating: 5,
      text: "Mohammad did i really good job, He built a fully customised WhatsApp chatbot system for me with server and even helped me set up. I highly recommend him for project like these . He even delivered all the documentation parts without even asking.",
      price: "Up to ₹4,700",
      duration: "3 days",
      gig: "WordPress",
      date: "3 weeks ago",
    },
    {
      id: 2,
      client: "anum_danial",
      country: "Pakistan",
      rating: 5,
      text: "This is my second time working with Mohammed, and once again he did an excellent job. He understood my requirements clearly and delivered exactly what I wanted. The quality of work was outstanding, and the project was completed on time. Communication was smooth and professional throughout the process.",
      price: "Up to ₹4,700",
      duration: "1 day",
      gig: "Custom Websites",
      date: "1 week ago",
      repeatClient: true,
    },
    {
      id: 3,
      client: "anum_danial",
      country: "Pakistan",
      rating: 5,
      text: "Mohammed delivered outstanding work on my chatbot project. He went beyond my expectations and ensured everything was implemented perfectly. Highly professional and strongly recommended!",
      price: "₹4,700-₹9,400",
      duration: "2 days",
      gig: "AI Chatbot Development",
      date: "2 weeks ago",
      repeatClient: true,
    },
    {
      id: 4,
      client: "gorapene513",
      country: "Senegal",
      rating: 5,
      text: "un très bon prestataire il a fait du beau boulot et en temps record",
      price: "Up to ₹4,700",
      duration: "1 day",
      gig: "Custom Websites",
      date: "4 months ago",
    },
    {
      id: 5,
      client: "lovelylj",
      country: "United States",
      rating: 5,
      text: "Mohammed is a very hard worker and I enjoy working with him. This project has taken a bit longer than we planned because I am an expert at user experience within design components. As such I asked him to revisit details and he did exactly as I asked. I am super grateful for him. He is a great developer. Thanks!",
      price: "₹9,400-₹18,800",
      duration: "10 days",
      gig: "AI Chatbot Development",
      date: "4 months ago",
      repeatClient: true,
    },
    {
      id: 7,
      client: "gillmore783",
      country: "Ghana",
      rating: 5,
      text: "Hi hired Mohammed to build a chatbot for my e-commerce, and he did a good job. There was back-and-forth redoing and fixing the bugs, but he was committed to getting it done well. I will recommend him.",
      price: "Up to ₹4,700",
      duration: "7 weeks",
      gig: "AI Chatbot Development",
      date: "4 months ago",
    },
    {
      id: 8,
      client: "lovelylj",
      country: "United States",
      rating: 5,
      text: "Hi this seller is good at what he does. He is also great at responding and makes sure the product he delivers works. He knows how to do the development and I enjoy working with him. Thanks!",
      price: "Up to ₹4,700",
      duration: "5 weeks",
      gig: "AI Chatbot Development",
      date: "4 months ago",
      repeatClient: true,
    },
    {
      id: 9,
      client: "lovelylj",
      country: "United States",
      rating: 5,
      text: "This seller goes above and beyond to work. I am very pleased with his work. He works hard, stays up late- and I can trouble shoot with him and he is patient with me -thank goodness.",
      price: "Up to ₹4,700",
      duration: "3 weeks",
      gig: "AI Chatbot Development",
      date: "7 months ago",
      repeatClient: true,
    },
    {
      id: 10,
      client: "babarali677",
      country: "Pakistan",
      rating: 5,
      text: "A wonderful experience working with him. He is knowledgeable, hardworking, fast and delivers excellent work above and beyond expectations. Definitely one of the best freelancers I have ever worked with. Looking forward to collaborating with him more in the future!",
      price: "Up to ₹4,700",
      duration: "1 day",
      gig: "AI Chatbot Development",
      date: "5 hours ago",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section
      id="reviews"
      className="py-20 lg:py-32 bg-gradient-to-b from-background/50 to-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-secondary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-primary/5 rounded-lg blur-xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            5-Star Rated • All 5 Stars
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 15 }}
              transition={{ 
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-2xl p-8 lg:p-12"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Quote className="absolute top-4 left-4 w-12 h-12 text-primary/20" />
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg lg:text-xl text-foreground/90 mb-8 leading-relaxed italic">
                  &ldquo;{currentReview.text}&rdquo;
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg text-foreground">
                        {currentReview.client}
                      </h4>
                      {currentReview.repeatClient && (
                        <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                          Repeat Client
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-foreground/70">
                      <span>{currentReview.country}</span>
                      <span>•</span>
                      <span>{currentReview.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevReview}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Previous review"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextReview}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Next review"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Fiverr Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">Fiverr Level 1 Seller</div>
                <div className="text-sm text-foreground/70">
                  5-Star Rated • All 5 Stars
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;



