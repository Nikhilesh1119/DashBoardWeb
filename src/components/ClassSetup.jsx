import  { useState } from "react";
import add from "../assets/add.png";
import minus from "../assets/minus.png";
import students from "../assets/students.png";
import ReactCardFlip from "react-card-flip";

function ClassSetup() {
  const [count, setCount] = useState(0);
  const [classes, setClasses] = useState([
    ["Nursery", 0],
    ["LKG", 0],
    // "UKG",
    // "1st",
    // "2nd",
    // "3rd",
    // "4th",
    // "5th",
    // "6th",
    // "7th",
    // "8th",
    // "9th",
    // "10th",
    // "11th",
    // "12th",
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
    setClasses((prevClasses) => {
      // console.log("ind", prevClasses[index]);
      prevClasses[index][1] += 1;
      return [...prevClasses];
    });
  };

  const handleRemoveSection = (index) => {
    setClasses((prevClasses) => {
      prevClasses[index][1] -= 1;
      return [...prevClasses];
    });
  };

  return (
    <>
      <div>
        <div
          className="bg-[#b9d7f1] bg-opacity-25 w-[1600] my-6 mx-16"
          style={{ minHeight: "800px" }}
        >
          <div className="px-16 py-6">
            <h3 className="text-[#01345b] font-bold text-4xl ">Classroom</h3>
            <div
              className="w-[1460] bg-white my-3"
              style={{ minHeight: "650px" }}
            >
              <div className="py-3 px-11 flex flex-row flex-wrap">
                {/* minus Icon */}
                {count > 0 && count != 15 ? (
                  <>
                    <div
                      className="m-6 size-36 flex justify-center items-center border border-yellow-400 rounded-3xl cursor-pointer"
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
                  <div
                    className="m-6 size-36 border border-yellow-400 rounded-3xl cursor-pointer"
                    key={index}
                  >
                    <ReactCardFlip
                      isFlipped={isFlipped[index]}
                      flipDirection="horizontal"
                    >
                      {/* Front side of the card */}
                      <div onClick={() => handleCardClick(index)}>
                        <img src={students} className="h-3/4 w-full p-2" />
                        <p className="text-center font-semibold text-[#01345b]">
                          {classes[index][0]}
                        </p>
                      </div>

                      {/* Back side of the card */}
                      <div className="p-5 flex flex-row flex-wrap ">
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

                        {[...Array(classes[index][1])].map((_, j) => (
                          <div
                            className="size-6 mx-1 mt-1 border border-rose-500 rounded-lg flex justify-center items-center"
                            key={j}
                          >
                            <div className="text-rose-500">A</div>
                          </div>
                        ))}
                        {/* {console.log(classes[index][1])} */}
                        <div onClick={() => handleAddSection(index)}>
                          <img src={add} alt="" className="size-6 m-1" />
                        </div>
                        {/* {console.log(classes[index][1])} */}
                      </div>
                    </ReactCardFlip>
                  </div>
                ))}

                {/* Plus Icon */}
                {count != 15 ? (
                  <>
                    <div
                      className="m-6 size-36 flex justify-center items-center border border-yellow-400 rounded-3xl cursor-pointer"
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
                  <p className="text-3xl font-bold text-[#01345b]">
                    No Classroom at This time
                  </p>
                  <p className="text-[#01345b] text-lg">
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
