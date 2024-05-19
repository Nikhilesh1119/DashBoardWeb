import axios from "axios";
import { KEY_ACCESS_TOKEN, setItem, setUsername } from "./LocalStorageManager";
const baseURL = "http://89.116.33.150:4400";
// const baseURL = "http://localhost:4000";

export async function registerAdmin(data) {
  try {
    const response = await axios.post(`${baseURL}/admin/register`, data);
    if (response.data["status"] === "error") {
      const errorField = response.data.message["field"];
      if (errorField) {
        return Promise.reject(`invalid ${errorField}`);
      } else {
        return Promise.reject(`${response?.data?.message}`);
      }
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
