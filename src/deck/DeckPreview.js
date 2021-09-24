import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api";

const DeckPreview = () => {
  const [decks, setDecks] = useState([]);
  useEffect(loadDecks, []);

  function deleteHandler(deckId) {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deckId).then(loadDecks);
    }
  }
  function loadDecks() {
    listDecks().then(setDecks);
  }
  const list = decks.map((deck) => (
    <li
      key={deck.id}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{deck.name}</h5>
        <small>{deck.cards.length} cards</small>
      </div>
      <p className="mb-1">{deck.description}</p>
      <Link
        to={`/decks/${deck.id}`}
        className="btn btn-secondary mr-2"
        title="Edit deck"
      >
        <span className="oi oi-eye" /> View
      </Link>
      <Link
        to={`/decks/${deck.id}/study`}
        className="btn btn-primary"
        title="Study deck"
      >
        <span className="oi oi-book" /> Study
      </Link>
      <button
        className="btn btn-danger float-right"
        title="Delete deck"
        onClick={() => deleteHandler(deck.id)}
      >
        <span className="oi oi-trash" />
      </button>
    </li>
  ));

  return (
    <>
      <Link to="/decks/new" className="btn btn-secondary">
        <span className="oi oi-plus" /> Create Deck
      </Link>
      <ul className="list-group mt-2 deck-list">{list}</ul>
    </>
  );
  // return (
  //   <div key={deck.id} className="card my-2">

  //     <div className="card-heading mx-3">
  //       <h2>{deck.name}</h2>
  //       <p>{deck.cards.length} cards</p>
  //     </div>

  //     <div className="card-body">
  //       {deck.description}
  //     </div>

  //     <div id="buttonRow" className="d-flex justify-content-between">
  //       <div className="my-3">
  //         <Link to={`/decks/${deck.id}`}>
  //         <button type="button" className="btn btn-secondary ml-3">
  //           <span className="oi oi-eye mr-2"></span>
  //           View
  //           </button>
  //         </Link>
  //         <Link to={`/decks/${deck.id}/study`}>
  //           <button type="button" className="btn btn-primary">
  //             <span className="oi oi-book mr-2"></span> 
  //             Study
  //           </button>
  //         </Link>
  //         </div>
  //       <div>
  //         <Link to="/">
  //           <button type="button" className="btn btn-danger m-3" onClick={handleDelete}>
  //             <span className="oi oi-trash"></span>
  //           </button>
  //         </Link>
  //       </div>
  //     </div>

  //   </div>
  // )
}

export default DeckPreview;