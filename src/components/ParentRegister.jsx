import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  adminRegisterParent,
  getParent,
  registerParent,
} from "../services/Axios.service";
import { useState } from "react";
import { axiosClient } from "../services/axiosClient";
import hide from "../assets/hide.png";
import show from "../assets/show.png";

export default function ParentRegister() {
  const role = useSelector((state) => state.appAuth.role);
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const navigate = useNavigate();
  const [ishide, setIsHide] = useState(true);

  const location = useLocation();
  const { studentId } = location.state;
  const [phoneNo, setPhoneNo] = useState("");
  const [isFetched, setIsFetched] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    },
    validate: (value) => {
      const error = {};
      if (!value.username.length) error.username = "Username required";
      if (!value.firstname.length) error.firstname = "Firstname required";
      if (!value.lastname.length) error.lastname = "Lastname required";
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.email || !emailPattern.test(value.email))
        error.email = "Enter a valid email address";
      if (value.password.length < 8)
        error.password = "Password should be at least 8 characters long";
      if (value.phone.length != 10) error.phone = "Enter a valid Phone number";
      if (!value.address) error.address = "Address required";
      return error;
    },
    validateOnBlur: true,
    validateOnChange: false,

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        let response;
        if (role === "teacher") {
          response = await axiosClient.post(
            `/parent/register/${studentId}`,
            values
          );
        } else {
          response = await axiosClient.post(
            `/parent/admin-register/${studentId}`,
            values
          );
        }
        toast.success("parent registered successfully");
        setTimeout(() => {
          navigate("/student-section", {
            state: {
              classId: response.result.classId,
              sectionId: response.result.sectionId,
            },
          });
        }, 2000);
        resetForm();
      } catch (error) {
        console.error("Error:", error);
        toast.error(<b>{error}</b>);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      if (phoneNo.length === 10) {
        const response = await axiosClient.get(
          `/parent/admin-get-parent/${phoneNo}`
        );
        console.log(response);
        const parent = response.result;
        formik.setValues({
          username: parent.username || "",
          firstname: parent.firstname || "",
          lastname: parent.lastname || "",
          email: parent.email || "",
          password: parent.password || "",
          phone: parent.phone || "",
          address: parent.address || "",
        });
        setIsFetched(true);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleClear = () => {
    setPhoneNo("");
    setIsFetched(false);
    formik.resetForm();
  };

  return (
    <div>
      <div
        className={`${
          isDarkMode ? "bg-[#0d192f]" : "bg-white"
        }  flex justify-center  py-4 px-3`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <div
          className={`${
            isDarkMode
              ? "bg-[#152f54] bg-opacity-40"
              : "bg-[#b9d7f1] bg-opacity-30"
          } flex flex-col gap-8 max-w-full   mx-auto px-16 py-6  w-[90%]`}
        >
          <div className="flex flex-col">
            <div className="flex flex-col  w-full bg-white rounded-3xl max-md:max-w-full">
              <div
                className={`${
                  isDarkMode
                    ? "bg-blue-400 text-blue-950"
                    : "bg-sky-950 text-white "
                } justify-center items-start px-10 py-3 w-full text-2xl font-bold  max-md:px-5 max-md:max-w-full`}
              >
                Parent Details
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className={`${
                  isDarkMode ? "bg-[#0d192f]" : ""
                } flex flex-col px-6 py-0.5 pt-8 pb-4 w-full max-md:px-5 max-md:max-w-full`}
              >
                <div className="flex justify-between w-full mb-3">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className={`${
                      isDarkMode ? "bg-[#152f54] bg-opacity-40 text-white" : ""
                    } rounded-md focus:outline-none w-full  border px-3 py-2 border-purple-300`}
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                    }}
                    value={phoneNo}
                  />
                  <button
                    className="bg-[#2f0d0d]  text-white hover:text-blue-950  hover:bg-white hover:border-2 hover:border-red-950 py-1 px-4 ml-2 w-40 text-lg rounded-md"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    className="bg-[#0d192f]  text-white hover:text-blue-950  hover:bg-white hover:border-2 hover:border-blue-950 py-1 px-4 ml-2 w-40 text-lg rounded-md"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
                <div className="flex gap-5 max-md:flex-wrap">
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold max-md:max-w-full`}
                        >
                          User Name *
                        </div>
                        <input
                          readOnly={isFetched}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.username}
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Enter username"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] "
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                        {formik.touched.username && formik.errors.username && (
                          <p className="text-red-500 my-0">
                            {formik.errors.username}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold max-md:max-w-full`}
                        >
                          First Name *
                        </div>
                        <input
                          readOnly={isFetched}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstname}
                          id="firstname"
                          name="firstname"
                          type="text"
                          placeholder="Enter firstname"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] "
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid  max-md:pr-5 max-md:max-w-full`}
                        />
                        {formik.touched.firstname &&
                          formik.errors.firstname && (
                            <p className="text-red-500 my-0">
                              {formik.errors.firstname}
                            </p>
                          )}
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold max-md:max-w-full`}
                        >
                          LastName *
                        </div>
                        <input
                          readOnly={isFetched}
                          id="lastname"
                          name="lastname"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastname}
                          type="text"
                          placeholder="Enter lastname"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54]"
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />

                        {formik.touched.lastname && formik.errors.lastname && (
                          <p className="text-red-500 my-0">
                            {formik.errors.lastname}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold max-md:max-w-full`}
                        >
                          Email *
                        </div>
                        <input
                          readOnly={isFetched}
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          type="text"
                          placeholder="Enter email"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] "
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="text-red-500 my-0">
                            {formik.errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold max-md:max-w-full`}
                        >
                          Password *
                        </div>
                        <div className="flex items-center border border-violet-300 border-solid rounded-md  max-md:pr-5 max-md:max-w-full mb-4 focus-within:border-black focus-within:border-2 focus-within:rounded-md">
                          <input
                            readOnly={isFetched}
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            type={ishide ? "password" : "text"}
                            placeholder="Enter password"
                            className={`${
                              isDarkMode
                                ? "text-white bg-[#152f54] "
                                : "text-black bg-white bg-opacity-30"
                            } px-3.5 py-3 text-sm whitespace-nowrap w-full border-none focus:outline-none`}
                          />
                          {ishide ? (
                            <img
                              src={show}
                              onClick={() => setIsHide(!ishide)}
                              alt=""
                              className="size-5 relative right-3"
                            />
                          ) : (
                            <img
                              src={hide}
                              onClick={() => setIsHide(!ishide)}
                              alt=""
                              className="size-5 relative right-3"
                            />
                          )}
                        </div>
                        {formik.touched.password && formik.errors.password && (
                          <p className="text-red-500 my-0">
                            {formik.errors.password}
                          </p>
                        )}
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
                          readOnly={isFetched}
                          id="phone"
                          name="phone"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phone}
                          type="text"
                          placeholder="Enter phone"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54]"
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <p className="text-red-500 my-0">
                            {formik.errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${
                            isDarkMode ? "text-white" : "text-indigo-900"
                          } text-lg font-semibold  max-md:max-w-full`}
                        >
                          Address *
                        </div>
                        <input
                          readOnly={isFetched}
                          id="address"
                          name="address"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.address}
                          type="text"
                          placeholder="Enter address"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] "
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid  max-md:pr-5 max-md:max-w-full`}
                        />
                        {formik.touched.address && formik.errors.address && (
                          <p className="text-red-500 my-0">
                            {formik.errors.address}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-end mt-3 mr-3">
                      <button
                        type="submit"
                        value="Register"
                        disabled={!formik.isValid}
                        className={`${
                          isDarkMode
                            ? "text-white bg-[#152f54] bg-opacity-30"
                            : " bg-sky-950 text-white"
                        } justify-center items-center px-6 py-1.5 text-xl font-bold rounded-lg border-2 border-solid border-sky-950 max-w-[203px] `}
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
