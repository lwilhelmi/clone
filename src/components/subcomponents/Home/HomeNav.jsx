import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HomeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home"
    };
  }

  render() {
    return (
      <div className="home__navbar">
        <NavLink activeClassName="active" to="/home/feed">
          <i className="fas fa-accessible-icon" />
        </NavLink>
        <NavLink activeClassName="active" to="/home/trending">
          <i className="fas fa-fire" />
        </NavLink>
      </div>
    );
  }
}

export default HomeNav;