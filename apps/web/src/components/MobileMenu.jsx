import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Logo from '@/components/Logo';

const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-cinematic-black border-r border-cinematic-lightGray z-50 lg:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-cinematic-lightGray/30">
              <Logo size="small" />
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 overflow-y-auto">
              <ul className="space-y-6">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="text-2xl font-bold text-gray-300 hover:text-cinematic-gold transition-colors text-left w-full"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="p-6 border-t border-cinematic-lightGray/30">
              <p className="text-sm text-gray-500">
                © 2026 Rudra Innovations
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
