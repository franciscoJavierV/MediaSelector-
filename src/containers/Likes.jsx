import React from 'react';
import './styles/Likes.css';

function Likes() {
    return (
        <div className="likes">
            <h1 className="likes-tittle">Conozcamos tus gustos...</h1>
            <div className="likes__content">
                <td className="likes__content-column">
                    <tr>Terror<input id="terror" className="likes__column__checkbox" name="remember" type="checkbox" checked /></tr>
                    <tr>Romance<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Ciencia ficción<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Dramas<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Animes<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Documentales<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                </td>
                <td>
                    <tr>Comedia<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Acción<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Telenovelas<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Misterio<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Fantasía<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Policiales<input className="likes__column__checkbox" name="remember" type="checkbox" defaultChecked /></tr>
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