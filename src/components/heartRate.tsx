"use client";
import calcRate from "@/utils/calcRate";
import Image from "next/image";

const HeartRate: React.FC<{ voteAverage: number }> = ({ voteAverage }) => {
  const rate = calcRate(voteAverage);
  const emptyHearts = 5 - rate;
  return (
    <div className="flex gap-2">
      {[...Array(rate)].map((i) => (
        <Image
          key={i}
          src={"/favorite.png"}
          alt="full heart"
          width={20}
          height={20}
        />
      ))}
      {[...Array(emptyHearts)].map((i) => (
        <Image
          key={i}
          src={"/favorite_.png"}
          alt="empt heart"
          width={20}
          height={20}
        />
      ))}
    </div>
  );
};

export default HeartRate;
