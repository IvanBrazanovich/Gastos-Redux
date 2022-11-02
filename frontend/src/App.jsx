import { useSelector } from "react-redux";
import NuevoPresupuesto from "./componentes/NuevoPresupuesto";
import ControlPresupuesto from "./componentes/ControlPresupuesto";
import ListadoGasto from "./componentes/ListadoGasto";
import styles from "./styles/componentes/app.module.scss";
import FiltrarGastos from "./componentes/FiltrarGastos";
import Modal from "./componentes/Modal";

function App() {
  const presupuesto = useSelector((state) => state.gastos.presupuesto);
  const showModal = useSelector((state) => state.gastos.showModal);

  return (
    <main className={styles.app}>
      <div className={styles.mainWrapper}>
        <h1 className={styles.app__mainTitle}>Planificador de Gastos</h1>

        {presupuesto === 0 ? <NuevoPresupuesto /> : null}
        {presupuesto && presupuesto !== 0 ? (
          <>
            <ControlPresupuesto />
            <FiltrarGastos />
            <ListadoGasto />
          </>
        ) : null}

        {showModal ? <Modal /> : null}
      </div>
    </main>
  );
}

export default App;
