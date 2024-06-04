import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Teacherlist from "./Teacherlist";

function TeacherPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const[teachers, setTeachers] = useState([]);

  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  const fetchTeachers = async()=>{
    try {
      
    } catch (error) {
      
    }
  }
  useEffect(()=>{

  },[])
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#0d192f]" : "bg-white"
      }  flex justify-center  py-4 px-3`}
    >
      <div
        className={`${
          isDarkMode
            ? "bg-[#152f54] bg-opacity-40"
            : "bg-[#b9d7f1] bg-opacity-30"
        } flex flex-col max-w-full  mx-auto p-6 h-full  w-[90%]`}
      >
        <div className="mb-4 flex">
          <div className="border border-red-500 inline-block h-full bg-white">
            <button
              className={`${
                isDarkMode ? "bg-[#152f54]" : "bg-white"
              } text-[#ed0c57] font-bold  p-2 `}
            >
              <Link
                to="/register-teacher"
                className="text-red-500 no-underline"
              >
                + new Teacher
              </Link>
            </button>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-[#0d192f]" : "bg-white"
          } shadow-md rounded-lg p-5`}
        >
          <Teacherlist />
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;