import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import NotRequireUser from "./components/NotRequireUser";
import RequireUser from "./components/RequireUser";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <>
        <Routes>
          <Route element={<RequireUser/>}>
            <Route path="/" element={<Home/>}>
              <Route path="/" element={<DashBoard/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Route>
          </Route>

          <Route element={<NotRequireUser/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Route>
          
        </Routes>
    </>
  );
}

export default App;
