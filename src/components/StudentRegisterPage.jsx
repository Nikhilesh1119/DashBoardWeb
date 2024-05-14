import { useFormik } from "formik";

export default function RegisterStudent() {
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
      <div className="bg-white flex justify-center  py-4 px-3">
        <div className="flex flex-col gap-8 max-w-full   mx-auto px-16 py-6 bg-[#b9d7f1] bg-opacity-30 w-[90%]">
          <div className="flex flex-col">
            <div className="flex flex-col pb-10 w-full bg-white rounded-3xl max-md:max-w-full">
              <div className="justify-center items-start px-10 py-5 w-full text-2xl font-bold text-white rounded bg-sky-950 max-md:px-5 max-md:max-w-full">
                Student Details
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col px-6 py-0.5 mt-8 w-full max-md:px-5 max-md:max-w-full"
              >
                <div className="flex gap-5 max-md:flex-wrap">
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div className="text-lg font-semibold text-indigo-900 max-md:max-w-full">
                          First Name *
                        </div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.firstname}
                          id="firstname"
                          name="firstname"
                          type="text"
                          className="justify-center items-start px-3.5 py-5 mt-4 text-sm whitespace-nowrap bg-white rounded-md border border-violet-300 border-solid text-zinc-400 max-md:pr-5 max-md:max-w-full"
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div className="text-lg font-semibold text-indigo-900 max-md:max-w-full">
                          Last Name *
                        </div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.lastname}
                          id="lastname"
                          name="lastname"
                          type="text"
                          className="justify-center items-start px-3.5 py-5 mt-4 text-sm whitespace-nowrap bg-white rounded-md border border-violet-300 border-solid text-zinc-400 max-md:pr-5 max-md:max-w-full"
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap mt-3">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div className="text-lg font-semibold text-indigo-900 max-md:max-w-full">
                          Roll Number *
                        </div>
                        <input
                          id="rollNumber"
                          name="rollNumber"
                          onChange={formik.handleChange}
                          value={formik.values.rollNumber}
                          type="text"
                          className="justify-center items-start px-3.5 py-5 mt-4 text-sm whitespace-nowrap bg-white rounded-md border border-violet-300 border-solid text-zinc-400 max-md:pr-5 max-md:max-w-full"
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div className="text-lg font-semibold text-indigo-900 max-md:max-w-full">
                          Gender *
                        </div>
                        <select
                          onChange={formik.handleChange}
                          value={formik.values.gender}
                          id="gender"
                          name="gender"
                          type="radio"
                          className="justify-center items-start px-3.5 py-5 mt-4 text-sm whitespace-nowrap bg-white rounded-md border border-violet-300 border-solid text-zinc-400 max-md:pr-5 max-md:max-w-full"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div className="text-lg font-semibold text-indigo-900 max-md:max-w-full">
                          Age *
                        </div>
                        <input
                          id="age"
                          name="age"
                          onChange={formik.handleChange}
                          value={formik.values.age}
                          type="text"
                          className="justify-center items-start px-3.5 py-5 mt-4 text-sm whitespace-nowrap bg-white rounded-md border border-violet-300 border-solid text-zinc-400 max-md:pr-5 max-md:max-w-full"
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div className="text-lg font-semibold text-indigo-900 max-md:max-w-full">
                          Phone *
                        </div>
                        <input
                          id="phone"
                          name="phone"
                          onChange={formik.handleChange}
                          value={formik.values.phone}
                          type="text"
                          className="justify-center items-start px-3.5 py-5 mt-4 text-sm whitespace-nowrap bg-white rounded-md border border-violet-300 border-solid text-zinc-400 max-md:pr-5 max-md:max-w-full"
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div className="text-lg font-semibold text-indigo-900 max-md:max-w-full">
                          Email *
                        </div>
                        <input
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          type="text"
                          className="justify-center items-start px-3.5 py-5 mt-4 text-sm whitespace-nowrap bg-white rounded-md border border-violet-300 border-solid text-zinc-400 max-md:pr-5 max-md:max-w-full"
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div className="text-lg font-semibold text-indigo-900 max-md:max-w-full">
                          Address *
                        </div>
                        <input
                          id="address"
                          name="address"
                          onChange={formik.handleChange}
                          value={formik.values.address}
                          type="text"
                          className="justify-center items-start px-3.5 py-5 mt-4 text-sm whitespace-nowrap bg-white rounded-md border border-violet-300 border-solid text-zinc-400 max-md:pr-5 max-md:max-w-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-3 mr-3">
                      <button
                        value="Register"
                        className="justify-center items-center px-6 py-2.5 text-xl font-bold bg-sky-950 rounded border-2 border-solid border-sky-950 max-w-[203px] text-white"
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