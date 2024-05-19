import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const getAllData = () => {
  return api.get("/api/v1/get-data");
};



