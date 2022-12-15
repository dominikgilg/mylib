import { useEffect } from "react";

function Test({ children }) {
  useEffect(() => {
    console.log("TEST RENDERED");
  }, []);

  return <div className="dom-test">{children}</div>;
}
export default Test;
