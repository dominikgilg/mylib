import { useEffect } from "react";

function Test({ children }) {
  useEffect(() => {
    console.log("RENDER TEST");
  }, []);

  return <div className="dom-test">{children}</div>;
}
export default Test;
