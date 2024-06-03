import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import StudentSectionList from "./StudentSectionList";
function StudentSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  
  const navigate = useNavigate ();
  const location = useLocation();
  const { classId, sectionId } = location.state;

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#0d192f]" : "bg-white"
      } min-h-screen flex justify-center  py-4 px-3`}
    >
      <div
        className={`${
          isDarkMode
            ? "bg-[#152f54] bg-opacity-40"
            : "bg-[#b9d7f1] bg-opacity-30"
        } flex flex-col max-w-full mx-auto p-6 w-[90%]`}
      >
        <div className="mb-4 flex">
          <div className="border border-red-500 inline-block bg-white">
            <button
              className={`${
                isDarkMode ? "bg-[#152f54]" : "bg-white"
              } text-red-500 font-bold p-2 `}
            >
              <div
                onClick={() =>
                  navigate("/register-student", {
                    state: { classId, sectionId },
                  })
                }
                className="text-red-500 no-underline"
              >
                + new Student
              </div>
            </button>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-[#0d192f]" : "bg-white"
          }  shadow-md rounded-lg p-5`}
        >
          <StudentSectionList sectionId={sectionId} />
          <div className="flex justify-end">
            <button
              className=" mt-4 bg-blue-950 w-36 hover:bg-blue-900 text-white py-2 px-4 rounded-full"
              onClick={() => alert("Support")}
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSection;
