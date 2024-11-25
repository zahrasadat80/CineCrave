import { useState } from "react";
import SearchSection from "../components/Home-ui/SearchSection";

import TrendingSlider from "../components/Slider/TrendingSlider";

export default function Home() {
  const [trendingPeriod, setTrendingPeriod] = useState("day");

  const handleToggle = (value) => {
    setTrendingPeriod(value);
  };

  return (
    <div>
      <SearchSection />
      <div className="container m-auto">
        <TrendingSlider />
      </div>
      {/* <TrendingMovies /> */}
    </div>
  );
}
