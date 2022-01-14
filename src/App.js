import './styles/globals.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/index"
import About from "./pages/about"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NotFound from "./pages/404"
import Image from "./pages/image"
import Upload from "./pages/upload"
import Login from "./pages/login"
import Logout from "./pages/logout"
import { PrivateRoute } from './components/PrivateRoute';
import AuthService from './services/auth.service';

function App() {
  const auth = AuthService.getCurrentUser()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<Image />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<PrivateRoute />}>
          <Route path="/upload" element={<Upload />}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} /> 
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
