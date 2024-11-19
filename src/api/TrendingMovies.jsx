import useApiData from "../hooks/useApiData";

export default function TrendingMovies() {
  const { data, isLoading, isError } = useApiData({
    queryKey: ["trendingMovies"],
    endpoint: "trending/movie/day",
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
