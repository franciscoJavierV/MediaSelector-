import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginReq } from "../actions";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import "./styles/LoginPage.css";
function LoginPage(props) {
  const [form, setValues] = useState({
    email: "",
    contraseña: "",
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
    };
    console.log(data);
    if (data) window.location.href = "/home";
  };
  const responseFacebook = (response) => {
    const data = {
      name: response.name,
      email: response.email,
      id: response.userID,
    };
    if (data) window.location.href = "/likes";
    console.log(data);
  };
  const redirect = () => {
    window.location.href = "/likes";
  };
  return (
    <>
      <div className="app">
        <section className="mensaje">
          <h1 className="mensaje__tittle">tittle</h1>
          <article className="mensaje__article"></article>
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
              <button onClick={redirect} className="login__container--button">
                Iniciar sesión
              </button>
              <div className="login__container-socials">
                <GoogleLogin
                  className="media"
                  clientId="457065273725-kgsd4tai4imdqmopt1hpmerg4cl76u3d.apps.googleusercontent.com"
                  buttonText="google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
              <div>
                <FacebookLogin
                  appId="317035492712396"
                  icon="fa-facebook"
                  textButton="facebook"
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={"hi"}
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <button className="media" onClick={renderProps.onClick}>
                      Facebook
                    </button>
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
const mapDispatchToProps = {
  loginReq,
};

export default connect(null, mapDispatchToProps)(LoginPage);
