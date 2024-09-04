import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
  Title: string;
  SrcImage: string | StaticImport;
  TypeMoney: string;
  Simbol: string;
}

export default function Input({ Title, SrcImage, TypeMoney, Simbol }: Props) {
  return (
    <div className="w-full mt-2 border-2 border-gray-custom-5 p-4 rounded-xl">
      <p>{Title}</p>
      <div className="flex justify-between">
        <span className="flex items-center gap-x-2 font-bold text-xl">
          <Image alt="IconFlag" src={SrcImage} />
          {TypeMoney}
        </span>
        <label htmlFor="Money" className="font-bold text-xl">
          {Simbol}
          <input type="number" className="outline-none max-w-24 font-bold" />
        </label>
      </div>
    </div>
  );
}
