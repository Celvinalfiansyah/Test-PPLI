import ScrollReveal from "./ScrollReveal";

const news = [
  {
    date: "25 Juni 2026",
    title: "Pewarta Foto Indonesia Apresiasi PPLI Dalam Upaya Pengelolaan Limbah dan Pencegahan Ilegal Dumping",
    tag: "Berita",
  },
  {
    date: "8 Juni 2026",
    title: "Hari Lingkungan Hidup Sedunia 2026, DLH Kabupaten Bogor Apresiasi Gerakan Bersama Aksi Hijau PPLI",
    tag: "CSR",
  },
  {
    date: "8 Juni 2026",
    title: "PPLI Salurkan Hewan Kurban untuk Warga Dua Desa di Bogor",
    tag: "CSR",
  },
  {
    date: "8 Juni 2026",
    title: "PPLI Diapresiasi Kementerian Lingkungan Hidup, Dinilai Jadi Pelopor Pengelolaan Limbah B3 Berstandar Keselamatan Tinggi",
    tag: "Berita",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-ink-50 py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-accent text-xs tracking-widest2 uppercase mb-4">
                Berita & Kegiatan
              </p>
              <h2 className="text-ink-900 text-3xl md:text-5xl font-light leading-tight">
                Kabar terbaru dari PPLI.
              </h2>
            </div>
            <a href="/berita" className="text-ink-600 hover:text-accent text-sm tracking-wide">
              Lihat semua berita →
            </a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-px bg-ink-200">
          {news.map((n, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <article className="bg-ink-50 p-10 h-full group hover:bg-white transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs tracking-widest2 uppercase text-accent border border-accent px-3 py-1">
                    {n.tag}
                  </span>
                  <span className="text-ink-400 text-xs">{n.date}</span>
                </div>
                <h3 className="text-ink-900 text-lg leading-snug font-medium group-hover:text-accent transition-colors">
                  {n.title}
                </h3>
                <div className="mt-8 text-ink-400 group-hover:text-accent text-sm transition-colors">
                  Baca selengkapnya →
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}