import React from "react";
import headerImage from "./flashcards.jpg";

const style = {
  background: `url(${headerImage})`,
  backgroundPosition: "center",
  backgroundSize: "110% auto",
};

function Header() {
  return (
    <header className="jumbotron jumbotron-fluid bg-dark" style={style}>
      <div className="container text-dark">
        <h1 id="header" className="display-4 text-center pt-4">Flashcard-O-Matic</h1>
        <h5 className="text-center">Discover The Flashcard Difference.</h5>
      </div>
    </header>
  );
}

export default Header;