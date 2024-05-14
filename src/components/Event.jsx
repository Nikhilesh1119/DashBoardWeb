import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function Events() {
  return (
    <div className="flex flex-col items-start h-screen" style={{ backgroundColor: '#EBF3FF' }}>
      {/* Calendar Heading */}
      <div>
        <h1 className="text-3xl font-bold text-blue-800 ml-8">Calendar</h1>
      </div>

      {/* Left and Right Sections */}
      <div className="w-full flex justify-between">
        {/* Left Section */}
        <div className="border-2 border-gray-300 rounded-md p-4 h-screen w-4/6 bg-white ml-4">
          <div className="h-8 flex justify-center items-center border-b-2 border-blue-400 rounded-t-md">
            {/* Centered text */}
            <div className="flex justify-between w-full">
              <div>
                <button className="p-2">
                  <ChevronLeftIcon className="text-red-500  hover:bg-slate-300 " />
                </button>
                <button className="p-1">
                  <ChevronLeftIcon className="text-red-500  hover:bg-slate-300" />
                </button>
              </div>
              <div className="font-bold text-2xl">Month</div>
              <div>
                <button className="p-1">
                  <ChevronRightIcon className="text-red-500  hover:bg-slate-300" />
                </button>
                <button className="p-2">
                  <ChevronRightIcon className="text-red-500  hover:bg-slate-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-80 rounded p-4">
          <p>Right Section Content</p>
        </div>
      </div>
    </div>
  );
}

export default Events;
