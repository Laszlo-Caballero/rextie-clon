import { DataClient } from "@/Types/types";
import CarouselClients from "@/Components/CarouselClients";
import { useWindowsSize } from "@/Hooks/useWindowsSize";

export default function ClientsRecomandations() {
  const windowSize = useWindowsSize();
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
    <section className="w-full mt-16 h-full">
      <h2 className="text-blue-dark text-2xl xl:text-3xl font-bold text-center px-12 ">
        Descubre lo que dicen nuestros clientes
      </h2>

      <p className="text-gray-custom-11 text-center mt-8 text-xs xl:text-sm">
        Conoce de primera mano lo que es cambiar dinero con Rextie.
      </p>
      {windowSize.width > 1280 ? (
        <div className="flex justify-center gap-x-4 mt-4">
          {dataClient.map((client, index) => {
            return (
              <span
                className="flex text-black flex-col items-center bg-white-custom justify-around px-8 border border-gray-custom-7 rounded-xl"
                key={index}
              >
                <span className="text-center h-4/5 flex items-center py-20 px-2">
                  {client.experience}
                </span>
                <h4 className="font-bold">{client.name}</h4>
              </span>
            );
          })}
        </div>
      ) : (
        <CarouselClients dataClient={dataClient} />
      )}
    </section>
  );
}
