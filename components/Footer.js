import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-semibold tracking-wider text-white">PPLI</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-ink-400">
              Layanan pengelolaan limbah terpadu ramah lingkungan di Indonesia.
              Berkomitmen pada keselamatan, kepatuhan, dan keberlanjutan.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm tracking-widest2 uppercase mb-6">
              Perusahaan
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/tentang-kami" className="hover:text-white">Tentang Kami</Link></li>
              <li><Link href="/layanan" className="hover:text-white">Layanan</Link></li>
              <li><Link href="/csr" className="hover:text-white">CSR</Link></li>
              <li><Link href="/berita" className="hover:text-white">Berita</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm tracking-widest2 uppercase mb-6">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm text-ink-400">
              <li>info@ppli.co.id</li>
              <li>+62 21 xxx xxxx</li>
              <li>Bogor, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-700 flex flex-col md:flex-row justify-between gap-4 text-xs text-ink-500">
          <p>© {new Date().getFullYear()} PT Prasadha Pamunah Limbah Industri. All rights reserved.</p>
          <p>Kebijakan Privasi · Syarat & Ketentuan</p>
        </div>
      </div>
    </footer>
  );
}