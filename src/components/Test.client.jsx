import { useEffect } from "react";

function Test({ children }) {
  console.log("inside TEST 2");

  console.log({ useEffect });

  return (
    <div className="dom-test">
      TEST!!!
      {children}
    </div>
  );
}
export default Test;
