import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PPLI — Layanan Pengelolaan Limbah Terpadu Ramah Lingkungan",
  description:
    "PPLI menyediakan layanan pengangkutan, penyimpanan, pengolahan, dan pemusnahan limbah B3 berstandar keselamatan tinggi di Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}