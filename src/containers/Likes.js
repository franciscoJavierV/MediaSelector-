import React from 'react';
import './styles/Likes.css';

function Likes() {
    return (
        <div className="app">
            <h1>Conozcamos tus gustos...</h1>
            <div class="content">
                <td className="column">
                    <tr>Terror<input id="terror" class="checkbox" name="remember" type="checkbox" checked /></tr>
                    <tr>Romance<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Ciencia ficción<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Dramas<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Animes<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Documentales<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                </td>
                <td>
                    <tr>Comedia<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Acción<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Telenovelas<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Misterio<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Fantasía<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                    <tr>Policiales<input class="checkbox" name="remember" type="checkbox" defaultChecked /></tr>
                </td>
                <button>Registrar</button>
                <div id="info">
                    <p id="def">Terror es...</p>
                </div>
            </div>
        </div>
    );
}

export default Likes;