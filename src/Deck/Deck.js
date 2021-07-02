import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {listCards} from "../utils/api/index";
import {deleteDeck} from "../utils/api/index"



function Deck({decks}) {
    const history = useHistory();

        return decks.map((item) => {
            return <li>
                <div class="border p-3 m-3">
                <div class="w-100 p-4 d-flex flex-row justify-content-between">
                <h3>{item.name}</h3>
                <p>{item.cards.length} cards</p>
                </div>
                 
                 <p>{item.description}</p>
                 <div name="buttons" class="d-flex-row">
                    <Link to={`/decks/${item.id}`}><button>view</button></Link>
                    <Link to={`/decks/${item.id}/study`}><button>study</button></Link>
                    <button onClick={() => {
                        if (window.confirm("Are you sure you want to delete this deck?")) {
                            deleteDeck(item.id);
                            history.push('/')
                            }}}>Delete 
                    </button>
                 </div>
                 </div>
                </li>
        })
        
      }

export default Deck;
    
