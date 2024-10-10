import { useData } from "@/contexts/dataContext";
import IconBtn from "./iconBtn";

const Actions: React.FC = () => {
  const {
    setCurrentMovieIndex,
    currentMovieIndex,
    liked,
    setLiked,
    currentMovie,
    notLiked,
    setNotLiked,
  } = useData();

  const handleNext = () => {
    setCurrentMovieIndex(currentMovieIndex + 1);
  };

  const handleLiked = () => {
    setLiked([...liked, currentMovie]);
    handleNext();
  };
  const handleNotLiked = () => {
    setNotLiked([...notLiked, currentMovie]);
    handleNext();
  };

  return (
    <div className="flex justify-center items-center gap-8">
      <IconBtn name="não curti!" icon="n-curti.png" onClick={handleNotLiked} />
      <button
        onClick={handleNext}
        className="bg-white rounded-full py-4 px-8 uppercase font-semibold text-gray-800"
      >
        pular
      </button>
      <IconBtn name="curti!" icon="curti.png" onClick={handleLiked} />
    </div>
  );
};

export default Actions;
