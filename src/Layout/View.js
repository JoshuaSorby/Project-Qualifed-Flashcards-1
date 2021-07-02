import React, {useParams} from "react-router-dom";
import Card from "../cards/Card";
import Layout from "./index";

function View() {
    const {deckId} = useParams();
    return <div>
        <Layout />
        <ul>
            <Card deckId={deckId}/>
        </ul>
        
    </div>

}

export default View;