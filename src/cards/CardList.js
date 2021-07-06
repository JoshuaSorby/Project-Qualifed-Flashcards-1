import {Link, useRouteMatch} from "react-router-dom"

function CardList({cardList}) {
    const {url} = useRouteMatch();
    return cardList.map((item) => {
        return <div>  
        <li className="border" key={item.id}>
            <div className="row p-3">
                <p className="col">{item.front}</p>
                <p className="col">{item.back}</p>
            </div>
            <Link to={`${url}/cards/${item.id}/edit`}> <button>Edit</button> </Link>
            <button>Delete</button>
        </li>
        </div>
    })
}

export default CardList;

