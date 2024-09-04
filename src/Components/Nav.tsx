import Logo from "@/Icons/Logo.svg";
import BottomIcon from "@/Icons/BottomIcon.svg";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className="w-full">
      <ul className="flex justify-between">
        <li>
          <Image alt="Logo icon" src={Logo} />
        </li>
        <li>
          <div className="flex items-center h-full gap-x-8">
            <span className="flex items-center h-full gap-x-8">
              <p>Nosotros</p>
              <p>Blog</p>
              <span className="flex gap-x-2 items-center">
                Servicios <Image alt="Arrow Icon" src={BottomIcon} />{" "}
              </span>
            </span>

            <span>|</span>

            <span className="flex gap-x-8 items-center">
              <p>Iniciar sesión</p>
              <p className="bg-blue-custom-2 py-2 px-4 rounded-full">
                Registrate
              </p>
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
