import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
  name: "ui",
  initialState: { iscartvisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.iscartvisible = !state.iscartvisible;
    },
    shownotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const Uiactions = uislice.actions;
export default uislice;
