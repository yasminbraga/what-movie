"use client";

import Actions from "@/components/actions";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-3 bg-red-600 h-screen pt-9">
      <Card />
      <Actions />
    </div>
  );
}
