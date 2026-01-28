"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import LinkHub from "./LinkHub";

// Lazy load do FloatingLogo para melhorar performance inicial
const FloatingLogo = dynamic(() => import("./FloatingLogo"), {
  loading: () => (
    <div className="w-[280px] md:w-[360px] h-[93px] md:h-[120px] bg-white/5 rounded-3xl animate-pulse" />
  ),
  ssr: true
});

function Hero() {
  const socialLinks = [
    {
      name: "Instagram",
      image: "/images/2111463.png",
      url: "https://instagram.com/thiagolimaslv",
    },
    {
      name: "Twitch",
      image: "/images/5968819.png",
      url: "https://twitch.tv/thiagolimaslv",
    },
    {
      name: "YouTube",
      image: "/images/1384060.png",
      url: "https://youtube.com/@thiagolimaslv",
    },
    {
      name: "TikTok",
      image: "/images/3046121.png",
      url: "https://tiktok.com/@thiagolimaslv",
    },
    {
      name: "Threads",
      image: "/images/threads.png",
      url: "https://www.threads.net/@thiagolimaslv",
    },
    {
      name: "WhatsApp",
      image: "/images/3670051.png",
      url: "https://projetoliberdadedigital.com/comunidade",
    },
    {
      name: "Kwai",
      image: "/images/kw12.png",
      url: "https://k.kwai.com/u/@thiagolimaslv_/0ywoabCU",
    },
  ];

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
    <section className="relative min-h-screen flex items-start justify-center px-4 pt-16 pb-8 overflow-hidden">
      {/* Background radial gradients - múltiplos para profundidade */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center space-y-4"
        >
          {/* Floating Logo - margem superior aumentada */}
          <motion.div variants={itemVariants} className="pt-8 pb-2">
            <FloatingLogo />
          </motion.div>

          {/* Social Links - abaixo do logo VDA - centralizado */}
          <motion.div variants={itemVariants} className="w-full pb-2 flex justify-center">
            <div className="inline-flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-7 h-7 md:w-8 md:h-8 flex items-center justify-center transition-all duration-200 hover:opacity-80 flex-shrink-0"
                  aria-label={social.name}
                >
                  <Image
                    src={social.image}
                    alt={social.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 28px, 32px"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tagline - mais resumido */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-black text-vda-white tracking-tight leading-[1.1]">
              Venda Direta
              <br />
              <span className="text-shimmer">Automática</span>
            </h1>
            <p className="text-sm md:text-base text-vda-light-gray max-w-2xl mx-auto leading-relaxed">
              Venda até <span className="text-white font-bold">R$50</span> mil por mês no WhatsApp, o ano inteiro.
            </p>
          </motion.div>

          {/* CTA Button - COMPRAR VDA estiloso e mais quadrado */}
          <motion.div variants={itemVariants} className="pt-2">
            <motion.a
              href="#links"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center px-12 py-4 bg-vda-white text-vda-black font-black text-lg rounded-2xl border-2 border-vda-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] hover:border-vda-white/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <span className="relative z-10 tracking-wide">COMPRAR VDA</span>
            </motion.a>
          </motion.div>

          {/* LinkHub integrado - Prêmios pra você no topo */}
          <motion.div variants={itemVariants} className="pt-4">
            <LinkHub />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Hero);
