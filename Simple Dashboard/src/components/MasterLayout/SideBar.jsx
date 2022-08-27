//External Lib  imports
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

//Internal Lib  imports
import sidebarLogo from "../../assets/images/logo.svg";

import NavItem from "./NavItem";
function SideBar({ openMenu }) {
  return (
    <div className={openMenu ? "side-nav-open" : "side-nav-close"}>
      <div className="side-nav-top text-center">
        <Link to="/" className="text-center">
          <img alt="" className="side-nav-logo" src={sidebarLogo} />
        </Link>
      </div>

      <Nav className="flex-column pt-2">
        <NavItem title="Dashboard" link="/dashboard" Icon={AiOutlineHome} />
        <NavItem title="Profile" link="/profile" Icon={CgProfile} />
        <NavItem title="Setting" link="/setting" Icon={FiSettings} />
      </Nav>
    </div>
  );
}

export default SideBar;
