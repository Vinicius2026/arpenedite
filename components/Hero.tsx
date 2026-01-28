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

          {/* CTA Button - COMPRAR VDA com efeito vidro metálico */}
          <motion.div variants={itemVariants} className="pt-2">
            <motion.a
              href="#links"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center px-12 py-4 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.08] border border-white/25 shadow-[0_8px_32px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18),inset_0_1px_0_rgba(255,255,255,0.35)] hover:border-white/35 transition-all duration-300 relative overflow-hidden"
            >
              {/* Shimmer effect metálico */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              {/* Glow effect metálico - prata para dourado */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(192,192,192,0.15)] via-[rgba(255,255,255,0.1)] to-[rgba(217,172,112,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              {/* Texto com gradiente metálico - prata para dourado */}
              <span className="relative z-10 tracking-wider font-bold text-[15px] bg-gradient-to-b from-[#E8E8E8] via-white to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]">
                COMPRAR VDA
              </span>
            </motion.a>
          </motion.div>

          {/* Profile Circle - Thiago Lima */}
          <motion.div variants={itemVariants} className="pt-4 flex flex-col items-center">
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
              <Image
                src="/images/profile_thiagolimaslv.png"
                alt="Thiago Lima"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 112px, 128px"
              />
            </div>
            <h3 className="mt-3 text-base md:text-lg font-semibold text-vda-white tracking-wide">
              Thiago Lima
            </h3>
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
