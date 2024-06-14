import { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { loginAdmin, loginTeacher } from "../services/Axios.service";
import { axiosClient } from "../services/axiosClient";
import { setItem, setUsername } from "../services/LocalStorageManager";

import hide from "../assets/hide.png";
import show from "../assets/show.png";

function Login() {
  const [isAdmin, setIsAdmin] = useState(true);
  const navigate = useNavigate();

  const [ishide, setIsHide] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      return errors;
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        let response;
        if (isAdmin) {
          response = await axiosClient.post("/admin/login", {
            email: values.email,
            password: values.password,
          });
          setItem(response?.result.accessToken);
          setUsername(response?.result.username);
        } else {
          response = await axiosClient.post("/teacher/login", values);
          setItem(response?.result.accessToken);
          setUsername(response?.result.username);
        }
        toast.success(<b>Login Successfully</b>);
        resetForm();
        setTimeout(() => {
          // navigate("/");
          window.location.replace("/");
        }, 2000);
      } catch (error) {
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
        <div className="flex flex-col lg:flex-row w-8/12 sm:w-6/12 lg:w-4/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full py-10 px-12">
            <h2 className="text-3xl mb-4 text-center">
              {isAdmin ? "Admin Login" : "Teacher Login"}
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-5">
                <input
                  type="text"
                  name="email"
                  placeholder={isAdmin ? "Admin email" : "Teacher email"}
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div className="mt-5 border border-gray-400  flex justify-center items-center focus-within:border-black focus-within:border-2 focus-within:rounded-md">
                <input
                  type={ishide ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className=" py-1 px-2 w-full border-none focus:outline-none "
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
                  {formik.isSubmitting ? "Submitting..." : "Login"}
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <button
                onClick={() => setIsAdmin(!isAdmin)}
                className="text-blue-950 font-semibold"
              >
                {isAdmin ? "Switch to Teacher Login" : "Switch to Admin Login"}
              </button>
            </div>
            {isAdmin ? (
              <>
                {" "}
                <div className="text-right mt-2 text-sm">
                  Don't have an account?{" "}
                  <Link to="/signup">
                    <span className="text-blue-950 font-semibold">Signup</span>
                  </Link>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
