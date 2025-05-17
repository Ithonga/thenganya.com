import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="z-10 justify-between h-fit p-4 bg-white shadow flex items-center px-4">
      <img src="/logo.webp" alt="" className="w-[90px]" />
      <nav className="hidden md:block ">
        <ul className="flex gap-5 font-semibold ">
          <NavLink to={"/home"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/article"}>
            <li>Article</li>
          </NavLink>
          <NavLink to={"/gallery"}>
            <li>Gallery</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Contacts</li>
          </NavLink>
          <NavLink to={"/awards"}>
            <li>Awards</li>
          </NavLink>
          <NavLink to={"/events"}>
            <li>Events</li>
          </NavLink>
        </ul>
      </nav>
      <div className="flex gap-4">
        <Link to={"/add"}>
          <h2 className="bg-yellow-400 p-3 rounded-md text-whie font-semibold">
            +Add Nganya
          </h2>
        </Link>
        {/* <h2 className="bg-blue-400 p-3 rounded-md text-whie font-semibold">
          Login
        </h2> */}
      </div>
    </header>
  );
}
