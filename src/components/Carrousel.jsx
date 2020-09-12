
import './styles/Carrousel.css';
import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel"

function Carrousel() {
    const [index, setIndex] = useState(1);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div>
            <Carousel fade="true" interval="5000">
                <Carousel.Item>
                    <img className="d-block w-100"
                    src={require("../assets/new1.jpg")}
                    alt="First Image" 
                    style={{height: "80vh"}}
                    />
                    <Carousel.Caption>
                        <h3>Pronto</h3>
                        <p>2020</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* */}
                <Carousel.Item>
                    <img className="d-block w-100"
                    src={require("../assets/new2.jpg")}
                    alt="Second Image" 
                    style={{height: "80vh"}}
                    />
                    <Carousel.Caption>
                        <h3>Ya puedes ver</h3>
                        <p>2020</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* */}
                <Carousel.Item>
                    <img className="d-block w-100"
                    src={require("../assets/new4.jpg")}
                    alt="Third Image" 
                    style={{height: "80vh"}}
                    />
                    <Carousel.Caption>
                        <h3>Proximamente</h3>
                        <p>2020</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* */}
            </Carousel>
        </div>
    )
}

export default Carrousel
