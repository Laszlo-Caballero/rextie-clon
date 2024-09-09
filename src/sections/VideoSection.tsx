import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import LiteYoutubeEmbed from "react-lite-youtube-embed";
import Forbes from "@/Images/forbes.jpg";
import Gestion from "@/Images/gestion.png";
import Nasdaq from "@/Images/nasdag.jpg";
import FP from "@/Images/financialpost.jpg";
import comercio from "@/Icons/Comercio.svg";
import RS from "@/Images/reuters.jpg";
import mk from "@/Images/mkt-INSIDER.jpg";
import rpp from "@/Images/rpp big.png";
import bw from "@/Images/businesswire.jpg";
import se from "@/Images/semana-economica.png";
import rep from "@/Images/la-republica.png";
import p21 from "@/Images/peru-21.png";
import { Carousel } from "@/Components/Carousel";
import { cn } from "@/Types/cn";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Left from "@/Icons/ArrowLeft.svg";
import right from "@/Icons/ArrowRigth.svg";

export default function VideoSection() {
  const [currentText, setCurrentText] = useState<number>(0);
  const News = [
    "“Citi ha realizado una inversión estratégica en Rextie. Se trata de la primera inversión del banco en tecnología financiera en América Latina. Con este capital, la fintech espera acumular 7.000 millones de dólares transaccionados en la plataforma hacia el 2024”.",
    "“Nuestro CEO, Mateu Batle, comparte sus conocimientos sobre los desafíos y oportunidades en el mercado de las fintech en Perú. Desde regulaciones hasta obstáculos operativos, este artículo arroja luz sobre el panorama financiero actual”.",
    "La inversión y la integración de la tecnología FX de vanguardia de Citi, Citi FX Pulse e Instant Payments, impulsarán la expansión de Rextie, al tiempo que brindarán a sus clientes un servicio más rápido y tipos de cambio de divisas más competitivos.",
    "Sobre la inversión de Citi en Rextie, David González, Jefe Regional de Ventas Corporativas y Soluciones para América Latina de Citi, dijo: “Esta es una transacción histórica para Citi en Perú. Estamos entusiasmados de ofrecer el poder de nuestra red FX global y nuestras soluciones tecnológicas”.",
    "“Mateu Batle, CEO y Cofundador de Rextie, escribe sobre lo que ha pasado en el mundo de las startups, los capitales de inversión y qué podría pasar con estas empresas durante el año 2023”. ",
    "Sobre la participación de Citigroup en Rextie, Aldo Álvarez, director de Inversiones Institucionales Estratégicas y Fintech para LATAM en Citi, dijo que el acuerdo crea oportunidades para ofrecer los productos del banco a los clientes de Rextie. ",
    "“La fintech Rextie fue premiada como ‘Empresa exportada de servicios líder en política de equidad de género’ en el Perú Service Summit 2023. Este logro es fruto de nuestro programa de Equidad de Género que incentiva la participación de mujeres”.",
    "“Rextie, la Fintech líder en el cambio de divisas, anunció el cierre de una nueva ronda de inversiones en la que logró obtener más de US$ 1.4 millones de dólares por parte de diversos inversores, siendo Grupo RPP el principal inversor”.",
    "A través de CitiFX Pulse e Instant Payments, los clientes de Rextie experimentarán un servicio que se destaca por su automatización, pagos en tiempo real, mayor liquidez y tarifas altamente competitivas.",
    "“Rextie se convierte en la primera fintech de América Latina en recibir una inversión directa de uno de los bancos más grandes del mundo. Con la operación, sus clientes se beneficiarán de la integración de soluciones como CitiFX Pulse e Instant Payments”.",
    "Citi realiza una inversión estratégica en Rextie. La integración de la tecnología de última generación en cambio de divisas de Citi impulsará la expansión de Rextie y podrá darle a sus clientes un servicio más rápido y un tipo de cambio más competitivo”.",
    "“Rextie ha innovado el mercado Fintech peruano lanzando su aplicativo para relojes inteligentes o ‘smartwatches’, disponibles para Android y iOS, con el objetivo de que cada usuario pueda monitorear el tipo de cambio en cualquier momento del día”..",
  ];

  const images = useMemo(
    () => [
      Forbes,
      Gestion,
      Nasdaq,
      FP,
      comercio,
      RS,
      mk,
      rpp,
      bw,
      se,
      rep,
      p21,
    ],
    []
  );

  const [renderImages, setRender] = useState<StaticImageData[]>(
    images.slice(0, 3)
  );

  useEffect(() => {
    if (currentText > 2 && currentText <= 5)
      return setRender(images.slice(3, 6));
    if (currentText > 5 && currentText <= 8)
      return setRender(images.slice(6, 9));
    if (currentText > 8 && currentText <= 11)
      return setRender(images.slice(9, 12));
    return setRender(images.slice(0, 3));
  }, [currentText, images]);

  return (
    <section className="h-full xl:h-1/2 flex flex-col justify-center items-center xl:mt-24">
      <h2 className="text-blue-dark font-bold text-4xl text-center">
        Rextie en los medios
      </h2>
      <p className="text-gray-custom-11 font-semibold text-center text-xs px-12 xl:text-base mt-8">
        Encuentra artículos y noticias en medios que hablan de nuestra casa de
        cambio online.
      </p>
      <div className="w-full h-full flex flex-col xl:flex-row justify-center mt-4">
        <div className="px-4 xl:w-1/3 mb-8 xl:mb-0">
          <LiteYoutubeEmbed id="j3s5nfNl12Q" title="Video notice Rextie" />
        </div>

        <div className="h-full flex flex-col justify-center">
          <div className="flex items-center justify-evenly w-full h-1/2">
            {renderImages.map((element, i) => (
              <Image
                alt="Icon"
                src={element}
                key={i}
                className={cn(
                  "w-1/4",
                  i === currentText % 3 ? "opacity-100" : "opacity-50"
                )}
              />
            ))}
          </div>
          <div className="h-1/2">
            <Carousel
              nextIcon={
                <span>
                  <Image alt="icon" src={right} />{" "}
                </span>
              }
              previousIcon={
                <span>
                  <Image alt="icon" src={Left} />{" "}
                </span>
              }
              indicators={false}
              buttons={true}
              className="text-black"
              onChangeItem={(index) => {
                setCurrentText(index);
              }}
              autoplay={false}
              cycleNavigation={false}
              classNameIcons="p-3 rounded-full bg-white-custom"
            >
              {News.map((element, i) => (
                <div key={i} className="px-20">
                  <p className="text-gray-custom-11 font-semibold text-sm xl:text-sm">
                    {element}
                  </p>
                  <p className="text-blue-dark font-bold">Ver noticia</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
