import Header from "@/sections/header";
import InfoBank from "@/sections/InfoBank";
import InfoPrices from "@/sections/InfoPrices";
import ChangeFast from "@/sections/ChangeFast";
import DataInfo from "@/sections/DataInfo";
import ClientsRecomandations from "@/sections/ClientsRecomandations";
import VideoSection from "@/sections/VideoSection";
import Carousel from "@/sections/Carousel";

export default function Home() {
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
    </main>
  );
}
