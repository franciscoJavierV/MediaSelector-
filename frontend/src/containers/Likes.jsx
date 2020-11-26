//import React from "react";
import React, { useState } from "react";
import "./styles/Likes.css";
import { setSelections } from "../actions";
import { connect } from "react-redux";

function Likes(props) {

  const [form, setValues] = useState({

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSelections(form);
    window.location.href = "/home";

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
      <form className="likes__form" >
        <div className="likes__form-data">
            <div className="likes__for,-data-group2"> 
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="misterio"
                value="misterio"
                type="checkbox"
                onChange={handleInput}
              />
              Misterio
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="telenovelas"
                value="telenovelas"
                type="checkbox"
                onChange={handleInput}
              />
              Telenovelas
            </label>
            <br></br>

            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="animes"
                value="animes"
                type="checkbox"
                onChange={handleInput}
              />
              Animes
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="fantasia"
                value="fantasia"
                type="checkbox"
                onChange={handleInput}
              />
              Fantasia
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="documentales"
                value="documentales"
                type="checkbox"
                onChange={handleInput}
              />
              Documentales
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="policiales"
                value="policiales"
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
                name="terror"
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
                name="comedia"
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
                name="romance"
                value="romance"
                type="checkbox"
                onChange={handleInput}
              />
              Romance
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="accion"
                value="accion"
                type="checkbox"
                onChange={handleInput}
              />
              Acción
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="ciencia ficcion"
                value="ciencia ficcion"
                type="checkbox"
                onChange={handleInput}
              />
              Ciencia ficción
            </label>
            <br></br>
            <label className="likes__column-label">
              <input
                className="likes__column__checkbox"
                name="drama"
                value="drama"
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
  setSelections,

};
const mapStateToProps = state => {
  return{
    selections : state.selections,
    likedmovies: state.likedmovies,
    user : state.user
  }
};
export default connect(mapStateToProps,mapDispatchToProps )(Likes);

