import React from "react";
import styles from "../styles/componentes/mensaje.module.scss";

const Mensaje = ({ children }) => {
  return <div className={styles.mensaje}>{children}</div>;
};

export default Mensaje;
