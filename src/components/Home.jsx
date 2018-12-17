import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeFeed from "./subcomponents/HomeFeed";
import HomeTrending from "./subcomponents/HomeTrending";
import HomeNav from "./subcomponents/HomeNav";



class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home__navbar home__navbar__container">
          <HomeNav />
        </div>
        <div className="home__feed home__feed__container">
          <Switch>
            <Route exact path="/home/feed" component={HomeFeed} />
            <Route exact path="/home/trending" component={HomeTrending} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
