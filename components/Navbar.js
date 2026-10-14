"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, Globe, Mail, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Layanan", href: "/layanan", hasDropdown: true },
  { label: "FAQ", href: "/faq" },
  { label: "CSR", href: "/csr" },
  { label: "E-Bulletin", href: "/e-bulletin" },
  { label: "Berita", href: "/berita", hasDropdown: true },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Hubungi Kami", href: "/kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px] gap-4">
          
          {/* ====== LOGO + TAGLINE ====== */}
          <Link href="/" className="flex flex-col shrink-0">
            {/* Tagline kecil di atas */}
            <span className="text-[10px] italic text-ink-500 tracking-wide mb-0.5 hidden lg:block">
              Layanan Pengelolaan Limbah Terpadu
            </span>
            {/* Logo wordmark */}
            <div className="flex items-end leading-none">
              <span className="text-3xl font-black text-ink-900 tracking-tighter">
                PPLI
              </span>
              <span className="w-2 h-2 bg-lime-500 rounded-full ml-1 mb-1" />
            </div>
          </Link>

          {/* ====== MENU UTAMA ====== */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 text-sm text-ink-800 hover:text-brand transition-colors font-medium px-3 py-2 whitespace-nowrap"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown size={12} className="text-ink-400" />
                )}
              </Link>
            ))}
          </nav>

          {/* ====== RIGHT ACTIONS ====== */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Tombol Hubungi Kami dengan ikon amplop (putih border) */}
            <Link
              href="/kontak"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-ink-200 bg-white text-ink-800 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
            >
              <Mail size={14} />
              Hubungi Kami
            </Link>

            {/* Ikon globe bulat putih border */}
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-ink-200 bg-white flex items-center justify-center text-ink-700 hover:border-brand hover:text-brand transition-colors"
              aria-label="Language"
            >
              <Globe size={16} />
            </button>

            {/* Ikon search bulat hijau (aksen) */}
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center text-white hover:bg-lime-600 transition-colors"
              aria-label="Search"
            >
              <Search size={16} />
            </button>

            {/* Nama perusahaan panjang di paling kanan */}
            <span className="text-[11px] font-bold text-ink-900 tracking-wide ml-2 max-w-[140px] leading-tight">
              PT PRASADHA PAMUNAH LIMBAH INDUSTRI
            </span>
          </div>

          {/* ====== MOBILE MENU BUTTON ====== */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-ink-900"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ====== MOBILE MENU ====== */}
      {open && (
        <div className="lg:hidden bg-white border-t border-ink-200">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-ink-700 hover:text-brand font-medium py-2"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} />}
              </Link>
            ))}
            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 pill-btn-primary"
            >
              <Mail size={14} />
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}