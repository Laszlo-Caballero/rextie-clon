"use client";
import Image from "next/image";
import arrowUp from "@/Icons/ArrowBottom.svg";
import logoBlue from "@/Icons/LogoBlue.svg";
import linkedin from "@/Icons/Linkedin.svg";
import fb from "@/Icons/fb.svg";
import yt from "@/Icons/yt.svg";
import tk from "@/Icons/tiktok.svg";
import ig from "@/Icons/ig.svg";
import book from "@/Images/book.png";
import CardFooter from "@/Components/CardFooter";

export default function Footer() {
  const Icons = [linkedin, fb, yt, tk, ig];

  return (
    <footer className=" mt-24 mx-24 relative border-t-2 border-blue-dark">
      <div className="relative w-full flex items-center">
        <div className="w-full h-[1px] bg-blue-dark"></div>
        <button className="bg-blue-dark absolute right-1/2 p-3 rounded-full">
          <Image alt="icon arrow" src={arrowUp} />
        </button>
      </div>

      <div className="w-full flex text-sm justify-center mt-24 gap-x-12">
        <CardFooter
          title={
            <>
              {" "}
              <Image alt="logo" src={logoBlue} className="mb-4" />
              Rextie S.A.C
            </>
          }
          subtitles={["RUC 20601030013"]}
          icons={Icons}
          bold
        />

        <CardFooter
          title="Servicios"
          subtitles={[
            "Rextie Business",
            "Rextie Factoring",
            "Confirming",
            <span className="flex items-center" key={123012}>
              Visa <p className="bg-orange-400 p-1 rounded-lg ml-1">Nuevo</p>
            </span>,
          ]}
        />

        <CardFooter
          title="Recursos"
          subtitles={[
            "Blog",
            "Tipo de cambio",
            "App para cambiar dolares",
            "Cambio de Dólar a Soles",
            "Percio del Dólar",
            "Dólar",
          ]}
        />

        <CardFooter
          title="Soporte"
          subtitles={[
            "Peguntas frecuentes",
            "Cómo cambiar dolares con REXTIE",
            "Términos y condiciones",
            "Política de Cookies",
            "Política de Privacidad",
            "Mapa del sitio",
          ]}
        />

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
            <Image alt="book" src={book} key={123124124} />,
          ]}
        />
      </div>
    </footer>
  );
}
