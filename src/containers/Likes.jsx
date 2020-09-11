import React from "react";
import "./styles/Likes.css";

function Likes() {

    const handleSubmit= (e) =>{
        e.preventDefault()
        window.location.href = '/home'
    }
  return (
    <div className="likes">
      <h1 className="likes-tittle">Conozcamos tus gustos...</h1>
      <form className="likes__form" onSubmit={handleSubmit}>
        <div className="likes__form-data">
          <div className="likes__form-data-group1">
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="comedia"
                value="terror"
                type="checkbox"
              />
              Terror
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="terror"
                value="comedia"
                type="checkbox"
              />
              Comedia
            </label>
            <br></br>
          </div>
          <div className="likes__form-data-group2">
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="comedia"
                value="terror"
                type="checkbox"
              />
              Terror
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="terror"
                value="comedia"
                type="checkbox"
              />
              Comedia
            </label>
            <br></br>
        <button type="submit"  className="likes__button">
          ¡Listo!
        </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Likes;
