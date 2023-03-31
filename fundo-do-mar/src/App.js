import Cabecalho from "./componentes/Cabecalho/Index";
import styles from './App.module.scss'
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";

function App() {
  return (
    <div className={styles.App}>
      <Cabecalho/>
      <Banner/>
      <Galeria/>
    </div>
  );
}

export default App;
