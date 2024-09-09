import React from "react";
import Left from "@/Icons/ArrowLeft.svg";
import right from "@/Icons/ArrowRigth.svg";
import { Carousel } from "./Carousel";
import Image from "next/image";
import { DataClient } from "@/Types/types";

interface Props {
  dataClient: DataClient[];
}

export default function CarouselClients({ dataClient }: Props) {
  return (
    <div className="w-full h-2/3 flex justify-center px-12">
      <div className="h-full w-full flex flex-col justify-center">
        <Carousel
          nextIcon={
            <span>
              <Image alt="icon" src={right} />{" "}
            </span>
          }
          previousIcon={
            <span>
              <Image alt="icon" src={Left} />{" "}
            </span>
          }
          indicators={false}
          buttons={true}
          className="text-black"
          autoplay={false}
          cycleNavigation={false}
          classNameIcons="p-3 rounded-full"
        >
          {dataClient.map((element, i) => (
            <div key={i} className="w-full flex h-full justify-center">
              <span className="bg-white-custom w-full flex flex-col justify-center items-center rounded-xl border-2 border-[#9da7bc] text-center">
                <p className="text-gray-custom-11 font-semibold">
                  {element.experience}
                </p>
                <p className="text-gray-700 font-bold text-sm">
                  {element.name}
                </p>
              </span>
            </div>
          ))}
        </Carousel>
      </div>{" "}
    </div>
  );
}
