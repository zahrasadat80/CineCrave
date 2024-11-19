import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import fetchFromApi from "../api/fetch";

const TrendingWeekContext = createContext();

export function TrendingWeekProvider({ children }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => fetchFromApi({ endpoint: "trending/movie/day" }),
  });
  console.log(data);
  console.log(error);

  return (
    <TrendingWeekContext.Provider value={{ data, error, isError, isLoading }}>
      {children}
    </TrendingWeekContext.Provider>
  );
}
export default function useTrending() {
  return useContext(TrendingContext);
}
