import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './Pages/Home/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
