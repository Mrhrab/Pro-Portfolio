import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Pages/Header/Header';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
