import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import toast, { Toaster } from "react-hot-toast";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { axiosClient } from "../services/axiosClient";


const getNextSectionName =(sections)=>{
const sectionLength = sections.length;
switch (sectionLength) {
  case 0: return 'A';    
  case 1: return "B";
  case 2: return "C";
  case 3: return "D";
  case 4: return "E";
  case 5: return "F";
  case 6: return "G";
  case 7: return "H";
}
}

function Addsection({setAddSectionModelOpen,clickedClassId,getAllClass}) {
  const classId = clickedClassId;
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
    try {
      const res = await axiosClient.get("/teacher/all-teachers");
      setTeachers(res.result);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleTeacherChange = async (teacherId) => {
    setNewSection((prevState) => ({
      ...prevState,
      teacherId: teacherId,
    }));
  };

  const handleSaveSection = async () => {
    try {
      if(sections.length===8){
        return toast.error("Reached maximum section limit");
      }
      const sectionName = getNextSectionName(sections);
      newSection["name"]=sectionName;
      const res = await axiosClient.post("section/register",newSection);
      toast.success("section registered successfully");
      setShowPopover(false);
      getsection();
      getAllClass();
    } catch (error) {
      toast.error(error);
    }finally{
      newSection["teacherId"]="";
    }
  };

  const getsection = async () => {
    const res = await axiosClient.get(`/section/${classId}`);
    // console.log(res.data.result);
    setSections(res.result);
  };

  useEffect(() => {
    getUnassignedTeacher();
    getsection();
  }, []);

  return (
    <>
    <div className="fixed inset-0 flex overflow-scroll justify-center items-center flex-col-reverse bg-black bg-opacity-50">
      <div className="w-2/3 flex justify-end">
            <div 
            onClick={()=>{setAddSectionModelOpen(false)}}
            className="text-3xl font-semibold text-white bg-blue-950  px-2  rounded-md relative bottom-12 shadow-sm shadow-yellow-300  right-2 hover:bg-blue-800 cursor-pointer justify-end"
            >
              Done
            </div>
      </div>
        <div className={` ${isDarkMode ? "bg-[#0d192f]" : "bg-white"}  h-3/4 w-2/3 overflow-scroll`}>
        <Toaster />
        <div
          className={`${
            isDarkMode
              ? "bg-[#152f54] bg-opacity-70"
              : "bg-[#b9d7f1] bg-opacity-30"
          } bg-opacity-25 mx-4 md:mx-8 lg:mx-16`}
          style={{  }}
        >
          <div className="">
            <div
              className={`${isDarkMode ? "bg-[#0d192f]" : "bg-white"} my-3 p-4`}
              // style={{ minHeight: "650px" }}
            >
              <div
                className={`flex flex-col justify-center fixed   p-3 h-12 rounded border-2 w-full sm:w-52 cursor-pointer mx-auto ${
                  isDarkMode
                    ? "bg-[#152f54] border-rose-600 text-white"
                    : "bg-white border-rose-600"
                }`}
                onClick={handleAddSectionClick}
              >
                <div className="flex gap-4 py-1.5 ">
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
                 
                </div>
              ) : (
                <div className="mt-8 flex flex-wrap gap-4  p-5">
                  {
                    sections.map((itm)=>(
                      <div key={itm["_id"]} className="grid grid-cols-12 w-full border-2 w-full bg-blue-950 border-black px-2 py-2 rounded-full mx-8">
                        <div className=" col-span-10 flex justify-between border-2 bg-slate-100 border-white border-r-0 rounded-l-full">
                          <div className="flex justify-center  items-center text-3xl font-semibold  rounded-l-full px-4 bg-yellow-300">{itm.name}</div>
                          <div className=" px-5 flex flex-col ">
                            <div className="text-xl font-semibold">{(itm.classTeacher.firstname).toUpperCase()}</div>
                            <div className="text-sm">{itm.classTeacher.username}</div>
                          </div>
                        </div>
                        <div className="bg-red-700 border-white border-2 border-l-0 text-white  rounded-r-full flex justify-center items-center px-3 sm:px-5 md:px-10">
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => {
                              setEventToDelete(itm);
                              setShowDeleteConfirmation(true);
                            }}
                            className="cursor-pointer"
                            />
                          </div>
                      </div>
                    ))
                  }
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
                    {/* <div className="mb-4">
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
                    </div> */}
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
      </div>
    </>
  );
}

export default Addsection;