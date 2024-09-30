"use client";
import Actions from "@/components/actions";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-red-600 h-full">
      <Card />
      <Actions />
    </div>
  );
}
