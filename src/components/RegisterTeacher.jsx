// import React from 'react';
import {useFormik} from 'formik';

export default function RegisterTeacher () {
  const formik = useFormik ({
    initialValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phone: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (value) {
      console.log (value);
    },
  });

  return (
    <div>
      <div className="bg-white flex justify-center  py-4 px-3">
        <div className="flex flex-col gap-8 max-w-full   mx-auto px-16 py-6 bg-[#b9d7f1] bg-opacity-30 w-[90%]">
          <div className='text-center text-2xl font-semibold md:text-4xl bg-blue-950 text-white py-3 rounded-lg'>Teacher Registration</div>
          <form onSubmit={formik.handleSubmit} className='grid grid-cols-12 gap-5'>
            <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
              <label htmlFor="username" className="text-xl ">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                className="border-2 w-full h-10 rounded-lg px-4 "
              />
            </div>
            <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
              <label htmlFor="firstname" className="text-xl ">Firstname</label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="firstname"
                onChange={formik.handleChange}
                value={formik.values.firstname}
                className="border-2 w-full h-10 rounded-lg px-4 "
              />
            </div>
            <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
              <label htmlFor="lastname" className="text-xl ">Lastname</label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
                className="border-2 w-full h-10 rounded-lg px-4 "
              />
            </div>
            <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
              <label htmlFor="email" className="text-xl ">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="border-2 w-full h-10 rounded-lg px-4 "
              />
            </div>
            <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
              <label htmlFor="password" className="text-xl ">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="border-2 w-full h-10 rounded-lg px-4 "
              />
            </div>
            <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
              <label htmlFor="Phone" className="text-xl ">Phone</label>
              <input
                id="phone"
                name="phone"
                type="number"
                placeholder="Phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="border-2 w-full h-10 rounded-lg px-4 "
              />
            </div>
            {/* <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
              <label htmlFor="university" className="text-xl ">University</label>
              <input
                id="university"
                name="university"
                type="text"
                placeholder="university"
                onChange={formik.handleChange}
                value={formik.values.university}
                className="border-2 w-full h-10 rounded-lg px-4 "
              />
            </div>
            <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
              <label htmlFor="degree" className="text-xl ">Degree</label>
              <input
                id="degree"
                name="degree"
                type="text"
                placeholder="degree"
                onChange={formik.handleChange}
                value={formik.values.degree}
                className="border-2 w-full h-10 rounded-lg px-4 "
              />
            </div> */}
            <div className=' col-span-12'>
                <input className=' bg-blue-950 text-white py-1 rounded-md border-2 w-full hover:text-blue-950 hover:bg-white hover:border-blue-950 text-xl cursor-pointer' type="submit" value="Register"/>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}
