import React from "react";
import { NavLink } from "react-router-dom";
import { Route } from "../../constants/routes";

const SideNavigation: React.FC = () => {
  return (
    <aside className="sidenavigation">
      <div className="sidenavigation-wrapper">
        <div className="sidenavigation-item">
          <NavLink
            activeClassName="sidenavigation-menu-active"
            className="sidenavigation-menu"
            to={Route.ADMIN_PRODUCTS}
          >
            Products
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default SideNavigation;
