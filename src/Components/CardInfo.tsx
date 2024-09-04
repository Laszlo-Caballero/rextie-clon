import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { ReactElement } from "react";

interface Props {
  Icon: StaticImport | string;
  title: string;
  description: string | ReactElement;
}

export default function CardInfo({ Icon, title, description }: Props) {
  return (
    <div className="flex items-center flex-col bg-[#eff2ff] py-12 px-4 rounded-xl">
      <Image alt="icon" src={Icon} />
      <span className="font-bold text-blue-dark text-center mt-4">
        {title}
        <p className="font-normal">{description}</p>
      </span>
    </div>
  );
}
