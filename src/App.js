import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./Layout/NotFound";
import NewDeck from "./Layout/NewDeck";
import Decks from "./Deck/Decks";
import View from "./Layout/View";
import AddCards from "./cards/AddCards"
import EditDeck from "./Deck/EditDeck";
import EditCard from "./cards/EditCard";
import Study from "./Study/Study"

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route exact path="/">
          <Layout />
          <Decks />
        </Route>     
        <Route path="/decks/new">
          <NewDeck />
        </Route>
        
        <Route path="/decks/:deckId/cards/new">
          <AddCards />
        </Route>
        
        
        <Route exact path="/decks/:deckId">
          <View />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route path="/decks/:deckId/study">
          <Study />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <Layout />
          <EditCard />
        </Route>
        
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
