import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Konten PPLI — 5 edisi/topik
const topics = [
  {
    edition: "Edisi 01",
    date: "November 2021",
    title: "Edi Pradana",
    cover: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    href: "/berita",
    accent: "TOTALITAS PPLI REDAKAN PANDEMI",
  },
  {
    edition: "Edisi 02",
    date: "Februari 2022",
    title: "Kabar Awal Tahun",
    cover: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    href: "/berita",
    accent: "SOLUSI BAGI NEGERI",
  },
  {
    edition: "Edisi 03",
    date: "Mei 2022",
    title: "Aksi Hijau PPLI",
    cover: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
    href: "/csr",
    accent: "PPLI TEBAR KEBAHAGIAAN",
  },
  {
    edition: "Edisi 04",
    date: "Agustus 2022",
    title: "Inovasi & Kepatuhan",
    cover: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
    href: "/layanan",
    accent: "PPLI BUKA KANTOR REPRESENTATIF",
  },
  {
    edition: "Edisi 05",
    date: "November 2022",
    title: "Penutup Tahun",
    cover: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80",
    href: "/tentang-kami",
    accent: "TERIMA KASIH PPLI",
  },
];

export default function TopicsCarousel() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-lime-600 text-xs tracking-widest2 uppercase mb-4">
              E-Bulletin
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2 className="text-4xl lg:text-6xl font-light text-ink-800 leading-tight max-w-3xl">
                Topik Pilihan
                <br />
                <span className="italic text-lime-600">
                  Informasi Seputar PPLI.
                </span>
              </h2>
              <a
                href="/berita"
                className="group inline-flex items-center gap-3 text-sm text-ink-700 hover:text-lime-600 transition-colors shrink-0"
              >
                <span className="font-medium">Kunjungi ebulletin.ppli.co.id</span>
                <span className="w-9 h-9 rounded-full border border-ink-300 group-hover:border-lime-600 group-hover:bg-lime-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid 5 Kartu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {topics.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <a href={t.href} className="group block">
                {/* Cover dengan badge edisi */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <Image
                    src={t.cover}
                    alt={t.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay gelap tipis */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Header atas cover: wordmark PPLI/DOWA style */}
                  <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-3 py-2 flex items-center justify-between">
                    <span className="text-[9px] font-black text-ink-900 tracking-tight">
                      PPLI<span className="text-lime-500">.</span>
                    </span>
                    <span className="text-[8px] text-ink-500 tracking-wider">
                      DOWA
                    </span>
                  </div>

                  {/* Badge Edisi */}
                  <div className="absolute top-10 right-0 bg-brand text-white text-[10px] font-bold px-3 py-1.5 rounded-l-md tracking-wider">
                    {t.edition}
                  </div>

                  {/* Judul besar di cover */}
                  <div className="absolute top-16 left-3 right-3">
                    <h3 className="text-white text-2xl lg:text-3xl font-black leading-none tracking-tight drop-shadow-lg">
                      SADAR B3
                    </h3>
                    <p className="text-white/90 text-[8px] tracking-wider mt-1">
                      Buletin Berita dan Informasi Seputar PPLI
                    </p>
                  </div>

                  {/* Headline kecil (khas koran) */}
                  <div className="absolute bottom-16 left-3 right-3">
                    <p className="text-white text-[10px] font-bold leading-tight drop-shadow-md">
                      {t.accent}
                    </p>
                  </div>

                  {/* Footer cover: tanggal */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span className="text-white text-[9px] tracking-wider opacity-80">
                      {t.edition.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Info bawah kartu */}
                <div className="mt-5">
                  <p className="text-lime-600 text-[10px] font-bold tracking-widest2 uppercase mb-2">
                    {t.date}
                  </p>
                  <h4 className="text-ink-900 text-base font-semibold leading-snug mb-4 group-hover:text-lime-600 transition-colors">
                    {t.title}
                  </h4>
                  <span className="inline-flex items-center gap-2 text-lime-600 text-xs font-bold tracking-wider group-hover:gap-3 transition-all">
                    BACA EDISI
                    <span className="text-base leading-none">→</span>
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}