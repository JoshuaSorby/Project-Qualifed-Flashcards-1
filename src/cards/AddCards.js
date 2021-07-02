import {readDeck} from "../utils/api/index"
import { useState, useEffect } from "react";
import {useParams, Link, useHistory} from "react-router-dom"
import Header from "../Layout/Header";
import {createCard} from "../utils/api/index";
import Form from "./Form";

function AddCards() {
    const history = useHistory();
    const [deck, setDeck] = useState([]);
    const {deckId} = useParams();
    const [front, setFront] = useState();
    const [back, setBack] = useState();
    const handleFront = (event) => setFront(event.target.value)
    const handleBack = (event) => setBack(event.target.value)
    const handleSubmit = event => {
        event.preventDefault();
        
        const card = {"front": front, "back": back, "deckId": deckId};
        createCard(deckId, card);
        history.push('/')
    }
    useEffect(() => {
        try {readDeck(deckId).then((result) => setDeck(result))
        } catch (error) {if (error !== "AbortError") throw error}
      }, [])
      return (
        <div>
            <Header />
            <nav><Link to="/">Home</Link> / <Link to={`/decks/${deck.id}`}>{deck.name}</Link> / <p>Add Card</p></nav>
            <Form handleBack={handleBack} handleFront={handleFront} handleSubmit={handleSubmit}/>
        </div>
        )
}

export default AddCards;

    
    
    