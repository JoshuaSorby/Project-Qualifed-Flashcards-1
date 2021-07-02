
import React, {useState, useEffect} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import Header from "../Layout";
import { updateDeck, readDeck } from "../utils/api";

function EditDeck () {
  const {deckId} = useParams();
  const [deck, setDeck] = useState({});
  useEffect(() => {
    readDeck(deckId)
    .then(setDeck);
  }, [])
  
  const history = useHistory();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    setName(deck.name)
  }, [deck])

  useEffect(() => {
    (setDesc(deck.description))
  }, [deck])
  
  const handleName = (event) => setName(event.target.value)
  const handleDesc = (event) => setDesc(event.target.value)
  const handleSubmit = event => {
    event.preventDefault();
        
    const deck = {"name": name, "description": desc, "id":deckId};
    updateDeck(deck);
    history.push('/')
  }

    return <div>
    <Header />
    <nav><Link to="/">Home</Link> / <Link to="./"> <p>{deck.name}</p></Link><p>Edit Deck</p></nav>
    <form onSubmit={handleSubmit}>
    <div class="d-flex flex-column m-3">
                    <label htmlFor="name">
                    <input class="d-flex w-75"
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleName}
                    value={name}/>
                    </label>
        
                    <label htmlFor="desc"></label>
                    <textarea class="d-flex w-75" 
                    id="desc"
                    name="desc"
                    onChange={handleDesc}
                    value={desc}/>
                </div>
                <button type="submit">Submit</button>
                <Link to="/"><button type="button">cancel</button></Link>
    </form>

  </div>
}

export default EditDeck;
