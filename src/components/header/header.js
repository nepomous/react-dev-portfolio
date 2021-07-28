import React from "react";
import { Navbar, NavItem, Row} from 'react-materialize';
import { NavLink } from 'react-router-dom'
import { projectStrings } from "../../constants/strings";


const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <li><NavLink to="/">{projectStrings.home}</NavLink></li>
      <li><NavLink to="contact">{projectStrings.contact}</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;