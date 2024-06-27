import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { axiosClient } from "../services/axiosClient";
import toast, { Toaster } from "react-hot-toast";

export default function StudentSection() {
  const location = useLocation();
  const { classId, sectionId, className, sectionName } = location.state;
  const searchInputRef = useRef(null);
  const newStudentFirstNameRef = useRef(null);
  const [students, setStudents] = useState([]);
  const [validationError, setValidationError] = useState(false);
  const [editRollNo, setEditRollNo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const [newStudent, setNewStudent] = useState({
    RollNo: null,
    firstname: "",
    lastname: "",
    gender: "",
    parentName: "",
    phone: "",
    classId: classId,
    sectionId: sectionId,
  });
  const genders = ["Male", "Female", "Other"];
  const role = useSelector((state) => state.appAuth.role);
  const teacherSectionId = useSelector((state) => state.appAuth.section);
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      let res;
      if (role === "teacher") {
        const sectionId = teacherSectionId;
        res = await axiosClient.get(`/student/section-students/${sectionId}`);
      } else {
        res = await axiosClient.get(
          `/student/admin-section-students/${sectionId}`
        );
      }
      const fetchedStudents = res.result.studentList;
      const studentsWithRollNos = fetchedStudents.map((student, index) => ({
        ...student,
        RollNo: index + 1,
        parentName: student.parent.firstname,
        phone: student.parent.phone,
      }));
      setStudents(studentsWithRollNos);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const registerStudent = async () => {
    if (
      newStudent.firstname.trim() === "" ||
      newStudent.lastname.trim() === "" ||
      newStudent.parentName.trim() === "" ||
      newStudent.phone.trim() === ""
    ) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }

    try {
      if (role === "teacher") {
        const sectionId = teacherSectionId;
        const res = await axiosClient.post("/student/register", {
          ...newStudent,
          classId,
          sectionId,
        });
        toast.success(<b>{res.result}</b>);
      } else {
        const res = await axiosClient.post("/student/admin-register", {
          ...newStudent,
          classId,
          sectionId,
        });
        toast.success(<b>{res.result}</b>);
      }
      fetchStudents();
      setNewStudent({
        RollNo: null,
        firstname: "",
        lastname: "",
        gender: "",
        parentName: "",
        phone: "",
        classId: classId,
        sectionId: sectionId,
      });
      newStudentFirstNameRef.current.focus();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleInputChange = (RollNo, field, value) => {
    if (RollNo === null) {
      setNewStudent({ ...newStudent, [field]: value });
    } else {
      const newStudents = students.map((student) =>
        student.RollNo === RollNo ? { ...student, [field]: value } : student
      );
      setStudents(newStudents);
    }
  };

  const handleEdit = (RollNo) => {
    setEditRollNo(RollNo);
  };

  const handleSave = () => {
    setEditRollNo(null);
  };

  const handleDelete = async (studentId) => {
    try {
      if (role === "teacher") {
        await axiosClient.delete(`/student/delete/${studentId}`);
      } else {
        await axiosClient.delete(`/student/admin-delete/${studentId}`);
      }
      fetchStudents();
      toast.success("Student Deleted");
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    searchInputRef.current.focus();
  };

  const filteredStudents = students.filter(
    (student) =>
      student.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lastname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#0D192F] text-white" : "bg-white text-gray-900"
      } h-screen m-3`}
    >
      <Toaster position="top-center" reverseOrder={false} />
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
              value={searchQuery}
              onChange={handleSearchInputChange}
              ref={searchInputRef}
              className={`${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } px-3 rounded-md focus:outline-none border border-black w-full`}
            />
            <button
              className={`bg-[#2f0d0d] text-white hover:text-blue-950 hover:bg-white hover:border-2 hover:border-red-950 py-1 px-4 ml-2 w-40 text-lg rounded-md`}
              onClick={handleClearSearch}
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
              {filteredStudents.map((student) => (
                <tr key={student.RollNo}>
                  <td
                    className={`${
                      isDarkMode ? "text-white" : ""
                    } px-4 py-2 border border-gray-400`}
                  >
                    {student.RollNo}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={student.firstname}
                      onChange={(e) =>
                        handleInputChange(
                          student.RollNo,
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
                      disabled={editRollNo !== student.RollNo}
                      autoFocus={editRollNo === student.RollNo}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={student.lastname}
                      onChange={(e) =>
                        handleInputChange(
                          student.RollNo,
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
                      disabled={editRollNo !== student.RollNo}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <select
                      value={student.gender}
                      onChange={(e) =>
                        handleInputChange(
                          student.RollNo,
                          "gender",
                          e.target.value
                        )
                      }
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={editRollNo !== student.RollNo}
                    >
                      <option value="">Select Gender</option>
                      {genders.map((gender, index) => (
                        <option key={index} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={student.parentName}
                      onChange={(e) =>
                        handleInputChange(
                          student.RollNo,
                          "parentName",
                          e.target.value
                        )
                      }
                      placeholder="Enter Guardian Name"
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={editRollNo !== student.RollNo}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={student.phone}
                      onChange={(e) =>
                        handleInputChange(
                          student.RollNo,
                          "phone",
                          e.target.value
                        )
                      }
                      placeholder="Enter Phone"
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={editRollNo !== student.RollNo}
                    />
                  </td>
                  <td
                    className={`${
                      isDarkMode ? "text-white" : ""
                    } px-4 py-2 border border-gray-400`}
                  >
                    {editRollNo === student.RollNo ? (
                      <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(student.RollNo)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(student._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="px-4 py-2 border border-gray-400">
                  {students.length + 1}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <input
                    type="text"
                    value={newStudent.firstname}
                    onChange={(e) =>
                      handleInputChange(null, "firstname", e.target.value)
                    }
                    placeholder="Enter First Name"
                    className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                    ref={newStudentFirstNameRef}
                  />
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <input
                    type="text"
                    value={newStudent.lastname}
                    onChange={(e) =>
                      handleInputChange(null, "lastname", e.target.value)
                    }
                    placeholder="Enter Last Name"
                    className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  />
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <select
                    value={newStudent.gender}
                    onChange={(e) =>
                      handleInputChange(null, "gender", e.target.value)
                    }
                    className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    <option value="">Select Gender</option>
                    {genders.map((gender, index) => (
                      <option key={index} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <input
                    type="text"
                    value={newStudent.parentName}
                    onChange={(e) =>
                      handleInputChange(null, "parentName", e.target.value)
                    }
                    placeholder="Enter Guardian Name"
                    className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  />
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <input
                    type="text"
                    value={newStudent.phone}
                    onChange={(e) =>
                      handleInputChange(null, "phone", e.target.value)
                    }
                    placeholder="Enter Phone"
                    className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  />
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <button
                    onClick={registerStudent}
                    className="bg-green-500 text-white px-2 py-1 rounded-md"
                  >
                    Add Student
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {validationError && (
            <div className="text-red-500 text-center mt-2">
              All fields are required.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
