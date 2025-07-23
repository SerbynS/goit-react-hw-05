import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export default function Navigation() {
  return (
    <>
      <header>
        <nav className={style.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
}
