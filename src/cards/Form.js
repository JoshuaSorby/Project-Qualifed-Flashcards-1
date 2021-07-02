import {Link, useHistory} from "react-router-dom";


function Form({handleSubmit, handleFront, handleBack, front, back}) {
    const history = useHistory();

    return <form onSubmit={handleSubmit}>
                <div class="d-flex flex-column m-3">
                    <label htmlFor="front">
                    <textarea class="d-flex w-75"
                    id="front"
                    name="front"
                    onChange={handleFront}
                    value={front}/>
                    </label>
        
                    <label htmlFor="back"></label>
                    <textarea class="d-flex w-75" 
                    id="back"
                    name="back"
                    onChange={handleBack}
                    value={back}/>
                </div>
                <button type="submit">Save</button>
                <Link to="../"><button type="button">cancel</button></Link>
            </form>
}

export default Form;