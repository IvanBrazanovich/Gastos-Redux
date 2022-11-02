import React from "react";
import styles from "../styles/componentes/control.module.scss";

const ControlPresupuesto = () => {
  return (
    <section className={styles.control}>
      <div className={styles.progressbar}>
        <h2>Hola</h2>
      </div>

      <div className={styles.control__control}>
        <button>Resetear App</button>
        <p>
          <span>Presupuesto:</span> $200
        </p>
        <p>
          <span>Disponible:</span> $200
        </p>
        <p>
          <span>Gastado:</span> $200
        </p>
      </div>
    </section>
  );
};

export default ControlPresupuesto;
