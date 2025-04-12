import style from "../style/App.module.css";
import Navbar from "./Navbar.jsx";
import Catalog from "./home/Catalog.jsx";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Catalog />
    </div>
  );
}

export default App;
