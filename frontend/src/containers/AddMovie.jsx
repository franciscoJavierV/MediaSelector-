import React , { useState } from "react";
import "./styles/Likes.css";

function AddMovie() {
  const [form, setValues] = useState({
    
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="likes">
      <h1 className="likes-tittle">Registrar película</h1>
      <form className="likes__form" onSubmit={handleSubmit}>
        <input
          name="name"
          className="login__container--input"
          type="text"
          placeholder="Nombre de la película"
        />
        <input
          name="description"
          className="login__container--input"
          type="text"
          placeholder="Descripción"
          onClick={handleInput}
        />
        <input
          name="duration"
          className="login__container--input"
          type="text"
          placeholder="Duración"
        />
         <input
          name="gender"
          className="login__container--input"
          type="text"
          placeholder="Dirigida por"
        />
        <input
          name="director"
          className="login__container--input"
          type="text"
          placeholder="Dirigida por"
        />
        <button type="submit" className="likes__button">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
