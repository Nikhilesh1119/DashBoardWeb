import React, { useState, useEffect } from "react";
import add from "../assets/add.png";
import students from "../assets/students.png";
import downbtn from "../assets/downbtn.png";
import ReactCardFlip from "react-card-flip";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getClass } from "../services/Axios.service";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

function ClassSetup() {
  const [count, setCount] = useState(0);
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const [classes, setClasses] = useState([
    ["Nursery", 0],
    ["LKG", 3],
    ["UKG", 6],
    ["1st", 8],
    ["2nd", 0],
    ["3rd", 0],
    ["4th", 0],
    ["5th", 0],
    ["6th", 0],
    ["7th", 0],
    ["8th", 0],
    ["9th", 0],
    ["10th", 0],
    ["11th", 0],
    ["12th", 0],
  ]);

  const [isFlipped, setIsFlipped] = useState(Array(count).fill(false));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newClassName, setNewClassName] = useState("");

  const handleCardClick = (index) => {
    setIsFlipped((prevIsFlipped) => {
      const newIsFlipped = [...prevIsFlipped];
      newIsFlipped[index] = !newIsFlipped[index];
      return newIsFlipped;
    });
  };

  const handleAddSection = (index) => {
    setClasses((prevSection) => {
      const newSection = [...prevSection];
      newSection[index] = [newSection[index][0], newSection[index][1] + 1];
      return newSection;
    });
  };

  const handleRemoveSection = (index) => {
    setClasses((prevSection) => {
      const removeSection = [...prevSection];
      removeSection[index] = [
        removeSection[index][0],
        removeSection[index][1] - 1,
      ];
      return removeSection;
    });
  };

  const getAllClass = async () => {
    const res = await getClass();
    setClasses(res);
  };

  useEffect(() => {
    getAllClass();
  }, []);

  return (
    <>
      <div className={`${isDarkMode ? "bg-[#0d192f]" : "bg-white"} py-6`}>
        <div
          className={`${
            isDarkMode
              ? "bg-[#152f54] bg-opacity-70"
              : "bg-[#b9d7f1] bg-opacity-30"
          } w-full max-w-[1600px] mx-auto`}
          style={{ minHeight: "800px" }}
        >
          <div className="px-6 md:px-16 py-6">
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-[#01345b]"
              } font-bold text-2xl md:text-4xl`}
            >
              Classroom
            </h3>
            <div
              className={`${
                isDarkMode ? "bg-[#0d192f]" : "bg-white"
              } w-full my-3`}
              style={{ minHeight: "650px" }}
            >
              <div className="py-3 px-2 md:px-11 flex flex-wrap justify-center">
                {/* Flipping Cards */}
                {[...Array(count)].map((_, index) => (
                  <ReactCardFlip
                    isFlipped={isFlipped[index]}
                    flipDirection="horizontal"
                    key={index}
                  >
                    {/* Front side of the card */}
                    <div
                      className={`${
                        isDarkMode ? "bg-[#152f54] bg-opacity-70" : "bg-white"
                      } my-3 mx-3 md:my-6 md:mx-6 w-16 h-16 md:w-36 md:h-36 border border-yellow-400 rounded-3xl cursor-pointer`}
                    >
                      <div className="relative rounded-full bg-white">
                        <img
                          src={downbtn}
                          alt="^"
                          className="absolute rounded-full w-4 h-4 md:w-6 md:h-6 top-1 right-1 md:top-1 md:right-7"
                        />
                      </div>
                      <div onClick={() => handleCardClick(index)}>
                        <img
                          src={students}
                          className="h-3/4 w-full p-1 md:p-2"
                          alt="students"
                        />
                        <p
                          className={`${
                            isDarkMode ? "text-white" : "text-[#01345b]"
                          } text-center font-semibold text-xs md:text-base`}
                        >
                          {classes[index][0]}
                        </p>
                      </div>
                    </div>
                    {/* Back side of the card */}
                    <div
                      className={`${
                        isDarkMode ? "bg-[#152f54] bg-opacity-70" : "bg-white"
                      } mt-3 mx-3 md:mt-6 md:mx-6 w-16 h-16 md:w-36 md:h-36 border border-yellow-400 rounded-3xl cursor-pointer`}
                    >
                      <div className="flex flex-col justify-evenly h-full">
                        <div className="px-1 pt-1 md:px-5 md:pt-3 flex flex-row flex-wrap ">
                          {[...Array(classes[index][1])].map((_, j) => (
                            <div
                              className={`${
                                isDarkMode ? "border-white" : "border-rose-500"
                              } w-4 h-4 md:w-6 md:h-6 m-0.5 md:m-1 border rounded-lg flex justify-center items-center`}
                              key={j}
                            >
                              <Link
                                to={"/student-list"}
                                className={`${
                                  isDarkMode ? "text-white" : "text-rose-500"
                                } text-xs md:text-base`}
                              >
                                {j + 1}
                              </Link>
                            </div>
                          ))}
                        </div>
                        <Link
                          to="/addsection"
                          className="flex justify-center items-center"
                        >
                          <div className="bg-red-500 text-white text-center text-xs md:text-sm w-20 md:w-28 rounded-full">
                            Add Section
                          </div>
                        </Link>
                      </div>
                      <p
                        className={`${
                          isDarkMode ? "text-white" : "text-rose-500"
                        } text-center font-semibold text-xs md:text-base`}
                      >
                        {classes[index][0]}
                      </p>
                    </div>
                  </ReactCardFlip>
                ))}

                {/* Plus Icon */}
                {count !== 15 ? (
                  <div
                    className={`${
                      isDarkMode ? "bg-[#152f54] bg-opacity-70" : "bg-white"
                    } m-3 md:m-6 w-16 h-16 md:w-36 md:h-36 flex justify-center items-center border border-yellow-400 rounded-3xl cursor-pointer`}
                    onClick={openModal}
                  >
                    <img src={add} alt="" className="w-6 h-6 md:w-10 md:h-10" />
                  </div>
                ) : null}
              </div>
            </div>

            {/* No class */}
            {count < 1 ? (
              <div className="flex flex-col justify-center items-center mt-10 md:-translate-y-80">
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-[#01345b]"
                  } text-xl md:text-3xl font-bold`}
                >
                  No Classroom at This time
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-[#01345b]"
                  } text-sm md:text-lg`}
                >
                  Classroom will appear here after you create it using the icon
                  above
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Modal for adding new class */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Class"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl mb-4">Add New Class</h2>
        <input
          type="text"
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
          placeholder="Enter class name"
          className="input mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn-secondary mr-2">
            Cancel
          </button>
          <button onClick={handleNewClassSubmit} className="btn-primary">
            Add
          </button>
        </div>
      </Modal>

      {/* Modal styling */}
      <style jsx>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          background: ${isDarkMode ? "#152f54" : "white"};
          padding: 20px;
          border-radius: 10px;
          width: 90%;
          max-width: 400px;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
        }
        .input {
          width: 100%;
        }
        .btn-secondary {
          background: gray;
          color: white;
          padding: 10px;
          border-radius: 5px;
        }
        .btn-primary {
          background: #007bff;
          color: white;
          padding: 10px;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}

export default ClassSetup;
