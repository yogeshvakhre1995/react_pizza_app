 
const reducer = (state = 0, action) => {
    // const { type, payload } = action;
    // switch (type) {
    //   case "deposit":
    //     return state + payload;
    //   case "withdraw":
    //     return state - payload;
  
    //   default:
    //     return state;
    // }
    if (action.type === "deposit") {
      return state + action.payload;
    } else if (action.type === "withdraw") {
      return state - action.payload;
    } else {
      return state;
    }
  };
  export default reducer;
  