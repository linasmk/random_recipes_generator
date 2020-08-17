/* ===== App Dependencies ===== */
import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
	return (
		<header className="header">
	  <nav>
	    <ul>
	      <li><NavLink to="/" activeClassName="is-active"exact={true}>Meetings Dashboard Page</NavLink></li>
	      <li><NavLink to="/settings"activeClassName="is-active">Settings</NavLink></li>
	      <li><NavLink to="/help"activeClassName="is-active">Help</NavLink></li>
	    </ul>
	  </nav>
	</header>
	)
}
export default Header;