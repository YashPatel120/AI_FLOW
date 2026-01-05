import FlowBuilder from "./pages/FlowBuilder";
import ServerLoader from "./components/ServerLoader";
import useServerReady from "./hooks/useServerReady";

const App = () => {
  const ready = useServerReady();
  if (!ready) return <ServerLoader />;
  return <FlowBuilder />;
};

export default App;
