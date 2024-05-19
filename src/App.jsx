import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import NotRequireUser from "./components/NotRequireUser";
import RequireUser from "./components/RequireUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentPage from "./components/Student";
import ClassSetup from "./components/ClassSetup";
import RegisterTeacher from "./components/TeacherRegister";
import StudentRegister from "./components/StudentRegister";
import TeacherPage from "./components/Teacher";
import Event from "./components/Event";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RequireUser />}>
          <Route path="/" element={<Home />}>
            <Route path="" element={<DashBoard />} />
            <Route path="student" element={<StudentPage />} />
            <Route path="register-student" element={<StudentRegister />} />
            <Route path="teacher" element={<TeacherPage />} />
            <Route path="register-teacher" element={<RegisterTeacher />} />
            <Route path="class-setup" element={<ClassSetup />} />
            <Route path="event" element={<Event />} />
          </Route>
        </Route>

        <Route element={<NotRequireUser />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
