"use client";
import LogoD from "@/Icons/Logo.svg";
import LogoM from "@/Icons/LogoM.svg";
import BottomIcon from "@/Icons/BottomIcon.svg";
import Image from "next/image";
import { useWindowsSize } from "@/Hooks/useWindowsSize";

export default function Nav() {
  const windowSize = useWindowsSize();
  return (
    <nav className="w-full">
      <ul className="flex justify-between items-center">
        <li>
          <Image
            alt="Logo icon"
            src={windowSize.width < 1280 ? LogoM : LogoD}
          />
        </li>
        <li>
          <div className="flex items-center h-full gap-x-8">
            {windowSize.width > 1280 && (
              <>
                <span className="flex items-center h-full gap-x-8">
                  <p>Nosotros</p>
                  <p>Blog</p>
                  <span className="flex gap-x-2 items-center">
                    Servicios <Image alt="Arrow Icon" src={BottomIcon} />{" "}
                  </span>
                </span>
                <span>|</span>{" "}
              </>
            )}

            <span className="flex gap-x-8 items-center">
              <p>Iniciar sesión</p>
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
