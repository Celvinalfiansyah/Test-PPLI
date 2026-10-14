import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const grupA = {
  title: "Pengelolaan Lingkungan",
  subtitle: "Environmental Management",
  services: [
    {
      icon: "🟢",
      title: "Pengelolaan Lingkungan",
      desc: "Solusi terpadu pengelolaan limbah industri yang ramah lingkungan.",
      img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80",
    },
    {
      icon: "🔵",
      title: "Pengolahan Limbah",
      desc: "Pengolahan fisik, kimia, dan biologis berstandar internasional.",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    },
  ],
};

const grupB = {
  title: "Solusi Material & Operasional",
  subtitle: "Materials & Operational Solutions",
  services: [
    {
      icon: "🔴",
      title: "Penyimpanan Limbah",
      desc: "Fasilitas penyimpanan sementara sesuai regulasi dengan monitoring ketat.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      icon: "🟠",
      title: "Pengangkutan Limbah",
      desc: "Armada khusus bersertifikat dengan pengemudi terlatih dan pelacakan real-time.",
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    },
    {
      icon: "🟡",
      title: "Pemusnahan Limbah",
      desc: "Insinerasi suhu tinggi dengan sistem scrubbing canggih dan aman.",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    },
  ],
};

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h3 className="text-white text-2xl lg:text-3xl font-medium mb-2 drop-shadow">
        {title}
      </h3>
      <p className="text-white/70 text-xs tracking-widest2 uppercase">
        {subtitle}
      </p>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
        <Image
          src={service.img}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
      </div>
      <div className="bg-white/95 backdrop-blur p-5 flex items-center gap-3">
        <span className="text-lg">{service.icon}</span>
        <span className="text-ink-800 font-medium text-sm">
          {service.title}
        </span>
      </div>
    </div>
  );
}

export default function ServiceGrid() {
  return (
    <>
      {/* Section Title */}
      <section className="bg-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl lg:text-6xl font-light text-ink-800 leading-tight">
                  <span className="text-brand font-normal">Layanan</span> & Solusi
                </h2>
                <p className="text-sm text-ink-400 tracking-widest2 uppercase mt-2">
                  Products & Services
                </p>
              </div>
              <button className="pill-btn-primary self-start lg:self-auto">
                Selengkapnya <ArrowRight size={14} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section A: 2 kartu */}
      <section className="bg-gradient-to-br from-brand to-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <SectionHeader title={grupA.title} subtitle={grupA.subtitle} />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {grupA.services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <ServiceCard service={s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section B: 3 kartu */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-900 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <SectionHeader title={grupB.title} subtitle={grupB.subtitle} />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {grupB.services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <ServiceCard service={s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}