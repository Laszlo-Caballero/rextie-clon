import React from "react";
import Image from "next/image";
import Visa from "@/Icons/Visa.svg";
import Citi from "@/Icons/Citi.svg";
import Rpp from "@/Icons/Rpp.svg";
import Iso from "@/Images/iso-white.png";

export default function Description() {
  return (
    <div className="flex flex-col gap-y-4 w-1/2">
      <h1 className="font-bold text-5xl">
        La casa de cambio online <br /> líder del Perú
      </h1>
      <p>
        Celebramos un nuevo récord: 6 mil millones de dólares cambiados para
        nuestros clientes
      </p>
      <div className="flex gap-x-12 mt-10">
        <span className="flex items-center gap-x-4">
          <Image alt="visa" src={Visa} />
          Aliado <br /> Estrategico
        </span>
        <span className="flex items-center gap-x-4">
          <Image alt="citi" src={Citi} />
          <Image alt="Rpp" src={Rpp} />
          Inversionistas <br /> estratégicos
        </span>
      </div>
      <span className="flex items-center mt-4 mb-32">
        <Image alt="Iso" src={Iso} />
        Cetificados con ISO 27001
      </span>
    </div>
  );
}
