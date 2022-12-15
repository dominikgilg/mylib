import { useEffect } from "react";
import { NostoProvider } from "@nosto/nosto-react";

function Test({ children }) {
  console.log("inside TEST 4");

  useEffect(() => {
    console.log("USE EFFECT");
  }, []);

  return (
    <div className="dom-test">
      TEST!!!
      <NostoProvider account="asdasdas">{children}</NostoProvider>
    </div>
  );
}
export default Test;
