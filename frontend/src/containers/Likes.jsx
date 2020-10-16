//import React from "react";
import React, { useState } from "react";
import "./styles/Likes.css";
import { loginUser } from "../actions";
import { connect } from "react-redux";

function Likes(props) {

  const [form, setValues] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/home')

  };

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="likes">
      <h1 className="likes-tittle">Conozcamos tus gustos...</h1>
      <form className="likes__form" onSubmit={handleSubmit}>
        <div className="likes__form-data">
            <div className="likes__for,-data-group2"> 
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="romance"
                value="comedia"
                type="checkbox"
                onChange={handleInput}
              />
              Misterio
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="romance"
                value="comedia"
                type="checkbox"
                onChange={handleInput}
              />
              Telenovelas
            </label>
            <br></br>

            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="comedia"
                value="terror"
                type="checkbox"
                onChange={handleInput}
              />
              Animes
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="romance"
                value="comedia"
                type="checkbox"
                onChange={handleInput}
              />
              Fantasia
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="comedia"
                value="terror"
                type="checkbox"
                onChange={handleInput}
              />
              Documentales
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="romance"
                value="comedia"
                type="checkbox"
                onChange={handleInput}
              />
              Policiales
            </label>
            
            </div>
          <div className="likes__form-data-group1">
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="comedia"
                value="terror"
                type="checkbox"
                onChange={handleInput}
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
                onChange={handleInput}
              />
              Comedia
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="comedia"
                value="terror"
                type="checkbox"
                onChange={handleInput}
              />
              Romance
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="romance"
                value="comedia"
                type="checkbox"
                onChange={handleInput}
              />
              Acción
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="comedia"
                value="terror"
                type="checkbox"
                onChange={handleInput}
              />
              Ciencia ficción
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="comedia"
                value="terror"
                type="checkbox"
                onChange={handleInput}
              />
              Dramas
            </label>
            <br></br>
        <button type="submit"  onClick={handleSubmit} className="likes__button">
          ¡Listo!
        </button>
          </div>
        </div>
      </form>
    </div>
  );
}
const mapDispatchToProps = {
  loginUser,
};

const mapStateToProps = {};
export default connect(null,mapDispatchToProps )(Likes);

