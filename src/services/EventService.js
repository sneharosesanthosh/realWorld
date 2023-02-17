import axios from "axios";

// single axios instance for our entire app.
const ApiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/sneharosesanthosh/real-world/",
  withCredentials: false,
  headers: {
    // authentication and configurations for communicationg with the server.
    Accept: "/application/json",
    "Content-Type": "/application/json",
  },
});

export function getEvents() {
  return ApiClient.get("/events");
}
