// import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { axiosClient } from "../services/axiosClient";
import hide from "../assets/hide.png";
import show from "../assets/show.png";
import { useState } from "react";

function Signup() {
  const [ishide, setIsHide] = useState(true);
const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      schoolName: "",
      affiliationNo: "",
      address: "",
      email: "",
      phone: "",
      adminName: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      return errors;
    },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log(values);
        const response = await axiosClient.post("/admin/register", values);
        console.log(response);
        toast.success(<b>register Successfully</b>);
        resetForm();
        setTimeout(() => {
          navigate('/login')
        }, 2000);
      } catch (error) {
        console.error("Error:", error);
        toast.error(<b>{error}</b>);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className="min-h-screen py-20"
      style={{
        backgroundImage:
          "linear-gradient(115deg, #000428, #00F0FF, #004E92, #065DA8)",
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-9/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full  lg:w-2/5 flex flex-col items-center  justify-center p-4 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('./src/assets/Register-Background.png')",
            }}
          >
            <h1 className="text-white text-3xl mb-3 text-center">Welcome</h1>
            <div className=" w-full">
              <p className="text-white text-center">
                Hello! welcome to School App. one step solution for schools.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/5 py-16 px-12">
            <h2 className="text-3xl mb-4 text-center">Admin Register</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-5">
                <input
                  type="text"
                  name="schoolName"
                  placeholder="school-Name"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={formik.handleChange}
                  value={formik.values.schoolName}
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="affiliationNo"
                  placeholder="Affiliation-No."
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={formik.handleChange}
                  value={formik.values.affiliationNo}
                />
              </div>

              <div className="mt-5">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="phone"
                  placeholder="XXXXXXXXXX"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="adminName"
                  placeholder="admin-Name"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={formik.handleChange}
                  value={formik.values.adminName}
                />
              </div>
              <div className="mt-5 border border-gray-400  flex justify-center items-center focus-within:border-black focus-within:border-2 focus-within:rounded-md">
                <input
                  type={ishide ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className="py-1 px-2 w-full border-none focus:outline-none"
                  onChange={formik.handleChange}
                  value={formik.values.password}
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
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-blue-900 py-3 text-center text-white"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Submitting..." : "Register Now"}
                </button>
              </div>
            </form>
            <div className="text-right mt-2 text-sm">
              Already have account?{" "}
              <Link to="/login">
                <span className="text-blue-950 font-semibold">login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
