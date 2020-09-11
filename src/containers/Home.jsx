import React from "react";
import "./styles/Home.css";
import Carrousel from "../components/Carrousel";
import fractured from "./assets/fractured.jpg";
import umbrell from "./assets/umbrella.jpg";
import laotra from "./assets/split.jpg";

function Home() {
  return (
    <>
      {/*aca se renderiza el componente de carrousel */}
      <Carrousel />
      <div className="done">
        <section className="gallery">
          <h1>Te recomendamos...</h1>
          <div className="image">
            <a target="_blank" href="assets/umbrella.jpg">
              <img
                src={umbrell}
                alt="The Umbrella Academy"
                width="600px"
                height="400px"
              ></img>
            </a>
            <div className="desc">The Umbrella Academy</div>
          </div>
          <div className="image">
            <a target="_blank" href="assets/fractured.jpg">
              <img
                src={fractured}
                alt="Fractured"
                width="600"
                height="400"
              ></img>
            </a>
            <div className="desc">Fractured</div>
          </div>
          <div className="image">
            <a target="_blank" href="assets/split.jpg">
              <img src={laotra} alt="Split" width="600" height="400"></img>
            </a>
            <div className="desc">Split</div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;
