import React from 'react';
import './styles/Likes.css';

function Likes() {
    return (
        <div className="app">
            <h1>Conozcamos tus gustos...</h1>
            <div className="content">
                <td className="column">
                    <tr>Terror<input id="terror" className="column__checkbox" name="remember" type="checkbox" checked /></tr>
                    <tr>Romance<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Ciencia ficción<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Dramas<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Animes<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Documentales<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                </td>
                <td>
                    <tr>Comedia<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Acción<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Telenovelas<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Misterio<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Fantasía<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Policiales<input className="column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                </td>
                <button className="likes__button">Registrar</button>
                <div id="info">
                    <p id="def">Terror es...</p>
                </div>
            </div>
        </div>
    );
}

export default Likes;