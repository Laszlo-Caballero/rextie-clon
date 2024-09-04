import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import favIcon from "@/Images/favIcon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa de cambio online líder del Perú: Rextie",
  description: "Rextie clon",
  icons: favIcon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
