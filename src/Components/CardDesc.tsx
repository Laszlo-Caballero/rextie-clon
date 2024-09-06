import React, { ReactElement } from "react";
import clsx from "clsx";

interface Props {
  Compra: string;
  Venta: string;
  Img: ReactElement;
  clasName?: string;
  bold?: boolean;
  Buy?: boolean;
}

export default function CardDesc({
  Compra,
  Venta,
  Img,
  clasName,
  bold,
  Buy,
}: Props) {
  return (
    <div className="w-full border-b-2">
      <div
        className={"flex items-center justify-between px-2 py-2 " + clasName}
      >
        {Img}
        <div className="flex gap-x-6">
          <span className={clsx(bold && "font-bold", "text-xs")}>
            {Buy && <p className="font-normal text-xs text-center">Compra</p>}
            {Compra}
          </span>
          <span className={clsx(bold && "font-bold", "text-xs")}>
            {Buy && <p className="font-normal text-xs text-center">Compra</p>}
            {Venta}
          </span>
        </div>
      </div>
    </div>
  );
}
