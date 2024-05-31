import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../services/axiosClient";

export default function StudentRegister() {
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const role = useSelector((state) => state.appAuth.role);
  const navigate = useNavigate();
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
      classId: useParams().classId,
      sectionId: useParams().sectionId,
    },
    validateOnBlur: true,
    validateOnChange: false,
    validate: (value) => {
      const error = {};
      if (!value.firstname.length) error.firstname = "Firstname required";
      if (!value.lastname.length) error.lastname = "Lastname required";
      if (value.rollNumber.length < 5 || value.rollNumber.length > 20)
        error.rollNumber = "RollNumber length should lie in 5 to 20 characters";
      if (!["Male", "Female"].includes(value.gender))
        error.gender = "Please select Gender";
      if (value.age < 1 || value.age > 100)
        error.age = "Enter age between 0 and 100";
      if (value.phone.length != 13) error.phone = "Enter a valid Phone number";
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.email || !emailPattern.test(value.email))
        error.email = "Enter a valid email address";
      if (!value.address) error.address = "Address required";
      return error;
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        let response;
        if (role === "teacher") {
          response = await axiosClient.post("/student/register",values);
        } else {
          response = await axiosClient.post("/student/admin-register",values);
        }
        console.log(response);
        toast.success(<b>register Successfully</b>);
        setTimeout(() => {
          navigate(`/student-section/${values.classId}/${values.sectionId}`);
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

  return (
    <div>
      <div
        className={`${
          isDarkMode ? "bg-[#0d192f]" : "bg-white"
        } flex justify-center  py-4 px-3`}
      >
        <Toaster position="top-center" reverseOrder={false} />
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
                          onBlur={formik.handleBlur}
                          id="firstname"
                          name="firstname"
                          type="text"
                          placeholder="Enter firstname"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
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
                          onBlur={formik.handleBlur}
                          id="lastname"
                          name="lastname"
                          type="text"
                          placeholder="Enter lastname"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                          <p className="text-red-500 my-0">
                            {formik.errors.lastname}
                          </p>
                        )}
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
                          onBlur={formik.handleBlur}
                          value={formik.values.rollNumber}
                          type="text"
                          placeholder="Enter rollNumber"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid  max-md:pr-5 max-md:max-w-full`}
                        />
                        {formik.touched.rollNumber &&
                          formik.errors.rollNumber && (
                            <p className="text-red-500 my-0">
                              {formik.errors.rollNumber}
                            </p>
                          )}
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
                          onBlur={formik.handleBlur}
                          value={formik.values.gender}
                          id="gender"
                          name="gender"
                          type="radio"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-black bg-white bg-opacity-30"
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
                            value="Male"
                          >
                            Male
                          </option>
                          <option
                            className={`${
                              isDarkMode ? "text-white bg-[#152f54]" : ""
                            }`}
                            value="Female"
                          >
                            Female
                          </option>
                        </select>
                        {formik.touched.gender && formik.errors.gender && (
                          <p className="text-red-500 my-0">
                            {formik.errors.gender}
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
                          Age *
                        </div>
                        <input
                          id="age"
                          name="age"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.age}
                          type="text"
                          placeholder="Enter age"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                        {formik.touched.age && formik.errors.age && (
                          <p className="text-red-500 my-0">
                            {formik.errors.age}
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
                          id="phone"
                          name="phone"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phone}
                          type="text"
                          placeholder="Enter phone"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid  max-md:pr-5 max-md:max-w-full`}
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
                          Email *
                        </div>
                        <input
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          type="text"
                          placeholder="Enter email"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
                              : "text-black bg-white bg-opacity-30"
                          } justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="text-red-500 my-0">
                            {formik.errors.email}
                          </p>
                        )}
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
                          onBlur={formik.handleBlur}
                          value={formik.values.address}
                          type="text"
                          placeholder="Enter address"
                          className={`${
                            isDarkMode
                              ? "text-white bg-[#152f54] bg-opacity-40"
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
