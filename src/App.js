import logo from './logo.svg';
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Map from './components/Map';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Map/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
