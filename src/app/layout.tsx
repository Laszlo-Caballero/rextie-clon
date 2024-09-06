import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import favIcon from "@/Images/favIcon.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
