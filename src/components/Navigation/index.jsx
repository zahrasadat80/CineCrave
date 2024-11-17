import logo from "../../assets/3_prev_ui.png";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="bg-blue-500">
      <div className="nav-content flex items-center justify-between text-white">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" width={150} />
          </NavLink>
        </div>
        <div className="nav-links flex gap-4">
          <span>
            <NavLink to="/movies">Movies</NavLink>
          </span>
          <span>
            <NavLink to="/tv">TV Shows</NavLink>
          </span>
          <span>
            <NavLink to="/people">People</NavLink>
          </span>
        </div>
        <div className="search-input"></div>
      </div>
    </nav>
  );
}
