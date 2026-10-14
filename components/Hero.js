"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80"
          alt="PPLI Facility"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay gradient gelap untuk kontras teks */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/70 to-brand-900/40" />
        {/* Overlay teal tipis untuk warna brand */}
        <div className="absolute inset-0 bg-brand/20 mix-blend-multiply" />
      </div>

      {/* Konten */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Label kecil di atas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-0.5 bg-brand-light" />
            <span className="text-brand-light text-xs tracking-widest2 uppercase">
              Layanan Pengelolaan Limbah Terpadu
            </span>
          </motion.div>

          {/* Judul utama */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight"
          >
            Di Pusat Siklus
            <br />
            <span className="font-semibold text-brand-light">
              Limbah Indonesia.
            </span>
          </motion.h1>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/80 text-base lg:text-lg leading-relaxed mt-8 max-w-xl"
          >
            PPLI menyediakan solusi pengelolaan limbah B3 yang aman, patuh,
            dan berkelanjutan — dari pengangkutan hingga pemusnahan.
          </motion.p>

          {/* Tombol CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="/layanan"
              className="pill-btn bg-white text-brand hover:bg-brand hover:text-white transition-colors font-medium"
            >
              Jelajahi Layanan
              <ArrowRight size={16} />
            </a>
            <a
              href="/kontak"
              className="pill-btn border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </div>

      {/* Carousel dots di bawah */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          type="button"
          className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2 items-center">
          <span className="w-8 h-0.5 bg-white rounded-full" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
        </div>
        <button
          type="button"
          className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Card brand site kanan bawah */}
      <div className="hidden lg:block absolute bottom-8 right-12 z-20">
        <div className="bg-ink-900/90 backdrop-blur text-white rounded-2xl overflow-hidden w-64 shadow-2xl">
          <div className="p-4">
            <div className="text-[10px] tracking-widest2 text-brand-light mb-1">
              BRAND SITE
            </div>
            <div className="text-sm font-medium">
              Di Pusat Siklus Limbah Indonesia
            </div>
          </div>
          <div className="h-32 bg-gradient-to-br from-brand to-brand-dark" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex absolute bottom-8 left-12 z-20 flex-col items-center gap-2 text-white/50 text-[10px] tracking-widest2">
        <span>SCROLL</span>
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  );
}