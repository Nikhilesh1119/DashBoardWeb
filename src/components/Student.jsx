import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import nostudent from '../assets/nostudent.png';
import {useSelector} from 'react-redux';

function StudentPage () {
  const [isFormOpen, setIsFormOpen] = useState (false);
  const isDarkMode = useSelector (state => state.auth.isDarkMode);

  const handleOpenForm = () => {
    setIsFormOpen (true);
  };

  const handleCloseForm = () => {
    setIsFormOpen (false);
  };

  return (
    <div
      className={`${isDarkMode ? 'bg-[#0d192f]' : 'bg-white'} min-h-screen flex justify-center  h-35rem py-4 px-3`}
    >
      <div
        className={`${isDarkMode ? 'bg-[#152f54] bg-opacity-40' : 'bg-[#b9d7f1] bg-opacity-30'} flex flex-col max-w-full max-h-full h-[90%] mx-auto px-16 py-6 w-[90%]`}
      >
        <div className="mb-4 flex">
          <div className="border border-red-500 inline-block bg-white">
            <button
              className={`${isDarkMode ? 'bg-[#152f54]' : 'bg-white'} text-red-500 font-bold py-2 px-2 `}
            >
              <Link to="/register-student" className="text-red-500 no-underline">
                + new Student
              </Link>
            </button>
            <button
              className={`${isDarkMode ? 'text-[#152f54] bg-[#ed0c57]' : 'text-white bg-red-500'}  h-full font-bold py-2 px-4 `}
              onClick={() => alert ('Import CSV')}
            >
              Import CSV
            </button>
          </div>
        </div>
        <div className="mb-4 flex  items-center">
          <button
            className={`${isDarkMode ? 'bg-[#0d192f] text-white hover:text-[#0d192f] hover:bg-gray-200' : 'bg-gray-200 text-gray-600 '}  hover:bg-gray-300 py-2 px-4 w-40 rounded-md`}
            onClick={() => alert ('Add filter')}
          >
            Add filter ▼
          </button>
          <input
            type="text"
            placeholder="Search here..."
            className={`${isDarkMode ? 'bg-[#0d192f] text-white hover:text-[#0d192f] hover:bg-gray-200' : 'bg-white text-gray-600 '} py-2 px-4 ml-4 rounded-md w-full  border  shadow-sm`}
          />
          <button
            className="bg-[#0d192f]  text-white hover:text-blue-950  hover:bg-white
             py-2 px-4 ml-2 w-40 text-lg rounded-md"
            onClick={() => alert ('Add Search')}
          >
            Search
          </button>
        </div>
        <div
          className={`${isDarkMode ? 'bg-[#0d192f]' : 'bg-white'}  shadow-md rounded-lg p-5 h-96`}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <img src={nostudent} className="mb-4 size-52" />
            <p
              className={`${isDarkMode ? 'text-white' : 'text-blue-950'} text-2xl font-bold `}
            >
              No Student at this time
            </p>
            <p
              className={`${isDarkMode ? 'text-white' : 'text-blue-950'}  text-sm`}
            >
              Student will be appear here after they enroll in your School
            </p>
          </div>
          <div className="flex justify-end">
            <button
              className=" mt-4 bg-blue-950 w-36 hover:bg-blue-900 text-white py-2 px-4 rounded-full"
              onClick={() => alert ('Support')}
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPage;