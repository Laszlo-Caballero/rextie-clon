"use client";
import Header from "@/sections/header";
import InfoBank from "@/sections/InfoBank";
import InfoPrices from "@/sections/InfoPrices";
import ChangeFast from "@/sections/ChangeFast";
import DataInfo from "@/sections/DataInfo";
import ClientsRecomandations from "@/sections/ClientsRecomandations";
import VideoSection from "@/sections/VideoSection";
import Carousel from "@/sections/Carousel";
import InfoApps from "@/sections/InfoApps";
import Footer from "@/sections/Footer";
import FooterMobile from "@/sections/FooterMobile";
import { useWindowsSize } from "@/Hooks/useWindowsSize";

export default function Home() {
  const windowSize = useWindowsSize();
  return (
    <main className="h-screen w-full text-white overflow-x-hidden">
      <Header />

      <InfoBank />

      <InfoPrices />

      <ChangeFast />

      <DataInfo />

      <Carousel />

      <ClientsRecomandations />

      <VideoSection />

      <InfoApps />

      {windowSize.width > 1280 ? <Footer /> : <FooterMobile />}

      <div className="bg-[#000096] text-center p-2 font-bold">
        <span className="w-full text-xs">
          {" "}
          ©2024 Rextie: La casa de cambio online, Líder del Perú. Todos los
          derechos reservados.
        </span>
      </div>
    </main>
  );
}
