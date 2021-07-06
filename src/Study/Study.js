import { useEffect, useState } from "react"
import { readDeck } from "../utils/api"
import { useParams } from "react-router";
import Header from "../Layout/Header";
import Layout from "../Layout";
import DeckList from "../Deck/DeckList";
import { useHistory, useRouteMatch } from "react-router-dom";

function Study() {

    const {deckId} = useParams();
    const {url} = useRouteMatch();
    const [cardList, setCardList] = useState([]);
    const [name, setName] = useState();
    const [description, setDescription] = useState()
    const [index, setIndex] = useState(0);
    const [side, setSide] = useState("front");
    const history = useHistory();

    const nextButton = () => {
             
        if (side == "back" && index < cardList.length - 1) {
            return <button onClick={() => {
            setSide("front");
            setIndex(index + 1)
            }}>Next</button>
        } else if (side == "back") {
            return <button onClick={() => {
                if (window.confirm(`Restart cards?\n\nClicking "cancel" will return you to the homepage`)) {
                    window.location.reload();
                    console.log(url)
                } else {history.push("/")}
            }}>Next</button>
        }
    }

    
    useEffect(() => {
        try {readDeck(deckId)
            .then((result) => setName(result.name))
            
        } catch (error) {if (error !== "AbortError") throw error}
      }, [])
      useEffect(() => {
         readDeck(deckId)
            .then((result) => setCardList(result.cards))
      }, [])
      useEffect(() => {
        try {readDeck(deckId)
            .then((result) => setDescription(result.description))
            
        } catch (error) {if (error !== "AbortError") throw error}
      }, [])
    if ( cardList.length < 2 ) return (
        <div>
            <Header />
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>Not Enough Cards</h3>
            

        </div>

    )
    
    return(
        <div>
            <Header />
            <h1>{name}</h1>
            <p>{description}</p>
            <p>card {index + 1} of {cardList.length}</p>
            <p>{cardList[index][side]}</p>
            <button onClick={() => setSide("back")}>Flip</button>
            {nextButton()}
        </div>
    )
}

export default Study;