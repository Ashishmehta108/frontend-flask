import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const updateSectionApiCall = (data) => {
  return api.post("/update-section", data);
};
