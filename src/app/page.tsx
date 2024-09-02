import Actions from "@/components/actions";
import Card from "@/components/card";

async function getMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/21?api_key=2a2cd638e7489d2cc17b2434f5c489ba`
  );
  return res.json();
}

export default async function Home() {
  const movie = await getMovies();
  console.log(movie);
  return (
    <div>
      <Card movie={movie} />
      <Actions />
    </div>
  );
}
