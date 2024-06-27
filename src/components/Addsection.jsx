import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { axiosClient } from "../services/axiosClient";

const getNextSectionName = (sections) => {
  const sectionLength = sections.length;
  const letters = "ABCDEFGHI";
  return sectionLength < letters.length ? letters[sectionLength] : "";
};

function Addsection({ setAddSectionModelOpen, clickedClassId, getAllClass }) {
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const [newSection, setNewSection] = useState({
    name: "",
    teacherId: "",
  });
  const [sections, setSections] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  }, [sections, activeSection]);

  const handleSaveSection = async () => {
    if (sections.length === 8) {
      return toast.error("Reached maximum section limit");
    }
    if (!newSection.teacherId) {
      return toast.error("Please select a teacher");
    }
    if (activeSection === null) {
      const sectionName = getNextSectionName(sections);
      const newSectionObj = {
        name: sectionName,
        teacherId: newSection.teacherId,
        classId: clickedClassId,
      };
      try {
        const res = await axiosClient.post("section/register", newSectionObj);
        getSections();
        getUnassignedTeacher();
        toast.success(res.result);
      } catch (error) {
        toast.error("Failed to add section");
      }
    } else {
      try {
        // await axiosClient.put(`/section/${activeSection}`, {
        //   teacherId: newSection.teacherId,
        // });
        getSections();
        getUnassignedTeacher();
        toast.success("Teacher updated successfully");
      } catch (error) {
        toast.error("Failed to update teacher");
      }
      setActiveSection(null);
    }

    setNewSection({ name: "", teacherId: "" });
    setShowForm(true);
  };

  const handleSectionDelete = async (sectionId) => {
    try {
      await axiosClient.delete(`/section/${sectionId}`);
      getSections();
      toast.success("Section deleted successfully");
    } catch (error) {
      toast.error("Failed to delete section");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSection({
      ...newSection,
      [name]: value,
    });
  };

  const getUnassignedTeacher = async () => {
    try {
      const res = await axiosClient.get("/teacher/unassigned-teachers");
      setTeachers(res.result);
    } catch (error) {
      toast.error("Failed to fetch unassigned teachers");
    }
  };

  const handleUpdateTeacherSection = async (section) => {
    const res = await axiosClient.post("section/replace-teacher", {
      sectionId: section._id,
      teacherId: newSection.teacherId,
    });
    toast.success("Teacher updated successfully");
    getUnassignedTeacher();
    getSections();
    setNewSection({ name: section.name, teacherId: newSection.teacherId });
    setActiveSection(null);
  };

  const handleUpdateClick = (section) => {
    getUnassignedTeacher();
    setActiveSection(section._id);
    setNewSection({ name: section.name, teacherId: newSection.teacherId });
  };

  const getSections = async () => {
    try {
      const res = await axiosClient.get(`/section/${clickedClassId}`);
      setSections(res.result);
    } catch (error) {
      toast.error("Failed to fetch sections");
    }
  };

  useEffect(() => {
    getUnassignedTeacher();
    getSections();
  }, [clickedClassId]);

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div
          className={`${
            isDarkMode ? "bg-blue-950" : "bg-white"
          } w-full max-w-3xl p-6 rounded-lg shadow-lg`}
        >
          <div className="flex justify-between items-center mb-4">
            <div
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-blue-900"
              } `}
            >
              Sections
            </div>
            <button
              onClick={async () => {
                setAddSectionModelOpen(false);
                await getAllClass();
              }}
              className="text-3xl font-semibold text-white bg-blue-900 px-4 py-2 rounded-md shadow-md hover:bg-blue-800"
            >
              Done
            </button>
          </div>
          <div className="mb-6 max-h-80 overflow-y-auto">
            {sections.map((section, index) => (
              <div
                key={section._id}
                className={`flex items-center justify-between mb-2 p-4 ${
                  isDarkMode ? "bg-blue-800" : "bg-gray-100"
                } rounded-lg shadow-md`}
              >
                <div className="flex items-center">
                  <div
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-white" : ""
                    } mr-4`}
                  >
                    {section.name}
                  </div>
                </div>
                {activeSection === section._id ? (
                  <select
                    name="teacherId"
                    value={newSection.teacherId}
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md px-3 py-2 ${
                      isDarkMode ? "bg-gray-300" : "bg-gray-100"
                    } w-48`}
                    ref={selectRef}
                  >
                    <option
                      value=""
                      className={`${
                        isDarkMode ? "bg-blue-900 text-white" : ""
                      }`}
                    >
                      Select Teacher
                    </option>
                    {teachers.map((teacher) => (
                      <option
                        key={teacher._id}
                        value={teacher._id}
                        className={`${
                          isDarkMode ? "bg-blue-900 text-white" : ""
                        }`}
                      >
                        {teacher.firstname}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div
                    className={`border border-gray-300 rounded-md px-3 py-2 ${
                      isDarkMode ? "bg-gray-300" : "bg-gray-100"
                    } w-48`}
                  >
                    {section.classTeacher.firstname}
                  </div>
                )}
                <div className="flex items-center">
                  {activeSection === section._id ? (
                    <button
                      onClick={() => handleUpdateTeacherSection(section)}
                      className={`${
                        isDarkMode
                          ? "text-white"
                          : "text-green-600 hover:text-green-800"
                      } mr-2`}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUpdateClick(section)}
                      className={`${
                        isDarkMode
                          ? "text-white"
                          : "text-blue-600 hover:text-blue-800"
                      }  mr-2`}
                      disabled={activeSection !== null}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleSectionDelete(section._id)}
                    className={` ${
                      isDarkMode
                        ? "text-white "
                        : "text-red-600 hover:text-red-800"
                    } ${
                      index !== sections.length - 1 &&
                      "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={index !== sections.length - 1}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {showForm && (
              <div
                className={`flex items-center justify-between mb-2 p-4  rounded-lg shadow-md ${
                  isDarkMode ? "bg-blue-800" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`border border-gray-300 rounded-md px-3 py-2 mr-4 ${
                      isDarkMode ? "bg-blue-800 text-white" : "bg-white"
                    }`}
                  >
                    {getNextSectionName(sections)}
                  </div>
                </div>
                <select
                  name="teacherId"
                  value={newSection.teacherId}
                  onChange={handleChange}
                  className={`border border-gray-300 rounded-md px-3 py-2 ${
                    isDarkMode ? "bg-gray-300" : "bg-gray-100"
                  } w-48`}
                  ref={selectRef}
                  disabled={activeSection !== null}
                >
                  <option
                    value=""
                    className={`${isDarkMode ? "bg-blue-900 text-white" : ""}`}
                  >
                    Select Teacher
                  </option>
                  {teachers.map((teacher) => (
                    <option key={teacher._id} value={teacher._id}>
                      {teacher.firstname}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleSaveSection}
                  className={`${
                    isDarkMode
                      ? "text-white"
                      : "text-green-600 hover:text-green-800"
                  } mr-2`}
                  disabled={activeSection !== null}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Addsection;
