import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TeacherPage from "./components/TeacherPage";
import Events from "./components/Event";
import GuestLogin from "./pages/Login";
// import StudentPage from './components/StudentPage';
// import ClassroomPage from './components/ClassroomPage';
// import Update from './components/Update';
// import Profile from './components/Profile';
// import LoginSignup from './components/LoginSignup';
// import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/event" element={<Events />} />
         
          {/* <Route path = "/" element = {<Home />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/classroom" element={<ClassroomPage />} />
          <Route path="/Updates" element={<Update />} />
          <Route path="/Profile" element={<Profile/>} /> 
          <Route path="/LoginPage" element={<LoginSignup/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
