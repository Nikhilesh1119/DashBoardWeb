// import React from "react";
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import { Toaster, toast } from "react-hot-toast";
import { registerAdmin } from '../services/Axios.service';
import { axiosClient } from '../services/axiosClient';


function Signup () {
  const formik = useFormik ({
    initialValues: {
      schoolName: '',
      affiliationNo: '',
      address: '',
      email: '',
      phone: '+91',
      adminName: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      // Add validation rules here
      // if (!values.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      //   errors.email = "Invalid email address";
      // }
      // if (values.schoolName.length<5||values.schoolName.length>500) {
      //   errors.schoolName = "school name length should be between 5 and 500";
      // }
      // if (values.affiliationNo.length<5||values.affiliationNo.length>50) {
      //   errors.affiliationNo = "affiliation no. length should be between 5 and 50";
      // }

      // if(!values.phone.match(/^\+91[6-9]\d{9}$/)){
      //   errors.phone="Invalid phone number";
      // }
      return errors;
    },
  
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
          console.log(values);
          // const response = await registerAdmin(values);
          const response = await axiosClient.post("/admin/signup",values);
          console.log(response);
          toast.success(<b>register Successfully</b>);
          resetForm();
      } catch (error) {
          console.error("Error:", error);
          toast.error(<b>{error}</b>);
      } finally {
          setSubmitting(false);
      }
  }
  });

  return (
    <div
      className="min-h-screen py-20"
      style={{
        backgroundImage: 'linear-gradient(115deg, #000428, #00F0FF, #004E92, #065DA8)',
      }}
    >
      <Toaster position='top-center' reverseOrder={false}/>
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
                {/* {formik.errors.schoolName && (
                <div className="text-red-500">{formik.errors.schoolName}</div>
                )} */}
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
                {/* {formik.errors.affiliationNo && (
                <div className="text-red-500">{formik.errors.affiliationNo}</div>
                )} */}
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
                {/* {formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
                )} */}
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="phone"
                  placeholder="+91XXXXXXXXXX"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                 {/* {formik.errors.phone && (
                  <div className="text-red-500">{formik.errors.phone}</div>
                )} */}
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
              <div className="mt-5">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-blue-900 py-3 text-center text-white"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? 'Submitting...' : 'Register Now'}
                </button>
              </div>
            </form>
            <div className="text-right mt-2 text-sm">
              Already have account?
              {' '}
              <Link to="/login">
                <span className="text-blue-950 font-semibold">login</span>{' '}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
