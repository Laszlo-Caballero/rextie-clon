"use client";
import Image from "next/image";
import Visa from "@/Icons/Visa.svg";
import VisaBlack from "@/Icons/VisaBlakc.svg";
import Citi from "@/Icons/Citi.svg";
import CitiBlack from "@/Images/citi black.png";
import Rpp from "@/Icons/Rpp.svg";
import Iso from "@/Images/iso-white.png";
import { useWindowsSize } from "@/Hooks/useWindowsSize";

export default function Description() {
  const windowSize = useWindowsSize();
  return (
    <div className="flex flex-col gap-y-4 xl:w-1/2">
      <h1 className="font-bold text-3xl xl:text-5xl text-center xl:text-start">
        La casa de cambio online{" "}
        {windowSize.width > 1280 && (
          <>
            <br />
          </>
        )}{" "}
        líder del Perú
      </h1>
      <p className="text-center text-sm xl:text-start xl:text-base">
        Celebramos un nuevo récord: 6 mil millones de dólares cambiados para
        nuestros clientes
      </p>
      <div className="flex gap-x-12 mt-10 justify-center xl:justify-normal text-center">
        <span className="flex flex-col xl:flex-row items-center gap-x-4 gap-y-2">
          <Image alt="visa" src={windowSize.width > 1280 ? Visa : VisaBlack} />
          Aliado <br /> Estrategico
        </span>
        <span className="flex flex-col xl:flex-row items-center gap-x-4 gap-y-2 text-center">
          <div className="flex gap-x-4 items-center">
            <Image
              alt="citi"
              src={windowSize.width > 1280 ? Citi : CitiBlack}
            />
            <Image alt="Rpp" src={Rpp} />
          </div>
          Inversionistas <br /> estratégicos
        </span>
      </div>
      {windowSize.width > 1280 && (
        <span className="flex items-center mt-4 mb-32">
          <Image alt="Iso" src={Iso} />
          Cetificados con ISO 27001
        </span>
      )}
    </div>
  );
}
