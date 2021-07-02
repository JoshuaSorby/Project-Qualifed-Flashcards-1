import {Link, useParams, useRouteMatch} from "react-router-dom"

function CardList({cardList}) {
    const {url} = useRouteMatch();
    return cardList.map((item) => {
        return <div>  
        <li class="border">
            <div class="row p-3">
                <p class="col">{item.front}</p>
                <p class="col">{item.back}</p>
            </div>
            <Link to={`${url}/cards/${item.id}/edit`}> <button>Edit</button> </Link>
            <button>Delete</button>
        </li>
        </div>
    })
}

export default CardList;

