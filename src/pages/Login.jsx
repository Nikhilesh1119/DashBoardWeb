// import React from "react";
import {useFormik} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from "react-hot-toast";
import { loginAdmin } from '../services/Axios.service';

function Login () {
  const navigate = useNavigate();
  const formik = useFormik ({
    initialValues: {
      adminName: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      // Add validation rules here
      return errors;
    },
    onSubmit: async (values, { setSubmitting,resetForm }) => {
      try {
          console.log(values);
          const response = await loginAdmin(values);
          console.log(response);
          toast.success(<b>Login Successfully</b>);
          resetForm();
          navigate("/");
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
      style={{backgroundImage: 'linear-gradient(115deg, #000428, #00F0FF, #004E92, #065DA8)'}}
    >
      <Toaster position='top-center' reverseOrder={false}/>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-8/12 sm:w-6/12 lg:w-4/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
      
          <div className="w-full  py-10 px-12">
            <h2 className="text-3xl mb-4 text-center">Admin Login</h2>
            <form onSubmit={formik.handleSubmit}>
  
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
            <div className='text-right mt-2 text-sm'>Do not have account? <Link to="/signup"><span className='text-blue-950 font-semibold'>signup</span> </Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
