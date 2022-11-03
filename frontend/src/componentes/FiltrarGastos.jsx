import React from "react";
import styles from "../styles/componentes/listadogasto.module.scss";

const FiltrarGastos = () => {
  return (
    <form className={styles.filtrar}>
      <label>Filtrar Gastos</label>
      <select name="filtros" id="filtros">
        <option value="">-- Todas las categorias --</option>
        <option value="">--Seleccione--</option>
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
