import Header from "@/Sections/header";
import InfoBank from "@/Sections/InfoBank";
import InfoPrices from "@/Sections/InfoPrices";
import ChangeFast from "@/Sections/ChangeFast";
import DataInfo from "@/Sections/DataInfo";
import ClientsRecomandations from "@/Sections/ClientsRecomandations";
import VideoSection from "@/Sections/VideoSection";
import Carousel from "@/Sections/Carousel";

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
