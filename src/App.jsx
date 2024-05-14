import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TeacherPage from "./components/TeacherPage";

import Login from "./pages/Login";
import Class from "./components/class";

// import StudentPage from './components/StudentPage';
// import ClassroomPage from './components/ClassroomPage';
// import Update from './components/Update';
// import Profile from './components/Profile';
// import LoginSignup from './components/LoginSignup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/classroom" element={<Class/>} />
          {/* <Route path = "/" element = {<Home />} />
          <Route path="/student" element={<StudentPage />} />
          {/* 
          <Route path="/classroom" element={<ClassroomPage />} />
          <Route path="/Updates" element={<Update />} />
          <Route path="/Profile" element={<Profile/>} /> 
          <Route path="/LoginPage" element={<LoginSignup/>} />
           */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
