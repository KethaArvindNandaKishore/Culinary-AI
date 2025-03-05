import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import heroImage from "../assets/aiImage.jpeg";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
        {/* Animated Circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 2, 1],
                x: [0, Math.random() * 400 - 200, 0],
                y: [0, Math.random() * 400 - 200, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                backgroundColor: `hsla(${Math.random() * 60 + 240}, 70%, 50%, 0.3)`,
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-purple-900/30" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(transparent 1px, transparent 1px),
                             linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Rest of your content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Text Content */}
          <motion.div className="text-white space-y-8">
            {/* Pre-heading */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2 mb-4"
            >
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                🚀 AI-Powered Cooking Revolution
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div className="space-y-2">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Cook Like a
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-300% animate-gradient"
                >
                  Master Chef with AI
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div 
              variants={itemVariants}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
                Transform your kitchen into a culinary studio with our AI-powered assistant. Get personalized recipes, smart cooking tips, and real-time guidance.
              </p>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>Personalized Recipes</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">✓</span>
                  <span>24/7 AI Support</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link to="/chat">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255,255,255,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                
                >
                <span>Start Cooking</span>
                <span className="text-xl">→</span>
              </motion.button>
                </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white/50 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center space-x-2"
              >
                <span>Watch Demo</span>
                <span className="text-xl">▶</span>
              </motion.button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10"
            >
              {[
                { number: "10K+", label: "Recipes" },
                { number: "24/7", label: "AI Support" },
                { number: "98%", label: "Happy Cooks" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="relative"
          >
            <motion.div
              className="relative z-20 rounded-2xl overflow-hidden max-w-md mx-auto"
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <img
                src={heroImage}
                alt="AI Cooking Assistant"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl hover:bg-black/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-2xl">🤖</span>
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-white text-lg">AI Chef</h3>
                      <p className="text-white/80 text-sm font-medium">24/7 Cooking Assistant</p>
                    </div>
                  </div>
                  <Link to="/chat">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm font-medium border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                    Chat Now
                  </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [180, 0, 180],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{
            y: [-20, window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: -20,
          }}
        />
      ))}
    </motion.div>
  );
};

export default HeroSection;