import "../styles/controls.css";

const FlowActions = ({ run, save }) => (
  <div className="controls">
    <button onClick={run}>Run Flow</button>
    <button onClick={save}>Save</button>
  </div>
);

export default FlowActions;
