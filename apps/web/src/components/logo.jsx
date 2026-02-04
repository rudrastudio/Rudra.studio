import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Logo = ({ className, size = 'medium', showText = true }) => {
  const sizes = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-20',
  };

  return (
    <motion.div 
      className={cn("flex items-center gap-3 cursor-pointer", className)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative group">
        <img
          src="https://horizons-cdn.hostinger.com/f9bb81d5-63e7-47e4-a229-676e157c58e8/be7c848f5e1c54cd412835561929fb51.png"
          alt="Rudrastic Innovations Logo"
          className={cn("object-contain transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]", sizes[size])}
        />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={cn(
            "font-bold text-white tracking-wider leading-none",
            size === 'small' ? 'text-lg' : size === 'medium' ? 'text-2xl' : 'text-4xl'
          )}>
            RUDRASTIC
          </span>
          {size !== 'small' && (
            <span className="text-[0.6rem] md:text-[0.7rem] text-cinematic-gold tracking-[0.2em] uppercase">
              Innovations
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
