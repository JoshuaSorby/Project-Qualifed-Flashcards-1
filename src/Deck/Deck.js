import {Link, useHistory} from "react-router-dom";
import {deleteDeck} from "../utils/api/index"



function Deck({decks}) {
    const history = useHistory();

        return decks.map((item) => {
            return <li key={item.id}>
                <div className="border p-3 m-3">
                <div className="w-100 p-4 d-flex flex-row justify-content-between">
                <h3>{item.name}</h3>
                <p>{item.cards.length} cards</p>
                </div>
                 
                 <p>{item.description}</p>
                 <div name="buttons" className="d-flex-row">
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
    
