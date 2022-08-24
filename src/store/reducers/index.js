import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import menuReducer from "./menuReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer";
import addressReducer from "./addressReducer";
import pastOrdersReducer from "./pastOrdersReducer";

const reducers = combineReducers({
  amount: amountReducer,
  auth: authReducer,
  address: addressReducer,
  menu: menuReducer,
  cart: cartReducer,
  order: orderReducer,
  pastOrders: pastOrdersReducer,
});
export default reducers;
