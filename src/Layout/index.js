import React from "react";
import Header from "./Header";
import {Route, Switch, Link} from "react-router-dom";

function Layout() {
  return (
    <div>
      
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Header />
              <Link to="/decks/new"><button className="bg-dark lead text-white">New Deck</button></Link>
            </Route>
            <Route path="/">
              <Header />
            </Route>
            
            

          </Switch>
        </div>
    </div>
  );
}

export default Layout;

