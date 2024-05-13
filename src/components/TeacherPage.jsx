import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function TeacherPage() {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage the visibility of the form
  const history = useHistory();

  // Function to handle opening the form
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  // Function to handle closing the form
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center h-35rem p-4">
      <div className="flex flex-col max-w-full max-h-full h-90% mx-auto px-8 py-6 bg-blue-200 w-90%">
        <div className="mb-4 flex">
          <div className="border border-red-500 inline-block bg-white">
            <button className="bg-white text-red-500 font-bold py-4 px-4 rounded-md">
              <Link to="/TeacherForm" className="text-red-500 no-underline">
                + new Teacher
              </Link>
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
              onClick={() => alert("Import CSV")}
            >
              Import CSV
            </button>
          </div>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded-md"
            onClick={() => alert("Add filter")}
          >
            Add filter ▼
          </button>
          <input
            type="text"
            placeholder="Search here..."
            className="py-2 px-4 rounded-md bg-white border border-gray-300 shadow-sm"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-20 pl-200 pr-200 flex items-center justify-center h-25rem">
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/214b14b462773cccd63a28ee0bf934f21870c429bfdfd03b15f33fa2db29e7ce?apiKey=5571847fc48447bbad48faecb3b890d9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/214b14b462773cccd63a28ee0bf934f21870c429bfdfd03b15f33fa2db29e7ce?apiKey=5571847fc48447bbad48faecb3b890d9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/214b14b462773cccd63a28ee0bf934f21870c429bfdfd03b15f33fa2db29e7ce?apiKey=5571847fc48447bbad48faecb3b890d9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/214b14b462773cccd63a28ee0bf934f21870c429bfdfd03b15f33fa2db29e7ce?apiKey=5571847fc48447bbad48faecb3b890d9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/214b14b462773cccd63a28ee0bf934f21870c429bfdfd03b15f33fa2db29e7ce?apiKey=5571847fc48447bbad48faecb3b890d9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/214b14b462773cccd63a28ee0bf934f21870c429bfdfd03b15f33fa2db29e7ce?apiKey=5571847fc48447bbad48faecb3b890d9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/214b14b462773cccd63a28ee0bf934f21870c429bfdfd03b15f33fa2db29e7ce?apiKey=5571847fc48447bbad48faecb3b890d9&width=2000 2000w"
              alt="No students"
              className="mb-4"
            />
            <p className="text-lg font-semibold">No Teachers at this time</p>
            <p className="text-gray-600">
              Teachers will be displayed after added
            </p>
          </div>
        </div>
        <div className="fixed bottom-4 right-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
            onClick={() => alert("Support")}
          >
            Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;
