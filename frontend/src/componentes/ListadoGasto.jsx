import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGastos } from "../app/slices/gastosSlice";
import styles from "../styles/componentes/listadogasto.module.scss";
import Gasto from "./Gasto";

const ListadoGasto = () => {
  const gastos = useSelector((state) => state.gastos.gastos) || [];
  const filter = useSelector((state) => state.gastos.filter);
  const [gastosArr, setGastosArr] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (filter && filter !== "") {
      const arr = gastos?.filter((item) => item.categoria === filter);
      setGastosArr(arr);
    } else {
      setGastosArr(gastos);
    }
  }, [filter, gastos]);

  useEffect(() => {
    dispatch(getGastos());
  }, []);

  return (
    <section className={styles.listado}>
      <h3>{gastosArr?.length > 0 ? "Gastos" : "No hay gastos aún"}</h3>

      <div className={styles.listado__listadoWrapper}>
        {gastosArr?.length > 0
          ? gastosArr?.map((gasto) => {
              return <Gasto key={gasto.id} gasto={gasto} />;
            })
          : null}
      </div>
    </section>
  );
};

export default ListadoGasto;
