import style from "../style/App.module.css";
import Navbar from "./navbar.jsx";
import Catalog from "./catalog.jsx";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Catalog />
    </div>
  );
}

export default App;
