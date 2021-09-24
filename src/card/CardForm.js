import React, { useState } from 'react';

function CardForm({
  onSubmit,
  onDone,
  deckName = "Loading...",
  initialState,
  doneButtonLabel = "Done",
}) {
  const [formData, setFormData] = useState({...initialState});

  const handleInputChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  function submitHandler(event) {
    event.preventDefault();
    onSubmit({ ...formData });
    setFormData({...initialState});
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="card-front">
          Front: 
        </label>
        <textarea 
          // placeholder={initialState.front}
          value={formData.front}
          onChange={handleInputChange}
          name="front"
          id="card-front"
          required={true}
          className="form-control" 
          rows="5"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="card-back">
          Back:
        </label>
        <textarea 
          required={true}
          value={formData.back}
          onChange={handleInputChange}
          name="back"
          id="card-back"
          className="form-control" 
          rows="5"
        />
      </div>
      
      <div className="mb-3">
        <button type="button"  onClick={onDone} className="btn btn-secondary mr-2">
          {doneButtonLabel}
        </button>
        {/* <Link to={`/decks/${deckId}`}>
          <button type="button" className="btn btn-secondary mr-2">
            {buttonType}
          </button>
        </Link> */}
        <button type="submit" className="btn btn-primary mr-2">
          {submitHandler}
        </button>
      </div>
    </form>
  );
};

export default CardForm;