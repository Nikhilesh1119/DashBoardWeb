import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Addsection() {
  const [sections, setSections] = useState([]);
  const [showPopover, setShowPopover] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const teachers = ["Teacher A", "Teacher B", "Teacher C"];

  const handleAddSectionClick = () => {
    setShowPopover(true);
  };

  const handleSaveSection = () => {
    if (selectedSection && selectedTeacher) {
      const isDuplicate = sections.some((section) => section.name === selectedSection);
      if (isDuplicate) {
        alert("Section name already exists. Please choose a different section name.");
        return;
      }

      const newSection = { name: selectedSection, teacher: selectedTeacher };
      setSections([...sections, newSection]);
      setShowPopover(false);
      setSelectedSection("");
      setSelectedTeacher("");
    }
  };

  return (
    <>
      <div className={`${isDarkMode ? "bg-[#0d192f]" : "bg-white"} py-6`}>
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
                    Section will appear here after you create it using add section button above
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
                      <p
                        className={`${
                          isDarkMode ? "text-white" : "text-[#01345b]"
                        }`}
                      >
                        Teacher: {section.teacher}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              {showPopover && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div
                    className={`${
                      isDarkMode ? "bg-[#0d192f] text-white" : "bg-white text-gray-700"
                    } p-6 rounded shadow-lg max-w-sm w-full`}
                  >
                    <h2 className="text-2xl mb-4">Add Section</h2>
                    <div className="mb-4">
                      <label className="block text-sm font-bold mb-2">
                        Section Name
                      </label>
                      <select
                        value={selectedSection}
                        onChange={(e) => setSelectedSection(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                          isDarkMode ? "bg-[#152f54] text-white" : "text-gray-700"
                        }`}
                      >
                        <option value="">Select a section</option>
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((section) => (
                          <option key={section} value={section}>
                            {section}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-bold mb-2">
                        Assign ClassTeacher
                      </label>
                      <select
                        value={selectedTeacher}
                        onChange={(e) => setSelectedTeacher(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                          isDarkMode ? "bg-[#152f54] text-white" : "text-gray-700"
                        }`}
                      >
                        <option value="">Select a teacher</option>
                        {teachers.map((teacher) => (
                          <option key={teacher} value={teacher}>
                            {teacher}
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
            <div className="flex justify-center mt-6">
              <Link
                to="/class-setup"
                className={`${
                  isDarkMode ? "bg-blue-950" : "bg-blue-50"
                } p-4 rounded shadow-md w-full sm:w-auto text-center`}
              >
                <button
                  className={`${
                    isDarkMode ? "text-white" : "text-[#01345b]"
                  } text-xl md:text-2xl font-bold`}
                >
                  Go to Classroom
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link
              to="/class-setup"
              className={`${
                isDarkMode ? "bg-blue-950" : "bg-blue-50"
              } p-4 rounded shadow-md w-full sm:w-auto text-center`}
            >
              <button
                className={`${
                  isDarkMode ? "text-white" : "text-[#01345b]"
                } text-xl md:text-2xl font-bold`}
              >
                Go to Classroom
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addsection;