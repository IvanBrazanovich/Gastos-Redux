import React from "react";
import styles from "../styles/componentes/listadogasto.module.scss";

const FiltrarGastos = () => {
  return (
    <form className={styles.filtrar}>
      <label>Filtrar Gastos</label>
      <select name="filtros" id="filtros">
        <option value="">-- Todas las categorias --</option>
      </select>
    </form>
  );
};

export default FiltrarGastos;
