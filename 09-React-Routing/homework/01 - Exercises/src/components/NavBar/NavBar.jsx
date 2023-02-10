import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <img src={logoHenry} alt="logo-henry" />
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <NavLink to="/shipping" className={({isActive}) => isActive ? styleNav.active : styleNav.disable} >
              <span>Navieras</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/promotions">
              {
                ({isActive}) => (
                  <span 
                    className={isActive ? styleNav.active : styleNav.disable}
                    >
                      Promociones
                      </span>
                )
              }
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
