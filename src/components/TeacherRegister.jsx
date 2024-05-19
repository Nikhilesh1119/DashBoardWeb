import {useFormik} from 'formik';
import {useSelector} from 'react-redux';

export default function RegisterTeacher () {
  const isDarkMode = useSelector (state => state.appConfig.isDarkMode);

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
      <div
        className={`${isDarkMode ? 'bg-[#0d192f]' : 'bg-white'}  flex justify-center p-1  sm:py-4 sm:px-3`}
      >
        <div
          className={`${isDarkMode ? 'bg-[#152f54] bg-opacity-40' : 'bg-[#b9d7f1] bg-opacity-30'} flex flex-col gap-8 max-w-full   mx-auto px-8 sm:px-16 py-6  w-[90%]`}
        >
          <div className="flex flex-col">
            <div className="flex flex-col  w-full bg-white rounded-3xl max-md:max-w-full">
              <div
                className={`${isDarkMode ? 'bg-blue-400 text-blue-950' : 'bg-sky-950 text-white '} justify-center items-start px-10 py-3 w-full text-2xl font-bold  max-md:px-5 max-md:max-w-full`}
              >
                Teacher Details
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className={`${isDarkMode ? 'bg-[#0d192f]' : 'bg-white'} flex flex-col px-6 py-0.5 pt-8 pb-4 w-full max-md:px-5 max-md:max-w-full`}
              >
                <div className="flex gap-5 max-md:flex-wrap">
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${isDarkMode ? 'text-white' : 'text-indigo-900'} text-lg font-semibold max-md:max-w-full`}
                        >
                          User Name *
                        </div>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.username}
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Enter username"
                          className={`${isDarkMode ? 'text-white bg-[#152f54] bg-opacity-40' : 'text-zinc-400 bg-white bg-opacity-30'} justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${isDarkMode ? 'text-white' : 'text-indigo-900'} text-lg font-semibold max-md:max-w-full`}
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
                          className={`${isDarkMode ? 'text-white bg-[#152f54] bg-opacity-40' : 'text-zinc-400 bg-white bg-opacity-30'} justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid  max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${isDarkMode ? 'text-white' : 'text-indigo-900'} text-lg font-semibold max-md:max-w-full`}
                        >
                          LastName *
                        </div>
                        <input
                          id="lastname"
                          name="lastname"
                          onChange={formik.handleChange}
                          value={formik.values.lastname}
                          type="text"
                          placeholder="Enter lastname"
                          className={`${isDarkMode ? 'text-white bg-[#152f54] bg-opacity-40' : 'text-zinc-400 bg-white bg-opacity-30'} justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${isDarkMode ? 'text-white' : 'text-indigo-900'} text-lg font-semibold max-md:max-w-full`}
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
                          className={`${isDarkMode ? 'text-white bg-[#152f54] bg-opacity-40' : 'text-zinc-400 bg-white bg-opacity-30'} justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 max-md:flex-wrap">
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${isDarkMode ? 'text-white' : 'text-indigo-900'} text-lg font-semibold max-md:max-w-full`}
                        >
                          Password *
                        </div>
                        <input
                          id="password"
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          type="text"
                          placeholder="Enter password"
                          className={`${isDarkMode ? 'text-white bg-[#152f54] bg-opacity-40' : 'text-zinc-400 bg-white bg-opacity-30'} justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid  max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                      <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                        <div
                          className={`${isDarkMode ? 'text-white' : 'text-indigo-900'} text-lg font-semibold  max-md:max-w-full`}
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
                          className={`${isDarkMode ? 'text-white bg-[#152f54] bg-opacity-40' : 'text-zinc-400 bg-white bg-opacity-30'} justify-center items-start px-3.5 py-3 mb-4 text-sm whitespace-nowrap  rounded-md border border-violet-300 border-solid max-md:pr-5 max-md:max-w-full`}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-3 mr-3">
                      <button
                        value="Register"
                        className={`${isDarkMode ? 'text-white bg-blue-500 ' : ' bg-sky-950 text-white'} justify-center items-center px-6 py-1.5 text-xl font-bold rounded-lg border-2 border-solid border-sky-950 max-w-[203px] `}
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
