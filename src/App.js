import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ContactMe from './Pages/ContactMe/ContactMe';
import AboutMe from './Pages/AboutMe/AboutMe';
import BiBikeDetails from './Pages/Home/Details/BiBikeDetails';
import WeatherApp from './Pages/Home/Details/WeatherApp';
import MacbookCart from './Pages/Home/Details/MacbookCart';
import Blogs from './Pages/Blogs/Blogs';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contactMe" element={<ContactMe />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/biBikeDetails" element={<BiBikeDetails />} />
      <Route path="/weatherApp" element={<WeatherApp />} />
      <Route path="/macbookCart" element={<MacbookCart />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
