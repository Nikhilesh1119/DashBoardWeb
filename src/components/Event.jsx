import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";
import toast, { Toaster } from "react-hot-toast";
import {
  addEvent,
  deleteHolidayEvent,
  getEvents,
} from "../services/Axios.service";
import { useSelector } from "react-redux";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = ({ month, year, handlePrevMonth, handleNextMonth }) => {
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#102945] " : "bg-white  "
      } calendar rounded-lg w-full`}
    >
      <div className="month flex items-center justify-between p-4 text-xl font-semibold rounded-lg h-11 capitalize border-2 border-[#DCEBF8]">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={`${
            isDarkMode ? "text-white" : "text-red-600"
          } cursor-pointer size-10`}
          onClick={handlePrevMonth}
        />
        <div
          className={`${isDarkMode ? "text-white" : ""} date`}
        >{`${months[month]} ${year}`}</div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`${
            isDarkMode ? "text-white" : "text-red-600"
          } cursor-pointer size-10`}
          onClick={handleNextMonth}
        />
      </div>
      <div
        className={`${
          isDarkMode ? "text-white" : ""
        } weekdays grid grid-cols-7 text-lg font-semibold capitalize`}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

const Day = ({
  day,
  isActive,
  hasEvent,
  isHoliday,
  onClick,
  isSunday,
  isToday,
}) => {
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  return (
    <div
      className={`day ${
        isActive
          ? isDarkMode
            ? "bg-[#b9d7f1] text-gray-800 border border-white "
            : "border-2 border-blue-900"
          : isDarkMode
          ? "bg-[#102946]"
          : "bg-white text-[#01345B] border-2 border-[#B9D7F1]"
      } 
      ${
        isSunday
          ? isDarkMode
            ? "text-blue-900 bg-[#FFD65C] "
            : "text-blue-950 bg-[#FFCF43] border-2 border-yellow-500 shadow-md shadow-yellow-500 "
          : isDarkMode
          ? "text-white "
          : "bg-[#DCEBF8] "
      } 
      ${hasEvent ? "bg-red-300" : ""} 
      ${isToday ? (isDarkMode ? "bg-blue-900 " : "bg-purple-300 ") : ""} 
      ${isHoliday ? "bg-yellow-300" : ""} 
      cursor-pointer rounded-lg flex font-bold p-2 h-14 justify-center shadow-md shadow-[#B9D7F1]`}
      onClick={onClick}
    >
      {day}
    </div>
  );
};

const DaysGrid = ({ days }) => {
  return <div className="days grid grid-cols-7 gap-3 p-4">{days}</div>;
};

