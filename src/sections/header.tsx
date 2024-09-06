import Change from "@/Components/Change";
import Description from "@/Components/Description";
import Nav from "@/Components/Nav";
import React from "react";

export default function Header() {
  return (
    <section className="xl:bg-Banner bg-top bg-[length:120%_100%] bg-no-repeat px-4 xl:px-40 text-black xl:text-white">
      <Nav />
      <article className="flex flex-col xl:flex-row mt-12 xl:mt-8 items-center justify-between gap-x-16">
        <Description />
        <Change />
      </article>
    </section>
  );
}
