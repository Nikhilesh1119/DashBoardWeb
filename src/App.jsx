import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import NotRequireUser from "./components/NotRequireUser";
import RequireUser from "./components/RequireUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentPage from "./components/Student";
import TeacherPage from "./components/Teacher";
import ClassSetup from "./components/ClassSetup";
import RegisterTeacher from "./components/RegisterTeacher";


function App() {
  return (
    <>
        <Routes>
          <Route element={<RequireUser/>}>
            <Route path="/" element={<Home/>}>
              <Route path="" element={<DashBoard/>}/>
              <Route path="student" element={<StudentPage/>}/>
              <Route path="teacher" element={<RegisterTeacher/>}/>
              <Route path="class-setup" element={<ClassSetup/>}/>
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
