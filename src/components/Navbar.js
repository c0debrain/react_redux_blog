import React from 'react';
import { NavLink, } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} style={styles.navItem} to="/">Home</NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active} style={styles.navItem} to="/new">New Blog</NavLink>
  </nav>
);

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black"
  },
  navItem: {
    color: "blue"
  }
};

export default Navbar;