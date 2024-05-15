import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";

const months = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];

const Calendar = ({ month, year, handlePrevMonth, handleNextMonth }) => {
  return (
    <div className="calendar bg-white text-gray-600 rounded-lg shadow-lg">
      <div className="month flex items-center justify-between p-4 text-xl font-semibold capitalize">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="cursor-pointer hover:text-purple-500"
          onClick={handlePrevMonth}
        />
        <div className="date">{`${months[month]} ${year}`}</div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="cursor-pointer hover:text-purple-500"
          onClick={handleNextMonth}
        />
      </div>
      <div className="weekdays grid grid-cols-7 text-lg font-medium capitalize">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day} className="text-center">{day}</div>
        ))}
      </div>
    </div>
  );
};

const Day = ({ day, isActive, hasEvent, onClick }) => {
  return (
    <div
      className={`day ${isActive ? 'bg-blue-900 text-white' : 'bg-gray-200'} 
        ${hasEvent ? 'border border-purple-500' : ''} 
        cursor-pointer rounded-lg flex items-center justify-center`}
      onClick={onClick}
    >
      {day}
    </div>
  );
};

const DaysGrid = ({ days }) => {
  return (
    <div className="days grid grid-cols-7 gap-2 p-4">
      {days}
    </div>
  );
};

const EventForm = ({ newEvent, setNewEvent, handleAddEvent, setShowAddEvent }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Add New Event</h2>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
        />
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
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-blue-900 text-white rounded-lg"
            onClick={handleAddEvent}
          >
            Add Event
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
    if (newEvent.title && newEvent.from && newEvent.to) {
      const timeFrom = convertTime(newEvent.from);
      const timeTo = convertTime(newEvent.to);
      const updatedEvents = [...eventsArr];
      let eventAdded = false;
      updatedEvents.forEach((eventObj) => {
        if (
          eventObj.day === activeDay &&
          eventObj.month === month + 1 &&
          eventObj.year === year
        ) {
          eventObj.events.push({ title: newEvent.title, time: `${timeFrom} - ${timeTo}` });
          eventAdded = true;
        }
      });

      if (!eventAdded) {
        updatedEvents.push({
          day: activeDay,
          month: month + 1,
          year: year,
          events: [{ title: newEvent.title, time: `${timeFrom} - ${timeTo}` }],
        });
      }
      setEventsArr(updatedEvents);
      setShowAddEvent(false);
      setNewEvent({ title: "", from: "", to: "" });
    } else {
      alert("Please fill all the fields");
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
      (event) => event.day === day && event.month === month + 1 && event.year === year
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
      days.push(
        <Day
          key={i}
          day={i}
          isActive={i === activeDay}
          hasEvent={hasEvent}
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
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="container relative w-full max-w-5xl p-5 mx-auto flex rounded-lg bg-blue-950 text-white">
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
        <div className="right w-2/5 p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Events on {activeDay} {months[month]} {year}</h2>
            <FontAwesomeIcon
              icon={faPlus}
              className="cursor-pointer text-white hover:bg-white hover:text-blue-900"
              onClick={() => setShowAddEvent(true)}
            />
          </div>
          <div className="events">
            {getEventsForDay(activeDay).map((event, index) => (
              <div key={index} className="event bg-white text-gray-800 p-3 mb-2 rounded-lg shadow">
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
  );
};

export default Event;
