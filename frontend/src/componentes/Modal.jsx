import React from "react";
import { useState } from "react";
import styles from "../styles/componentes/modal.module.scss";
import Mensaje from "./Mensaje";
import {
  addGasto,
  changeModal,
  editGasto,
  setEdit,
} from "../app/slices/gastosSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import cerrarImg from "../img/cerrar.svg";

const Modal = () => {
  //STATES
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  //Redux
  const dispatch = useDispatch();
  const editObj = useSelector((state) => state.gastos.edit);

  //Check if editObj
  useEffect(() => {
    if (editObj?.id) {
      setNombre(editObj.nombre);
      setCantidad(editObj.cantidad);
      setCategoria(editObj.categoria);
    }
  }, [editObj]);

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

    //See if editing mode
    if (editObj?.id) {
      dispatch(setEdit({ nombre, cantidad, categoria, id: editObj.id }));
      dispatch(editGasto({}));
    } else {
      dispatch(addGasto({ nombre, cantidad, categoria, id: Date.now() }));
    }

    dispatch(changeModal(false));

    //Clean input
    setNombre("");
    setCantidad(0);
    setCategoria("");
  };

  return (
    <section className={styles.modal}>
      <div className={styles.cerrar}>
        <img
          src={cerrarImg}
          onClick={(e) => {
            dispatch(changeModal(false));
          }}
          alt=""
        />
      </div>
      <div>
        <img src={cerrarImg} alt="" />
      </div>
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

          <button type="submit">
            {" "}
            {editObj?.id ? "Editar Gasto" : "Añadir Gasto"}{" "}
          </button>
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
