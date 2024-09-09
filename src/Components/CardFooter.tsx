import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { ReactElement } from "react";
import { cn } from "@/Types/cn";

interface Props {
  title: ReactElement | string;
  subtitles: Array<string | ReactElement>;
  icons?: StaticImport[];
  bold?: boolean;
}

export default function CardFooter({ title, subtitles, icons, bold }: Props) {
  return (
    <div className="flex flex-col gap-y-10">
      <span className="text-gray-600">
        {typeof title == "string" ? (
          <h3 className="font-bold">{title}</h3>
        ) : (
          title
        )}
        <div className="flex flex-col gap-y-2 mt-8">
          {subtitles.map((element, i) => {
            if (typeof element == "string")
              return (
                <h3 className={cn(bold && "font-bold", "text-xs")} key={i}>
                  {element}
                </h3>
              );
            return (
              <span key={i} className="text-sm">
                {element}
              </span>
            );
          })}
        </div>
      </span>

      <div className="flex gap-x-4">
        {icons &&
          icons.map((element, i) => {
            return <Image alt="icon" src={element} key={i} />;
          })}
      </div>
    </div>
  );
}
