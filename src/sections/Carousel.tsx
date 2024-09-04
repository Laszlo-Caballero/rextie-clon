import Image from "next/image";
import Slider, { Settings } from "react-slick";
import iab from "@/Images/iabMIXX.png";
import visa from "@/Images/VISA.png";
import sedds from "@/Images/SEEDSTARSWORLD.png";
import minsa from "@/Images/MINISTERIO2.jpg";
import start from "@/Images/STARTUP.png";
import iso from "@/Images/ISO.png";
import adex from "@/Images/ADEX.png";
import asep from "@/Images/ASEP.png";
import ccl from "@/Images/CCL.png";
import fintech from "@/Images/FINTECH PERU.png";
import scale from "@/Images/SCALE UP.png";
import sni from "@/Images/SNI.png";
import rrp from "@/Images/RPP.png";
import citi from "@/Images/CITI.png";

export default function Carousel() {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
  };
  const data = [
    "Somos ganadores",
    iab,
    visa,
    sedds,
    minsa,
    start,
    iso,
    "Somos asociados",
    adex,
    asep,
    ccl,
    fintech,
    scale,
    sni,
    "Nuestros aliados estratégicos",
    rrp,
    citi,
    visa,
  ];

  return (
    <Slider
      {...settings}
      className=" bg-blue-dark flex items-center py-4 mt-12"
    >
      {data.map((element, index) => {
        return (
          <div
            className="h-4 xl:h-10 flex items-center w-2 whitespace-nowrap text-center"
            key={index}
          >
            {typeof element == "string" ? (
              <span className="h-full flex items-center px-12 font-bold text-2xl text-white">
                {element}
              </span>
            ) : (
              <Image
                alt="img carousel"
                src={element}
                className="w-auto h-10 xl:h-10 px-4"
              />
            )}
          </div>
        );
      })}
    </Slider>
  );
}
