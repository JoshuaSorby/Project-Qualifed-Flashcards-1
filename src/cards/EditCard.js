import {updateCard, readCard} from "../utils/api/index"
import { useState, useEffect } from "react";
import {useParams, useHistory} from "react-router-dom"
import Form from "./Form";



function EditCard() {
    const {deckId} = useParams();
    const history = useHistory();
    const [card, setCard] = useState([]);
    const {cardId} = useParams();
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const handleFront = (event) => setFront(event.target.value)
    const handleBack = (event) => setBack(event.target.value)
    const handleSubmit = event => {
        event.preventDefault();
        const card = {"front": front, "back": back, "id": cardId, "deckId": Number(deckId)};
        updateCard(card);
        history.push('../')
    }
    useEffect(() => {
        try {readCard(cardId).then((result) => setCard(result))
        } catch (error) {if (error !== "AbortError") throw error}
      }, [])
      useEffect(() => {
          setFront(card.front)
      }, [card])
      useEffect(() => {
        setBack(card.back)
    }, [card])

    return <Form handleBack={handleBack} handleFront={handleFront} handleSubmit={handleSubmit} front={front} back={back}/>
}

export default EditCard;
