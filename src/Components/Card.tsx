import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Duration } from "@/Types/types";
import { ReactElement } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  Duration: Duration[];
  icons: StaticImport[] | string[];
  header?: ReactElement;
}

export default function Card({ title, Duration, icons, header }: Props) {
  return (
    <div className="w-1/3">
      {header && (
        <header className="w-full text-center p-1 bg-[#000f49] rounded-t-2xl">
          {header}
        </header>
      )}
      <div
        className={clsx(
          "text-black w-full border p-12 border-[#cccfdb]",
          header ? "rounded-b-2xl" : "rounded-2xl"
        )}
      >
        <div className="flex flex-col items-center gap-y-4">
          <p>{title}</p>
          <div className="flex justify-evenly w-full">
            {Duration.map((element, index) => {
              return (
                <span className="text-center font-bold text-xl" key={index}>
                  {element.Time}
                  <p className="font-normal text-base">{element.subtitle}</p>
                </span>
              );
            })}
          </div>

          <div className="flex justify-between w-full">
            {icons.map((icons, index) => {
              return <Image alt="Icon" src={icons} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
