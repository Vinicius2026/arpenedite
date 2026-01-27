"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
    color: "text-[#E4405F]/80 hover:text-[#E4405F]",
    bgColor: "hover:bg-[#E4405F]/10",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com",
    color: "text-[#FF0000]/80 hover:text-[#FF0000]",
    bgColor: "hover:bg-[#FF0000]/10",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "text-[#0A66C2]/80 hover:text-[#0A66C2]",
    bgColor: "hover:bg-[#0A66C2]/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:contato@vda.com",
    color: "text-white/70 hover:text-white",
    bgColor: "hover:bg-white/10",
  },
];

export default function Footer() {
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
    <footer className="relative py-24 px-4 border-t border-white/5 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-vda-dark/50 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-10"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-vda-white mb-3 tracking-tight">
              Sobre o Expert
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto" />
          </motion.div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="relative w-40 h-40 rounded-full"
            >
              {/* Glass frame */}
              <div className="absolute -inset-2 rounded-full glassmorphism-strong blur-[1px]" />
              
              {/* Foto real - placeholder se imagem não existir */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/15 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
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
                  <div className="text-white/40 text-2xl font-bold">TL</div>
                )}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-white/5 blur-xl -z-10" />
            </motion.div>
          </div>

          {/* Name & Title */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-4xl md:text-5xl font-black text-vda-white tracking-tight">
              Thiago Lima
            </h3>
            <div className="inline-block px-4 py-1.5 glassmorphism rounded-full">
              <p className="text-sm font-semibold text-vda-light-gray">
                Criador do Método VDA
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-vda-light-gray leading-relaxed">
              Especialista em estratégias de vendas digitais com 
              <span className="text-white font-bold"> mais de 10 anos de experiência</span>, transformando 
              negócios através de sistemas automatizados de alta performance. Responsável por gerar 
              <span className="text-white font-bold"> milhões em vendas</span> para empreendedores em todo o Brasil.
            </p>
          </motion.div>

          {/* Expert Badge - Premium */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-2"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1033]/40 via-[#120C24]/40 to-[#0B0B1A]/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              {/* Badge Container */}
              <div className="relative rounded-2xl px-8 py-4 border border-white/10 hover:border-white/20 transition-all duration-300 bg-gradient-to-br from-[#1A1033] via-[#120C24] to-[#0B0B1A]">
                <div className="flex items-center space-x-3">
                  {/* Icon/Badge - Estrela Premium */}
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-lg">
                    <svg 
                      className="w-5 h-5 text-white drop-shadow-sm" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                      />
                    </svg>
                  </div>
                  
                  {/* Text */}
                  <div className="text-left">
                    <p className="text-sm font-bold text-white tracking-tight leading-tight drop-shadow-sm">
                      Expert em Venda Direta
                    </p>
                    <p className="text-xs text-white/70 leading-tight">
                      Estratégica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-3 pt-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-xl glassmorphism flex items-center justify-center transition-all border border-white/10 ${social.bgColor} ${social.color} group`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 saturate-75 group-hover:saturate-100 group-hover:animate-pulse transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="pt-12">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="pt-8 space-y-2">
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
