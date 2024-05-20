import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";

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
  return (
    <div className="calendar bg-white   text-[#0F4189]  rounded-lg  w-full">
      <div className="month flex items-center justify-between p-4 text-xl font-semibold rounded-lg h-11 capitalize border-2 border-[#DCEBF8]">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="cursor-pointer text-red-600 size-10"
          onClick={handlePrevMonth}
        />
        <div className="date">{`${months[month]} ${year}`}</div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="cursor-pointer text-red-600 size-10"
          onClick={handleNextMonth}
        />
      </div>
      <div className="weekdays grid grid-cols-7 text-lg font-semibold  capitalize">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

const Day = ({ day, isActive, hasEvent, onClick, isSunday, isToday }) => {
  return (
    <div
    className={`day ${isActive ? ' border-2 border-blue-900':'"bg-white text-[#01345B] border-2 border-[#B9D7F1]' } 
      ${isSunday ? 'text-blue-950 bg-[#FFCF43] border-2 border-yellow-500 shadow-md shadow-yellow-500' : 'bg-[#DCEBF8]'} 
      ${hasEvent ? 'bg-[#D50B4F] text-white' : ''} 
      ${isToday ? 'bg-purple-300' : ''} 
      cursor-pointer rounded-lg flex font-bold p-2 h-24 shadow-md shadow-[#B9D7F1]  `}
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
  const [eventType, setEventType] = useState("Event"); // Default to "Event", can be "Holiday" as well

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Add New {eventType}</h2>
        <div className="mb-4">
          <select
            value={eventType}
            onChange={handleEventTypeChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="Event">Event</option>
            <option value="Holiday">Holiday</option>
          </select>
        </div>
        <input
          type="text"
          placeholder={`${eventType} Title`}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
        />
        
        {eventType === "Event" && ( // Only show time inputs for "Event" type
          <>
            <input
              type="time"
              value={newEvent.from}
              onChange={(e) => setNewEvent({ ...newEvent, from: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
            />
            <input
              type="time"
              value={newEvent.to}
              onChange={(e) => setNewEvent({ ...newEvent, to: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
            />
          </>
        )}
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-blue-900 text-white rounded-lg"
            onClick={handleAddEvent}
          >
            Add {eventType}
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
  const [today, setToday] = useState(new Date());
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [activeDay, setActiveDay] = useState(today.getDate());
  const [eventsArr, setEventsArr] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", from: "", to: "" });

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEventsArr(storedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(eventsArr));
  }, [eventsArr]);

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
    setToday(new Date());
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
  };

  const handleGotoDate = (e) => {
    const [mm, yyyy] = e.target.value.split("/");
    if (mm && yyyy && mm > 0 && mm < 13 && yyyy.length === 4) {
      updateCalendar(mm - 1, parseInt(yyyy));
    }
  };
  const handleAddEvent = () => {
    if (newEvent.title) {
      const timeFrom = newEvent.from ? convertTime(newEvent.from) : "";
      const timeTo = newEvent.to ? convertTime(newEvent.to) : "";
      const updatedEvents = [...eventsArr];
      let eventAdded = false;
  
      updatedEvents.forEach((eventObj) => {
        if (
          eventObj.day === activeDay &&
          eventObj.month === month + 1 &&
          eventObj.year === year
        ) {
          eventObj.events.push({
            title: newEvent.title,
            time: `${timeFrom ? timeFrom : ""}${timeFrom && timeTo ? " - " : ""}${timeTo ? timeTo : ""}`
          });
          eventAdded = true;
        }
      });
  
      if (!eventAdded) {
        updatedEvents.push({
          day: activeDay,
          month: month + 1,
          year: year,
          events: [{
            title: newEvent.title,
            time: `${timeFrom ? timeFrom : ""}${timeFrom && timeTo ? " - " : ""}${timeTo ? timeTo : ""}`
          }],
        });
      }
      setEventsArr(updatedEvents);
      setShowAddEvent(false);
      setNewEvent({ title: "", from: "", to: "" });
    } else {
      alert("Please enter the event title");
    }
  };
  
  const convertTime = (time) => {
    const [hour, minute] = time.split(":");
    const formattedHour = hour > 12 ? hour - 12 : hour;
    const format = hour >= 12 ? "PM" : "AM";
    return `${formattedHour}:${minute} ${format}`;
  };

  const updateActiveDay = (day) => {
    setActiveDay(day);
  };

  const getEventsForDay = (day) => {
    const eventForDay = eventsArr.find(
      (event) =>
        event.day === day && event.month === month + 1 && event.year === year
    );
    return eventForDay ? eventForDay.events : [];
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
      days.push(
        <Day
          key={i}
          day={i}
          isActive={i === activeDay}
          hasEvent={hasEvent}
          isSunday={isSunday}
          isToday={isToday}
          onClick={() => updateActiveDay(i)}
        />
      );
    }

    for (let j = 1; j <= nextDays; j++) {
      days.push(<Day key={`next-${j}`} day={j} />);
    }

    return days;
  };

  return (
    <div className="flex flex-col px-3 bg-blue-100">
      <div className="text-3xl font-bold text-[#303972] m-3">Calendar</div>
      <div className="flex items-center justify-center  ">
        <div className="container relative w-full h-[90%] p-5 mb-3 mx-auto flex rounded-lg bg-white text-blue-900">
          <div className="left w-3/5 p-5">
            <Calendar
              month={month}
              year={year}
              handlePrevMonth={handlePrevMonth}
              handleNextMonth={handleNextMonth}
            />
            <DaysGrid days={generateDays()} />
            <div className="goto-today flex items-center justify-between p-4 text-blue-950">
              <div className="goto flex items-center border border-blue-950 rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="mm/yyyy"
                  className="date-input w-full h-8 outline-none px-2"
                  onBlur={handleGotoDate}
                />
                <button className="goto-btn px-3 py-1 bg-blue-900 text-white">
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
          <div className="right w-2/5 p-5 border-2 border-[#B9D7F1] shadow-md shadow-[#B9D7F1]  rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold bg-white p-2 rounded-md border-2 border-[#B9D7F1]  h-11 border-[] shadow-md">
                Events on {activeDay} {months[month]} {year}
              </h2>
              <FontAwesomeIcon
                icon={faPlus}
                className="cursor-pointer p-4 rounded-md text-blue-900 hover:bg-blue-900 hover:text-white"
                onClick={() => setShowAddEvent(true)}
              />
            </div>
            <div className="events">
              {getEventsForDay(activeDay).map((event, index) => (
                <div
                  key={index}
                  className="event bg-white text-gray-800 p-3 mb-2 rounded-lg shadow"
                >
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-sm">{event.time}</p>
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
      </div>
    </div>
  );
};

export default Event;

      //dark mode code below

      
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleLeft,
//   faAngleRight,
//   faPlus,
// } from "@fortawesome/free-solid-svg-icons";
// import "tailwindcss/tailwind.css";

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const Calendar = ({ month, year, handlePrevMonth, handleNextMonth }) => {
//   return (
//     <div className="calendar bg-gray-900 text-gray-100 rounded-lg w-full">
//       <div className="month flex items-center justify-between p-4 text-xl font-semibold rounded-lg h-11 capitalize border-2 border-gray-700">
//         <FontAwesomeIcon
//           icon={faAngleLeft}
//           className="cursor-pointer text-red-400"
//           onClick={handlePrevMonth}
//         />
//         <div className="date">{`${months[month]} ${year}`}</div>
//         <FontAwesomeIcon
//           icon={faAngleRight}
//           className="cursor-pointer text-red-400"
//           onClick={handleNextMonth}
//         />
//       </div>
//       <div className="weekdays grid grid-cols-7 text-lg font-semibold capitalize">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//           <div key={day} className="text-center">
//             {day}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Day = ({ day, isActive, hasEvent, onClick, isSunday, isToday }) => {
//   return (
//     <div
//       className={`day ${
//         isActive ? "border-2 border-blue-500" : "bg-gray-800 text-gray-100 border-2 border-gray-700"
//       } ${
//         isSunday ? "text-red-400 bg-gray-700 border-2 border-red-400 shadow-md shadow-red-400" : "bg-gray-900"
//       } ${
//         hasEvent ? "bg-red-600 text-white" : ""
//       } ${
//         isToday ? "bg-purple-600" : ""
//       } cursor-pointer rounded-lg flex font-bold p-2 h-24 shadow-md shadow-gray-700`}
//       onClick={onClick}
//     >
//       {day}
//     </div>
//   );
// };

// const DaysGrid = ({ days }) => {
//   return <div className="days grid grid-cols-7 gap-3 p-4">{days}</div>;
// };

// const EventForm = ({
//   newEvent,
//   setNewEvent,
//   handleAddEvent,
//   setShowAddEvent,
// }) => {
//   const [eventType, setEventType] = useState("Event");

//   const handleEventTypeChange = (e) => {
//     setEventType(e.target.value);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
//       <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
//         <h2 className="text-lg font-bold mb-4 text-gray-100">Add New {eventType}</h2>
//         <div className="mb-4">
//           <select
//             value={eventType}
//             onChange={handleEventTypeChange}
//             className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100"
//           >
//             <option value="Event">Event</option>
//             <option value="Holiday">Holiday</option>
//           </select>
//         </div>
//         <input
//           type="text"
//           placeholder={`${eventType} Title`}
//           value={newEvent.title}
//           onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//           className="w-full p-2 mb-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100"
//         />
//         {eventType === "Event" && (
//           <>
//             <input
//               type="time"
//               value={newEvent.from}
//               onChange={(e) => setNewEvent({ ...newEvent, from: e.target.value })}
//               className="w-full p-2 mb-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100"
//             />
//             <input
//               type="time"
//               value={newEvent.to}
//               onChange={(e) => setNewEvent({ ...newEvent, to: e.target.value })}
//               className="w-full p-2 mb-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100"
//             />
//           </>
//         )}
//         <div className="flex justify-between mt-4">
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//             onClick={handleAddEvent}
//           >
//             Add {eventType}
//           </button>
//           <button
//             className="px-4 py-2 bg-gray-600 text-gray-100 rounded-lg"
//             onClick={() => setShowAddEvent(false)}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Event = () => {
//   const [today, setToday] = useState(new Date());
//   const [month, setMonth] = useState(today.getMonth());
//   const [year, setYear] = useState(today.getFullYear());
//   const [activeDay, setActiveDay] = useState(today.getDate());
//   const [eventsArr, setEventsArr] = useState([]);
//   const [showAddEvent, setShowAddEvent] = useState(false);
//   const [newEvent, setNewEvent] = useState({ title: "", from: "", to: "" });

//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
//     setEventsArr(storedEvents);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("events", JSON.stringify(eventsArr));
//   }, [eventsArr]);

//   const updateCalendar = (newMonth, newYear) => {
//     setMonth(newMonth);
//     setYear(newYear);
//     setToday(new Date(newYear, newMonth, 1));
//   };

//   const handlePrevMonth = () => {
//     const newMonth = month === 0 ? 11 : month - 1;
//     const newYear = month === 0 ? year - 1 : year;
//     updateCalendar(newMonth, newYear);
//   };

//   const handleNextMonth = () => {
//     const newMonth = month === 11 ? 0 : month + 1;
//     const newYear = month === 11 ? year + 1 : year;
//     updateCalendar(newMonth, newYear);
//   };

//   const handleToday = () => {
//     setToday(new Date());
//     setMonth(new Date().getMonth());
//     setYear(new Date().getFullYear());
//   };

//   const handleGotoDate = (e) => {
//     const [mm, yyyy] = e.target.value.split("/");
//     if (mm && yyyy && mm > 0 && mm < 13 && yyyy.length === 4) {
//       updateCalendar(mm - 1, parseInt(yyyy));
//     }
//   };

//   const handleAddEvent = () => {
//     if (newEvent.title) {
//       const timeFrom = newEvent.from ? convertTime(newEvent.from) : "";
//       const timeTo = newEvent.to ? convertTime(newEvent.to) : "";
//       const updatedEvents = [...eventsArr];
//       let eventAdded = false;

//       updatedEvents.forEach((eventObj) => {
//         if (
//           eventObj.day === activeDay &&
//           eventObj.month === month + 1 &&
//           eventObj.year === year
//         ) {
//           eventObj.events.push({
//             title: newEvent.title,
//             time: `${timeFrom ? timeFrom : ""}${
//               timeFrom && timeTo ? " - " : ""
//             }${timeTo ? timeTo : ""}`,
//           });
//           eventAdded = true;
//         }
//       });

//       if (!eventAdded) {
//         updatedEvents.push({
//           day: activeDay,
//           month: month + 1,
//           year: year,
//           events: [
//             {
//               title: newEvent.title,
//               time: `${timeFrom ? timeFrom : ""}${
//                 timeFrom && timeTo ? " - " : ""
//               }${timeTo ? timeTo : ""}`,
//             },
//           ],
//         });
//       }
//       setEventsArr(updatedEvents);
//       setShowAddEvent(false);
//       setNewEvent({ title: "", from: "", to: "" });
//     } else {
//       alert("Please enter the event title");
//     }
//   };

//   const convertTime = (time) => {
//     const [hour, minute] = time.split(":");
//     const formattedHour = hour > 12 ? hour - 12 : hour;
//     const format = hour >= 12 ? "PM" : "AM";
//     return `${formattedHour}:${minute} ${format}`;
//   };

//   const updateActiveDay = (day) => {
//     setActiveDay(day);
//   };

//   const getEventsForDay = (day) => {
//     const eventForDay = eventsArr.find(
//       (event) =>
//         event.day === day && event.month === month + 1 && event.year === year
//     );
//     return eventForDay ? eventForDay.events : [];
//   };

//   const generateDays = () => {
//     const firstDay = new Date(year, month, 1).getDay();
//     const lastDay = new Date(year, month + 1, 0).getDate();
//     const prevLastDay = new Date(year, month, 0).getDate();
//     const nextDays = 7 - new Date(year, month + 1, 0).getDay() - 1;

//     let days = [];

//     for (let x = firstDay; x > 0; x--) {
//       days.push(<Day key={`prev-${x}`} day={prevLastDay - x + 1} />);
//     }

//     for (let i = 1; i <= lastDay; i++) {
//       const hasEvent = getEventsForDay(i).length > 0;
//       const isSunday = new Date(year, month, i).getDay() === 0;
//       const isToday =
//         new Date(year, month, i).toDateString() === today.toDateString();
//       days.push(
//         <Day
//           key={i}
//           day={i}
//           isActive={i === activeDay}
//           hasEvent={hasEvent}
//           isSunday={isSunday}
//           isToday={isToday}
//           onClick={() => updateActiveDay(i)}
//         />
//       );
//     }

//     for (let j = 1; j <= nextDays; j++) {
//       days.push(<Day key={`next-${j}`} day={j} />);
//     }

//     return days;
//   };

//   return (
//     <div className="flex flex-col px-3 bg-gray-900 text-gray-100 min-h-screen">
//       <div className="text-3xl font-bold text-gray-200 m-3">Calendar</div>
//       <div className="flex items-center justify-center">
//         <div className="container relative w-full h-[90%] p-5 mb-3 mx-auto flex rounded-lg bg-gray-800 text-gray-100">
//           <div className="left w-3/5 p-5">
//             <Calendar
//               month={month}
//               year={year}
//               handlePrevMonth={handlePrevMonth}
//               handleNextMonth={handleNextMonth}
//             />
//             <DaysGrid days={generateDays()} />
//             <div className="goto-today flex items-center justify-between p-4 text-gray-300">
//               <div className="goto flex items-center border border-gray-600 rounded-md overflow-hidden">
//                 <input
//                   type="text"
//                   placeholder="mm/yyyy"
//                   className="date-input w-full h-8 outline-none px-2 bg-gray-700 text-gray-100"
//                   onBlur={handleGotoDate}
//                 />
//                 <button className="goto-btn px-3 py-1 bg-blue-500 text-white">
//                   Go
//                 </button>
//               </div>
//               <button
//                 className="today-btn px-3 py-1 bg-blue-500 text-white rounded-md"
//                 onClick={handleToday}
//               >
//                 Today
//               </button>
//             </div>
//           </div>
//           <div className="right w-2/5 p-5 border-2 border-gray-700 shadow-md shadow-gray-700 rounded-lg">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold bg-gray-800 p-2 rounded-md border-2 border-gray-700 shadow-md">
//                 Events on {activeDay} {months[month]} {year}
//               </h2>
//               <FontAwesomeIcon
//                 icon={faPlus}
//                 className="cursor-pointer p-4 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white"
//                 onClick={() => setShowAddEvent(true)}
//               />
//             </div>
//             <div className="events">
//               {getEventsForDay(activeDay).map((event, index) => (
//                 <div
//                   key={index}
//                   className="event bg-gray-700 text-gray-100 p-3 mb-2 rounded-lg shadow"
//                 >
//                   <h3 className="text-lg font-semibold">{event.title}</h3>
//                   <p className="text-sm">{event.time}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {showAddEvent && (
//           <EventForm
//             newEvent={newEvent}
//             setNewEvent={setNewEvent}
//             handleAddEvent={handleAddEvent}
//             setShowAddEvent={setShowAddEvent}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Event;
