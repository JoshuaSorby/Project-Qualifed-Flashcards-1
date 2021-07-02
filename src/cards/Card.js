import { useEffect, useState} from "react";
import FilterCardList from "./FilterCardList"
import DeckList from "../Deck/DeckList";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import {deleteDeck} from "../utils/api/index"


function Card({deckId}) {
    const {url} = useRouteMatch();
    const history = useHistory();

      //make this cycle through all the cards and filter them into an array only containing cards within the proper Id
      return (
        <div class="flex-column d-flex justify-content-center">
        <DeckList deckId={deckId}/>
        
        <div class="justify-content-center">
        <Link to={`${url}/edit`}> <button>edit</button> </Link>
        <button>study</button>
        <Link to={`${url}/cards/new`}> <button>Add cards</button> </Link>
        <button onClick={() => {
          if (window.confirm("Are you sure you want to delete this deck?")) {
            deleteDeck(deckId);
            history.push('/')
          }}}>delete
        </button>
        <ul>
            <FilterCardList deckId={deckId}/>
        </ul>
    </div>
    </div>
      )
            
}

export default Card;