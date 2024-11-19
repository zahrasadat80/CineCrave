import { useState } from "react";

import "./style.css";

export default function Toggle({ onToggle }) {
  const [selected, setSelected] = useState("day");

  const handleToggle = (value) => {
    setSelected(value);
    onToggle(value); // Notify parent component about the selection
  };

  return (
    <div className="toggle-container">
      <button
        className={selected === "day" ? "active" : ""}
        onClick={() => handleToggle("day")}
      >
        Day
      </button>
      <button
        className={selected === "week" ? "active" : ""}
        onClick={() => handleToggle("week")}
      >
        Week
      </button>
    </div>
  );
}
