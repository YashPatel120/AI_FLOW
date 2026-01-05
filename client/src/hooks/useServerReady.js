import { useEffect, useState } from "react";
import axios from "axios";

const useServerReady = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const ping = async () => {
      try {
        await axios.get("http://localhost:5000/api/health");
        setReady(true);
      } catch {
        setTimeout(ping, 2000);
      }
    };
    ping();
  }, []);

  return ready;
};

export default useServerReady;
