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


export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    const token = Buffer.from(`${email}:${password}`, "utf8").toString(
      "base64"
    ); //needed for the basic auth
    var config = {
      method: "post",
      url: "http://localhost:3000/user/login",
      data: token,
    };
    axios(config)
      .then(({ data }) => {
        console.log("data ", data);
        //creating the cookie
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        document.cookie = `likedvideos=${data.user}`;
        document.cookie = `selections=${data.user}`;
        dispatch(loginReq(data.user)); //sended to login req and added to the state
      })
      .then(() => {
        //window.location.href = redirectUrl;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


//actions (fetch req) with redux thrunk 


