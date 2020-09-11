import React from 'react';
import './styles/Home.css';

addEventListener('DOMContentLoaded', () => {
    const images = ['assets/new1.jpg', 'assets/new2.jpg', 'assets/new3.jpg', 'assets/new4.jpg']

    let i = 1
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const progress_bar = document.querySelector('#progress-bar')
    const div_indicadores = document.querySelector('#indicadores')
    let porcentaje_base = 100 / images.length
    let porcentaje_actual = porcentaje_base

    for (let index = 0; index < images.length; index++) {
        const div = document.createElement('div')
        div.classList.add('circles')
        div.id = index
        div_indicadores.appendChild(div)
    }

    progress_bar.style.width = `${porcentaje_base}%`
    img1.src = images[0]
    const circulos = document.querySelectorAll('.circles')
    circulos[0].classList.add('resaltado')

    const slideshow = () => {
        img2.src = images[i]
        const circulo_actual = Array.from(circulos).find(el => el.id == i)
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
        circulo_actual.classList.add('resaltado')
    
        img2.classList.add('activeimg')
        i++
        porcentaje_actual += porcentaje_base
        progress_bar.style.width = `${porcentaje_actual}%`

        if (i == images - length) {
            i = 0
            porcentaje_actual = porcentaje_base - porcentaje_base
        }

        setTimeout(() => {
            img1.src = img2.src
            img2.classList.remove('activeimg')
        }, 1000);
    }
    setInterval(slideshow, 4000)
})

function Home() {
    return (
        <div className="slides">
            <h1>
                Novedades
            </h1>
            <div className="images">
                <div id="progress-bar-container">
                    <div id="progress-bar"></div>
                </div>
                    
                <div id="slideshow">
                    <img src="" alt="" id="img1"></img>
                    <img src="" alt="" id="img2"></img>
                </div>
                    
                <div id="indicadores">
                    
                </div>
            </div>
        </div>

        <section className="gallery">
            <h1>
                Te recomendamos...
            </h1>
            <div className="image">
                <a target="_blank" href="assets/umbrella.jpg">
                    <img src="assets/umbrella.jpg" alt="The Umbrella Academy" width="600px" height="400px"></img>
                </a>
                <div class="desc">The Umbrella Academy</div>
            </div>

            <div className="image">
                <a target="_blank" href="assets/fractured.jpg">
                    <img src="assets/fractured.jpg" alt="Fractured" width="600" height="400"></img>
                </a>
                <div className="desc">Fractured</div>
            </div>

            <div className="image">
                <a target="_blank" href="assets/split.jpg">
                    <img src="assets/spli.jpg" alt="Split" width="600" height="400"></img>
                </a>
                <div className="desc">Split</div>
            </div>
        </section>
    )
}
export default Home
