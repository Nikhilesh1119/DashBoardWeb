import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TeacherPage from "./components/TeacherPage";
import StudentPage from "./components/StudentPage";
import ClassSetup from "./components/ClassRoom";
import RegisterTeacher from "./components/TeacherRegisterPage";
import RegisterStudent from "./components/StudentRegisterPage";
import Event from "./components/Event";

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
          <Route path="/student" element={<StudentPage />} />
          <Route path="/classroom" element={<ClassSetup />} />
          <Route path="/teacherform" element={<RegisterTeacher />} />
          <Route path="/studentform" element={<RegisterStudent />} />
          <Route path="/Event" element={<Event />} />

          {/* 
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
