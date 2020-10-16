import React from "react";
import "./styles/Home.css";
import Carrousel from "../components/Carrousel";
import fractured from "./assets/fractured.jpg";
import umbrell from "./assets/umbrella.jpg";
import laotra from "./assets/split.jpg";
import Header from "../components/header";
import { connect } from "react-redux";
import { setlike, logoutUser } from "../actions";
import axios from "axios";

function Home(props) {
  const handleumbrella = ()=>{
    const like = "umbrella"
    props.setlike({like})
    console.log('me gusta umbrella')
  }
  const handlesplit = ()=>{
    const like = "split"
    props.setlike({like})
    console.log('me gusta la otra')
  }
  const handlefractured = ()=>{
    const like = "fractured"
    props.setlike({like})
    console.log('me gusta fractured')
  }


  const sendtoback=()=>{
    //console.log(likedmovies)
    const data ={
      id:'5f891a0148b7f61f44d5925a',
      likedmovies : props.likedmovies
    }
    console.log(data)
    var config = {
      method: "post",
      url: "http://localhost:3000/users/likeslist",
      data: data,
    };
   axios(config)
    .then((res) => {console.log(res)})
    console.log(props.likedmovies)
  }
  return (
    <>
      <Header />
      {/*aca se renderiza el componente de carrousel */}
      <Carrousel />
      <div className="done">
       
        <section className="gallery">
          <h1>Te recomendamos...</h1>
          <div className="image">
              <img
                src={umbrell}
                alt="The Umbrella Academy"
                width="600px"
                height="400px"
               
              ></img>       
              <p className="desc">The umbrella Academy</p>
            <input type="button" onClick={handleumbrella} value="i like this" name="i like"/>
          </div>
          <div className="image">
              <img
                src={fractured}
                alt="Fractured"
                width="600"
                height="400"
               
              ></img>
            <p className="desc">Fractured</p>
            <input type="button" onClick={handlefractured}value="i like this" name="i like"/>
          </div>
          <div className="image">
              <img src={laotra} alt="Split" width="600" height="400" ></img>
            <p className="desc">Split</p>
            <input type="button" onClick={handlesplit} value="i like this" name="i like"/>
          </div>
        </section>
        <input onClick={sendtoback}  value="send data" name="send"></input>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  setlike,
  logoutUser,
};
const mapStateToProps = state => {
  return{
    likedmovies: state.likedmovies,
    user : state.user
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);

