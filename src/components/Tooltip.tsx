"use client";

import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  className?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  key?: React.Key;
}

export function Tooltip({
  content,
  children,
  className,
  position = 'top',
  delay = 0.2
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const posClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2 origin-bottom',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2 origin-top',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2 origin-right',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2 origin-left',
  };

  return (
    <div 
      className={cn("relative inline-flex items-center justify-center", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, delay: delay }}
            className={cn(
              "absolute z-[100] px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none",
              "bg-black/80 backdrop-blur-xl border border-white/10 text-zinc-200 shadow-xl",
              posClasses[position]
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
