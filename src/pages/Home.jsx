import SearchSection from "../components/Home-ui/SearchSection";
import TrendingMovies from "../api/TrendingMovies";
import SimpleSlider from "../components/Slider/Slider";
import MovieCard from "../components/movieCard/MovieCard";
export default function Home() {
  return (
    <div>
      <SearchSection />
      {/* <TrendingMovies /> */}
      {/* <SimpleSlider /> */}
      <MovieCard />
    </div>
  );
}
