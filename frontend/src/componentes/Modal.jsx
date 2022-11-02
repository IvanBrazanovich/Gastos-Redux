import React from "react";
import { useState } from "react";
import styles from "../styles/componentes/modal.module.scss";

const Modal = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");

  return (
    <section className={styles.modal}>
      <div className={styles.form__wrapper}>
        <h2>Nuevo Gasto</h2>
        <form>
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label htmlFor="cantidad">Cantidad</label>
          <input
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            type="number"
            name="cantidad"
            id="cantidad"
            placeholder="Añade la cantidad del gasto: ej: 300"
          />

          <label htmlFor="categoria">Categoría</label>
          <select
            value={categoria}
            onClick={(e) => setCategoria(e.target.value)}
            name="categoria"
            id="categoria"
          >
            <option value="">-- Seleccione --</option>
          </select>

          <button>Añadir Gasto</button>
        </form>
      </div>
    </section>
  );
};

export default Modal;
