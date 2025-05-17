import { configureStore } from "@reduxjs/toolkit";
import uislice from "./UI_slice";
import cartslice from "./cart_slice";

const store = configureStore({
  reducer: { ui: uislice.reducer, cart: cartslice.reducer },
});
export default store;
