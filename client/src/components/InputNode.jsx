import "../styles/nodes.css";

const InputNode = ({ prompt, setPrompt }) => (
  <div className="input-node">
    <textarea
      value={prompt}
      onChange={(e)=>setPrompt(e.target.value)}
      placeholder="Ask AI..."
    />
  </div>
);

export default InputNode;
