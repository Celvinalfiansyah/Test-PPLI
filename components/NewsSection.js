import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const news = [
  {
    date: "2026.10.01",
    tag: "Siaran Pers",
    title: "PPLI Umumkan Kinerja Pengelolaan Limbah Kuartal III 2026",
    isNew: true,
  },
  {
    date: "2026.09.28",
    tag: "Siaran Pers",
    title: "PPLI Luncurkan Inisiatif Daur Ulang Material Industri Berkelanjutan",
  },
  {
    date: "2026.09.10",
    tag: "Siaran Pers",
    title: "Teknologi Pengolahan Limbah B3 PPLI Raih Pengakuan Kementerian Lingkungan Hidup",
  },
  {
    date: "2026.09.04",
    tag: "Siaran Pers",
    title: "PPLI Jadi Mitra Resmi Program Pengelolaan Limbah Nasional",
  },
];

const laporan = [
  {
    date: "2026.10.10",
    tag: "Laporan",
    title: "Laporan Tahunan PPLI 2026 Telah Dipublikasikan",
    isNew: true,
    pdf: true,
    size: "(2.4MB)",
  },
  {
    date: "2026.08.07",
    tag: "Pengumuman",
    title: "Laporan Keuangan Kuartal II 2026",
    pdf: true,
    size: "(881KB)",
  },
  {
    date: "2026.08.07",
    tag: "Laporan",
    title: "Ringkasan Kinerja Semester I 2026",
    pdf: true,
    size: "(598KB)",
  },
  {
    date: "2026.07.13",
    tag: "Pengumuman",
    title: "Pemberitahuan kepada Pemegang Saham",
  },
];

function TagPill({ label }) {
  return (
    <span className="text-[10px] tracking-wider border border-brand text-brand px-2 py-1 rounded-sm whitespace-nowrap">
      {label}
    </span>
  );
}

function NewsItem({ item }) {
  return (
    <article className="bg-white hover:bg-brand-50/50 transition-colors p-6 rounded-xl group cursor-pointer">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs text-ink-500 tabular-nums">{item.date}</span>
        <TagPill label={item.tag} />
        {item.isNew && (
          <span className="text-[10px] font-bold text-red-500">NEW</span>
        )}
      </div>
      <h3 className="text-ink-800 text-sm leading-relaxed group-hover:text-brand transition-colors">
        {item.title}
        {item.pdf && (
          <>
            <span className="ml-2 inline-flex items-center text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">
              PDF
            </span>
            {item.size && (
              <span className="ml-1 text-xs text-ink-400">{item.size}</span>
            )}
          </>
        )}
      </h3>
    </article>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-brand-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Kolom kiri: Berita */}
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-light text-ink-800">
                <span className="text-brand font-normal">Berita</span> & Kegiatan
              </h2>
              <p className="text-xs text-ink-400 tracking-widest2 uppercase mt-2">
                News & Topics
              </p>
            </div>
            <div className="space-y-2 bg-white rounded-2xl p-4">
              {news.map((item, i) => (
                <NewsItem key={i} item={item} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="pill-btn bg-ink-300 text-white hover:bg-brand transition-colors">
                Lihat Semua <ArrowRight size={14} />
              </button>
            </div>
          </ScrollReveal>

          {/* Kolom kanan: Laporan */}
          <ScrollReveal delay={0.15}>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-light text-ink-800">
                <span className="text-brand font-normal">Laporan</span> & Publikasi
              </h2>
              <p className="text-xs text-ink-400 tracking-widest2 uppercase mt-2">
                Reports
              </p>
            </div>
            <div className="space-y-2 bg-white rounded-2xl p-4">
              {laporan.map((item, i) => (
                <NewsItem key={i} item={item} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="pill-btn bg-ink-300 text-white hover:bg-brand transition-colors">
                Lihat Semua <ArrowRight size={14} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}