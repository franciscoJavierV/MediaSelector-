//actions sended to reducers 
import axios from "axios";
export const setlike = payload => ({
  type: 'SET_LIKE',
  payload,
});

export const loginReq = (payload) => ({
  type: "LOGIN_REQ",
  payload,
});
export const logoutReq = (payload) => ({
  type: "LOGOUT_REQ",
  payload,
});
export const registerReq = (payload) => ({
  type: "REGISTER_REQ",
  payload,
});
export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const logoutUser = (payload) => {
  return (dispatch) => {
    dispatch(logoutReq(payload));
  };
};

export const loginSocial = (payload, redirectUrl) => {
  return (dispatch) => {
    console.log(payload);
    document.cookie = `email=${payload.email}`;
    document.cookie = `name=${payload.name}`;
    document.cookie = `id=${payload.id}`;
    dispatch(loginReq(payload));
    window.location.href = redirectUrl;
  };
};


export const loginUser = ({ name, password }, redirectUrl) => {
  return (dispatch) => {
    const user ={
      name : name,
      password : password
    }
   
    var config = {
      method: "post",
      url: "http://localhost:3000/users/new",
      data: user,
    };
    axios(config)
    .then(({data})=>{
      document.cookie = `name=${data.name}`;
      document.cookie = `id=${data._id}`;
      document.cookie = `likedmovies=${data.likedmovies}`;
      document.cookie = `selections=${data.selections}`;
      dispatch(loginReq(data)); //sended to login req and added to the state

    })
      .then(() => {
        window.location.href = redirectUrl;
      })
     
      .catch(function (error) {
        console.log(error);
      });
  };
};


//actions (fetch req) with redux thrunk 


