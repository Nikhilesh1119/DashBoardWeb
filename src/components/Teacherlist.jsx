import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import noteacher from "../assets/noteacher.png";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

function Teacherlist() {
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);

  const [teacherData, setTeacherData] = useState([
    {
      username: "Nikhilesh1119",
      firstname: "Nikhilesh",
      email: "nikhileshchouhan20685@acropolis.in",
      phone: "7771872012",
    },
  ]);

  return (
    <div className="flex flex-col bg-white">
      <Toaster />
      <div className="flex flex-col justify-center w-full bg-sky-950 max-md:max-w-full" />
      <div className="flex flex-col self-center  pr-3  w-full max-w-[90%] mt-3 rounded bg-blue-200 bg-opacity-20 max-md:max-w-full">
        {teacherData.length > 0 ? (
          <>
            <div className="flex flex-col self-center w-full font-medium max-w-[1478px] max-md:max-w-full">
              <div className="flex  pl-4 gap-5 h-10 mt-10 max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-auto justify-around gap-3 text-lg text-sky-950 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-3 justify-center  py-1 px-5 text-xl font-small bg-white rounded  max-w-[593px] min-w-[228] text-sky-950  max-md:px-5">
                    <div className="flex-auto">Class Coordinator</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae06430af01320f5430a1ac2b3f5ff0313ad1ce849268673bff4e768fe6463b6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                      className="shrink-0  w-4 aspect-[2] fill-sky-950 fill-opacity-30"
                    />
                  </div>
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
                    <th className="text-left px-4 py-2">UserName</th>
                    <th className="text-left px-4 py-2">FirstName</th>
                    <th className="text-left px-4 py-2">Phone</th>
                    <th className="text-left px-4 py-2">Email</th>
                    {/* <th className="text-left px-4 py-2">Contact</th> */}
                    <th className="text-left px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teacherData.map((data, i) => {
                    return (
                      <tr className="border-t" key={i}>
                        <td className="flex items-center px-4 py-2">
                          <div className="bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                          <span className="ml-2">{data.username}</span>
                        </td>
                        <td className="px-4 py-2">{data.firstname}</td>
                        <td className="px-4 py-2">{data.phone}</td>
                        <td className="px-4 py-2">{data.email}</td>
                        {/* <td className="flex items-center px-4 py-2">
                          <img
                            onClick={() => {
                              navigator.clipboard.writeText(data.phone);
                              toast("phone no copy to clipboard");
                            }}
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4471486bc24afc72d32110a20b33f3fef6d2313d2780f97feed53ff11c2c224?apiKey=5571847fc48447bbad48faecb3b890d9&"
                            className="shrink-0 w-10 aspect-square"
                          />
                          <img
                            onClick={() => {
                              parent.location(data.email);
                              toast("phone no copy to clipboard");
                            }}
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e1cba793fe3b147129c7b06e6b9d0298567bd896b6b676365054a4db975ab6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                            className="shrink-0 w-10 aspect-square"
                          />
                        </td> */}
                        <td className="px-4 py-2">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11cd8af69af68b6f85eb9d3af450dca7cf6045934053295a66bfcc55c3ff858d?apiKey=5571847fc48447bbad48faecb3b890d9&"
                            className="shrink-0 w-6 aspect-square"
                          />
                        </td>
                      </tr>
                    );
                  })}
                  {/* <tr className="bg-blue-100 bg-opacity-50 border-t">
                <td className="flex items-center px-4 py-2">
                  <div className="bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                  <span className="ml-2">Karan</span>
                </td>
                <td className="px-4 py-2 text-blue-950">#123456789</td>
                <td className="px-4 py-2 text-blue-950">Male</td>
                <td className="px-4 py-2 text-blue-950">DEF</td>
                <td className="flex items-center px-4 py-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/24045c0b946b417f55cbcf446c600ca9b0d0940a45ffb69dd6fda6d3d674436b?apiKey=5571847fc48447bbad48faecb3b890d9&"
                    className="shrink-0 w-10 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e1cba793fe3b147129c7b06e6b9d0298567bd896b6b676365054a4db975ab6?apiKey=5571847fc48447bbad48faecb3b890d9&"
                    className="shrink-0 w-10 aspect-square"
                  />
                </td>
                <td className="px-4 py-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb975b0403fd8ab558943f7ccd741723599ee289ca89fa79c3ad757085e69eea?apiKey=5571847fc48447bbad48faecb3b890d9&"
                    className="shrink-0 w-6 aspect-square fill-blue-100 fill-opacity-50"
                  />
                </td>
              </tr> */}
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
                  <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center text-center mb-6">
              <img src={noteacher} className="mb-4 size-52" />
              <p
                className={`${
                  isDarkMode ? "text-white" : "text-blue-950"
                } text-2xl font-bold `}
              >
                No Teachers at this time
              </p>
              <p
                className={`${
                  isDarkMode ? "text-white" : "text-blue-950"
                } text-sm`}
              >
                Teachers will be displayed after added
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Teacherlist;
