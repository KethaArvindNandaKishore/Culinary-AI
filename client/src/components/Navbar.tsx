import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const menuVariants = {
    closed: { 
      opacity: 0, 
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  // Add these new variants for hamburger animation
  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: {
        duration: 0.4,
      }
    },
    open: {
      rotate: 180,
      transition: {
        duration: 0.4,
      }
    }
  };

  const lineVariants = {
    closed: {
      stroke: "white",
      transition: { duration: 0.4 }
    },
    open: {
      stroke: "#FFF176",
      transition: { duration: 0.4 }
    }
  };

  const topLineVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
      transition: { duration: 0.4 }
    },
    open: {
      rotate: 45,
      translateY: 8,
      transition: { duration: 0.4 }
    }
  };

  const centerLineVariants = {
    closed: {
      opacity: 1,
      transition: { duration: 0.4 }
    },
    open: {
      opacity: 0,
      transition: { duration: 0.4 }
    }
  };

  const bottomLineVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
      transition: { duration: 0.4 }
    },
    open: {
      rotate: -45,
      translateY: -8,
      transition: { duration: 0.4 }
    }
  };

  const title = "CulinaryAI";

  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#FFFFFF"
      strokeLinecap="round"
      {...props}
    />
  );

  const transition = {
    duration: 0.3,
    ease: "easeInOut"
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <a href="/" className="text-3xl font-logo tracking-wider flex overflow-hidden">
              CulinaryAI
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/recipes">🍳 Recipes</NavLink>
            <NavLink href="/chat">🤖 AI Chat</NavLink>
            <NavLink href="/favorites">❤️ Favorites</NavLink>
            
            {/* Regular Auth Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                Sign In
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-colors shadow-lg"
              >
                Sign Up
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5", stroke: "#FFFFFF" },
                    open: { d: "M 3 16.5 L 17 2.5", stroke: "#FFF176" }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <Path
                  variants={{
                    closed: { d: "M 2 9.423 L 20 9.423", opacity: 1, stroke: "#FFFFFF" },
                    open: { d: "M 2 9.423 L 20 9.423", opacity: 0, stroke: "#FFF176" }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <Path
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346", stroke: "#FFFFFF" },
                    open: { d: "M 3 2.5 L 17 16.346", stroke: "#FFF176" }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                duration: 0.4,
                ease: "easeOut"
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                duration: 0.3,
                ease: "easeIn"
              }
            }
          }}
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden py-4 space-y-4 bg-white/10 backdrop-blur-md rounded-xl mt-2`}
        >
          <MobileNavLink href="/recipes">🍳 Recipes</MobileNavLink>
          <MobileNavLink href="/chat">🤖 AI Chat</MobileNavLink>
          <MobileNavLink href="/favorites">❤️ Favorites</MobileNavLink>
          
          {/* Mobile Auth Buttons */}
          <div className="px-4 py-2 border-t border-white/10 space-y-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Sign In
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Sign Up
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

// NavLink component for desktop
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <a 
      href={href} 
      className="hover:text-yellow-200 transition-colors font-semibold text-lg tracking-wide"
    >
      <motion.span
        initial={{ backgroundSize: '0% 2px' }}
        whileHover={{
          backgroundSize: '100% 2px',
          transition: { duration: 0.3 }
        }}
        style={{
          backgroundImage: 'linear-gradient(to right, #FFF176, #FFF176)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 100%'
        }}
      >
        {children}
      </motion.span>
    </a>
  </motion.div>
);

// NavLink component for mobile
const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div
    whileTap={{ scale: 0.95 }}
    whileHover={{ x: 10 }}
    className="block px-4 py-2 hover:bg-white/20 rounded-md transition-colors"
  >
    <a href={href} className="block font-semibold tracking-wide text-lg">
      {children}
    </a>
  </motion.div>
);

export default Navbar;
