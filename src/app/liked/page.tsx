"use client";
import Empty from "@/components/empty";
import MovieGrid from "@/components/movieGrid";
import { useData } from "@/contexts/dataContext";

export default function Liked() {
  const { liked } = useData();
  console.log(liked);

  if (liked.length === 0) return <Empty />;
  return <MovieGrid list={liked} />;
}
