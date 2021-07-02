
import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import Deck from "./Deck";

 function DeckList({deckId}) {
    const [deck, setDeck] = useState([])
    useEffect(() => {
       readDeck(deckId.deckId)
       .then(setDeck)
      }, [])

      return <div>
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
      </div>
      

}
export default DeckList;