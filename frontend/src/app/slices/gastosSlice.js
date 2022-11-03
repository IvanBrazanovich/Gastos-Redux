import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  presupuesto: 0,
  showModal: false,
  gastos: [],
  edit: {},
  filter: "",
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
    editGasto: (state, action) => {
      state.edit = action.payload;
    },
    setEdit: (state, action) => {
      state.gastos = state.gastos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteGasto: (state, action) => {
      state.gastos = state.gastos.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  setEdit,
  editGasto,
  deleteGasto,
  savePresupuesto,
  setFilter,
  changeModal,
  addGasto,
} = gastosSlice.actions;

export default gastosSlice.reducer;
