import axios from "axios";

export const askAI = (prompt) =>
  axios.post("https://ai-flow-fg8s.onrender.com/api/ask-ai", { prompt });

export const saveFlow = (data) =>
  axios.post("https://ai-flow-fg8s.onrender.com/api/save", data);
