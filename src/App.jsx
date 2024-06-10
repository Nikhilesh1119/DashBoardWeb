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
import Addsection from "./components/Addsection";
import Studentlist from "./components/Studentlist";
import StudentSection from "./components/StudentSection";
import { useSelector } from "react-redux";
import ParentRegister from "./components/ParentRegister";

function App() {
  const role = useSelector((state) => state.appAuth.role);

  return (
    <>
      <Routes>
        <Route element={<RequireUser />}>
          <Route path="/" element={<Home />}>
            {role === "teacher" ? (
              <>
                <Route path="" element={<DashBoard />} />
                <Route
                  path="student-section"
                  element={<StudentSection />}
                />
                
                <Route path="register-parent" element={<ParentRegister/>} />
                 <Route
                  path="register-student"
                  element={<StudentRegister />}
                />
                <Route path="event" element={<Event />} />
                <Route path="register-parent" element={<ParentRegister/>} />
              </>
            ) : (
              <>
                <Route path="" element={<DashBoard />} />
                <Route path="student-list" element={<Studentlist />} />
                <Route path="student" element={<StudentPage />} />
                <Route
                  path="register-student"
                  element={<StudentRegister />}
                />
                
                <Route path="register-parent" element={<ParentRegister/>} />
                <Route path="teacher" element={<TeacherPage />} />
                <Route path="register-teacher" element={<RegisterTeacher />} />
                <Route path="class-setup" element={<ClassSetup />} />
                <Route path="event" element={<Event />} />
                <Route path="addsection/:id" element={<Addsection />} />
                <Route
                  path="student-section"
                  element={<StudentSection />}
                />
              </>
            )}
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

// import { Routes, Route, Navigate } from "react-router-dom";
// import DashBoard from "./components/DashBoard";
// import NotRequireUser from "./components/NotRequireUser";
// import RequireUser from "./components/RequireUser";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import StudentPage from "./components/Student";
// import ClassSetup from "./components/ClassSetup";
// import RegisterTeacher from "./components/TeacherRegister";
// import StudentRegister from "./components/StudentRegister";
// import TeacherPage from "./components/Teacher";
// import Event from "./components/Event";
// import Addsection from "./components/Addsection";
// import Studentlist from "./components/Studentlist";
// import StudentSection from "./components/StudentSection";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

// function App() {
//   const role = useSelector((state) => state.appAuth.role);
//   const sectionId = useSelector((state) => state.appAuth.section);
//   const classId = useSelector((state) => state.appAuth.class);

//   // console.log(role,sectionId,classId)
//   return (
//     <>
//       <Routes>
//         <Route element={<RequireUser />}>
//           <Route path="/" element={<Home />}>
//             <Route path="" element={<DashBoard />} />

//             {role === "teacher" ? (
//               <>
//                 <Route path="student" element={<StudentPage />} />
//                 <Route
//                   path="register-student/:classId/:sectionId"
//                   element={<StudentRegister />}
//                 />
//                 <Route
//                   path="student-section/:classId/:sectionId"
//                   element={<StudentSection />}
//                 />
//               </>
//             ) : (
//               <>
//                 <Route path="student" element={<StudentPage />} />
//                 <Route
//                   path="register-student/:classId/:sectionId"
//                   element={<StudentRegister />}
//                 />
//                 <Route
//                   path="student-section/:classId/:sectionId"
//                   element={<StudentSection />}
//                 />
//                 <Route path="student-list" element={<Studentlist />} />
//                 <Route path="event" element={<Event />} />
//                 <Route path="teacher" element={<TeacherPage />} />
//                 <Route path="register-teacher" element={<RegisterTeacher />} />
//                 <Route path="class-setup" element={<ClassSetup />} />
//                 <Route path="addsection/:id" element={<Addsection />} />
//               </>
//             )}

//             {/* Redirect if the role doesn't match any route */}
//             <Route path="*" element={<Navigate to="/" />} />
//           </Route>
//         </Route>

//         <Route element={<NotRequireUser />}>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;
