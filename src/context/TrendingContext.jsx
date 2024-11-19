import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import fetchFromApi from "../api/fetch";

const TrendingContext = createContext();

export function TrendingProvider({ children }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => fetchFromApi({ endpoint: "trending/movie/day" }),
  });
  console.log(data);
  console.log(error);

  return (
    <TrendingContext.Provider value={{ data, error, isError, isLoading }}>
      {children}
    </TrendingContext.Provider>
  );
}
export default function useTrending() {
  return useContext(TrendingContext);
}
