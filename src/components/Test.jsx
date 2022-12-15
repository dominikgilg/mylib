"use client";

import { useEffect } from "react";

function Test({ children }) {
  console.log("inside TEST");

  console.log({ useEffect });

  return <div className="dom-test">{children}</div>;
}
export default Test;
