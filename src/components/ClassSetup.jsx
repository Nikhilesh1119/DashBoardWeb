import React, { useState } from "react";
import add from "../assets/add.png";
import minus from "../assets/minus.png";
import students from "../assets/students.png";
import downbtn from "../assets/downbtn.png";
// import trash from "../assets/trash.png";
import ReactCardFlip from "react-card-flip";
import { useSelector } from "react-redux";

function ClassSetup() {
  const [count, setCount] = useState(0);
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const [classes, setClasses] = useState([
    ["Nursery", 0],
    ["LKG", 0],
    ["UKG", 0],
    ["1st", 0],
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

  // const [sectioncount, SetSectionCount] = useState(4);
  // const section = ["A", "B", "C", "D", "E"];

  const [isFlipped, setIsFlipped] = useState(Array(count).fill(false));

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

  return (
    <>
      <div className={`${isDarkMode ? "bg-[#0d192f]" : "bg-white"} py-6`}>
        <div
          className={`${
            isDarkMode
              ? "bg-[#152f54] bg-opacity-70"
              : "bg-[#b9d7f1] bg-opacity-30"
          }  bg-opacity-25 w-[1600] mx-16 `}
          style={{ minHeight: "800px" }}
        >
          <div className="px-16 py-6">
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-[#01345b]"
              } font-bold text-4xl `}
            >
              Classroom
            </h3>
            <div
              className={`${
                isDarkMode ? "bg-[#0d192f]" : "bg-white"
              } w-[1460]my-3`}
              style={{ minHeight: "650px" }}
            >
              <div className="py-3 px-11 flex flex-row justify-center flex-wrap">
                {/* minus Icon */}
                {count > 0 && count != 15 ? (
                  <>
                    <div
                      className={`${
                        isDarkMode ? "bg-[#152f54] bg-opacity-70" : "bg-white"
                      } m-6 size-36 flex justify-center items-center border border-yellow-400 rounded-3xl cursor-pointer`}
                      onClick={() => {
                        setCount(count - 1);
                        setIsFlipped((prevIsFlipped) =>
                          prevIsFlipped.slice(0, -1)
                        );
                      }}
                    >
                      <img src={minus} alt="" className="size-10" />
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {/* Flipping Cards */}
                {[...Array(count)].map((_, index) => (
                  <ReactCardFlip
                    isFlipped={isFlipped[index]}
                    flipDirection="horizontal"
                  >
                    {/* Front side of the card */}
                    <div
                      className={`${
                        isDarkMode ? "bg-[#152f54] bg-opacity-70" : "bg-white"
                      } my-6 mx-6 size-36 border border-yellow-400 rounded-3xl cursor-pointer`}
                      key={index}
                    >
                      <div className="rounded-full bg-white">
                        <img
                          src={downbtn}
                          alt="^"
                          className="absolute rounded-full size-6 top-1 right-7"
                        />
                        {/* <img
                          src={trash}
                          alt="^"
                          className="absolute rounded-full bg-white size-6 top-7 right-7"
                        /> */}
                      </div>
                      <div onClick={() => handleCardClick(index)}>
                        <img src={students} className="h-3/4 w-full p-2" />
                        <p
                          className={`${
                            isDarkMode ? "text-white" : "text-[#01345b]"
                          } text-center font-semibold `}
                        >
                          {classes[index][0]}
                        </p>
                      </div>
                    </div>
                    {/* Back side of the card */}
                    <div>
                      <div
                        className={`${
                          isDarkMode ? "bg-[#152f54] bg-opacity-70" : "bg-white"
                        } mt-6 mx-6 size-36 border border-yellow-400 rounded-3xl cursor-pointer`}
                        key={index}
                      >
                        <div>
                          <div className="p-5 flex flex-row flex-wrap ">
                            {/* minus icon */}
                            {classes[index][1] > 0 ? (
                              <>
                                <img
                                  src={minus}
                                  alt=""
                                  className="size-6 m-1"
                                  onClick={() => handleRemoveSection(index)}
                                />
                              </>
                            ) : (
                              <></>
                            )}

                            {/* section */}
                            {[...Array(classes[index][1])].map((_, j) => (
                              <div
                                className={`${
                                  isDarkMode
                                    ? "border-white"
                                    : "border-rose-500"
                                } size-6 mx-1 my-1 border  rounded-lg flex justify-center items-center`}
                                key={j}
                              >
                                <div
                                  className={`${
                                    isDarkMode ? "text-white" : "text-rose-500"
                                  } `}
                                >
                                  {j + 1}
                                </div>
                              </div>
                            ))}

                            {/* plus icon */}
                            {classes[index][1] < 8 ? (
                              <>
                                <div onClick={() => handleAddSection(index)}>
                                  <img
                                    src={add}
                                    alt=""
                                    className="size-6 m-1"
                                  />
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </div>
                      <p
                        className={`${
                          isDarkMode ? "text-white" : "text-rose-500"
                        } text-center  font-semibold `}
                      >
                        {classes[index][0]}
                      </p>
                    </div>
                  </ReactCardFlip>
                ))}

                {/* Plus Icon */}
                {count != 15 ? (
                  <>
                    <div
                      className={`${
                        isDarkMode ? "bg-[#152f54] bg-opacity-70" : "bg-white"
                      } m-6 size-36 flex justify-center items-center border border-yellow-400 rounded-3xl cursor-pointer`}
                      onClick={() => {
                        setCount(count + 1);
                        setIsFlipped((prevIsFlipped) => [
                          ...prevIsFlipped,
                          false,
                        ]);
                      }}
                    >
                      <img src={add} alt="" className="size-10" />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>

            {/* No class */}
            {count < 1 ? (
              <>
                <div className="flex flex-col justify-center items-center -translate-y-80">
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-[#01345b]"
                    } text-3xl font-bold `}
                  >
                    No Classroom at This time
                  </p>
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-[#01345b]"
                    } text-lg`}
                  >
                    classroom will appear here after you create it using icon
                    above
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassSetup;
