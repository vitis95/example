import food1 from '../img/food-1.jpeg'

function Card() {
    return (
        <div className='col'>
            <div className="card" >
                <img src={food1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-outline-danger">Elimina</button>
                </div>
            </div>
        </div>
    )
}

export default Card;