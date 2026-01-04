import ReactFlow from "reactflow";
import InputNode from "./InputNode";
import ResultNode from "./ResultNode";
import "reactflow/dist/style.css";

const FlowCanvas = ({ prompt, setPrompt, answer }) => (
  <div style={{ height: "80vh" }}>
    <ReactFlow
      nodes={[
        {
          id: "1",
          position: { x: 0, y: 150 },
          data: { label: <InputNode prompt={prompt} setPrompt={setPrompt} /> }
        },
        {
          id: "2",
          position: { x: 400, y: 150 },
          data: { label: <ResultNode answer={answer} /> }
        }
      ]}
      edges={[{ id: "e1-2", source: "1", target: "2" }]}
      fitView
    />
  </div>
);

export default FlowCanvas;
