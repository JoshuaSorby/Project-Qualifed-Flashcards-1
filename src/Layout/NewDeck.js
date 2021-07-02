import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import Header from "../Layout";
import { createDeck } from "../utils/api";

function NewDeck() {
  const history = useHistory();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const handleName = (event) => setName(event.target.value)
  const handleDesc = (event) => setDesc(event.target.value)
  const handleSubmit = event => {
    event.preventDefault();
        
    const deck = {"name": name, "description": desc};
    createDeck(deck);
    history.push('/')
  }
  return <div>
    <Header />
    <nav><Link to="/">Home</Link> / <p>Create Deck</p></nav>
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
};
export default NewDeck;