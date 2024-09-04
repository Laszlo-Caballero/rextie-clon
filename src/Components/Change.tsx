"use client";
import Image from "next/image";
import Trophy from "@/Images/trophy-white.png";
import { useState } from "react";
import clsx from "clsx";
import Input from "./Input";
import Peru from "@/Icons/Peru.svg";
import Usa from "@/Icons/Usa.svg";
import RotateIcon from "@/Icons/Rotate.svg";
import PigIcon from "@/Icons/Pig.svg";

export default function Change() {
  const [selectChange, setSelectChange] = useState<string>("Venta");

  return (
    <section className="lg:w-1/2 2xl:w-2/5 flex h-full flex-col">
      <div className="bg-gray-custom h-full rounded-2xl py-5">
        <span className="text-xs font-bold flex justify-center items-center">
          <Image alt="Trophy Icon" src={Trophy} />
          Cambía al Instate con todos los bancos en Perú
        </span>
        <div className="h-full bg-white mx-4 rounded-2xl mt-2 py-4 px-4 text-gray-custom-3 flex items-center flex-col">
          <div className="flex w-full py-1 px-2 gap-x-2 items-center mx-6 bg-white-custom-2 rounded-xl font-bold text-sm">
            <span
              className={clsx(
                "py-4 w-1/2 rounded-lg text-center hover:bg-white cursor-pointer",
                selectChange === "Compra" ? "bg-white" : "bg-none"
              )}
              onClick={() => {
                setSelectChange("Compra");
              }}
            >
              Compra S/3.7485
            </span>
            <span
              className={clsx(
                "py-4 w-1/2 rounded-lg text-center hover:bg-white cursor-pointer",
                selectChange === "Venta" ? "bg-white" : "bg-none"
              )}
              onClick={() => {
                setSelectChange("Venta");
              }}
            >
              Venta S/3.7825
            </span>
          </div>

          <div className="w-full relative flex flex-col items-center justify-center">
            <Input Title="Envia" SrcImage={Peru} TypeMoney="PEN" Simbol="S/" />
            <Image
              alt="rotate icon"
              src={RotateIcon}
              className="absolute cursor-pointer20"
            />
            <Input Title="Recibe" SrcImage={Usa} TypeMoney="USD" Simbol="$" />
          </div>

          <div className="flex flex-col items-center mt-4">
            <p className="font-bold text-blue-custom">Usar un cupón o código</p>

            <span className="w-full flex font-bold mt-8">
              Ahorro promedio*
              <Image alt="Icon" src={PigIcon} />
              S/32.91
            </span>
          </div>
          <button className="w-full py-4 bg-blue-custom-2 rounded-xl text-white font-bold mt-4">
            Ingresar a Rextie
          </button>
        </div>
      </div>
      <p className="text-gray-custom-4 text-xs text-center mt-4 font-bold">
        (*)Cálculo respecto al tipo de cambio publicado por entidades bancarias.
      </p>
    </section>
  );
}
