import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  presupuesto: 0,
  showModal: false,
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
    changeModal: (state, action) => {
      state.showModal = action.payload;
    },
    addGasto: (state, action) => {
      state.gastos = [...state.gastos, action.payload];
    },
  },
});

export const { savePresupuesto, changeModal, addGasto } = gastosSlice.actions;

export default gastosSlice.reducer;
