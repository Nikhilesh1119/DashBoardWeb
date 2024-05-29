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

export async function addClass(name) {
  try {
    const response = await axios.post(`${baseURL}/class/register`, { name });
    // console.log(response);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("Class added successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function getClass() {
  try {
    const response = await axios.get(`${baseURL}/class/class-list`);
    console.log(response);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    return response;
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function getAllUnassignedTeacher() {
  try {
    const response = await axios.get(`${baseURL}/teacher/all-teachers`);
    // console.log(response);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    return response;
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function addSection(section) {
  try {
    const response = await axios.post(`${baseURL}/section/register`, section);
    // console.log(response);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("Section Add successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function getSection(classId) {
  try {
    const response = await axios.get(`${baseURL}/section/${classId}`);
    console.log(response);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    return response;
  } catch (error) {
    return Promise.reject("some error occurred");
  }
}

export async function getAllSection(classId) {
  try {
    const response = await axios.patch(`${baseURL}/section/all`, { classId });
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

export async function registerStudent(data) {
  try {
    const response = await axios.post(
      `${baseURL}/student/admin-register`,
      data
    );
    console.log(response);
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

export async function getStudentList(sectionId, pageNo) {
  try {
    const response = await axios.get(
      `${baseURL}/student/admin-student-list/${sectionId}/${pageNo}`
    );
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return response;
    }
  } catch (error) {
    return Promise.reject("some error occurred while fetching student list.");
  }
}

export async function updateStudent(studentId, data) {
  try {
    const response = await axios.put(
      `${baseURL}/student/admin-update-student/${studentId}`,
      data
    );
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("student updated successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred while updating student.");
  }
}

export async function deleteStudent(studentId) {
  try {
    // console.log("delete student : ", studentId);
    const response = await axios.delete(`${baseURL}/student/${studentId}`);
    if (response.data["status"] === "error") {
      return Promise.reject(`${response?.data?.message}`);
    }
    if (response.data["status"] === "ok") {
      return Promise.resolve("student deleted successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred while deleting student.");
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
      return Promise.resolve("holiday event deleted successfully");
    }
  } catch (error) {
    return Promise.reject("some error occurred while deleting event.");
  }
}
