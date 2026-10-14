import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "CSR — PPLI" };

export default function CSR() {
  return (
    <>
      <section className="bg-ink-900 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent-light text-xs tracking-widest2 uppercase mb-6">
            Tanggung Jawab Sosial
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-light max-w-3xl leading-tight">
            Bersama masyarakat, untuk lingkungan.
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-10">
          <ScrollReveal>
            <p className="text-ink-500 text-lg leading-relaxed">
              Program CSR PPLI berfokus pada tiga pilar: pendidikan lingkungan,
              pemberdayaan masyarakat, dan pelestarian alam. Kami percaya
              bahwa bisnis yang baik adalah bisnis yang memberi manfaat
              berkelanjutan bagi lingkungan sekitar.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}