import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addSection,
  getAllUnassignedTeacher,
  getSection,
} from "../services/Axios.service";
import toast, { Toaster } from "react-hot-toast";

function Addsection() {
  const classId = useParams().id;
  const [newSection, setNewSection] = useState({
    name: "",
    teacherId: "",
    classId: classId,
  });
  const [sections, setSections] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [showPopover, setShowPopover] = useState(false);
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const handleAddSectionClick = () => {
    setShowPopover(true);
  };

  const getUnassignedTeacher = async () => {
    const res = await getAllUnassignedTeacher();
    setTeachers(res.data.result);
  };

  const handleTeacherChange = async (teacherId) => {
    setNewSection((prevState) => ({
      ...prevState,
      teacherId: teacherId,
    }));
  };

  const handleSaveSection = async () => {
    try {
      const res = await addSection(newSection);
      toast.success(res);
      setShowPopover(false);
      getsection();
    } catch (error) {
      toast.error(error);
    }
  };

  const getsection = async () => {
    const res = await getSection(classId);
    console.log(res.data.result);
    setSections(res.data.result);
  };

  useEffect(() => {
    getUnassignedTeacher();
    getsection();
  }, []);

  return (
    <>
      <div className={`${isDarkMode ? "bg-[#0d192f]" : "bg-white"} py-6`}>
        <Toaster />
        <div
          className={`${
            isDarkMode
              ? "bg-[#152f54] bg-opacity-70"
              : "bg-[#b9d7f1] bg-opacity-30"
          } bg-opacity-25 mx-4 md:mx-8 lg:mx-16`}
          style={{ minHeight: "800px" }}
        >
          <div className="px-4 md:px-8 lg:px-16 py-3">
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-[#01345b]"
              } font-bold text-2xl md:text-3xl lg:text-4xl`}
            >
              Classname
            </h3>
            <div
              className={`${isDarkMode ? "bg-[#0d192f]" : "bg-white"} my-3 p-4`}
              style={{ minHeight: "650px" }}
            >
              <div
                className={`flex flex-col justify-center p-3 h-12 rounded border-2 w-full sm:w-52 cursor-pointer mx-auto ${
                  isDarkMode
                    ? "bg-[#152f54] border-rose-600 text-white"
                    : "bg-white border-rose-600"
                }`}
                onClick={handleAddSectionClick}
              >
                <div className="flex gap-4 py-1.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ee532c452b65a16f93ceb9338d46049eb2caf3280078f090cf83b7a5ff15f4?apiKey=5571847fc48447bbad48faecb3b890d9&"
                    className="shrink-0 aspect-[1.06] fill-rose-600 w-[17px]"
                  />
                  <div className="flex-auto">Add Section</div>
                </div>
              </div>

              {sections.length === 0 ? (
                <div className="flex flex-col justify-center items-center mt-20">
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-[#01345b]"
                    } text-xl md:text-2xl lg:text-3xl font-bold`}
                  >
                    No Section at this time
                  </p>
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-[#01345b]"
                    } text-lg`}
                  >
                    Section will appear here after you create it using add
                    section button above above
                  </p>
                </div>
              ) : (
                <div className="mt-8 flex flex-wrap gap-4">
                  {sections.map((section, index) => (
                    <Link
                      to="/student-list"
                      key={index}
                      className={`${
                        isDarkMode ? "bg-blue-950" : "bg-blue-50"
                      } p-4 mb-4 rounded shadow-md w-full sm:w-44`}
                    >
                      <h4
                        className={`${
                          isDarkMode ? "text-white" : "text-[#01345b]"
                        } text-xl md:text-3xl font-bold justify-center flex`}
                      >
                        {section.name}
                      </h4>
                    </Link>
                  ))}
                </div>
              )}

              {showPopover && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div
                    className={`${
                      isDarkMode
                        ? "bg-[#0d192f] text-white"
                        : "bg-white text-gray-700"
                    } p-6 rounded shadow-lg max-w-sm w-full`}
                  >
                    <h2 className="text-2xl mb-4">Add Section</h2>
                    <div className="mb-4">
                      <label className="block text-sm font-bold mb-2">
                        Section Name
                      </label>
                      <select
                        value={newSection.sectionName}
                        onChange={(e) =>
                          setNewSection((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                          }))
                        }
                        className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                          isDarkMode
                            ? "bg-[#152f54] text-white"
                            : "text-gray-700"
                        }`}
                      >
                        <option value="">Select a section</option>
                        {["A", "B", "C", "D", "E", "F", "G", "H"].map(
                          (section) => (
                            <option key={section} value={section}>
                              {section}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-bold mb-2">
                        Assign ClassTeacher
                      </label>
                      <select
                        value={newSection.teacherId}
                        onChange={(e) => handleTeacherChange(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                          isDarkMode
                            ? "bg-[#152f54] text-white"
                            : "text-gray-700"
                        }`}
                      >
                        <option value="">Select a teacher</option>
                        {teachers.map((teacher, i) => (
                          <option key={i} value={teacher._id}>
                            {teacher.username}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => setShowPopover(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleSaveSection}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addsection;
