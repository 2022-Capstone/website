import './App.css';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom"

import NotFound from "./Pages/NotFound.js";
import Home from "./Pages/Home.js";
import Features from "./Pages/Features";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
    </div>
  );
}

export default App;
