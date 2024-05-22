import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import nostudent from "../assets/nostudent.png";
import { useSelector } from "react-redux";

function Studentlist() {
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const [studentData, setStudentData] = useState([
    {
      firstname: "name1",
      rollNumber: 1,
      gender: "female",
      phone: "123",
      email: "a@b.c",
    },
    {
      firstname: "name2",
      rollNumber: 2,
      gender: "male",
      phone: "234",
      email: "a@b.c",
    },
    {
      firstname: "name3",
      rollNumber: 3,
      gender: "female",
      phone: "345",
      email: "a@b.c",
    },
    {
      firstname: "name4",
      rollNumber: 4,
      gender: "male",
      phone: "456",
      email: "a@b.c",
    },
    {
      firstname: "name5",
      rollNumber: 5,
      gender: "male",
      phone: "567",
      email: "a@b.c",
    },
    {
      firstname: "name6",
      rollNumber: 6,
      gender: "female",
      phone: "678",
      email: "a@b.c",
    },
    {
      firstname: "name6",
      rollNumber: 6,
      gender: "female",
      phone: "678",
      email: "a@b.c",
    },
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleClick = (event, student) => {
    setAnchorEl(event.currentTarget);
    setSelectedStudent(student);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedStudent(null);
  };

  const handleDelete = () => {
    setStudentData(studentData.filter((student) => student !== selectedStudent));
    handleClose();
  };

  const handleUpdate = () => {
    // Implement update logic here
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div
      className={`${isDarkMode ? "bg-[#152f54]" : "bg-white"} flex flex-col`}
    >
      <div className="flex flex-col justify-center w-full bg-sky-950 max-md:max-w-full" />
      <div
        className={`${
          isDarkMode ? "bg-[#0d192f]" : "bg-blue-200"
        } flex flex-col self-center  pr-3  w-full max-w-[90%] mt-3 rounded  bg-opacity-20 max-md:max-w-full`}
      >
        {studentData.length > 0 ? (
          <>
            <div className="flex flex-col self-center w-full font-medium max-w-[1478px] max-md:max-w-full">
              <div className="flex  pl-3 gap-5 h-10 mt-10 max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-auto justify-around gap-3 text-lg text-sky-950 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-3 p-2 bg-white rounded">
                    <div>Add filter</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4d8913f21c63270c02c55918e6234435fedd0e0c01da6d1027b3115e6fe0d68?apiKey=5571847fc48447bbad48faecb3b890d9&"
                      className="shrink-0 w-2.5 aspect-[1.43] fill-slate-400"
                    />
                  </div>
                  <div className="flex flex-col grow shrink-0 justify-center items-start py-0.5 bg-white rounded basis-0 w-fit max-md:max-w-full max-md:hidden">
                    <div className="flex gap-4 px-4 py-3.5 rounded-3xl w-full ">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/74e76d4d72d68d2ad4c35f2227992fc796d750093cd063bd440074b4e49127c1?apiKey=5571847fc48447bbad48faecb3b890d9&"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div>
                        <input
                          type="text"
                          placeholder="Search here..."
                          className=" rounded-md focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-md:max-w-full px-3">
              <table className="w-full bg-white max-md:px-5 max-md:max-w-full mt-6 ">
                <thead>
                  <tr className="text-base font-medium text-indigo-900">
                    <th className="text-left px-4 py-2">FirstName</th>
                    <th className="text-left px-4 py-2 ">RollNumber</th>
                    <th className="text-left px-4 py-2 max-lg:hidden">
                      Gender
                    </th>
                    <th className="text-left px-4 py-2">Phone</th>
                    <th className="text-left px-4 py-2">Email</th>
                    <th className="text-left px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((data, i) => (
                    <tr className="border-t" key={i}>
                      <td className="flex items-center px-4 py-2">
                        <div className="bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                        <span className="ml-2">{data.firstname}</span>
                      </td>
                      <td className="px-4 py-2">#{data.rollNumber}</td>
                      <td className="px-4 py-2 text-blue-950 max-lg:hidden">
                        {data.gender}
                      </td>
                      <td className="px-4 py-2">{data.phone}</td>
                      <td className="px-4 py-2">{data.email}</td>
                      <td className="px-4 py-2">
                        <Button
                          aria-describedby={id}
                          variant="contained"
                          onClick={(e) => handleClick(e, data)}
                        >
                          Action
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex gap-5 justify-between items-start my-9 mx-10 text-sm max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="mt-4 text-blue-950">
                  <span className="leading-5 text-slate-400">Showing</span>{" "}
                  <span className="leading-5 text-blue-950">1-5</span>{" "}
                  <span className="leading-5 text-slate-400">from</span>{" "}
                  <span className="leading-5 text-blue-950">100</span>{" "}
                  <span className="leading-5 text-slate-400">data</span>
                </div>

                <Stack spacing={2}>
                  <Pagination
                    count={10}
                    variant="outlined"
                    shape="rounded"
                    onClick={(e) => console.log(e)}
                  />
                </Stack>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center text-center pb-6">
              <img src={nostudent} className="mb-4 size-52" />
              <p
                className={`${
                  isDarkMode ? "text-white" : "text-blue-950"
                } text-2xl font-bold `}
              >
                No Student at this time
              </p>
              <p
                className={`${
                  isDarkMode ? "text-white" : "text-blue-950"
                }  text-sm`}
              >
                Student will be appear here after they enroll in your School
              </p>
            </div>
          </>
        )}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="p-4">
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </div>
      </Popover>
    </div>
  );
}

export default Studentlist;
