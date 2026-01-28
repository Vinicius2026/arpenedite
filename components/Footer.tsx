"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function Footer() {
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  return (
    <footer className="relative py-8 px-4 border-t border-white/5 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-vda-dark/50 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          {/* Copyright - Apenas nome do site */}
          <motion.div variants={itemVariants}>
            <p className="text-sm text-vda-light-gray">
              © {new Date().getFullYear()} VDA - Venda Direta Automática
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default memo(Footer);
