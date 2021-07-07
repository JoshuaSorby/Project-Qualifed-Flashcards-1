
import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api";
import Deck from "./Deck";

 function Decks() {
    const [decks, setDecks] = useState([])
    const deckList = "";

    useEffect(() => {
        listDecks()
        .then(setDecks);
      }, [])

      
    return (
        <div className="d-flex justify-content-center">
            <ul>
                <Deck decks={decks} deckList={deckList}/>
            </ul>
        </div>
    )
}
export default Decks;