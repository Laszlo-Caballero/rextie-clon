"use client";
import LogoD from "@/Icons/Logo.svg";
import LogoM from "@/Icons/LogoM.svg";
import BottomIcon from "@/Icons/BottomIcon.svg";
import Image from "next/image";
import { useWindowsSize } from "@/Hooks/useWindowsSize";

export default function Nav() {
  const windowSize = useWindowsSize();
  return (
    <nav className="w-full px-[10px] ">
      <div className="py-[6px]">
        <ul className="flex gap-x-7 items-center">
          <li className="border-b-[3px] border-orange-400">
            <h4 className="font-bold text-base">Personas</h4>
          </li>
          <li>
            <h4 className="">Empresas</h4>
          </li>
        </ul>
      </div>
      <ul className="flex justify-between items-center mt-6">
        <li>
          <Image
            alt="Logo icon"
            src={windowSize.width < 1280 ? LogoM : LogoD}
          />
        </li>
        <li>
          <div className="flex items-center h-full gap-x-6 text-sm">
            {windowSize.width > 1280 && (
              <>
                <span className="flex items-center h-full gap-x-6">
                  <p>Nosotros</p>
                  <p>Blog</p>
                  <span className="flex gap-x-2 items-center">
                    Servicios <Image alt="Arrow Icon" src={BottomIcon} />{" "}
                  </span>
                </span>
              </>
            )}
            <span className="font-mono">|</span>{" "}
            <span className="flex gap-x-6 items-center">
              <p className="font-bold">Iniciar sesión</p>
              <p className="bg-blue-custom-2 py-2 px-4 rounded-full text-white font-bold">
                Registrate
              </p>
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
