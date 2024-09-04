import Change from "@/Components/Change";
import Description from "@/Components/Description";
import Nav from "@/Components/Nav";
import React from "react";

export default function Header() {
  return (
    <section className="bg-Banner bg-center bg-cover px-40 pt-4">
      <Nav />
      <article className="flex mt-36 justify-between">
        <Description />
        <Change />
      </article>
    </section>
  );
}
