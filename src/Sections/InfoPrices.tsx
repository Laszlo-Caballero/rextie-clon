import CardDesc from "@/Components/CardDesc";
import Image from "next/image";
import rx from "@/Icons/Logo.svg";
import sunat from "@/Icons/Sunat.svg";
import bank from "@/Icons/Bank.svg";

export default function InfoPrices() {
  return (
    <section className="flex justify-center items-center w-full gap-x-12 mt-24">
      <div className="w-1/4">
        <CardDesc
          Compra="S/3,7655"
          Venta="S/3,7995"
          Img={<Image alt="icon" src={rx} />}
          bold
          clasName="bg-blue-dark rounded-t-xl"
        />

        <CardDesc
          Compra="S/3,7530"
          Venta="S/3,7680"
          Img={<Image alt="icon" src={sunat} />}
          clasName="bg-gray-custom-9 text-black"
        />

        <CardDesc
          Compra="S/3,7530"
          Venta="S/3,7680"
          Img={
            <span className="flex items-center">
              <Image alt="icon" src={bank} /> Bancos*
            </span>
          }
          clasName="bg-gray-custom-9 text-black rounded-b-xl"
        />
      </div>

      <div className="text-blue-dark">
        <span className="flex gap-x-2">
          <span className="px-3.5 bg-blue-custom-3 rounded-full"></span>
          <h2 className="font-bold text-xl">REXTIE BUSINESS</h2>
        </span>
        <h1 className="text-3xl font-bold mt-2">
          Tenemos un tipo de cambio <br /> exclusivo
        </h1>
        <p className="text-sm text-gray-custom-10 mt-2">
          Cambia tus dólares a soles de forma segura, rápida y confiable con{" "}
          <br />
          nuestra casa de cambio online.
        </p>
        <button className="text-white bg-blue-custom-4 px-4 py-2 rounded-md mt-2">
          {" "}
          Conoce más
        </button>
      </div>
    </section>
  );
}
