import { useState } from "react";
import { askAI, saveFlow } from "../api/ai.api";

const useFlowAI = () => {
  const [answer, setAnswer] = useState("");

  const run = async (prompt) => {
    const res = await askAI(prompt);
    setAnswer(res.data.answer);
  };

  return { answer, run, saveFlow };
};

export default useFlowAI;
