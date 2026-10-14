import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <>
      {/* Riset & Inovasi banner */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="relative rounded-4xl overflow-hidden h-64 lg:h-80">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600"
                alt="Research"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand/80 to-brand/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-white text-3xl lg:text-5xl font-light mb-6 drop-shadow-lg">
                  Riset & Inovasi
                </h3>
                <button className="pill-btn bg-white text-brand hover:bg-brand hover:text-white">
                  Selengkapnya <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* IR + CSR */}
      <section className="bg-brand-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="relative rounded-4xl overflow-hidden h-80 group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1000"
                  alt="IR"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h3 className="text-white text-5xl font-light mb-2">IR</h3>
                  <p className="text-white/80 text-xs tracking-widest2 uppercase mb-6">
                    Hubungan Investor
                  </p>
                  <button className="pill-btn bg-white text-brand hover:bg-brand hover:text-white">
                    Selengkapnya <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="relative rounded-4xl overflow-hidden h-80 group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1000"
                  alt="CSR"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-green-900/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h3 className="text-white text-4xl lg:text-5xl font-light mb-2">
                    CSR
                  </h3>
                  <p className="text-white/80 text-xs tracking-widest2 uppercase mb-6">
                    Tanggung Jawab Sosial
                  </p>
                  <button className="pill-btn bg-white text-brand hover:bg-brand hover:text-white">
                    Selengkapnya <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company + Recruit */}
      <section className="bg-brand-50 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <a
                href="/tentang-kami"
                className="group bg-white border-2 border-brand rounded-4xl p-10 lg:p-14 flex items-center justify-between hover:bg-brand hover:text-white transition-all duration-500"
              >
                <div>
                  <h3 className="text-4xl lg:text-5xl font-light mb-1">
                    <span className="text-brand group-hover:text-white transition-colors">C</span>ompany
                  </h3>
                  <p className="text-xs tracking-widest2 uppercase text-ink-400 group-hover:text-white/80 transition-colors">
                    Tentang Kami
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-brand text-white group-hover:bg-white group-hover:text-brand flex items-center justify-center transition-colors">
                  <ArrowRight size={20} />
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <a
                href="/kontak"
                className="group bg-white border-2 border-brand rounded-4xl p-10 lg:p-14 flex items-center justify-between hover:bg-brand hover:text-white transition-all duration-500"
              >
                <div>
                  <h3 className="text-4xl lg:text-5xl font-light mb-1">
                    <span className="text-brand group-hover:text-white transition-colors">R</span>ecruit
                  </h3>
                  <p className="text-xs tracking-widest2 uppercase text-ink-400 group-hover:text-white/80 transition-colors">
                    Karier
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-brand text-white group-hover:bg-white group-hover:text-brand flex items-center justify-center transition-colors">
                  <ArrowRight size={20} />
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}