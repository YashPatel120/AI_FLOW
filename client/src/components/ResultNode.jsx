import "../styles/nodes.css";

const ResultNode = ({ answer }) => (
  <div className="result-node">
    {answer || "AI Output will appear here"}
  </div>
);

export default ResultNode;
