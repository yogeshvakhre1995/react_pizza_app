export const depositMoney = (amount) => {
    return (dispatch) => {
      dispatch({
        type: "deposit",
        payload: amount,
      });
      // dispatch({
      //   type: "ADD_TODO",
      //   text: "Use Redux",
      // });
    };
  };
  
  export const withdrawMoney = (amount) => {
    return (dispatch) => {
      dispatch({
        type: "withdraw",
        payload: amount,
      });
    };
  };
  
  