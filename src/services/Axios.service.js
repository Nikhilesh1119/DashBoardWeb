import axios from "axios";
import {
  KEY_ACCESS_TOKEN,
  setItem,
  setUsername,
  getItem
} from "./LocalStorageManager";
// const baseURL = "http://89.116.33.150:4400";
const baseURL = "http://localhost:4000";

axios.defaults.headers.common["Authorization"] = `Bearer ${getItem(
  KEY_ACCESS_TOKEN
)}`;



export async function registerAdmin(data) {
  try {
    const response = await axios.post(`${baseURL}/admin/register`, data);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("admin signup successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function loginAdmin(data) {
  try {
    const response = await axios.post(`${baseURL}/admin/login`, data);
    if (response.data["status"] === "error") {
      const errorField = response.data.message["field"];
      if (errorField) {
        return Promise.reject(`invalid ${errorField}`);
      } else {
        return Promise.reject(`${response?.data?.message}`);
      }
    }
    if (response.data["status"] === "ok") {
      // console.log(response.data);
      setItem(response?.data?.result.accessToken);
      setUsername(response?.data.result.username);
      return Promise.resolve("login successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function registerTeacher(data) {
  try {
    // console.log("teaacher egistter");
    const response = await axios.post(`${baseURL}/teacher/register`, data);
    // console.log(response);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("Teacher registered successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function loginTeacher(data) {
  try {
    const response = await axios.post(`${baseURL}/teacher/login`, data);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      // console.log(response.data);
      setItem(response?.data?.result.accessToken);
      setUsername(response?.data.result.username);
      return Promise.resolve("login successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function registerStudent(data) {
  try {
    // console.log("teaacher egistter");
    const response = await axios.post(`${baseURL}/student/register`, data);
    // console.log(response);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("Student registered successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function addClass(data) {
  try {
    const response = await axios.post(`${baseURL}/class/add`, data);
    // console.log(response);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("Class Add successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function getClass() {
  try {
    const response = await axios.get(`${baseURL}/class/get`);
    // console.log(response);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    return response;
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function getTeacherList(pageNo) {
  try {
    const response = await axios.get(
      `${baseURL}/teacher/teacher-list/${pageNo}`
    );
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return response;
    }
  } catch (error) {
    return Promise.reject("some error occurred while fetching teacher list.");
  }
}

export async function updateTeacher(teacherId, data) {
  try {
    const response = await axios.put(`${baseURL}/teacher/${teacherId}`, data);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("teacher updated successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred while updating teacher.");
  }
}

export async function deleteTeacher(teacherId) {
  try {
    // console.log("delete teacher : ", teacherId);
    const response = await axios.delete(`${baseURL}/teacher/${teacherId}`);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("teacher deleted successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred while updating teacher.");
  }
}

export async function addEvent(data) {
  try {
    const response = await axios.post(
      `${baseURL}/holiday-event/create-event/`,
      data
    );
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("event added successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred while creating event.");
  }
}

export async function getEvents() {
  try {
    const response = await axios.get(`${baseURL}/holiday-event`);
    // console.log(response);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return response;
    }
  } catch (error) {
    return Promise.reject("some error occurred while fetching event list.");
  }
}

export async function deleteHolidayEvent(eventId) {
  try {
    // console.log("delete teacher : ", teacherId);
    const response = await axios.delete(`${baseURL}/holiday-event/${eventId}`);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("teacher deleted successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred while updating teacher.");
  }
}