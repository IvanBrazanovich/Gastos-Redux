import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../app/slices/gastosSlice";
import styles from "../styles/componentes/listadogasto.module.scss";

const FiltrarGastos = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <form onChange={(e) => handleChange(e)} className={styles.filtrar}>
      <label>Filtrar Gastos</label>
      <select name="filtros" id="filtros">
        <option value="">-- Todas las categorias --</option>
        <option value="casa">Casa</option>
        <option value="comida">Comida</option>
        <option value="gastos">Gastos</option>
        <option value="salud">Salud</option>
        <option value="ocio">Ocio</option>
        <option value="suscripciones">Suscripciones</option>
        <option value="ahorro">Ahorro</option>
      </select>
    </form>
  );
};

export default FiltrarGastos;
