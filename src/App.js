import './styles/globals.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/index"
import About from "./pages/about"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NotFound from "./pages/404"
import Image from "./pages/image"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<Image />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <Header /> 
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
