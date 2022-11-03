import React from "react";
import { memo } from "react";
import styles from "../styles/componentes/listadogasto.module.scss";
import casaImg from "../img/icono_casa.svg";
import comidaImg from "../img/icono_comida.svg";
import gastosImg from "../img/icono_gastos.svg";
import ahorroImg from "../img/icono_ahorro.svg";
import ocioImg from "../img/icono_ocio.svg";
import saludImg from "../img/icono_salud.svg";
import suscripcionesImg from "../img/icono_suscripciones.svg";
import { editGasto, deleteGasto, changeModal } from "../app/slices/gastosSlice";
import { useDispatch } from "react-redux";
import { transformDate } from "../helpers/helper";

const Gasto = ({ gasto }) => {
  console.log("Se re-renderiza el gasto:", gasto.nombre);

  //Destructuring
  const { nombre, categoria, cantidad, id } = gasto;

  //Redux
  const dispatch = useDispatch();

  //Crear diccionario
  const diccionario = {
    casa: casaImg,
    ahorro: ahorroImg,
    comida: comidaImg,
    gastos: gastosImg,
    ahorro: ahorroImg,
    ocio: ocioImg,
    salud: saludImg,
    suscripciones: suscripcionesImg,
  };

  return (
    <div className={styles.gasto}>
      <div className={styles.gasto__imgWrapper}>
        <img
          className={styles.gasto__img}
          src={diccionario[categoria]}
          alt=""
        />
      </div>

      <div className={styles.infoWrapper}>
        <p className={styles.infoWrapper__categoria}>{categoria}</p>
        <p className={styles.infoWrapper__nombre}>{nombre}</p>
        <p className={styles.infoWrapper__cantidad}>$ {cantidad}</p>
        <p className={styles.infoWrapper__fecha}>
          <span>Agregado el:</span> {transformDate(id)}
        </p>
      </div>

      <div className={styles.gasto__buttonWrapper}>
        <button
          onClick={(e) => {
            dispatch(editGasto(gasto));
            dispatch(changeModal(true));
          }}
          type="editar"
        >
          Editar
        </button>
        <button onClick={(e) => dispatch(deleteGasto(gasto))} type="eliminar">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default memo(Gasto);
