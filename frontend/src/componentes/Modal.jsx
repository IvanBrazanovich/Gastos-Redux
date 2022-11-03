import React from "react";
import { useState } from "react";
import styles from "../styles/componentes/modal.module.scss";
import Mensaje from "./Mensaje";
import { addGasto, changeModal } from "../app/slices/gastosSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  //STATES
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  //Dispatch
  const dispatch = useDispatch();

  //Funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [categoria, nombre].map((item) => item.trim("")).includes("") ||
      cantidad <= 0
    ) {
      setError(true);
      return;
    }

    setError(false);

    dispatch(changeModal(false));
    dispatch(addGasto({ nombre, cantidad, categoria, id: Date.now() }));
  };

  return (
    <section className={styles.modal}>
      <div className={styles.form__wrapper}>
        <h2>Nuevo Gasto</h2>
        <form onSubmit={handleSubmit}>
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
            onChange={(e) => setCategoria(e.target.value)}
            name="categoria"
            id="categoria"
          >
            <option value="">--Seleccione--</option>
            <option value="casa">Casa</option>
            <option value="comida">Comida</option>
            <option value="gastos">Gastos</option>
            <option value="salud">Salud</option>
            <option value="ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="ahorro">Ahorro</option>
          </select>

          <button type="submit">Añadir Gasto</button>
          {error ? (
            <Mensaje>
              Todos los campos son obligatorios y la cantidad debe ser mayor a 0
            </Mensaje>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default Modal;
