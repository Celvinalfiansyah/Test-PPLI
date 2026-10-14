import ScrollReveal from "./ScrollReveal";

const services = [
  { no: "01", title: "Pengangkutan Limbah B3", desc: "Armada khusus bersertifikat untuk pengangkutan limbah berbahaya dan beracun." },
  { no: "02", title: "Penyimpanan Sementara", desc: "Fasilitas penyimpanan sesuai regulasi dengan sistem monitoring ketat." },
  { no: "03", title: "Pengolahan Limbah", desc: "Teknologi pengolahan fisik, kimia, dan biologis berstandar internasional." },
  { no: "04", title: "Pemusnahan Limbah", desc: "Insinerasi suhu tinggi untuk pemusnahan aman dan ramah lingkungan." },
  { no: "05", title: "Konsultasi Lingkungan", desc: "Pendampingan kepatuhan regulasi dan pengelolaan lingkungan industri." },
];

export default function ServiceGrid() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <p className="text-accent text-xs tracking-widest2 uppercase mb-4">
            Layanan Kami
          </p>
          <h2 className="text-ink-900 text-3xl md:text-5xl font-light max-w-3xl leading-tight">
            Lima pilar pengelolaan limbah terpadu.
          </h2>
        </ScrollReveal>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-200">
          {services.map((s, i) => (
            <ScrollReveal key={s.no} delay={i * 0.08}>
              <div className="bg-white p-10 h-full group hover:bg-ink-900 transition-colors duration-500">
                <div className="text-ink-300 group-hover:text-accent-light text-xs tracking-widest2 mb-8">
                  {s.no}
                </div>
                <h3 className="text-ink-900 group-hover:text-white text-xl font-medium mb-4 transition-colors">
                  {s.title}
                </h3>
                <p className="text-ink-500 group-hover:text-ink-300 text-sm leading-relaxed transition-colors">
                  {s.desc}
                </p>
                <div className="mt-8 text-ink-300 group-hover:text-white text-sm transition-colors">
                  →
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Kartu CTA terakhir */}
          <ScrollReveal delay={0.4}>
            <div className="bg-accent p-10 h-full flex flex-col justify-between">
              <div className="text-white/60 text-xs tracking-widest2">
                BUTUH BANTUAN?
              </div>
              <div>
                <h3 className="text-white text-xl font-medium mb-4">
                  Konsultasi gratis dengan tim kami
                </h3>
                <a href="/kontak" className="text-white text-sm underline underline-offset-4">
                  Hubungi sekarang →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}