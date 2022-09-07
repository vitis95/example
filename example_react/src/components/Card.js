import { Component } from 'react';
class Card extends Component {
    render() {
        console.log("CIAO", this.props.name)
        return (
            <div className='col' >
                <div className="card" >
                    <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">
                        Aggiungi <span className='badge bg-secondary'>{this.props.card.quantità}</span></button>
                    <img src={this.props.card.immagine} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.title}</h5>
                        <p className="card-text">{this.props.card.testo}</p>
                        <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;