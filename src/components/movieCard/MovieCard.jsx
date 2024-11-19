import { Link } from "react-router-dom";
import moment from "moment";

import CircularProgressBar from "./CircularProgress";

export default function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const formattedDate = moment(movie.release_date).format("MMM D, YYYY");

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="image relative overflow-hidden rounded-lg">
          <img src={imageUrl} alt="" width={150} />
        </div>
        <div className="text relative">
          <div className="absolute -top-5 left-2 w-9">
            <CircularProgressBar movie={movie} />
          </div>
          <span className="block pt-4">{movie.title}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}
