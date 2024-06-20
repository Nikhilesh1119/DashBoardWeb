import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { axiosClient } from "../services/axiosClient";
import toast, { Toaster } from "react-hot-toast";

export default function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({
    SNo: null,
    firstname: "",
    lastname: "",
    phone: "",
  });
  const [validationError, setValidationError] = useState(false);
  const [editSNo, setEditSNo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const registerTeacher = async () => {
    try {
      if (
        !newTeacher.firstname.trim() ||
        !newTeacher.lastname.trim() ||
        !newTeacher.phone.trim()
      ) {
        setValidationError(true);
        return;
      } else {
        setValidationError(false);
      }
      const response = await axiosClient.post("/teacher/register", {
        firstname: newTeacher.firstname,
        lastname: newTeacher.lastname,
        phone: newTeacher.phone,
      });
      console.log(response);
      toast.success(<b>register Successfully</b>);
      getTeacher();
      // setTeachers([...teachers, { ...newTeacher, SNo: teachers.length + 1 }]);
      setNewTeacher({
        SNo: null,
        firstname: "",
        lastname: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error(<b>{error}</b>);
    }
  };

  const getTeacher = async () => {
    try {
      const response = await axiosClient.get(`teacher/teacher-list`);
      const fetchedTeachers = response.result.teacherList;
      const teachersWithSNos = fetchedTeachers.map((teacher, index) => ({
        ...teacher,
        SNo: index + 1,
      }));
      setTeachers(teachersWithSNos);
    } catch (error) {
      toast.error("Failed to fetch teacher data");
    }
  };

  useEffect(() => {
    getTeacher();
  }, []);

  const handleInputChange = (SNo, field, value) => {
    if (SNo === null) {
      setNewTeacher({ ...newTeacher, [field]: value });
    } else {
      const newTeachers = teachers.map((teacher) =>
        teacher.SNo === SNo ? { ...teacher, [field]: value } : teacher
      );
      setTeachers(newTeachers);
    }
  };

  const handleEdit = (SNo) => {
    setEditSNo(SNo);
  };

  const updateTeacher = async (teacher) => {
    try {
      await axiosClient.put(`/teacher/admin-teacher/${teacher._id}`, teacher);
      getTeacher();
      toast.success("Teacher updated successfully!");
      setEditSNo(null);
    } catch (error) {
      toast.error(<b>{error}</b>);
    }
  };

  const handleDelete = async (teacherId) => {
    await axiosClient.delete(`/teacher/${teacherId}`);
    getTeacher();
    toast.success("Teacher Deleted");
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
              onChange={handleSearchInputChange}
              ref={searchInputRef}
              className={`${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } px-3 rounded-md focus:outline-none border border-black w-full`}
              onFocus={() => searchInputRef.current.focus()}
            />
            <button
              className={`bg-${
                isDarkMode ? "red-900" : "red-100"
              } bg-[#2f0d0d] text-white hover:text-blue-950 hover:bg-white hover:border-2 hover:border-red-950 py-1 px-4 ml-2 w-40 text-lg rounded-md`}
              onClick={() => {
                setSearchQuery("");
                searchInputRef.current.focus();
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
                <th className="px-4 py-2 border border-gray-400">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-900">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.SNo}>
                  <td
                    className={`${
                      isDarkMode ? "text-white" : ""
                    } px-4 py-2 border border-gray-400`}
                  >
                    {teacher.SNo}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={teacher.firstname}
                      onChange={(e) =>
                        handleInputChange(
                          teacher.SNo,
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
                      disabled={editSNo !== teacher.SNo}
                      autoFocus={editSNo === newTeacher.SNo}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={teacher.lastname}
                      onChange={(e) =>
                        handleInputChange(
                          teacher.SNo,
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
                      disabled={editSNo !== teacher.SNo}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={teacher.phone}
                      onChange={(e) =>
                        handleInputChange(teacher.SNo, "phone", e.target.value)
                      }
                      placeholder="Enter Phone Number"
                      className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                        isDarkMode
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                      disabled={editSNo !== teacher.SNo}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {editSNo === teacher.SNo ? (
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md w-full h-full"
                        onClick={() => updateTeacher(teacher)}
                      >
                        Save
                      </button>
                    ) : (
                      <div className="flex gap-2 justify-evenly">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md w-full h-full"
                          onClick={() => handleEdit(teacher.SNo)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-md w-full h-full"
                          onClick={() => handleDelete(teacher._id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  className={`${
                    isDarkMode ? "text-white" : ""
                  } px-4 py-2 border border-gray-400`}
                >
                  {teachers.length + 1}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <input
                    type="text"
                    value={newTeacher.firstname}
                    onChange={(e) =>
                      handleInputChange(null, "firstname", e.target.value)
                    }
                    placeholder="Enter First Name"
                    className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                    disabled={editSNo !== null}
                  />
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <input
                    type="text"
                    value={newTeacher.lastname}
                    onChange={(e) =>
                      handleInputChange(null, "lastname", e.target.value)
                    }
                    placeholder="Enter Last Name"
                    className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                    disabled={editSNo !== null}
                  />
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <input
                    type="text"
                    value={newTeacher.phone}
                    onChange={(e) =>
                      handleInputChange(null, "phone", e.target.value)
                    }
                    placeholder="Enter Phone Number"
                    className={`w-full h-full px-2 py-1 border-none focus:outline-none ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                    disabled={editSNo !== null}
                  />
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded-md w-full h-full"
                    onClick={registerTeacher}
                    disabled={editSNo !== null}
                  >
                    Add Row
                  </button>
                </td>
              </tr>
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
