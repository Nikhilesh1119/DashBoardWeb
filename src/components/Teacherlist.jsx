import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import noteacher from "../assets/noteacher.png";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { getTeacherList } from "../services/Axios.service";

function Teacherlist() {
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const [pageNo, setPageNo] = useState(1);
  const [totalTeacherCount, setTotalTeacherCount] = useState(5);
  const [limit, setLimit] = useState(5);
  const [teacherData, setTeacherData] = useState([]);
  const [teacherList, setTeacherList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getTeacher = async () => {
    const teacherList = await getTeacherList(pageNo);
    setTotalTeacherCount(teacherList.data.result.totalCount);
    setLimit(teacherList.data.result.limit);
    setTeacherData(teacherList.data.result.teacherList);
    setTeacherList(teacherList.data.result.teacherList);
  };

  useEffect(() => {
    getTeacher();
  }, [pageNo]);

  const handlePageChange = (event, value) => {
    setPageNo(value);
  };

  const handleSearch = () => {
    const searchInputLower = searchInput.toLowerCase();
    const searchedTeacher = teacherList.filter(
      (itm) => itm.firstname.toLowerCase() === searchInputLower || itm.username.toLowerCase() === searchInputLower
    );
    setTeacherData(searchedTeacher);
  };
  

  const handleClear = () => {
    setSearchInput("");
    setTeacherData(teacherList);
  };

  return (
    <div className="flex flex-col bg-white">
      <Toaster />
      <div className="flex flex-col justify-center w-full bg-sky-950 max-md:max-w-full" />
      <div className="flex flex-col self-center pr-3 w-full max-w-[90%] mt-3 rounded bg-blue-200 bg-opacity-20 max-md:max-w-full">
        <div className="flex flex-col self-center w-full font-medium max-w-[1478px] max-md:max-w-full">
          <div className="flex pl-4 gap-5 h-10 mt-10 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-auto justify-around gap-3 text-lg text-sky-950 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col grow shrink-0 justify-center items-start py-0.5 bg-white rounded basis-0 w-fit max-md:max-w-full max-md:hidden">
                <div className="flex gap-4 px-4 py-3.5 rounded-3xl w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/74e76d4d72d68d2ad4c35f2227992fc796d750093cd063bd440074b4e49127c1?apiKey=5571847fc48447bbad48faecb3b890d9&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div className="flex justify-between w-full">
                    <input
                      type="text"
                      placeholder="Search here..."
                      className="rounded-md focus:outline-none w-full"
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                      }}
                      value={searchInput}
                    />
                    <button
                      className="bg-[#2f0d0d]  text-white hover:text-blue-950  hover:bg-white hover:border-2 hover:border-red-950 py-1 px-4 ml-2 w-40 text-lg rounded-md"
                      onClick={handleClear}
                    >
                      Clear
                    </button>
                    <button
                      className="bg-[#0d192f]  text-white hover:text-blue-950  hover:bg-white hover:border-2 hover:border-blue-950 py-1 px-4 ml-2 w-40 text-lg rounded-md"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {teacherData.length > 0 ? (
          <>
            <div className="w-full max-md:max-w-full px-3">
              <table className="w-full bg-white max-md:px-5 max-md:max-w-full mt-6">
                <thead>
                  <tr className="text-base font-medium text-indigo-900">
                    <th className="text-left px-4 py-2">UserName</th>
                    <th className="text-left px-4 py-2">FirstName</th>
                    <th className="text-left px-4 py-2">Phone</th>
                    <th className="text-left px-4 py-2">Email</th>
                    <th className="text-left px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teacherData.map((data, i) => (
                    <tr className="border-t" key={i}>
                      <td className="flex items-center px-4 py-2">
                        <div className="bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                        <span className="ml-2">{data.username}</span>
                      </td>
                      <td className="px-4 py-2">{data.firstname}</td>
                      <td className="px-4 py-2">{data.phone}</td>
                      <td className="px-4 py-2">{data.email}</td>
                      <td className="px-4 py-2">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/11cd8af69af68b6f85eb9d3af450dca7cf6045934053295a66bfcc55c3ff858d?apiKey=5571847fc48447bbad48faecb3b890d9&"
                          className="shrink-0 w-6 aspect-square"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex gap-5 justify-between items-start my-9 mx-10 text-sm max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="mt-4 text-blue-950">
                  <span className="leading-5 text-slate-400">Showing</span>{" "}
                  <span className="leading-5 text-blue-950">
                    {pageNo * limit - (limit - 1)} - {Math.min(totalTeacherCount, pageNo * limit)}
                  </span>{" "}
                  <span className="leading-5 text-slate-400">from</span>{" "}
                  <span className="leading-5 text-blue-950">{totalTeacherCount}</span>{" "}
                  <span className="leading-5 text-slate-400">data</span>
                </div>
                <Stack spacing={2}>
                  <Pagination
                    count={Math.ceil(totalTeacherCount / limit)}
                    variant="outlined"
                    shape="rounded"
                    page={pageNo}
                    onChange={handlePageChange}
                  />
                </Stack>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <img src={noteacher} className="mb-4 size-52" />
            <p className={`${isDarkMode ? "text-white" : "text-blue-950"} text-2xl font-bold `}>
              No Teachers found
            </p>
            <p className={`${isDarkMode ? "text-white" : "text-blue-950"} text-sm`}>
              Please try another search term
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Teacherlist;