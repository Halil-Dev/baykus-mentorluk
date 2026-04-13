import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Daha kurumsal ve temiz bir font
import "./globals.css";

// Inter fontu kurumsal siteler için (Alfa'da yaptığımız gibi) çok daha uygundur
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BanaKoç | Hayalindeki Üniversiteyi Uzmanıyla Kazan",
  description: "Türkiye derecesi yapmış mentörlerden kişiselleştirilmiş eğitim koçluğu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}