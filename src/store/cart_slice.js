import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    itemquantity: 0,
    changed: false,
  },
  reducers: {
    replacecart(state, action) {
      state.itemquantity = Number(action.payload.itemquantity) || 0;
      state.items = action.payload.items || [];
    },
    additemtocart(state, action) {
      console.log("Dispatched payload:", action.payload);

      const newItem = action.payload;
      const existingitem = state.items.find((item) => item.id === newItem.id);
      console.log("Adding item:", newItem.id, "Existing item:", existingitem);
      if (!existingitem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingitem.quantity++;
        existingitem.totalprice = existingitem.totalprice + newItem.price;
      }
      state.itemquantity++;
      state.changed = true;
    },
    removeitemfromcart(state, action) {
      console.log("Dispatched payload:", action.payload);
      state.changed = true;
      const id = action.payload;

      const existingitem = state.items.find((item) => item.id === id);
      state.itemquantity--;
      if (!existingitem) return;
      if (existingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id != id);
      } else {
        existingitem.quantity--;
        existingitem.totalprice = existingitem.totalprice - existingitem.price;
      }
    },
  },
});

export const cartactions = cartslice.actions;
export default cartslice;
