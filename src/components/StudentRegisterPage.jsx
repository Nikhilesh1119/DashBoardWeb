import { useFormik } from "formik";
import { useSelector } from "react-redux";

export default function RegisterStudent() {
  const isDarkMode = useSelector((state) => state.auth.isDarkMode);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      rollNumber: "",
      gender: "",
      age: "",
      phone: "",
      email: "",
      address: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (value) {
      console.log(value);
    },
  });

  return (
    <div>
      <div
        className={`${
          isDarkMode ? "bg-[#0d192f]" : "bg-white"
        } flex justify-center  py-4 px-3`}
      >
        <div
          className={`${
            isDarkMode
              ? "bg-[#152f54] bg-opacity-40"
              : "bg-[#b9d7f1] bg-opacity-30"
          } flex flex-col gap-8 max-w-full   mx-auto px-16 py-6 w-[90%]`}
        >
          <div className="flex flex-col">
            <div className="flex flex-col w-full bg-white  max-md:max-w-full">
              <div
                className={`${
                  isDarkMode
                    ? "bg-blue-400 text-blue-950"
                    : "bg-sky-950 text-white "
                } justify-center items-start px-10 py-3 w-full text-2xl font-bold  max-md:px-5 max-md:max-w-full`}
              >
                Student Details
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className={`${
                  isDarkMode ? "bg-[#0d192f]" : "bg-white"
                } flex flex-col px-6 py-0.5 pt-8 pb-4 w-full max-md:px-5 max-md:max-w-full`}
              >
                <div className="flex gap-5 max-md:flex-wrap">
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold  max-md:max-w-full`}
                        >
                          First Name *
                        </div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.firstname}
                          id="firstname"
                          name="firstname"
                          type="text"
                          placeholder="Enter firstname"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-zinc-400 bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid  max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold  max-md:max-w-full`}
                        >
                          Last Name *
                        </div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.lastname}
                          id="lastname"
                          name="lastname"
                          type="text"
                          placeholder="Enter lastname"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-zinc-400 bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap mt-3">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold  max-md:max-w-full`}
                        >
                          Roll Number *
                        </div>
                        <input
                          id="rollNumber"
                          name="rollNumber"
                          onChange={formik.handleChange}
                          value={formik.values.rollNumber}
                          type="text"
                          placeholder="Enter rollNumber"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-zinc-400 bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid  max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold  max-md:max-w-full`}
                        >
                          Gender *
                        </div>
                        <select
                          onChange={formik.handleChange}
                          value={formik.values.gender}
                          id="gender"
                          name="gender"
                          type="radio"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-zinc-400 bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        >
                          <option
                            className={`${
                              isDarkMode ? "text-white bg-[#152f54]" : ""
                            }`}
                            value=""
                          >
                            Select Gender
                          </option>
                          <option
                            className={`${
                              isDarkMode ? "text-white bg-[#152f54]" : ""
                            }`}
                            value="male"
                          >
                            Male
                          </option>
                          <option
                            className={`${
                              isDarkMode ? "text-white bg-[#152f54]" : ""
                            }`}
                            value="female"
                          >
                            Female
                          </option>
                          {/* <option
                            className={`${
                              isDarkMode ? "text-white bg-[#152f54]" : ""
                            }`}
                            value="other"
                          >
                            Other
                          </option> */}
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold  max-md:max-w-full`}
                        >
                          Age *
                        </div>
                        <input
                          id="age"
                          name="age"
                          onChange={formik.handleChange}
                          value={formik.values.age}
                          type="text"
                          placeholder="Enter age"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-zinc-400 bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold  max-md:max-w-full`}
                        >
                          Phone *
                        </div>
                        <input
                          id="phone"
                          name="phone"
                          onChange={formik.handleChange}
                          value={formik.values.phone}
                          type="text"
                          placeholder="Enter phone"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-zinc-400 bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid  max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold  max-md:max-w-full`}
                        >
                          Email *
                        </div>
                        <input
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          type="text"
                          placeholder="Enter email"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-zinc-400 bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold  max-md:max-w-full`}
                        >
                          Address *
                        </div>
                        <input
                          id="address"
                          name="address"
                          onChange={formik.handleChange}
                          value={formik.values.address}
                          type="text"
                          placeholder="Enter address"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-zinc-400 bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid  max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-3 mr-3">
                      <button
                        value="Register"
                        className={`${
                          isDarkMode
                            ? "text-white bg-[#152f54] bg-opacity-30"
                            : " bg-sky-950 text-white"
                        } justify-center items-center px-6 py-1.5 text-xl font-bold  rounded border-2 border-solid border-sky-950 max-w-[203px] `}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
