import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transformCurrency } from "../helpers/helper";
import styles from "../styles/componentes/control.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { resetearApp, savePresupuesto } from "../app/slices/gastosSlice";

const ControlPresupuesto = () => {
  const [gastado, setGastado] = useState(0);
  const [percentage, setPercentage] = useState(0);
  //Redux
  const presupuesto = useSelector((state) => state.gastos.presupuesto) || 0;
  const gastos = useSelector((state) => state.gastos.gastos);

  //Redux
  const dispatch = useDispatch();

  useEffect(() => {
    const calcularGastos = () => {
      const gastadoCal =
        gastos?.reduce((total, item) => item.cantidad + total, 0) || 0;
      const per = (gastadoCal * 100) / presupuesto;
      setPercentage(per);
      setGastado(gastadoCal);
    };

    calcularGastos();
  }, [gastos]);

  return (
    <section className={styles.control}>
      <div className={styles.progressbar}>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: `${percentage < 100 ? "#1d4ed8" : "#dc2626"}`,
            textColor: `${percentage < 100 ? "#1d4ed8" : "#dc2626"}`,
            pathTransitionDuration: 1,
          })}
          value={percentage}
          text={`${percentage.toFixed(2)}%`}
        />
        ;
      </div>

      <div className={styles.control__control}>
        <button
          onClick={() => {
            dispatch(resetearApp());
            dispatch(savePresupuesto(0));
          }}
        >
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span>
          {transformCurrency(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {transformCurrency(presupuesto - gastado)}
        </p>
        <p>
          <span>Gastado: </span>
          {transformCurrency(gastado)}
        </p>
      </div>
    </section>
  );
};

export default ControlPresupuesto;
