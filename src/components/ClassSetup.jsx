import React, { useEffect, useState } from "react";
import add from "../assets/add.png";
import students from "../assets/students.png";
import deleteIcon from "../assets/trash.png";
import ReactCardFlip from "react-card-flip";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import Addsection from "./Addsection";
import { axiosClient } from "../services/axiosClient";

Modal.setAppElement("#root");
const classOptions = [
  "Pre-Nursery",
  "Nursery",
  "LKG",
  "UKG",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
];
const getNextClassName = (classes) => {
  if (classes.length == 0) return classOptions[0];
  const lastClass = classes[classes.length - 1].name;
  console.log({ lastClass });
  switch (lastClass) {
    case "Pre-Nursery": {
      return classOptions[1];
      break;
    }
    case "Nursery": {
      return classOptions[2];
      break;
    }
    case "LKG": {
      return classOptions[3];
      break;
    }
    case "UKG": {
      return classOptions[4];
      break;
    }
    case "1st": {
      return classOptions[5];
      break;
    }
    case "2nd": {
      return classOptions[6];
      break;
    }
    case "3rd": {
      return classOptions[7];
      break;
    }
    case "4th": {
      return classOptions[8];
      break;
    }
    case "5th": {
      return classOptions[9];
      break;
    }
    case "6th": {
      return classOptions[10];
      break;
    }
    case "7th": {
      return classOptions[11];
      break;
    }
    case "8th": {
      return classOptions[12];
      break;
    }
    case "9th": {
      return classOptions[13];
      break;
    }
    case "10th": {
      return classOptions[14];
      break;
    }
    case "11th": {
      return classOptions[15];
      break;
    }
  }
};

function ClassSetup() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const [classes, setClasses] = useState([]);
  const [isFlipped, setIsFlipped] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newClassName, setNewClassName] = useState("");
  const [clickedClassId, setClickedClassId] = useState("");
  const [addSectionModelOpen, setAddSectionModelOpen] = useState(false);

  const handleCardClick = (index) => {
    setIsFlipped((prevIsFlipped) => {
      const newIsFlipped = [...prevIsFlipped];
      newIsFlipped[index] = !newIsFlipped[index];
      return newIsFlipped;
    });
  };

  const getAllClass = async () => {
    const res = await axiosClient.get("/class/class-list");
    // console.log(res);
    setClasses(res.result);
  };

  const handleNewClassSubmit = async () => {
    try {
      const lastClass = classes[classes.length - 1].name;
      if (classes.length === 16 || lastClass === "12th") {
        return toast.error("Classroom is full of classes.");
      }
      const name = getNextClassName(classes);
      console.log({ "next class name : ": name });
      const res = await axiosClient.post("/class/register", { name });
      // console.log({ res });
      getAllClass();
      toast.success("class created successfully");
      // closeModal();
      getAllClass();
    } catch (error) {
      toast.error(error);
    }
  };

  const handleFirstNewClassSubmit = async (classname) => {
    try {
      if (classes.length !== 0) {
        return Toaster.error("can't create class.");
      }
      const res = await axiosClient.post("/class/register", {
        name: classname,
      });
      getAllClass();
      toast.success("class added successfully");
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getAllClass();
  }, []);

  const handleDeleteClass = async (classId) => {
    try {
      // const response = await deleteClass(classId);
      const response = await axiosClient.delete(`/class/${classId}`);
      toast.success("Class deleted successfully");
      getAllClass();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className={`${isDarkMode ? "bg-[#0d192f]" : "bg-white"} py-6`}>
        <Toaster />
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
                {classes.map((data, index) => (
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
                      {/* {console.log(data._id)} */}
                      <div className="relative rounded-full bg-white">
                        <img
                          src={deleteIcon}
                          onClick={() => handleDeleteClass(data._id)}
                          alt="^"
                          className="absolute rounded-full w-4 h-4 md:w-6 md:h-6 top-1 right-1 md:top-1 md:right-3"
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
                          {data.name}
                        </p>
                      </div>
                    </div>
                    {/* Back side of the card */}
                    <div
                      className={`${
                        isDarkMode ? "bg-[#152f54] bg-opacity-70" : "bg-white"
                      } mt-3 mx-3 md:mt-6 md:mx-6 w-16 h-16 md:w-36 md:h-36 border border-yellow-400 rounded-3xl cursor-pointer`}
                    >
                      <div
                        className="flex flex-col justify-evenly h-full"
                        onClick={() => handleCardClick(index)}
                      >
                        <div className="px-1 pt-1 md:px-5 md:pt-3 flex flex-row flex-wrap ">
                          {data.section.map((section, j) => (
                            <div
                              className={`${
                                isDarkMode ? "border-white" : "border-rose-500"
                              } w-4 h-4 md:w-6 md:h-6 m-0.5 md:m-1 border rounded-lg flex justify-center items-center`}
                              key={j}
                            >
                              <div
                                // to={`/student-section/${data._id}/${section._id}`}
                                onClick={() =>
                                  navigate("/student-section", {
                                    state: {
                                      classId: data._id,
                                      sectionId: section._id,
                                    },
                                  })
                                }
                                className={`${
                                  isDarkMode ? "text-white" : "text-rose-500"
                                } text-xs md:text-base`}
                              >
                                {section.name}
                              </div>
                            </div>
                          ))}
                        </div>
                        {data.section.length < 8 ? (
                          <>
                            <Link
                              className="flex justify-center items-center"
                              onClick={() => {
                                setClickedClassId(data["_id"]);
                                setAddSectionModelOpen(true);
                              }}
                            >
                              <div className="bg-red-500 text-white text-center text-xs md:text-sm w-20 md:w-28 rounded-full">
                                sections
                              </div>
                            </Link>
                          </>
                        ) : (
                          <>
                            <div
                              onClick={() => {
                                setClickedClassId(data["_id"]);
                                setAddSectionModelOpen(true);
                              }}
                              className="flex justify-center items-center"
                            >
                              <div className="bg-red-500 text-white text-center text-xs md:text-sm w-20 md:w-28 rounded-full">
                                Section
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <p
                        className={`${
                          isDarkMode ? "text-white" : "text-rose-500"
                        } text-center font-semibold text-xs md:text-base`}
                      >
                        {data.name}
                      </p>
                    </div>
                  </ReactCardFlip>
                ))}

                <div
                  className={`${
                    isDarkMode ? "bg-[#152f54] bg-opacity-70" : "bg-white"
                  } m-3 md:m-6 w-16 h-16 md:w-36 md:h-36 flex justify-center items-center border border-yellow-400 rounded-3xl `}
                >
                  {classes.length === 0 ? (
                    <div className="mb-4">
                      <select
                        value=""
                        onChange={(e) =>
                          handleFirstNewClassSubmit(e.target.value)
                        }
                        className={`cursor-pointer shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                          isDarkMode
                            ? "bg-[#152f54] text-white"
                            : "text-gray-700"
                        }`}
                      >
                        <option className="" value="">
                          Select a class
                        </option>
                        {classOptions.map((item, i) => (
                          <option key={i} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <img
                      src={add}
                      alt=""
                      className="w-6 h-6 md:w-10 md:h-10"
                      onClick={handleNewClassSubmit}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* No class */}
            {classes < 1 ? (
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

      {/* Modal for adding new sections */}
      {addSectionModelOpen && (
        <Addsection
          setAddSectionModelOpen={setAddSectionModelOpen}
          clickedClassId={clickedClassId}
          getAllClass={getAllClass}
        />
      )}
    </>
  );
}

export default ClassSetup;
