import { useQuery } from "@tanstack/react-query";
import fetchFromApi from "./fetch";

export default function TrendingMovies() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => fetchFromApi({ endpoint: "trending/movie/day" }),
  });
  if (isLoading) return <div>is loading...</div>;
  if (isError) return <div>is Error ... </div>;

  return (
    <div>
      {data?.results?.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
