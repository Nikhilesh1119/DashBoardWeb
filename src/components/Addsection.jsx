import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

const getNextSectionName = (sections) => {
  const sectionLength = sections.length;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return sectionLength < letters.length ? letters[sectionLength] : "";
};

function Addsection({ setAddSectionModelOpen, clickedClassId, getAllClass }) {
  const [newSection, setNewSection] = useState({
    name: "",
    teacherId: "",
  });
  const [sections, setSections] = useState([]);
  const [teachers] = useState([
    // Example teachers list
    { id: 1, name: "Teacher A" },
    { id: 2, name: "Teacher B" },
    { id: 3, name: "Teacher C" },
  ]);
  const [showForm, setShowForm] = useState(true); // State to control form visibility
  const [activeSection, setActiveSection] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  }, [sections]);

  const handleSaveSection = () => {
    if (sections.length === 8) {
      return toast.error("Reached maximum section limit");
    }
    if (!newSection.teacherId) {
      return toast.error("Please select a teacher");
    }

    // Check if we are adding a new section or updating an existing one
    if (activeSection === null) {
      // Adding a new section
      const sectionName = getNextSectionName(sections);
      const newSectionObj = {
        id: sections.length + 1, // Example: Generating a unique ID (simulation)
        name: sectionName, // Auto-incremented section name
        teacherId: newSection.teacherId,
      };
      setSections([...sections, newSectionObj]);
      toast.success("Section added successfully");
    } else {
      // Updating an existing section
      const updatedSections = sections.map((section) =>
        section.id === activeSection
          ? { ...section, teacherId: newSection.teacherId }
          : section
      );
      setSections(updatedSections);
      toast.success("Teacher updated successfully");
      setActiveSection(null); // Reset active section after update
    }

    setNewSection({ name: "", teacherId: "" }); // Reset form fields
    setShowForm(true); // Keep the form visible for adding another section
  };

  const handleSectionDelete = (sectionId) => {
    const updatedSections = sections.filter(
      (section) => section.id !== sectionId
    );
    setSections(updatedSections);
    toast.success("Section deleted successfully");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSection({
      ...newSection,
      [name]: value,
    });
  };

  const handleUpdateClick = (section) => {
    setActiveSection(section.id);
    setNewSection({ name: section.name, teacherId: section.teacherId });
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="text-3xl font-bold text-blue-900">Sections</div>
            <button
              onClick={() => setAddSectionModelOpen(false)}
              className="text-3xl font-semibold text-white bg-blue-900 px-4 py-2 rounded-md shadow-md hover:bg-blue-800"
            >
              Done
            </button>
          </div>
          <div className="mb-6 max-h-80 overflow-y-auto">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="flex items-center justify-between mb-2 p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <div className="text-lg font-semibold mr-4">
                    {section.name}
                  </div>
                </div>
                {activeSection === section.id ? (
                  <select
                    name="teacherId"
                    value={newSection.teacherId}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 bg-white w-48"
                    ref={selectRef}
                  >
                    <option value="">Select Teacher</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    name="teacherId"
                    value={section.teacherId}
                    onChange={(e) =>
                      handleChange({
                        target: { name: "teacherId", value: e.target.value },
                      })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 bg-white w-48"
                    disabled
                  >
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </option>
                    ))}
                  </select>
                )}
                <div className="flex items-center">
                  {activeSection === section.id ? (
                    <button
                      onClick={handleSaveSection}
                      className="text-green-600 hover:text-green-800 mr-2"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUpdateClick(section)}
                      className="text-blue-600 hover:text-blue-800 mr-2"
                      disabled={activeSection !== null}
                    >
                      Update
                    </button>
                  )}
                  <button
                    onClick={() => handleSectionDelete(section.id)}
                    className={`text-red-600 hover:text-red-800 ${
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
              <div className="flex items-center justify-between mb-2 p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="border border-gray-300 rounded-md px-3 py-2 bg-white mr-4">
                    {getNextSectionName(sections)}
                  </div>
                </div>
                <select
                  name="teacherId"
                  value={newSection.teacherId}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-48"
                  ref={selectRef}
                  disabled={activeSection !== null}
                >
                  <option value="">Select Teacher</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleSaveSection}
                  className="text-green-600 hover:text-green-800 mr-2"
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
