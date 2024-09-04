import Image from "next/image";
import logo from "@/Images/rextie-logo-small.png";
import start from "@/Icons/StartYellow.svg";
import apple from "@/Images/app-store.png";
import google from "@/Images/google-play.png";
import gallery from "@/Images/app-gallery.png";
import Phones from "@/Images/apps-rextie.png";

export default function InfoApps() {
  return (
    <section className="w-full flex justify-center mt-12">
      <div className="flex bg-white-custom relative items-center w-7/12 px-24 py-8">
        <div className="flex flex-col gap-y-4">
          <header className="flex text-gray-600 items-center gap-x-2">
            <Image alt="icon" src={logo} />
            <span className="flex flex-col">
              <span className="flex items-center font-bold">
                <Image alt="icon" src={start} /> 4.8
              </span>
              <p className="font-normal text-xs">Rextie en app store</p>
            </span>
          </header>

          <div className="text-gray-600">
            <h3 className="font-bold text-2xl text-black">
              ¡Cambia dinero desde cualquier lugar!
            </h3>
            <div className="flex mt-4 gap-x-4">
              <Image alt="store" src={apple} />
              <Image alt="store" src={google} />
              <Image alt="store" src={gallery} />
            </div>
          </div>
        </div>

        <Image alt="phones" src={Phones} className="absolute right-24" />
      </div>
    </section>
  );
}
