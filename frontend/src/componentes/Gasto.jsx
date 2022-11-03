import React from "react";
import styles from "../styles/componentes/listadogasto.module.scss";
import casaImg from "../img/icono_casa.svg";
import comidaImg from "../img/icono_comida.svg";
import gastosImg from "../img/icono_gastos.svg";
import ahorroImg from "../img/icono_ahorro.svg";
import ocioImg from "../img/icono_ocio.svg";
import saludImg from "../img/icono_salud.svg";
import suscripcionesImg from "../img/icono_suscripciones.svg";
import { transformDate } from "../helpers/helper";

const Gasto = ({ gasto }) => {
  //Destructuring
  const { nombre, categoria, cantidad, id } = gasto;
  console.log(id);

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
        <button type="editar">Editar</button>
        <button type="eliminar">Eliminar</button>
      </div>
    </div>
  );
};

export default Gasto;
