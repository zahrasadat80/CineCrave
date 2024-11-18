import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgress";

export default function MovieCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="image relative overflow-hidden rounded-lg">
          <img
            src="https://media.themoviedb.org/t/p/w220_and_h330_face/cjXLrg4R7FRPFafvuQ3SSznQOd9.jpg"
            alt=""
            width={150}
          />
        </div>
        <div className="text relative">
          <div className="absolute -top-5 left-2 w-9">
            <CircularProgressBar />
          </div>
          <span className="block pt-4">From</span>
          <span>Feb 20, 2022</span>
        </div>
      </div>
    </div>
  );
}
