import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, createCard } from '../utils/api';
import CardForm from './CardForm';

function CardNew () {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);
  
  function submitHandler(card) {
    createCard(deckId, card);
  }
  function doneHandler() {
    history.push(`/decks/${deckId}`);
  }
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home mr-1"></span>Home</Link></li>
          <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Add Card</li>
        </ol>
      </nav>

      <h2>{deck.name}: Add Card</h2>

      <CardForm 
        deckName={deck.name}
        initialState={deck}
        onSubmit={submitHandler}
        onDone={doneHandler}
      />
    </>
  );
};

export default CardNew;