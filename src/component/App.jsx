import appCSS from '../style/App.module.css';
import Navbar from './navbar.jsx';

function App() {
  return (
    <div className={appCSS.app}>
      <Navbar />
    </div>
  )
}

export default App
