import { useEffect } from "react";
import { NostoPlacement } from "@nosto/nosto-react";

function Test({ children }) {
  useEffect(() => {
    console.log("TEST RENDERED");
  }, []);

  return (
    <div className="dom-test">
      <NostoPlacement id="placement-test"></NostoPlacement>
      {children}
    </div>
  );
}
export default Test;
