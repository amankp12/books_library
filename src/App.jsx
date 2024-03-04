import FantasyBooks from './components/FantasyBooks';
import FictionBooks from './components/FictionBooks';
import NonFictonBooks from './components/NonFictonBooks';
import './App.css'

function App() {
  return (
    <div className = 'app'>
      <FictionBooks />
      <NonFictonBooks />
      <FantasyBooks />
    </div>
    );
}

export default App;