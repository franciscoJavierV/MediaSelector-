import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import "./styles/LoginPage.css";
function LoginPage(props) {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const responseGoogle = (response) => {
    const data = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      id: response.profileObj.googleId,
      apiKeyToken:
        "45e9b46a21c4b55e0ccf1f024a55d5ddf57f983a21091e3327b8616ed2582c62",
    };
    axios
      .post("http://localhost:3000/provider", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const responseFacebook = (response) => {
    const data = {
      name: response.name,
      email: response.email,
      id: response.userID,
      apiKeyToken:
        "45e9b46a21c4b55e0ccf1f024a55d5ddf57f983a21091e3327b8616ed2582c62",
    };
    axios
      .post("http://localhost:3000/provider", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  /*
     <GoogleLogin
        clientId="457065273725-kgsd4tai4imdqmopt1hpmerg4cl76u3d.apps.googleusercontent.com"
        buttonText="Login g"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId="317035492712396"
        icon="fa-facebook"
        textButton="login fb"
        autoLoad={false}
        fields="name,email,picture"
        onClick={"hi"}
        callback={responseFacebook}
      />
  */

  return (
    <>
    <div className="app">
    <section className="mensaje">
        <h1 className="mensaje__tittle">tittle</h1>
        <article className="mensaje__article">

        </article>
    </section>
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="login__container--input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="login__container--input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="login__container--button">Iniciar sesión</button>
            <div className="login__container-socials">
              <GoogleLogin
                className="media"
                clientId="457065273725-kgsd4tai4imdqmopt1hpmerg4cl76u3d.apps.googleusercontent.com"
                buttonText="google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              </div><div>
              <FacebookLogin
                appId="317035492712396"
                icon="fa-facebook"
                textButton="facebook"
                autoLoad={false}
                fields="name,email,picture"
                onClick={"hi"}
                callback={responseFacebook}
                render={renderProps => (
                    <button  className="media" onClick={renderProps.onClick}>Facebook</button>
                  )}
              />
            </div>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <p className="login__container--register">
            No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </div>
    </>
  );
}

export default LoginPage;
