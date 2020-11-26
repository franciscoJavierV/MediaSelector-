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
          case 'SET_LIKE':
            return {
              ...state,
              likedmovies: [...state.likedmovies, action.payload]
            }
            case 'SET_SELECTIONS':
              return {
                ...state,
                selections: [...state.selections, action.payload]
              }
      default:
        return state;
    }
  };
  export default reducer;