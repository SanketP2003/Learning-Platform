"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';

export default function ClientMotion({
  variants,
  initial,
  animate,
  exit,
  className,
  children,
}: {
  variants?: Variants;
  initial?: any;
  animate?: any;
  exit?: any;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={variants} initial={initial} animate={animate} exit={exit} className={className}>
      {children}
    </motion.div>
  );
}
