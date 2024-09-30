import { useData } from "@/contexts/dataContext";
import getYear from "@/utils/getYear";
import minutesToHour from "@/utils/minutesToHour";
import Image from "next/image";
import HeartRate from "./heartRate";

const Card: React.FC = () => {
  const { currentMovie } = useData();

  if (!currentMovie) return <h2>Loading...</h2>;

  const year = getYear(currentMovie.release_date);
  const time = minutesToHour(currentMovie.runtime);

  return (
    <div className="w-[700px] h-[460px] relative my-6 rounded overflow-hidden bg-white">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`}
        alt=""
        fill
        className="absolute opacity-70 object-cover"
      />
      <div className="absolute bottom-0 p-6 text-red">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl uppercase font-extrabold">
              {currentMovie.original_title}
            </h2>
            <p className="uppercase">
              {year}·
              {currentMovie.genres.map(
                (genre: { id: number; name: string }) => `${genre.name}/`
              )}
              ·{time}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <HeartRate voteAverage={currentMovie.vote_average} />
            <p>({currentMovie.vote_count}) avaliações</p>
          </div>
        </div>
        <div className="flex">
          <p className="line-clamp-1">{currentMovie.overview}</p>
          <span className="w-full text-red-500 underline cursor-pointer">
            Ver Sinopse
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
