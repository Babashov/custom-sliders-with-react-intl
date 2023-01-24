import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import { SliderProvider } from './context/SliderProvider';

function App() {
  return (
    <div className="App">
      <SliderProvider>
        <Header/>
        <Slider/>
      </SliderProvider>
    </div>
  );
}

export default App;
