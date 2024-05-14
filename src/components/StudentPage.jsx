import { useState } from "react";
import { Link } from "react-router-dom";
import nostudent from "../assets/nostudent.png";

function TeacherPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="bg-white min-h-screen flex justify-center  h-35rem py-4 px-3">
      <div className="flex flex-col max-w-full max-h-full h-[90%] mx-auto px-16 py-6 bg-[#b9d7f1] bg-opacity-30 w-[90%]">
        <div className="mb-4 flex">
          <div className="border border-red-500 inline-block bg-white">
            <button className="bg-white text-red-500 font-bold py-2 px-2 ">
              <Link to="/TeacherForm" className="text-red-500 no-underline">
                + new Teacher
              </Link>
            </button>
            <button
              className="bg-red-500 text-white h-full font-bold py-2 px-4 "
              onClick={() => alert("Import CSV")}
            >
              Import CSV
            </button>
          </div>
        </div>
        <div className="mb-4 flex  items-center">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 w-40 rounded-md"
            onClick={() => alert("Add filter")}
          >
            Add filter ▼
          </button>
          <input
            type="text"
            placeholder="Search here..."
            className="py-2 px-4 ml-4 rounded-md w-full bg-white border border-gray-300 shadow-sm"
          />
          <button
            className="bg-blue-950  text-white hover:text-blue-950  hover:bg-white
             py-2 px-4 ml-2 w-40 text-lg rounded-md"
            onClick={() => alert("Add Search")}
          >
            Search
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 h-96">
          <div className="flex flex-col items-center justify-center text-center">
            <img src={nostudent} className="mb-4 size-52" />
            <p className="text-2xl font-bold text-blue-950">
              No Student at this time
            </p>
            <p className="text-blue-950 text-sm">
              Student will be appear here after they enroll in your School
            </p>
          </div>
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

export default TeacherPage;
