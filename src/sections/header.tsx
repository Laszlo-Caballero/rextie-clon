import Change from "@/Components/Change";
import Description from "@/Components/Description";
import Nav from "@/Components/Nav";
import React from "react";

export default function Header() {
  return (
    <section className="xl:bg-Banner bg-center bg-cover px-4 xl:px-40 pt-4 text-black xl:text-white">
      <Nav />
      <article className="flex flex-col xl:flex-row mt-12 xl:mt-36 justify-between">
        <Description />
        <Change />
      </article>
    </section>
  );
}
