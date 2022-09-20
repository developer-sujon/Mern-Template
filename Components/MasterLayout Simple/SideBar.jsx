//External Lib  imports
import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { Nav } from "react-bootstrap";

//Internal Lib  imports
import NavItem from "./NavItem";
function SideBar({ openMenu, setOpenMenu }) {
  return (
    <div className={openMenu ? "side-nav-open" : "side-nav-close"}>
      <Nav className="flex-column pt-2">
        <NavItem title="Dashboard" link="/dashboard" Icon={RiDashboardLine} />
        <NavItem title="Profile" link="/profile" Icon={CgProfile} />
        <NavItem title="Setting" link="/setting" Icon={FiSettings} />
      </Nav>
    </div>
  );
}

export default SideBar;
