"use client";

import { useEffect } from "react";

function Test({ children }) {
  useEffect(() => {
    console.log("test render");
  }, []);

  return <div className="dom-test">{children}</div>;
}
export default Test;
