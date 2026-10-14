import ScrollReveal from "@/components/ScrollReveal";

export const metadata = { title: "Kontak — PPLI" };

export default function Kontak() {
  return (
    <>
      <section className="bg-ink-900 pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent-light text-xs tracking-widest2 uppercase mb-6">
            Kontak
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-light max-w-3xl leading-tight">
            Mari bicara tentang kebutuhan Anda.
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          {/* Kolom Kiri: Info Kontak */}
          <ScrollReveal>
            <h2 className="text-ink-900 text-2xl font-light mb-8">
              Informasi Kontak
            </h2>
            <div className="space-y-6 text-ink-600">
              <div>
                <div className="text-xs tracking-widest2 uppercase text-ink-400 mb-2">
                  Email
                </div>
                <div>info@ppli.co.id</div>
              </div>

              <div>
                <div className="text-xs tracking-widest2 uppercase text-ink-400 mb-2">
                  Telepon
                </div>
                <div>+62 21 xxxx xxxx</div>
              </div>

              <div>
                <div className="text-xs tracking-widest2 uppercase text-ink-400 mb-2">
                  Alamat
                </div>
                <div>
                  Kawasan Industri PPLI<br />
                  Bogor, Jawa Barat<br />
                  Indonesia
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Kolom Kanan: Form */}
          <ScrollReveal delay={0.15}>
            <h2 className="text-ink-900 text-2xl font-light mb-8">
              Kirim Pesan
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs tracking-widest2 uppercase text-ink-400 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  className="w-full border-b border-ink-300 focus:border-accent outline-none py-3 bg-transparent text-ink-900 transition-colors"
                  placeholder="Nama lengkap Anda"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest2 uppercase text-ink-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-b border-ink-300 focus:border-accent outline-none py-3 bg-transparent text-ink-900 transition-colors"
                  placeholder="email@perusahaan.com"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest2 uppercase text-ink-400 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={5}
                  className="w-full border-b border-ink-300 focus:border-accent outline-none py-3 bg-transparent text-ink-900 transition-colors resize-none"
                  placeholder="Tulis kebutuhan Anda..."
                />
              </div>

              <button
                type="submit"
                className="bg-ink-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-accent transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}