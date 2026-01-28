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
    <footer className="relative py-12 px-4 border-t border-white/5 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-vda-dark/50 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-6"
        >
          {/* Profile Image - Quadrado */}
          <div className="flex justify-center">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="relative w-32 h-32"
            >
              {/* Glass frame */}
              <div className="absolute -inset-2 glassmorphism-strong blur-[1px]" />
              
              {/* Foto real - placeholder se imagem não existir - QUADRADO */}
              <div className="relative w-full h-full overflow-hidden border border-white/15 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                {!imageError ? (
                  <Image
                    src="/images/thiago-lima.png"
                    alt="Thiago Lima"
                    fill
                    className="object-cover grayscale"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="text-white/40 text-xl font-bold">TL</div>
                )}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/5 blur-xl -z-10" />
            </motion.div>
          </div>

          {/* Name & Title - Minimalista */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-black text-vda-white tracking-tight">
              Thiago Lima
            </h3>
            <div className="inline-block px-3 py-1 glassmorphism rounded-full">
              <p className="text-xs font-semibold text-vda-light-gray">
                Comunidade VDA
              </p>
            </div>
          </motion.div>

          {/* Bio - Minimalista */}
          <motion.div variants={itemVariants} className="max-w-xl mx-auto">
            <p className="text-sm text-vda-light-gray leading-relaxed">
              Especialista em vendas digitais com <span className="text-white font-semibold">mais de 10 anos de experiência</span>.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="pt-6">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="pt-4 space-y-1">
            <p className="text-sm text-vda-light-gray">
              © {new Date().getFullYear()} VDA - Venda Direta Automática
            </p>
            <p className="text-xs text-vda-light-gray/60">
              Todos os direitos reservados. Transformando vendas desde 2014.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default memo(Footer);
