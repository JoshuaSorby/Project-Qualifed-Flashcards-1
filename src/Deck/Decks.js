
import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api";
import Deck from "./Deck";

 function Decks() {
    const [decks, setDecks] = useState([])
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        try {listDecks(signal).then((response) => setDecks(response));} catch (error) {if (error !== "AbortError") throw error}
      }, [])
      
    return (
        <div className="d-flex justify-content-center">
            <ul>
                <Deck decks={decks}/>
            </ul>
        </div>
    )
}
export default Decks;