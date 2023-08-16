
import './App.css';
import City from './components/City';
import CityClass from './components/CityClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h6>Функціональна компонента</h6>
        <City/>
        <h6>Класова компонента</h6>
        <CityClass/>
      </header>
    </div>
  );
}

export default App;
