const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_REQ":
        return {
          ...state,
          user: action.payload,
        };
      case "LOGOUT_REQ":
        return {
          ...state,
          user: action.payload,
        };
        case "REGISTER_REQ":
          return {
            ...state,
            user: action.payload,
          };
        
      default:
        return state;
    }
  };
  export default reducer;