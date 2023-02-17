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

export const getEvents = () => {
  return ApiClient.get("/events");
};

export const getEventById = (id) => {
  let oneEvent = ApiClient.get("/events/" + id).then(() => {
    console.log("Evnt:", oneEvent);
  });
};
