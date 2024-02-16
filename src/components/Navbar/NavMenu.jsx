import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavMenu = ({ href, label }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={href}
        className={`${location.pathname === href && "bg-primary md:text-primary"} block rounded px-3 py-2 hover:bg-primary md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-primary`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavMenu;
