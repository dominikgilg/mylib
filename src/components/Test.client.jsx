import { useEffect } from "react";

function Test({ children }) {
  console.log("inside TEST 3");

  useEffect(() => {
    console.log("USE EFFECT");
  }, []);

  return (
    <div className="dom-test">
      TEST!!!
      {children}
    </div>
  );
}
export default Test;
