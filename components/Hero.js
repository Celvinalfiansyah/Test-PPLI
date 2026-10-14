"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-ink-900">
      {/* Background gradien halus */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-accent-dark opacity-90" />
      <div className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage:
               "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
             backgroundSize: "40px 40px",
           }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-accent-light text-xs tracking-widest2 uppercase mb-6">
            Layanan Pengelolaan Limbah Terpadu
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] max-w-4xl">
            Ramah lingkungan,<br />
            <span className="font-semibold">berstandar tinggi,</span><br />
            untuk Indonesia.
          </h1>
          <p className="text-ink-300 mt-10 max-w-xl text-base leading-relaxed">
            PPLI menyediakan solusi pengelolaan limbah B3 yang aman, patuh, dan
            berkelanjutan — dari pengangkutan hingga pemusnahan.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="/layanan"
               className="bg-white text-ink-900 px-8 py-4 text-sm tracking-wide hover:bg-accent hover:text-white transition-colors">
              Jelajahi Layanan
            </a>
            <a href="/kontak"
               className="border border-white/30 text-white px-8 py-4 text-sm tracking-wide hover:bg-white/10 transition-colors">
              Hubungi Kami
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest2">
        <span>SCROLL</span>
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  );
}