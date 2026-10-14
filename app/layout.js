import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PPLI — Di Pusat Siklus Limbah Indonesia",
  description:
    "PPLI menyediakan layanan pengelolaan limbah terpadu ramah lingkungan di Indonesia. Pengangkutan, penyimpanan, pengolahan, dan pemusnahan limbah B3 berstandar tinggi.",
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