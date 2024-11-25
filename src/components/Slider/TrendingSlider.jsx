import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieCard from "../movieCard/MovieCard";

import { useQuery } from "@tanstack/react-query";
import fetchFromApi from "../../api/fetch";

import { settings } from "./responsiveSliderConfig";

import "./style.css";
//function for getting data of day trending

//slider component
export default function TrendingMoviesSlider() {
  const [selected, setSelected] = useState("day");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => fetchFromApi({ endpoint: "trending/movie/day" }),
  });
  console.log(data);
  console.log(error);

  if (isLoading) return <div>is loading...</div>;

  if (isError) return <div>is Error ... </div>;

  return (
    <>
      <div className="flex items-center gap-7">
        <h2 className="text-2xl font-bold">Trending</h2>
        <div className="toggle-container">
          <button
            className={selected === "day" ? "active" : ""}
            onClick={() => setSelected("day")}
          >
            Day
          </button>
          <button
            className={selected === "week" ? "active" : ""}
            onClick={() => setSelected("week")}
          >
            Week
          </button>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {data?.results?.map((movie) => {
            return (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
