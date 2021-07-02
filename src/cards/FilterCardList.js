import DeckList from "../Deck/DeckList";
import {useState, useEffect} from "react";
import { readDeck } from "../utils/api";
import { Link} from "react-router-dom";
import CardList from "./CardList";


function FilterCardList({deckId}) {
    const [deck, setDeck] = useState({});
    const [cardList, setCardList] = useState([])
    useEffect(() => {
        try {readDeck(deckId.deckId)
            .then((result) => setDeck(result))
            
        } catch (error) {if (error !== "AbortError") throw error}
      }, [])
      useEffect(() => {
        try {readDeck(deckId.deckId)
            .then((result) => setCardList(result.cards))
            
        } catch (error) {if (error !== "AbortError") throw error}
      }, [])

    return (
        <div>
            <nav><Link to="/">Home</Link> / <p>{deck.name}</p> </nav>
            <CardList cardList={cardList}/>
        </div>
    
    )
}

export default FilterCardList;