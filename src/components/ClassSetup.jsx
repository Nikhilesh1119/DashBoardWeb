import React, { useEffect, useState } from "react";
import add from "../assets/add.png";
import students from "../assets/students.png";
import downbtn from "../assets/downbtn.png";
import ReactCardFlip from "react-card-flip";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { addClass, getClass } from "../services/Axios.service";
import toast, { Toaster } from "react-hot-toast";
import Addsection from "./Addsection";

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
const getNextClassName=(classes)=>{
  if(classes.length==0)return classOptions[0];
  const lastClass = classes[classes.length-1].name;
  console.log({lastClass})
  switch(lastClass){
    case "Pre-Nursery":{return classOptions[1]; break;}
    case "Nursery":{return classOptions[2]; break;}
    case "LKG":{return classOptions[3]; break;}
    case "UKG":{return classOptions[4]; break;}
    case "1st":{return classOptions[5]; break;}
    case "2nd":{return classOptions[6]; break;}
    case "3rd":{return classOptions[7]; break;}
    case "4th":{return classOptions[8]; break;}
    case "5th":{return classOptions[9]; break;}
    case "6th":{return classOptions[10]; break;}
    case "7th":{return classOptions[11]; break;}
    case "8th":{return classOptions[12]; break;}
    case "9th":{return classOptions[13]; break;}
    case "10th":{return classOptions[14]; break;}
    case "11th":{return classOptions[15]; break;}
  }
}

function ClassSetup() {
  const [count, setCount] = useState(0);
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const [classes, setClasses] = useState([]);
  const [isFlipped, setIsFlipped] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newClassName, setNewClassName] = useState("");
  const[clickedClassId ,setClickedClassId] = useState("");
  const [addSectionModelOpen,setAddSectionModelOpen] = useState(false);

  const handleCardClick = (index) => {
    setIsFlipped((prevIsFlipped) => {
      const newIsFlipped = [...prevIsFlipped];
      newIsFlipped[index] = !newIsFlipped[index];
      return newIsFlipped;
    });
  };

  const getAllClass = async () => {
    const res = await getClass();
    setClasses(res.data.result);
  };

  const handleNewClassSubmit = async () => {
    try {
      if(classes.length===16){
        return toast.error("Classroom is full of classes.");
      }
      const name = getNextClassName(classes);
      console.log({"next class name : ":name});
      const res = await addClass(name);
      getAllClass();
      toast.success(res);
      // closeModal();
      getAllClass();
    } catch (error) {
      toast.error(error);
    }
  };
  

  useEffect(() => {
    getAllClass();
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
                      <div className="flex flex-col justify-evenly h-full" onClick={() => handleCardClick(index)}>
                        <div className="px-1 pt-1 md:px-5 md:pt-3 flex flex-row flex-wrap ">
                          {data.section.map((section, j) => (
                            <div
                              className={`${
                                isDarkMode ? "border-white" : "border-rose-500"
                              } w-4 h-4 md:w-6 md:h-6 m-0.5 md:m-1 border rounded-lg flex justify-center items-center`}
                              key={j}
                            >
                              <Link
                                to={`/student-section/${data._id}/${section._id}`}
                                className={`${
                                  isDarkMode ? "text-white" : "text-rose-500"
                                } text-xs md:text-base`}
                              >
                                {section.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                        {data.section.length < 8 ? (
                          <>
                            <Link
                              // to={`/addsection/${data._id}`}
                              className="flex justify-center items-center"
                              onClick={()=>{setClickedClassId(data["_id"]); setAddSectionModelOpen(true)}}
                            >
                              <div className="bg-red-500 text-white text-center text-xs md:text-sm w-20 md:w-28 rounded-full">
                                Add Section
                              </div>
                            </Link>
                          </>
                        ) : (
                          <></>
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

                {/* Plus Icon */}
                {count !== 15 ? (
                  <div
                    className={`${
                      isDarkMode ? "bg-[#152f54] bg-opacity-70" : "bg-white"
                    } m-3 md:m-6 w-16 h-16 md:w-36 md:h-36 flex justify-center items-center border border-yellow-400 rounded-3xl cursor-pointer`}
                    onClick={handleNewClassSubmit}
                  >
                    <img src={add} alt="" className="w-6 h-6 md:w-10 md:h-10" />
                  </div>
                ) : null}
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
      {
        addSectionModelOpen&&<Addsection setAddSectionModelOpen={setAddSectionModelOpen} clickedClassId = {clickedClassId} getAllClass={getAllClass}/>
        // <div className="fixed inset-0 flex justify-center items-center flex-col bg-black bg-opacity-50">
        //   <div className="w-2/3 flex justify-end">
        //    <div 
        //    onClick={()=>{setAddSectionModelOpen(false)}}
        //    className="text-3xl font-semibold text-black bg-white px-2  rounded-full hover:bg-slate-200 hover:text-slate-900 cursor-pointer justify-end"
        //    >
        //     X
        //   </div>
        //   </div>
        //   <div className="bg-white h-3/4 w-2/3">

        //   </div>
        //   {/* <button onClick={()=>{setAddSectionModelOpen(false)}}>remove inset</button> */}
        // </div>
      }
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Class"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl mb-4">Add New Class</h2>
        <select
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
          className="input mb-4 p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select class</option>
          {classOptions.map((classOption, index) => (
            <option key={index} value={classOption}>
              {classOption}
            </option>
          ))}
        </select>
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn-secondary mr-2">
            Cancel
          </button>
          <button onClick={handleNewClassSubmit} className="btn-primary">
            Add
          </button>
        </div>
      </Modal> */}

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
