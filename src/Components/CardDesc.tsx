import React, { ReactElement } from "react";
import clsx from "clsx";

interface Props {
  Compra: string;
  Venta: string;
  Img: ReactElement;
  clasName?: string;
  bold?: boolean;
}

export default function CardDesc({
  Compra,
  Venta,
  Img,
  clasName,
  bold,
}: Props) {
  return (
    <div className="w-full">
      <div className={"flex items-center justify-between p-2 " + clasName}>
        {Img}
        <div className="flex justify-between w-1/2">
          <span className={clsx(bold && "font-bold")}>
            <p className="font-normal">Compra</p>
            {Compra}
          </span>
          <span className={clsx(bold && "font-bold")}>
            <p className="font-normal">Venta</p>
            {Venta}
          </span>
        </div>
      </div>
    </div>
  );
}
