import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { NavigationMenus } from "../../constantData/dummyData";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <ul className={classes.navList}>
        {NavigationMenus.slice(0,5).map((menu) => (
          <li key={menu.id}>
            <NavLink
              to={menu.path}
              className={({ isActive }) =>
                isActive ? classes.activeMenu : undefined
              }
              end
            >
             {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default MainNavigation;
