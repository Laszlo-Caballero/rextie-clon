import Card from "@/Components/Card";
import Bcp from "@/Icons/Bcp.svg";
import Interbank from "@/Icons/Interbank.svg";
import BP from "@/Icons/BP.svg";
import Banbif from "@/Icons/Banbif.svg";
import bbva from "@/Icons/BBVA.svg";
import st from "@/Icons/St.svg";
import bc from "@/Icons/BC.svg";
import mibanco from "@/Icons/mibanco.svg";
import Start from "@/Icons/Start.svg";
import Image from "next/image";

export default function InfoBank() {
  return (
    <section className="flex flex-col items-center justify-center mt-12 font-bold">
      <h2 className="text-gray-custom text-4xl">
        Cambia al instante con todos los bancos en Perú
      </h2>

      <div className="w-full flex items-center justify-center gap-x-4 mt-8">
        <Card
          title="Transferencias inmediatas"
          Duration={[{ Time: "15 min.", subtitle: "Todo el Perú" }]}
          icons={[Bcp, Interbank, BP, Banbif]}
        />

        <Card
          title="Transferencias interbancarias"
          Duration={[
            { Time: "30 min.", subtitle: "Lima" },
            { Time: "24 horas", subtitle: "Provincias" },
          ]}
          icons={[bbva, st, bc, mibanco]}
          header={
            <span className="text-sm flex justify-center">
              <Image alt="start icon" src={Start} />
              Nuevo beneficiario
            </span>
          }
        />
      </div>
    </section>
  );
}
