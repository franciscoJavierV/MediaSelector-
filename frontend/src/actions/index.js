//actions sended to reducers 

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

//actions (fetch req) with redux thrunk 


