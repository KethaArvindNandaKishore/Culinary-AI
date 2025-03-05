import { motion } from 'framer-motion';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features = [
    { 
      icon: "🎯", 
      title: "Smart Recipes",
      description: "Personalized recipe recommendations based on your preferences and dietary needs."
    },
    { 
      icon: "🤖", 
      title: "AI Assistant",
      description: "24/7 cooking guidance and real-time support from our AI chef."
    },
    { 
      icon: "⚡", 
      title: "Real-time Help",
      description: "Instant answers to your cooking questions and technique guidance."
    },
    { 
      icon: "📱", 
      title: "Mobile Ready",
      description: "Access your recipes and cooking assistant anywhere, anytime."
    },
    { 
      icon: "🔍", 
      title: "Smart Search",
      description: "Find the perfect recipe with our intelligent search system."
    },
    { 
      icon: "💡", 
      title: "Pro Tips",
      description: "Expert cooking tips and tricks to enhance your culinary skills."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-500/10 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Why Choose CulinaryAI?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover the perfect blend of artificial intelligence and culinary expertise
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <span className="text-4xl p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 