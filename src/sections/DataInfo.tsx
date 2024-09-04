import CardInfo from "@/Components/CardInfo";
import moneyChange from "@/Icons/Change.svg";
import user from "@/Icons/user.svg";
import pig from "@/Icons/PigBig.svg";

export default function DataInfo() {
  return (
    <section className="flex px-12 justify-around mt-24">
      <span>
        <h1 className="text-blue-dark text-3xl font-bold te">
          Somos la casa de cambio <br /> online líder del Perú
        </h1>
        <p className="text-gray-custom-8 text-sm mt-4 font-bold">
          ¡Tenemos el más alto volumen de dólares cambiados! <br />
          Las personas consideran a Rextie como la casa de <br /> cambio online
          más confiable.
        </p>
      </span>

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
    </section>
  );
}
