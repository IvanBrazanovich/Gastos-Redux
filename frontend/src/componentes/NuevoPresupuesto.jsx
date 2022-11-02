import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { savePresupuesto } from "../app/slices/gastosSlice";
import styles from "../styles/componentes/nuevopresupuesto.module.scss";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [error, setError] = useState(false);

  //Redux
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (presupuesto <= 0) {
      setError(true);
      return;
    }

    //If good delete mensaje
    setError(false);

    //Guardar el presupuesto
    console.log("Pasó");
    dispatch(savePresupuesto(presupuesto));
  };

  return (
    <section className={styles.nuevo}>
      {error ? <Mensaje>El presupuesto no es válido</Mensaje> : null}
      <h3 className={styles.nuevo__title}>Definir Presupuesto</h3>
      <form className={styles.nuevo__form}>
        <input
          type="number"
          value={presupuesto}
          onChange={(e) => setPresupuesto(Number(e.target.value))}
        />
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Añadir
        </button>
      </form>
    </section>
  );
};

export default NuevoPresupuesto;
