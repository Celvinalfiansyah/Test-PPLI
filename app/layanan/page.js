import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Layanan — PPLI" };

const services = [
  { no: "01", title: "Pengangkutan Limbah B3", desc: "Armada khusus bersertifikat dengan pengemudi terlatih dan sistem pelacakan real-time untuk memastikan limbah tiba dengan aman di fasilitas kami." },
  { no: "02", title: "Penyimpanan Sementara", desc: "Fasilitas penyimpanan sesuai regulasi dengan sistem monitoring ketat, ventilasi terkontrol, dan prosedur tanggap darurat yang siap 24/7." },
  { no: "03", title: "Pengolahan Limbah", desc: "Teknologi pengolahan fisik, kimia, dan biologis berstandar internasional untuk menetralkan dan mendaur ulang limbah industri." },
  { no: "04", title: "Pemusnahan Limbah", desc: "Insinerasi suhu tinggi dengan sistem scrubbing canggih untuk pemusnahan aman dan ramah lingkungan." },
  { no: "05", title: "Konsultasi Lingkungan", desc: "Pendampingan kepatuhan regulasi, penyusunan dokumen lingkungan, dan audit pengelolaan limbah industri." },
];

export default function Layanan() {
  return (
    <>
      <section className="bg-ink-900 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent-light text-xs tracking-widest2 uppercase mb-6">
            Layanan
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-light max-w-3xl leading-tight">
            Solusi menyeluruh untuk limbah industri Anda.
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-px bg-ink-200">
            {services.map((s, i) => (
              <ScrollReveal key={s.no} delay={i * 0.05}>
                <div className="bg-white grid lg:grid-cols-12 gap-8 p-10 lg:p-16 hover:bg-ink-50 transition-colors">
                  <div className="lg:col-span-2 text-ink-300 text-sm tracking-widest2">
                    {s.no}
                  </div>
                  <div className="lg:col-span-4">
                    <h2 className="text-ink-900 text-2xl md:text-3xl font-light">
                      {s.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-ink-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}