import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/componentes/listadogasto.module.scss";
import Gasto from "./Gasto";

const ListadoGasto = () => {
  const gastos = useSelector((state) => state.gastos.gastos) || [];

  return (
    <section className={styles.listado}>
      <h3>No hay gastos aún</h3>

      <div className={styles.listado__listadoWrapper}>
        {gastos?.length > 0
          ? gastos?.map((gasto) => {
              return <Gasto key={gasto.id} gasto={gasto} />;
            })
          : null}
      </div>
    </section>
  );
};

export default ListadoGasto;