const EventForm = ({
  newEvent,
  setNewEvent,
  handleAddEvent,
  setShowAddEvent,
}) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewEvent({ ...newEvent, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Add New Event</h2>
        <div className="mb-4">
          <input
            type="text"
            name="date"
            value={newEvent.date.toDateString()}
            readOnly
            className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newEvent.title}
            onChange={handleChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Description"
            value={newEvent.description}
            onChange={handleChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="teacherHoliday"
              checked={newEvent.teacherHoliday}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Teacher Holiday</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="studentHoliday"
              checked={newEvent.studentHoliday}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Student Holiday</span>
          </label>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-blue-900 text-white rounded-lg"
            onClick={handleAddEvent}
          >
            Submit
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg"
            onClick={() => setShowAddEvent(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const Event = () => {
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const [today, setToday] = useState(new Date());
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [activeDay, setActiveDay] = useState(today.getDate());
  const [eventsArr, setEventsArr] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [newEvent, setNewEvent] = useState({
    date: new Date(year, month, activeDay),
    title: "",
    description: "",
    teacherHoliday: false,
    studentHoliday: false,
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getEvents();
      // console.log({"response":response.data.result})
      setEventsArr(response.data.result);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleAddEvent = async () => {
    try {
      const res = await addEvent(newEvent);
      // Resetting the form values
      setShowAddEvent(false);
      fetchEvents();
      toast.success("Event created successfully");
    } catch (error) {
      toast.error(<b>{error}</b>);
    } finally {
      setNewEvent({
        date: new Date(year, month, activeDay),
        title: "",
        description: "",
        teacherHoliday: false,
        studentHoliday: false,
      });
    }
  };

  // const handleAddEvent = async () => {
  //   try {
  //     const res = await addEvent (newEvent);
  //     // Resetting the form values
  //     setShowAddEvent (false);
  //     fetchEvents ();
  //     toast.success ('Event created successfully');
  //   } catch (error) {
  //     toast.error (<b>{error}</b>);
  //   }finally{
  //     setNewEvent ({
  //       date: new Date (year, month, activeDay),
  //       title: '',
  //       description: '',
  //       teacherHoliday: false,
  //       studentHoliday: false,
  //     });
  //   }
  // };

  const updateCalendar = (newMonth, newYear) => {
    setMonth(newMonth);
    setYear(newYear);
    setToday(new Date(newYear, newMonth, 1));
  };

  const handlePrevMonth = () => {
    const newMonth = month === 0 ? 11 : month - 1;
    const newYear = month === 0 ? year - 1 : year;
    updateCalendar(newMonth, newYear);
  };

  const handleNextMonth = () => {
    const newMonth = month === 11 ? 0 : month + 1;
    const newYear = month === 11 ? year + 1 : year;
    updateCalendar(newMonth, newYear);
  };

  const handleToday = () => {
    const todayDate = new Date();
    setToday(todayDate);
    setMonth(todayDate.getMonth());
    setYear(todayDate.getFullYear());
    setActiveDay(todayDate.getDate());
    setNewEvent({ ...newEvent, date: todayDate });
  };

  const handleGotoDate = (e) => {
    const [mm, yyyy] = e.target.value.split("/");
    if (mm && yyyy && mm > 0 && mm < 13 && yyyy.length === 4) {
      updateCalendar(mm - 1, parseInt(yyyy));
    }
  };

  const updateActiveDay = (day) => {
    setActiveDay(day);
    setNewEvent({ ...newEvent, date: new Date(year, month, day) });
    setShowAddEvent(true);
  };

  const deleteEvent = async (id) => {
    // console.log(eventToDelete);
    try {
      const res = await deleteHolidayEvent(eventToDelete["_id"]);
      fetchEvents();
      toast.success("Event deleted successfully");
    } catch (error) {
      toast.error(<b>{error}</b>);
    } finally {
    }
  };

  const generateDays = () => {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const prevLastDay = new Date(year, month, 0).getDate();
    const nextDays = 7 - new Date(year, month + 1, 0).getDay() - 1;

    let days = [];

    for (let x = firstDay; x > 0; x--) {
      days.push(<Day key={`prev-${x}`} day={prevLastDay - x + 1} />);
    }

    for (let i = 1; i <= lastDay; i++) {
      const hasEvent = getEventsForDay(i).length > 0;
      const isSunday = new Date(year, month, i).getDay() === 0;
      const isToday =
        new Date(year, month, i).toDateString() === today.toDateString();
      const isHoliday = isSunday || hasEvent;
      days.push(
        <Day
          key={i}
          day={i}
          isActive={i === activeDay}
          hasEvent={hasEvent}
          isSunday={isSunday}
          isToday={isToday}
          isHoliday={isHoliday}
          onClick={() => updateActiveDay(i)}
        />
      );
    }

    for (let j = 1; j <= nextDays; j++) {
      days.push(<Day key={`next-${j}`} day={j} />);
    }

    return days;
  };

  const getEventsForDay = (day) => {
    const eventDays = eventsArr.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === month &&
        eventDate.getFullYear() === year
      );
    });
    // console.log({eventDays});
    return eventDays;
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#112138]" : "bg-blue-100"
      } flex flex-col px-3 `}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className={`${
          isDarkMode ? "text-white" : "text-[#303972]"
        } text-3xl font-bold  m-3`}
      >
        Calendar
      </div>
      <div className="flex items-center justify-center">
        <div
          className={`${
            isDarkMode ? "bg-[#0D192F] text-red-700" : "bg-white text-blue-900"
          } container relative w-full p-5 mb-3 mx-auto flex flex-col-reverse lg:flex-row rounded-lg `}
        >
          <div className="left lg:w-3/5 p-5">
            <Calendar
              month={month}
              year={year}
              handlePrevMonth={handlePrevMonth}
              handleNextMonth={handleNextMonth}
            />
            <DaysGrid days={generateDays()} />
            <div
              className={`${
                isDarkMode ? "bg-[#102945]" : "text-blue-900"
              } goto-today flex items-center justify-between p-4 rounded-xl`}
            >
              <div
                className={`${
                  isDarkMode ? "border-purple-900" : "border-blue-950 "
                } goto flex items-center border rounded-md overflow-hidden`}
              >
                <input
                  type="text"
                  placeholder="mm/yyyy"
                  className={`${
                    isDarkMode ? "bg-gray-800 text-white" : ""
                  } date-input w-full h-8 outline-none px-2`}
                  onBlur={handleGotoDate}
                />
                <button
                  className={`${
                    isDarkMode ? "bg-blue-900" : "bg-blue-900"
                  } goto-btn px-3 py-1  text-white`}
                >
                  Go
                </button>
              </div>
              <button
                className="today-btn px-3 py-1 bg-blue-900 text-white rounded-md"
                onClick={handleToday}
              >
                Today
              </button>
            </div>
          </div>
          <div
            className={`${
              isDarkMode
                ? "shadow-blue-600"
                : "shadow-[#B9D7F1] border-[#B9D7F1] "
            } right lg:w-2/5 p-5 border-2 shadow-md  rounded-lg max-h-[32rem] overflow-y-scroll`}
          >
            <div className="grid grid-cols-1 gap-3">
              {eventsArr.map((itm) => (
                <div
                  key={itm["_id"]}
                  className="border border-gray-300 shadow-lg rounded-lg overflow-hidden"
                >
                  <div className="flex justify-between items-center bg-[#172554] text-white py-2 px-4 text-lg">
                    <div>{itm.day}</div>
                    <div>{itm.date}</div>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => {
                        setEventToDelete(itm);
                        setShowDeleteConfirmation(true);
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                  <div
                    className={`${
                      isDarkMode
                        ? "bg-[#102945] text-white"
                        : "bg-white  text-[#172554]"
                    } py-2 px-4 text-2xl font-bold text-center `}
                  >
                    {itm.title}
                  </div>
                  <div
                    className={`${
                      isDarkMode
                        ? "bg-[#102945] text-gray-50"
                        : "bg-gray-50  text-gray-600"
                    } py-1 px-4 text-center `}
                  >
                    {itm.description}
                  </div>
                  <div
                    className={`${
                      isDarkMode ? "bg-blue-950" : "bg-white"
                    } flex justify-around space-x-2 p-4 `}
                  >
                    {itm.teacherHoliday && (
                      <div className="bg-green-600 text-white py-1 px-3 rounded-full text-sm">
                        Teacher Holiday
                      </div>
                    )}
                    {itm.studentHoliday && (
                      <div className="bg-yellow-600 text-white py-1 px-3 rounded-full text-sm">
                        Student Holiday
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {showAddEvent && (
          <EventForm
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            handleAddEvent={handleAddEvent}
            setShowAddEvent={setShowAddEvent}
          />
        )}
        {showDeleteConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }  p-6 rounded-lg shadow-lg w-80`}
            >
              <h2
                className={`${
                  isDarkMode ? "text-white" : "font-bold"
                } text-lg  mb-4`}
              >
                Confirm Deletion
              </h2>
              <p className={`${isDarkMode ? "text-white" : ""}`}>
                Are you sure you want to delete this event?
              </p>
              <div className="flex justify-between mt-4">
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg"
                  onClick={() => {
                    deleteEvent(eventToDelete.id);
                    setShowDeleteConfirmation(false);
                  }}
                >
                  Yes
                </button>
                <button
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={() => setShowDeleteConfirmation(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
