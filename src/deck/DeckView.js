import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { readDeck, deleteCard } from '../utils/api';
import CardPreview from '../card/CardPreview';
import DeckInfo from './DeckInfo';

const DeckView = () => {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });
  // const [cards, setCards] = useState([]);
  const history = useHistory();
  
  useEffect(fetchDeck, [deckId]);
  function fetchDeck() {
    readDeck(deckId).then(setDeck);
  }

  async function deleteCardHandler(event) {
    event.preventDefault();
    const ac = new AbortController();
    const result = window.confirm(
      `Delete this card?\n\nYou will not be able to recover it.`
    );
    if (result) {
      await deleteCard(event.target.id, ac.signal).then(fetchDeck);
    };
  }

  // const cardsList = cards.map((card, index) => <CardPreview key={index} card={card} handleDelete={handleDelete} />);
  return (
    <main className="container deck-view">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home mr-1" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <DeckInfo 
        name={deck.name} 
        description={deck.description} 
        deckId={deckId} 
        deck={deck}
      />
      {/* <div className="my-6">
        <h3>Cards</h3>
        <div>
          {cardsList}
        </div>
      </div> */}
      <CardPreview deck={deck}  onCardDelete={deleteCardHandler} />
    </main>
  );
};

export default DeckView;
