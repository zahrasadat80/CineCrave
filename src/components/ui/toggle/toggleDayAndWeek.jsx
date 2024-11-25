import { useState } from "react";

import "./style.css";

export default function Toggle({ value }) {
  const [selected, setSelected] = useState("day");

  return (
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
  );
}
