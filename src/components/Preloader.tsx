import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/one-retail-logo.png';

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-[#151515] z-50 flex flex-col items-center justify-center font-sans select-none"
        >
          <div className="relative text-center grid items-center justify-center space-y-6 max-w-md px-6">
            {/* Elegant luxury motion brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="space-y-2"
            >
              <img src={logo} alt="One Retail" className="h-30 w-full object-cover" />
            </motion.div>

            {/* Premium thin golden-colored loader line */}
            <div className="w-48 h-[1px] bg-white/5 mx-auto relative overflow-hidden rounded-full mt-8">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ 
                  duration: 1.4, 
                  ease: 'easeInOut',
                  repeat: Infinity 
                }}
                className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-[#ab2d26] to-transparent"
              />
            </div>

            {/* Subtle olfactory luxury design signature */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-[8px] uppercase tracking-widest text-[#f5f0e6] font-light mt-12"
            >
              Maison de l’Expérience Sensorielle
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
