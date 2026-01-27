"use client";

import { motion } from "framer-motion";
import FloatingLogo from "./FloatingLogo";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Background radial gradients - múltiplos para profundidade */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center space-y-12 max-w-5xl mx-auto"
      >
        {/* Floating Logo */}
        <motion.div variants={itemVariants}>
          <FloatingLogo />
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-vda-white tracking-tight leading-[1.1]">
            Venda Direta
            <br />
            <span className="text-shimmer">Automática</span>
          </h1>
          <p className="text-lg md:text-xl text-vda-light-gray max-w-2xl mx-auto leading-relaxed">
            O método revolucionário que transforma sua forma de vender com 
            <span className="text-white font-semibold"> sistemas automatizados de alta performance</span>
          </p>
        </motion.div>

        {/* CTA Button - PREMIUM */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="#links"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center space-x-3 px-10 py-5 bg-vda-white text-vda-black font-bold text-lg rounded-full cta-glow cta-beam hover:bg-gray-50 transition-all relative overflow-hidden"
          >
            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <Sparkles className="w-6 h-6 relative z-10" />
            <span className="relative z-10 text-shimmer-dark">ACESSAR MÉTODO VDA</span>
            <Sparkles className="w-6 h-6 relative z-10" />
          </motion.a>
          
          {/* Subtitle do CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-4 text-sm text-vda-light-gray"
          >
            Junte-se a milhares de empreendedores de sucesso
          </motion.p>
        </motion.div>

        {/* Scroll Indicator - mais elegante */}
        <motion.div variants={itemVariants} className="pt-16">
          <div className="w-[26px] h-[42px] border border-white/20 rounded-full mx-auto flex items-start justify-center p-2 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
          <p className="text-xs text-vda-light-gray mt-3 tracking-wider">ROLE PARA BAIXO</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
