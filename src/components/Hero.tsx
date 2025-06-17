import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center">
          <motion.h1 
            className="text-4xl tracking-tight font-bold text-primary sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to
            </motion.span>
            <motion.span 
              className="block text-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your Future
            </motion.span>
          </motion.h1>
          <motion.p 
            className="mt-3 max-w-md mx-auto text-base text-primary/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Discover a world-class education that prepares you for success in today's rapidly evolving world.
          </motion.p>
          <motion.div 
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="rounded-md shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/apply"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 ease-out"
              >
                Apply Now
              </Link>
            </motion.div>
            <motion.div 
              className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/courses"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-primary-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 ease-out"
              >
                View Courses
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-accent-100/20" />
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white" />
      </motion.div>
    </div>
  );
};

export default Hero; 