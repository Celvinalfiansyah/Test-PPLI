"use client";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const columns = [
  {
    title: "LAYANAN",
    links: [
      { label: "Pengangkutan Limbah B3", href: "/layanan" },
      { label: "Pembuangan Limbah B3", href: "/layanan" },
      { label: "Pengelolaan Terpadu", href: "/layanan" },
      { label: "Daur Ulang & Recovery", href: "/layanan" },
      { label: "Pengolahan Limbah Cair", href: "/layanan" },
    ],
  },
  {
    title: "PERUSAHAAN",
    links: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Visi & Misi", href: "/tentang-kami" },
      { label: "Sertifikasi & Izin", href: "/tentang-kami" },
      { label: "CSR", href: "/csr" },
    ],
  },
  {
    title: "INFORMASI",
    links: [
      { label: "Berita", href: "/berita" },
      { label: "FAQ", href: "/faq" },
      { label: "Hubungi Kami", href: "/kontak" },
      { label: "E-Bulletin", href: "/e-bulletin" },
    ],
  },
  {
    title: "KONTAK",
    links: [
      { label: "info@ppli.co.id", href: "mailto:info@ppli.co.id" },
      { label: "Lokasi & Jam Operasional", href: "/kontak" },
      { label: "Kerja Sama", href: "/kontak" },
      { label: "Karier", href: "/kontak" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1E2E] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Grid: brand kiri + 4 kolom link */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand (kiri) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-end leading-none mb-6">
              <span className="text-4xl font-black text-brand tracking-tighter">
                PPLI
              </span>
              <span className="w-2.5 h-2.5 bg-lime-500 rounded-full ml-1 mb-1.5" />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Layanan pengelolaan limbah terpadu ramah lingkungan untuk
              mendukung terciptanya masyarakat berkelanjutan di Indonesia.
            </p>
          </div>

          {/* 4 kolom link */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col, i) => (
              <div key={i}>
                <h4 className="text-lime-500 text-xs font-bold tracking-widest2 uppercase mb-6">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 hover:text-brand-light transition-colors leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Link legal */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-white/60">
              <Link href="/kontak" className="hover:text-brand-light">
                Kebijakan Privasi
              </Link>
              <Link href="/kontak" className="hover:text-brand-light">
                Syarat Penggunaan
              </Link>
              <Link href="/kontak" className="hover:text-brand-light">
                Pengaturan Cookie
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/50 text-center lg:text-right">
              © {new Date().getFullYear()} PPLI — PT Prasadha Pamunah Limbah
              Industri. All rights reserved.
            </p>

            {/* Scroll to top */}
            <ScrollTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollTopButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="w-11 h-11 rounded-full bg-white text-[#0F1E2E] flex items-center justify-center hover:bg-brand hover:text-white transition-colors shadow-lg"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}