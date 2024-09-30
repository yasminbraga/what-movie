import { MovieType } from "@/types/types";
import Image from "next/image";
import HeartRate from "./heartRate";

const MovieGrid: React.FC<{ list: MovieType[] }> = ({ list }) => {
  return (
    <div>
      <h2 className="text-4xl uppercase">Filmes curtidos</h2>
      <div className="grid grid-cols-3 gap-6 p-6">
        {list.map((movie) => (
          <div
            key={movie.id}
            className="max-w-['294px'] h-[350px] relative rounded overflow-hidden"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
              fill
              className="absolute opacity-70 object-cover"
            />
            <div className="absolute bottom-0 p-6 text-red">
              <h3>{movie.original_title}</h3>
              <div className="flex flex-col items-end">
                <HeartRate voteAverage={movie.vote_average} />
                <p>({movie.vote_count}) avaliações</p>
              </div>

              <div className="flex">
                <p className="line-clamp-1">{movie.overview}</p>
                <span className="w-full text-red-500 underline cursor-pointer">
                  Ver Sinopse
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
