import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Food1 from './img/food-1.jpeg'
import Food2 from './img/food-2.jpg'
import Food3 from './img/food-3.jpg'
import Food4 from './img/food-4.jpg'
import Food5 from './img/food-5.jpg'
import Food6 from './img/food-6.jpg'

class App extends Component {
  state = {
    cards: [
      { id: 0, title: "Food-1", testo: "Text Text Text Text", immagine: Food1, quantità: 0 },
      { id: 1, title: "Food-2", testo: "Text Text Text Text", immagine: Food2, quantità: 0 },
      { id: 2, title: "Food-3", testo: "Text Text Text Text", immagine: Food3, quantità: 0 },
      { id: 3, title: "Food-4", testo: "Text Text Text Text", immagine: Food4, quantità: 0 },
      { id: 4, title: "Food-5", testo: "Text Text Text Text", immagine: Food5, quantità: 0 },
      { id: 5, title: "Food-6", testo: "Text Text Text Text", immagine: Food6, quantità: 0 },

    ]
  }

  handleDelete = cardId => { // questa prende in ingresso una card id
    const cards = this.state.cards.filter(card => card.id !== cardId)
    this.setState({ cards })
  }

  handleIncrement = card => { // questa prende in ingresso la card intera, infatti se vedi in card qui passiamo tutta la card
    const cards = [...this.state.cards];
    const id = cards.indexOf(card); //indexOf ritorna la posizione nell'array e quindi l'id in questo caso
    cards[id].quantità++;
    this.setState({ cards });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Titolo</h1>
          <hr />
          <div className='row'>
            {this.state.cards.map(card => (
              <Card
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                key={card.id}
                card={card} />

            ))}
          </div>
        </div>
      </>
    );
  }


}

export default App;
