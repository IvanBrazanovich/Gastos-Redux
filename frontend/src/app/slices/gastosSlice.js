import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  presupuesto: 0,
  showModal: true,
  gastos: [],
};

const gastosSlice = createSlice({
  name: "gastos",
  initialState,
  reducers: {
    savePresupuesto: (state, action) => {
      state.presupuesto = action.payload;
      console.log(state.presupuesto);
    },
  },
});

export const { savePresupuesto } = gastosSlice.actions;

export default gastosSlice.reducer;
