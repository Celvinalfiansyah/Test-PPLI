import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import NewsSection from "@/components/NewsSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <NewsSection />

      {/* Section CSR ringkas */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-accent text-xs tracking-widest2 uppercase mb-4">
              Tanggung Jawab Sosial
            </p>
            <h2 className="text-ink-900 text-3xl md:text-5xl font-light leading-tight mb-8">
              Bukan sekadar bisnis — kami peduli pada lingkungan dan masyarakat.
            </h2>
            <p className="text-ink-500 leading-relaxed mb-10">
              Melalui program CSR yang berkelanjutan, PPLI aktif berkontribusi
              dalam pemberdayaan masyarakat, pendidikan lingkungan, dan
              pelestarian alam di sekitar wilayah operasional kami.
            </p>
            <a href="/csr" className="inline-block bg-ink-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-accent transition-colors">
              Pelajari Program CSR
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="aspect-square bg-gradient-to-br from-accent to-accent-dark relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                   style={{
                     backgroundImage:
                       "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                     backgroundSize: "60px 60px",
                   }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/30 text-9xl font-thin">PPLI</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA terakhir */}
      <section className="bg-ink-900 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-white text-3xl md:text-5xl font-light leading-tight mb-8 max-w-3xl mx-auto">
              Siap membantu pengelolaan limbah industri Anda.
            </h2>
            <p className="text-ink-400 max-w-xl mx-auto mb-10">
              Konsultasikan kebutuhan pengelolaan limbah B3 perusahaan Anda
              bersama tim ahli kami.
            </p>
            <a href="/kontak" className="inline-block bg-white text-ink-900 px-10 py-4 text-sm tracking-wide hover:bg-accent hover:text-white transition-colors">
              Mulai Konsultasi
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}