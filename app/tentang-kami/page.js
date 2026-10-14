import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Tentang Kami — PPLI" };

export default function TentangKami() {
  return (
    <>
      <section className="bg-ink-900 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent-light text-xs tracking-widest2 uppercase mb-6">
            Tentang Kami
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-light max-w-3xl leading-tight">
            Lebih dari tiga dekade mengabdi pada lingkungan.
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-ink-500 text-lg leading-relaxed mb-8">
              PT Prasadha Pamunah Limbah Industri (PPLI) adalah perusahaan
              pengelolaan limbah terpadu yang telah beroperasi sejak 1994.
              Kami menyediakan solusi menyeluruh untuk limbah bahan berbahaya
              dan beracun (B3) — dari pengangkutan, penyimpanan, pengolahan,
              hingga pemusnahan.
            </p>
            <p className="text-ink-500 text-lg leading-relaxed">
              Dengan fasilitas berstandar internasional dan tim ahli
              bersertifikat, kami berkomitmen menjaga kepatuhan regulasi,
              keselamatan kerja, dan kelestarian lingkungan.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}