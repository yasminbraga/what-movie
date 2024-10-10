"use client";
import { useData } from "@/contexts/dataContext";
import Link from "next/link";
import { FC } from "react";

const Sidebar: FC = () => {
  const { menuIsOpen } = useData();
  return (
    <div
      className={`w-[250px] h-screen bg-zinc-800 flex justify-center flex-col px-6 gap-4 fixed bottom-0 top-0 ${
        menuIsOpen ? "left-0" : "left-[-250px]"
      }`}
    >
      <Link href={"/"} className="uppercase text-white text-md font-extrabold">
        Filmes não curados
      </Link>
      <Link
        className="uppercase text-white text-md font-extrabold"
        href={"/liked"}
      >
        Filmes curtidos
      </Link>
      <Link
        className="uppercase text-white text-md font-extrabold"
        href={"/notLiked"}
      >
        Filmes não curtidos
      </Link>
    </div>
  );
};

export default Sidebar;
