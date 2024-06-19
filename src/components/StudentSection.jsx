import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const initialStudents = [
  {
    rollNo: 1,
    firstName: "",
    lastName: "",
    gender: "",
    guardianName: "",
    phone: "",
  },
];

const genders = ["Male", "Female", "Other"];

export default function StudentSection() {
  const role = useSelector((state) => state.appAuth.role);
  const [students, setStudents] = useState(initialStudents);
  const [validationError, setValidationError] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [rollNumberCounter, setRollNumberCounter] = useState(2);
  const location = useLocation();
  const { classId, sectionId, className, sectionName } = location.state;
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const handleAddRow = () => {
    const lastStudent = students[students.length - 1];
    if (
      lastStudent.firstName.trim() === "" ||
      lastStudent.lastName.trim() === "" ||
      lastStudent.gender.trim() === "" ||
      lastStudent.guardianName.trim() === "" ||
      lastStudent.phone.trim() === ""
    ) {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    setStudents([
      ...students,
      {
        rollNo: rollNumberCounter,
        firstName: "",
        lastName: "",
        gender: "",
        guardianName: "",
        phone: "",
      },
    ]);
    setRollNumberCounter(rollNumberCounter + 1);
    setEditIndex(students.length);
  };

  const handleInputChange = (index, field, value) => {
    const newStudents = [...students];
    newStudents[index][field] = value;
    setStudents(newStudents);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = () => {
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    const updatedStudents = newStudents.map((student, i) => ({
      ...student,
      rollNo: i + 1,
    }));
    setStudents(updatedStudents);
    setRollNumberCounter(updatedStudents.length + 1);
    setEditIndex(null);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#0D192F] text-white" : "bg-white text-gray-900"
      } h-screen m-3`}
    >
      <div className="px-5">
        <div className="flex justify-between">
          <div className="text-3xl px-5 py-3">Student Setup</div>
          {role === "teacher" ? (
            <div
              className={` ${
                isDarkMode ? "text-white" : ""
              } text-xl px-5 py-3 font-semibold text-gray-800`}
            >
              Class: {localStorage.getItem("class")} | Section:{" "}
              {localStorage.getItem("section")}
            </div>
          ) : (
            <div
              className={` ${
                isDarkMode ? "text-white" : ""
              } text-xl px-5 py-3 font-semibold text-gray-800`}
            >
              Class: {className} | Section: {sectionName}
            </div>
          )}
        </div>
        <div className="p-3">
          <div className="flex justify-between w-full">
            <input
              type="text"
              placeholder="Search here..."
              className={`${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } px-3 rounded-md focus:outline-none w-full`}
            />
            <button
              className={`bg-[#2f0d0d] text-white hover:text-blue-950 hover:bg-white hover:border-2 hover:border-red-950 py-1 px-4 ml-2 w-40 text-lg rounded-md`}
            >
              Clear
            </button>
            <button
              className={`bg-[#0d192f] text-white hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-950 py-1 px-4 ml-2 w-40 text-lg rounded-md`}
            >
              Search
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
                <th className="px-4 py-2 border border-gray-400">Roll No.</th>
                <th className="px-4 py-2 border border-gray-400">First Name</th>
                <th className="px-4 py-2 border border-gray-400">Last Name</th>
                <th className="px-4 py-2 border border-gray-400">Gender</th>
                <th className="px-4 py-2 border border-gray-400">
                  Guardian Name
                </th>
                <th className="px-4 py-2 border border-gray-400">Phone</th>
                <th className="px-4 py-2 border border-gray-400">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-900">
              {students.map((student, index) => (
                <tr key={index}>
                  <td
                    className={`${
                      isDarkMode ? "text-white" : ""
                    } px-4 py-2 border border-gray-400`}
                  >
                    {student.rollNo}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={student.firstName}
                      onChange={(e) =>
                        handleInputChange(index, "firstName", e.target.value)
                      }
                      placeholder="Enter First Name"
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={
                        editIndex !== index && index < students.length - 1
                      }
                      autoFocus={editIndex === index}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={student.lastName}
                      onChange={(e) =>
                        handleInputChange(index, "lastName", e.target.value)
                      }
                      placeholder="Enter Last Name"
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={
                        editIndex !== index && index < students.length - 1
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <select
                      value={student.gender}
                      onChange={(e) =>
                        handleInputChange(index, "gender", e.target.value)
                      }
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={
                        editIndex !== index && index < students.length - 1
                      }
                    >
                      <option value="">Gender</option>
                      {genders.map((gender) => (
                        <option key={gender} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={student.guardianName}
                      onChange={(e) =>
                        handleInputChange(index, "guardianName", e.target.value)
                      }
                      placeholder="Enter Guardian Name"
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={
                        editIndex !== index && index < students.length - 1
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={student.phone}
                      onChange={(e) =>
                        handleInputChange(index, "phone", e.target.value)
                      }
                      placeholder="Enter Phone Number"
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={
                        editIndex !== index && index < students.length - 1
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {index < students.length - 1 && (
                      <>
                        {editIndex === index ? (
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md w-full h-full"
                            onClick={handleSave}
                          >
                            Save
                          </button>
                        ) : (
                          <div className="flex gap-2">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md w-full h-full"
                              onClick={() => handleEdit(index)}
                            >
                              Edit
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-md w-full h-full"
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </>
                    )}
                    {index === students.length - 1 && (
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded-md w-full h-full"
                        onClick={handleAddRow}
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
