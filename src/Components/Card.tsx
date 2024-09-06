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
    <div className="w-full px-8 xl:px-0 xl:w-[30%]">
      {header && (
        <header className="w-full text-center p-1 bg-gray-custom rounded-t-2xl">
          {header}
        </header>
      )}
      <div
        className={clsx(
          "text-black w-full border px-8 py-10 border-gray-custom-2",
          header ? "rounded-b-2xl" : "rounded-2xl"
        )}
      >
        <p className="font-normal text-xs text-center">{title}</p>
        <div className="flex flex-col items-center gap-y-4 mt-2">
          <div className="flex justify-evenly w-full">
            {Duration.map((element, index) => {
              return (
                <span className="text-center font-bold text-2xl" key={index}>
                  {element.Time}
                  <p className="font-normal text-xs">{element.subtitle}</p>
                </span>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-y-4 gap-x-8 xl:gap-x-0 xl:justify-between w-full">
            {icons.map((icons, index) => {
              return <Image alt="Icon" src={icons} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
