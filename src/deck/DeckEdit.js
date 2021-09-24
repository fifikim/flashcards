//DeckEdit.js
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck } from '../utils/api';
import DeckForm from './DeckForm';

function DeckEdit() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: "", description: ""});
  
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  function editDeck(updateDeck) {
    updateDeck(updateDeck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }

  function cancel() {
    history.goBack();
  }

  const child = deck.id ? (
    <DeckForm 
      onCancel={cancel}
      initialFormState={deck}
      onSuccess={editDeck}
    />
  ) : (
    <p>Loading...</p>
  )

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home mr-1" />Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      {child}
    </>
  );
};

export default DeckEdit;