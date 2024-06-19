import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import plus from "../assets/plus.png";
import pen from "../assets/pen.png";
import remove from "../assets/remove.png";
import { button } from "@material-tailwind/react";
import { axiosClient } from "../services/axiosClient";
import toast, { Toaster } from "react-hot-toast";
export default function Teacher() {
  const [teachers, setTeachers] = useState([
    { rollNo: 1, firstname: "", lastname: "", phone: "" },
  ]);
  const [validationError, setValidationError] = useState(false);
  const [editRollNo, setEditRollNo] = useState(null);
  const [rollNumberCounter, setRollNumberCounter] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const registerTeacher = async () => {
    const lastTeacher = teachers[teachers.length - 1];
    if (
      lastTeacher.firstname.trim() === "" ||
      lastTeacher.lastname.trim() === "" ||
      lastTeacher.phone.trim() === ""
    ) {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    setTeachers([
      ...teachers,
      { rollNo: rollNumberCounter, firstname: "", lastname: "", phone: "" },
    ]);
    // try {
    // console.log(teachers);
    // const response = await axiosClient.post("/teacher/register", {
    //   firstname: teachers.firstname,
    //   lastname: teachers.lastname,
    //   phone: teachers.phone,
    // });
    // console.log(response);
    // toast.success(<b>register Successfully</b>);
    // setTimeout(() => {
    //   navigate("/teacher");
    // }, 2000);
    // } catch (error) {
    //   console.error("Error:", error);
    //   toast.error(<b>{error}</b>);
    // }
    setRollNumberCounter(rollNumberCounter + 1);
    setEditRollNo(rollNumberCounter);
  };

  const handleInputChange = (rollNo, field, value) => {
    const newTeachers = teachers.map((teacher) =>
      teacher.rollNo === rollNo ? { ...teacher, [field]: value } : teacher
    );
    setTeachers(newTeachers);
  };

  const handleEdit = (rollNo) => {
    setEditRollNo(rollNo);
  };

  const handleSave = () => {
    setEditRollNo(null);
  };

  const handleDelete = (rollNo) => {
    const newTeachers = teachers.filter((teacher) => teacher.rollNo !== rollNo);
    const updatedTeachers = newTeachers.map((teacher, i) => ({
      ...teacher,
      rollNo: i + 1,
    }));
    setTeachers(updatedTeachers);
    setRollNumberCounter(updatedTeachers.length + 1);
    setEditRollNo(null);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.phone.includes(searchQuery)
  );

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#0D192F] text-white" : "bg-white text-gray-900"
      } h-screen m-3`}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="px-5">
        <div className="text-3xl px-5 py-3">Teacher Setup</div>
        <div className="p-3">
          <div className="flex justify-between w-full">
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={handleSearchInputChange} // Update search input change handler
              ref={searchInputRef} // Attach ref to search input
              className={`${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } px-3 rounded-md focus:outline-none border border-black w-full`}
              onFocus={() => searchInputRef.current.focus()} // Ensure focus on the search input
            />
            <button
              className={`bg-${
                isDarkMode ? "red-900" : "red-100"
              } bg-[#2f0d0d] text-white hover:text-blue-950 hover:bg-white hover:border-2 hover:border-red-950 py-1 px-4 ml-2 w-40 text-lg rounded-md`}
              onClick={() => {
                setSearchQuery("");
                searchInputRef.current.focus(); // Focus the search input when cleared
              }}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="overflow-x-auto mt-6">
          <table
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } min-w-full shadow-md rounded-lg overflow-hidden`}
          >
            <thead
              className={`${
                isDarkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-indigo-900"
              } text-base font-medium`}
            >
              <tr>
                <th className="px-4 py-2 border border-gray-400">S.No.</th>
                <th className="px-4 py-2 border border-gray-400">First Name</th>
                <th className="px-4 py-2 border border-gray-400">Last Name</th>
                <th className="px-4 py-2 border border-gray-400">Phone</th>
                <th className=" py-2 border border-gray-400">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-900">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.rollNo}>
                  <td
                    className={`${
                      isDarkMode ? "text-white" : ""
                    } px-4 py-2 border border-gray-400`}
                  >
                    {teacher.rollNo}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={teacher.firstname}
                      onChange={(e) =>
                        handleInputChange(
                          teacher.rollNo,
                          "firstname",
                          e.target.value
                        )
                      }
                      placeholder="Enter First Name"
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={
                        editRollNo !== teacher.rollNo &&
                        teacher.rollNo !== rollNumberCounter - 1
                      }
                      autoFocus={editRollNo === teacher.rollNo}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={teacher.lastname}
                      onChange={(e) =>
                        handleInputChange(
                          teacher.rollNo,
                          "lastname",
                          e.target.value
                        )
                      }
                      placeholder="Enter Last Name"
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={
                        editRollNo !== teacher.rollNo &&
                        teacher.rollNo !== rollNumberCounter - 1
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={teacher.phone}
                      onChange={(e) =>
                        handleInputChange(
                          teacher.rollNo,
                          "phone",
                          e.target.value
                        )
                      }
                      placeholder="Enter Phone Number"
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={
                        editRollNo !== teacher.rollNo &&
                        teacher.rollNo !== rollNumberCounter - 1
                      }
                    />
                  </td>
                  <td className=" py-2 border border-gray-400">
                    {teacher.rollNo !== rollNumberCounter - 1 && (
                      <>
                        {editRollNo === teacher.rollNo ? (
                          // <div className="flex justify-evenly">
                          //   <button onClick={handleSave}>
                          //     <img src={plus} alt="plus" className="size-6" />
                          //   </button>
                          // </div>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md w-full h-full"
                            onClick={handleSave}
                          >
                            Save
                          </button>
                        ) : (
                          <div className="flex gap-2 justify-evenly">
                            {/* <button onClick={() => handleEdit(teacher.rollNo)}>
                              <img src={pen} alt="pen" className="size-6" />
                            </button> */}
                            {/* <button
                              onClick={() => handleDelete(teacher.rollNo)}
                            >
                              <img
                                src={remove}
                                alt="remove"
                                className="size-6"
                              />
                            </button> */}
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md w-full h-full"
                              onClick={() => handleEdit(teacher.rollNo)}
                            >
                              Edit
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-md w-full h-full"
                              onClick={() => handleDelete(teacher.rollNo)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </>
                    )}
                    {teacher.rollNo === rollNumberCounter - 1 && (
                      // <div className="flex justify-evenly">
                      //   <button onClick={registerTeacher}>
                      //     <img src={plus} alt="plus" className="size-6" />
                      //   </button>
                      // </div>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded-md w-full h-full"
                        onClick={registerTeacher}
                      >
                        Add Row
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {validationError && (
          <div className="text-red-500 text-center mt-4">
            All fields must be filled out before adding a new row.
          </div>
        )}
      </div>
    </div>
  );
}
