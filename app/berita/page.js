import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Berita — PPLI" };

const news = [
  { date: "25 Juni 2026", title: "Pewarta Foto Indonesia Apresiasi PPLI Dalam Upaya Pengelolaan Limbah dan Pencegahan Ilegal Dumping", tag: "Berita" },
  { date: "8 Juni 2026", title: "Hari Lingkungan Hidup Sedunia 2026, DLH Kabupaten Bogor Apresiasi Gerakan Bersama Aksi Hijau PPLI", tag: "CSR" },
  { date: "8 Juni 2026", title: "PPLI Salurkan Hewan Kurban untuk Warga Dua Desa di Bogor", tag: "CSR" },
  { date: "8 Juni 2026", title: "PPLI Diapresiasi Kementerian Lingkungan Hidup, Dinilai Jadi Pelopor Pengelolaan Limbah B3 Berstandar Keselamatan Tinggi", tag: "Berita" },
];

export default function Berita() {
  return (
    <>
      <section className="bg-ink-900 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent-light text-xs tracking-widest2 uppercase mb-6">
            Berita & Kegiatan
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-light max-w-3xl leading-tight">
            Kabar terbaru dari PPLI.
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-px bg-ink-200">
            {news.map((n, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <article className="bg-white p-8 lg:p-12 hover:bg-ink-50 transition-colors group cursor-pointer">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="lg:w-48 flex items-center gap-4">
                      <span className="text-xs tracking-widest2 uppercase text-accent border border-accent px-3 py-1">
                        {n.tag}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-ink-400 text-sm mb-3">{n.date}</div>
                      <h2 className="text-ink-900 text-xl lg:text-2xl font-light leading-snug group-hover:text-accent transition-colors">
                        {n.title}
                      </h2>
                    </div>
                    <div className="text-ink-300 group-hover:text-accent text-2xl transition-colors">
                      →
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}