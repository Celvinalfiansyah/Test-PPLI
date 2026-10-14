import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function QuickGuide() {
  return (
    <section className="bg-brand-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="bg-white rounded-4xl p-8 lg:p-16 grid lg:grid-cols-2 gap-12 items-center shadow-sm border border-brand-100">
            <div>
              <h2 className="text-4xl lg:text-6xl font-light text-ink-800 leading-tight">
                <span className="text-brand font-normal">Quick</span> Guide
              </h2>
              <p className="text-sm text-ink-400 tracking-widest2 uppercase mt-2 mb-8">
                Sekilas PPLI
              </p>
              <p className="text-ink-600 leading-relaxed mb-8">
                PPLI berkomitmen pada pengelolaan limbah terpadu dan penyediaan
                solusi lingkungan yang unggul — berkontribusi pada terciptanya
                masyarakat sejahtera dan Indonesia yang bersih dan berkelanjutan.
              </p>
              <button className="pill-btn-primary">
                Selengkapnya <ArrowRight size={14} />
              </button>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200"
                alt="PPLI Facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white text-4xl font-bold tracking-wider opacity-80">
                PPLI
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}