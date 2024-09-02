import getYear from "@/utils/getYear";
import minutesToHour from "@/utils/minutesToHour";
import Image from "next/image";
import HeartRate from "./heartRate";

const Card: React.FC<{ movie: any }> = ({ movie }) => {
  const year = getYear(movie.release_date);
  const time = minutesToHour(movie.runtime);

  return (
    <div className="w-[700px] h-[460px] relative my-6 rounded overflow-hidden bg-white">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
        fill
        className="absolute opacity-70 object-cover"
      />
      <div className="absolute bottom-0 p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl uppercase font-extrabold">
              {movie.original_title}
            </h2>
            <p className="uppercase">
              {year}·
              {movie.genres.map(
                (genre: { id: number; name: string }) => `${genre.name}/`
              )}
              ·{time}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <HeartRate voteAverage={movie.vote_average} />
            <p>({movie.vote_count}) avaliações</p>
          </div>
        </div>
        <div className="flex">
          <p className="line-clamp-1">{movie.overview}</p>
          <span className="w-full text-red-500 underline cursor-pointer">
            Ver Sinopse
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
