import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  presupuesto: 0,
  showModal: false,
  gastos: [],
  edit: {},
  filter: "",
};

export const postGasto = createAsyncThunk("gastos/postGasto", async (gasto) => {
  const respuesta = await fetch("http://localhost:4000/gastos", {
    method: "POST",
    body: JSON.stringify(gasto),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await respuesta.json();

  return res;
});

export const resetearApp = createAsyncThunk("gastos/resetearApp", async () => {
  const respuesta = await fetch("http://localhost:4000/gastosall", {
    method: "DELETE",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await respuesta.json();

  return res;
});

export const getGastos = createAsyncThunk("gastos/getGastos", async () => {
  const respuesta = await fetch("http://localhost:4000/gastos");
  const res = await respuesta.json();

  return res;
});

export const deleteGasto = createAsyncThunk(
  "gastos/deleteGasto",
  async (gasto) => {
    const respuesta = await fetch("http://localhost:4000/gastos", {
      method: "DELETE",
      body: JSON.stringify(gasto),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await respuesta.json();

    return res;
  }
);

export const setEditado = createAsyncThunk(
  "gastos/setEditado",
  async (gasto) => {
    const respuesta = await fetch("http://localhost:4000/gastos", {
      method: "PUT",
      body: JSON.stringify(gasto),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await respuesta.json();
    return res;
  }
);

const gastosSlice = createSlice({
  name: "gastos",
  initialState,
  reducers: {
    savePresupuesto: (state, action) => {
      state.presupuesto = action.payload;
    },
    changeModal: (state, action) => {
      state.showModal = action.payload;
    },
    editGasto: (state, action) => {
      state.edit = action.payload;
    },
    deleteGasto: (state, action) => {},
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postGasto.fulfilled, (state, action) => {
        state.gastos = [...state.gastos, action.payload];
      })
      .addCase(setEditado.fulfilled, (state, action) => {
        state.gastos = state.gastos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(setEditado.rejected, (state, action) => {})
      .addCase(deleteGasto.fulfilled, (state, action) => {
        state.gastos = state.gastos.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(getGastos.fulfilled, (state, action) => {
        state.gastos = action.payload;
      });
  },
});

export const { editGasto, savePresupuesto, setFilter, changeModal, addGasto } =
  gastosSlice.actions;

export default gastosSlice.reducer;
