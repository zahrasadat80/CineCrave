import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import default styles

const getColorFromPercentage = (percentage) => {
  if (percentage <= 40) {
    return "#FF6347"; // Red for low scores
  } else if (percentage <= 70) {
    return "#FFDF00"; // Yellow for medium scores
  } else {
    return "#4CAF50"; // Green for high scores
  }
};

export default function CircularProgressBar() {
  const score = 60;
  return (
    <>
      <CircularProgressbar
        background={true}
        value={score}
        text={`${score}%`} // Show percentage inside the circle
        styles={buildStyles({
          pathColor: getColorFromPercentage(score), // Color based on score
          textColor: "#fff",
          trailColor: "#d6d6d6",
          strokeLinecap: "round",
          textSize: "35px",
          backgroundColor: "#081c22",
        })}
      />
    </>
  );
}
