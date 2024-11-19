import SearchSection from "../components/Home-ui/SearchSection";

import TrendingSlider from "../components/Slider/TrendingSlider";
import Toggle from "../components/ui/toggle/toggleDayAndWeek";

export default function Home() {
  return (
    <div>
      <SearchSection />
      <div className="container m-auto">
        <div className="flex items-center gap-7">
          <h2 className="text-2xl font-bold">Trending</h2>
          <Toggle />
        </div>
        <TrendingSlider />
      </div>
      {/* <TrendingMovies /> */}
    </div>
  );
}
