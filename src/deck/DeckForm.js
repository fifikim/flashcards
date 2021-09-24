import React, { useState } from 'react';

function DeckForm({
  onSuccess,
  onCancel,
  initialFormState = { name: "", description: "" },
}) {
  const [ formData, setFormData ] = useState({...initialFormState});

  const handleInputChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    onSuccess(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={formData.name}
              placeholder= "Deck name"
              onChange={handleInputChange}
              id="name" 
              name="name"
              className="form-control" 
              type="text"
              required={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="4"
              required={true}
              placeholder="Brief description of the deck"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <button 
            type="reset" 
            className="btn btn-secondary mr-2" 
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary mr-2">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default DeckForm;