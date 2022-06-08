import './App.scss';
import LateralMenu from './components/LateralMenu/LateralMenu.jsx';
import Footer from './components/Footer/Footer.jsx';
import Portada from './components/Portada/Portada.jsx';
import DarkMode from './components/DarkMode/DarkMode.jsx';


function App() {
  return (
    <div className="app">
    <DarkMode/>
    <LateralMenu />
    <Portada />
    <Footer />
    </div>
  );
}

export default App;
