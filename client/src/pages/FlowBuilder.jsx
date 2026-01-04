import { useState } from "react";
import FlowCanvas from "../components/FlowCanvas";
import FlowActions from "../components/FlowActions";
import useFlowAI from "../hooks/useFlowAI";

const FlowBuilder = () => {
  const [prompt, setPrompt] = useState("");
  const { answer, run, saveFlow } = useFlowAI();

  return (
    <>
      <FlowActions
        run={() => run(prompt)}
        save={() => saveFlow({ prompt, response: answer })}
      />
      <FlowCanvas prompt={prompt} setPrompt={setPrompt} answer={answer} />
    </>
  );
};

export default FlowBuilder;
