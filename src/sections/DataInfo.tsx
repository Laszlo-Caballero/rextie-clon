import CardInfo from "@/Components/CardInfo";
import moneyChange from "@/Icons/Change.svg";
import user from "@/Icons/user.svg";
import pig from "@/Icons/PigBig.svg";
import Slider from "react-slick";
import { useWindowsSize } from "@/Hooks/useWindowsSize";

export default function DataInfo() {
  const windowSize = useWindowsSize();
  return (
    <section className="flex flex-col xl:flex-row px-4 xl:px-12 justify-around mt-24">
      <span>
        <h1 className="text-blue-dark text-2xl font-bold text-center xl:text-start">
          Somos la casa de cambio {windowSize.width > 1280 && <br />} online
          líder del Perú
        </h1>
        {windowSize.width > 1280 && (
          <p className="text-gray-custom-8 text-sm mt-4 font-bold">
            ¡Tenemos el más alto volumen de dólares cambiados! <br />
            Las personas consideran a Rextie como la casa de <br /> cambio
            online más confiable.
          </p>
        )}
      </span>
      {windowSize.width < 1280 ? (
        <Slider variableWidth infinite={false} className="mt-4">
          <CardInfo
            Icon={moneyChange}
            title="+6 mil millones"
            description={
              <>
                de dólares <br /> nosotros
              </>
            }
          />

          <CardInfo
            Icon={user}
            title="+200 mil clientes"
            description={
              <>
                confian en <br /> nosotros
              </>
            }
          />

          <CardInfo
            Icon={pig}
            title="+282 millones"
            description={
              <>
                de soles <br /> ahorrados
              </>
            }
          />
        </Slider>
      ) : (
        <div className="flex w-2/5 justify-between">
          <CardInfo
            Icon={moneyChange}
            title="+6 mil millones"
            description={
              <>
                de dólares <br /> nosotros
              </>
            }
          />

          <CardInfo
            Icon={user}
            title="+200 mil clientes"
            description={
              <>
                confian en <br /> nosotros
              </>
            }
          />

          <CardInfo
            Icon={pig}
            title="+282 millones"
            description={
              <>
                de soles <br /> ahorrados
              </>
            }
          />
        </div>
      )}

      {/* */}
      {windowSize.width < 1280 && (
        <p className="text-gray-custom-8 text-xs text-center mt-4 font-semibold">
          ¡Tenemos el más alto volumen de dólares cambiados!{" "}
          {windowSize.width > 1280 && <br />}
          Las personas consideran a Rextie
          {windowSize.width < 1280 && <br />} como la casa de
          {windowSize.width > 1280 && <br />} cambio online más confiable.
        </p>
      )}
    </section>
  );
}
