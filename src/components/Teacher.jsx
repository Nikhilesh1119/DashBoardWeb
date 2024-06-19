import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Teacher() {
  const [teachers, setTeachers] = useState([
    { rollNo: 1, firstName: "", lastName: "", phone: "" },
  ]);
  const [validationError, setValidationError] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [rollNumberCounter, setRollNumberCounter] = useState(2);

  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const handleAddRow = () => {
    const lastTeacher = teachers[teachers.length - 1];
    if (
      lastTeacher.firstName.trim() === "" ||
      lastTeacher.lastName.trim() === "" ||
      lastTeacher.phone.trim() === ""
    ) {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    setTeachers([
      ...teachers,
      { rollNo: rollNumberCounter, firstName: "", lastName: "", phone: "" },
    ]);
    console.log("t", teachers);
    setRollNumberCounter(rollNumberCounter + 1);
    setEditIndex(teachers.length);
  };

  const handleInputChange = (index, field, value) => {
    const newTeachers = [...teachers];
    newTeachers[index][field] = value;
    setTeachers(newTeachers);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = () => {
    setEditIndex(null);
  };

  const handleDelete = async (index) => {
    // try {
    //   await axiosClient.delete(`/teacher/${idForDelete}`);
    //   getTeacher();
    //   toast.success("Teacher deleted successfully!");
    // } catch (error) {
    //   toast.error("Failed to delete teacher!");
    // }
    const newTeachers = teachers.filter((_, i) => i !== index);
    const updatedTeachers = newTeachers.map((teacher, i) => ({
      ...teacher,
      rollNo: i + 1,
    }));
    setTeachers(updatedTeachers);
    setRollNumberCounter(updatedTeachers.length + 1);
    setEditIndex(null);
  };

  // const getTeacher = async () => {
    // const teacherList = await axiosClient.get(`teacher/teacher-list`);
    // setLimit(teacherList.result.limit);
    // setTeachers(teacherList.result.teacherList);
  //   console.log(teachers);
  // };

  // useEffect(() => {
  //   getTeacher();
  // }, []);

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#0D192F] text-white" : "bg-white text-gray-900"
      } h-screen m-3`}
    >
      <div className="px-5">
        <div className="text-3xl px-5 py-3">Teacher Setup</div>
        <div className="p-3">
          <div className="flex justify-between w-full">
            <input
              type="text"
              placeholder="Search here..."
              className={`${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } px-3 rounded-md focus:outline-none border border-black w-full`}
            />
            <button
              className={`bg-${
                isDarkMode ? "red-900" : "red-100"
              } bg-[#2f0d0d] text-white hover:text-blue-950 hover:bg-white hover:border-2 hover:border-red-950 py-1 px-4 ml-2 w-40 text-lg rounded-md`}
            >
              Clear
            </button>
            <button
              className={`bg-${
                isDarkMode ? "blue-950" : "blue-800"
              } text-white hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-950 py-1 px-4 ml-2 w-40 text-lg rounded-md`}
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
                <th className="px-4 py-2 border border-gray-400">S.No.</th>
                <th className="px-4 py-2 border border-gray-400">First Name</th>
                <th className="px-4 py-2 border border-gray-400">Last Name</th>
                <th className="px-4 py-2 border border-gray-400">Phone</th>
                <th className="px-4 py-2 border border-gray-400">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-900">
              {teachers.map((teacher, index) => (
                <tr key={index}>
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
                      value={teacher.firstName}
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
                        editIndex !== index && index < teachers.length - 1
                      }
                      autoFocus={editIndex === index}
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={teacher.lastName}
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
                        editIndex !== index && index < teachers.length - 1
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <input
                      type="text"
                      value={teacher.phone}
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
                        editIndex !== index && index < teachers.length - 1
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {index < teachers.length - 1 && (
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
                    {index === teachers.length - 1 && (
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
