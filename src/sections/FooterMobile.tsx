import Image from "next/image";
import React from "react";
import arrowUp from "@/Icons/ArrowBottom.svg";
import { DetailsBox } from "@/Components/DetailsBox";
import arrowDown from "@/Icons/ArrowDown.svg";
import CardFooter from "@/Components/CardFooter";
import linkedin from "@/Icons/Linkedin.svg";
import fb from "@/Icons/fb.svg";
import yt from "@/Icons/yt.svg";
import tk from "@/Icons/tiktok.svg";
import ig from "@/Icons/ig.svg";
import book from "@/Images/book.png";
import logoBlue from "@/Icons/LogoBlue.svg";

export default function FooterMobile() {
  const services = [
    "Rextie Business",
    "Rextie Factoring",
    "Confirming",
    <span className="flex items-center" key={123012}>
      Visa <p className="bg-orange-400 p-1 rounded-lg ml-1 text-white">Nuevo</p>
    </span>,
  ];

  const resources = [
    "Blog",
    "Tipo de cambio",
    "App para cambiar dolares",
    "Cambio de Dólar a Soles",
    "Percio del Dólar",
    "Dólar",
  ];

  const support = [
    "Peguntas frecuentes",
    "Cómo cambiar dolares con REXTIE",
    "Términos y condiciones",
    "Política de Cookies",
    "Política de Privacidad",
    "Mapa del sitio",
  ];

  const Icons = [linkedin, fb, yt, tk, ig];

  return (
    <footer className=" mt-24 relative px-8">
      <div className="relative w-full flex items-center">
        <div className="w-full h-[2px] bg-blue-dark"></div>
        <button className="bg-blue-dark absolute right-1/2 translate-x-1/2 p-3 rounded-full">
          <Image alt="icon arrow" src={arrowUp} />
        </button>
      </div>

      <div className="w-full flex flex-col text-sm justify-between mt-24 gap-x-12">
        <DetailsBox
          title="Servicios"
          className="text-gray-600 flex border-b border-gray-500 py-4"
          endIcon={<Image alt="icon" src={arrowDown} />}
          summaryClass="w-full font-bold text-lg"
        >
          <div className="flex flex-col gap-y-2 mb-8">
            {services.map((element, i) => {
              if (typeof element == "string") return <h3 key={i}>{element}</h3>;
              return <span key={i}>{element}</span>;
            })}
          </div>
        </DetailsBox>
        <DetailsBox
          title="Recursos"
          className="text-gray-600 flex border-b border-gray-500 py-4"
          endIcon={<Image alt="icon" src={arrowDown} />}
          summaryClass="w-full font-bold text-lg"
        >
          <div className="flex flex-col gap-y-2 mb-8">
            {resources.map((element, i) => {
              if (typeof element == "string") return <h3 key={i}>{element}</h3>;
              return <span key={i}>{element}</span>;
            })}
          </div>
        </DetailsBox>
        <DetailsBox
          title="Soporte"
          className="text-gray-600 flex border-b border-gray-500 py-4"
          endIcon={<Image alt="icon" src={arrowDown} />}
          summaryClass="w-full font-bold text-lg"
        >
          <div className="flex flex-col gap-y-2 mb-8">
            {support.map((element, i) => {
              if (typeof element == "string") return <h3 key={i}>{element}</h3>;
              return <span key={i}>{element}</span>;
            })}
          </div>
        </DetailsBox>
      </div>

      <div className="flex justify-center text-center mt-8 border-b border-gray-500">
        <CardFooter
          title="Contacto"
          subtitles={[
            <h3 className="font-bold text-blue-dark text-sm" key={123412412}>
              Info@rextie.com
            </h3>,
            "T. 01 700 3301",
            "C. 963 896 793",
            <span key={1241241512}>
              Lunes a Viernes: <br /> 8:00 am. - 8:00 pm.
            </span>,
            <span key={1241241}>
              Sábados:, <br /> 9:00 am. - 3:00 pm.
            </span>,
            <span key={124125125}>
              Av. José Gálvez <br />
              Barranechea 566, Of.101, <br />
              Urb. Corpac, San Isidro, Lima.
            </span>,
          ]}
        />
      </div>

      <div className="flex justify-center py-8 border-b border-gray-500">
        <Image alt="book" src={book} />
      </div>

      <div className="flex justify-center py-8 gap-x-4">
        {Icons.map((element, i) => {
          return <Image alt="book" src={element} key={i} />;
        })}
      </div>

      <span className="flex justify-center items-center gap-x-4 mb-6">
        <Image alt="logo" src={logoBlue} />
        <span className="text-gray-500 text-xs border-l-2 px-2">
          Rextie S.A.C
          <p className="font-bold">RUC 20601030013</p>
        </span>
      </span>
    </footer>
  );
}
