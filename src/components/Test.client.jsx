import { useEffect } from "react";
import { useClientOnly } from "react-client-only";

function Test({ children }) {
  const isOnClient = useClientOnly();

  useEffect(() => {
    console.log("RENDER TEST");
  }, []);

  if (!isOnClient) {
    return null;
  }

  return <div className="dom-test">{children}</div>;
}
export default Test;
