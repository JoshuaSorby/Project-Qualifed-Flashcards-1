
import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";

 function DeckList({deckId}) {
    const [deck, setDeck] = useState([])
    useEffect(() => {
       readDeck(deckId)
       .then(setDeck)
      }, [deckId])

      return <div>
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
      </div>
      

}
export default DeckList;