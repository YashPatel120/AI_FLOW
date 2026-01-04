import axios from "axios";

export const askAI = (prompt) =>
  axios.post("http://localhost:5000/api/ask-ai", { prompt });

export const saveFlow = (data) =>
  axios.post("http://localhost:5000/api/save", data);
