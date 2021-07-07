import React, {useParams} from "react-router-dom";
import Card from "../cards/Card";
import Layout from "./index";

function View() {
    const {deckId} = useParams();
    return <div>
        <Layout />
        
            <Card deckId={deckId}/>
        
        
    </div>

}

export default View;