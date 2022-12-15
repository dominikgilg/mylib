"use client";

import { React, useEffect } from "react";

function Test({ children }) {
  console.log({ React, useEffect });

  return <div className="dom-test">{children}</div>;
}
export default Test;
