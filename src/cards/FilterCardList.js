import {useState, useEffect} from "react";
import { readDeck } from "../utils/api";
import { Link, useParams} from "react-router-dom";
import CardList from "./CardList";


function FilterCardList() {
    const [deck, setDeck] = useState({});
    const [cardList, setCardList] = useState([])
    const {deckId} = useParams();
    
    useEffect(() => {
        try {readDeck(deckId)
            .then((result) => setDeck(result))
            
        } catch (error) {if (error !== "AbortError") throw error}
      }, [deckId])
      useEffect(() => {
        try {readDeck(deckId)
            .then((result) => setCardList(result.cards))
            
        } catch (error) {if (error !== "AbortError") throw error}
      }, [deckId])

    return (
        <div>
            <nav><Link to="/">Home</Link> / <p>{deck.name}</p> </nav>
            <ul><CardList cardList={cardList}/></ul>
        </div>
    
    )
}

export default FilterCardList;