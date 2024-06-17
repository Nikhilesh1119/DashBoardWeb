import axios from "axios";
import { constant } from "lodash";
import { appConfigAction } from "../store/AppConfigSlice.jsx";
import store from "../store/store.jsx";
import {
  getItem,
  KEY_ACCESS_TOKEN,
  removeItem
} from "./LocalStorageManager.js";
// const BASE_URL = "http://89.116.33.150:4400";
const BASE_URL = "http://localhost:4000";

export const axiosClient = axios.create({
  baseURL: BASE_URL
  // withCredentials:true,
});

axiosClient.interceptors.request.use(
  (request) => {
    const accessToken = getItem(KEY_ACCESS_TOKEN);
    request.headers["Authorization"] = `Bearer ${accessToken}`;
    // console.log({"request interceptor ":request});
    return request;
  },
  (error) => {}
);

axiosClient.interceptors.response.use(
  async (response) => {
    const data = response.data;
    // console.log(data);
    if (data.status === "ok") {
      return data;
    }
    if (data.status === "error" && data.message === "jwt expired") {
      // console.log(data);
      removeItem(KEY_ACCESS_TOKEN);
      removeItem("username");
      window.location.replace("/login", "_self");
      //   console.log("error")
      return Promise.reject(data.message);
    }
    if (data.status == "error") {
      return Promise.reject(data.message);
    }
  },
  async (error) => {}
);
