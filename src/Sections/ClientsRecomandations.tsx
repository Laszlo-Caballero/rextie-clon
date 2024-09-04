import React, { ReactElement } from "react";

type DataClient = {
  experience: ReactElement;
  name: string;
};

export default function ClientsRecomandations() {
  const dataClient: DataClient[] = [
    {
      experience: (
        <>
          “Mi experiencia al usar <br /> la aplicación fue <br /> estupenda. Es
          sencilla, <br />
          transparente en las <br /> tasas de cambio, y <br /> me permitió
          ahorrar <br /> tiempo. Es la mejor <br /> app que he usado”.
        </>
      ),
      name: "Chanel Ramos",
    },
    {
      experience: (
        <>
          “La mejor casa de <br /> cambio online, <br /> siempre se <br />{" "}
          preocupan porque <br /> sea un servicio bueno <br /> y honesto. Me
          llaman <br /> incluso cuando pasó <br /> algún error y lo <br />{" "}
          solucionan rápido”.
        </>
      ),
      name: "Grecia Retamozo",
    },
    {
      experience: (
        <>
          “Hasta el momento <br /> estoy muy contento <br /> con el servicio{" "}
          <br /> brindado por Rextie. <br /> Nunca tuve <br /> problemas con la
          app, <br /> es de mucha ayuda. <br /> La recomiendo”.
        </>
      ),
      name: "Jorge Suarez",
    },
    {
      experience: (
        <>
          “Rextie tiene una muy <br /> buena app, sencilla de <br /> usar y con
          muy <br /> buenos precios de <br /> venta y compra del <br /> dólar.
          Es la mejor casa <br /> de cambio online”.
        </>
      ),
      name: "Reni Ravina",
    },
  ];
  return (
    <section className="w-full mt-16 h-2/3">
      <h2 className="text-blue-dark text-4xl font-bold text-center">
        Descubre lo que dicen nuestros clientes
      </h2>

      <p className="text-[#5b5d61] text-center mt-8">
        Conoce de primera mano lo que es cambiar dinero con Rextie.
      </p>

      <div className="flex h-3/4 justify-center gap-x-12 mt-4">
        {dataClient.map((client, index) => {
          return (
            <span
              className="flex text-black flex-col items-center bg-[#eff2ff] justify-center px-8 py-4 border border-[#707e9b] rounded-xl"
              key={index}
            >
              <span className="text-center h-4/5">{client.experience}</span>
              <h4 className="font-bold text-lg">{client.name}</h4>
            </span>
          );
        })}
      </div>
    </section>
  );
}
