import React, { useEffect } from "react";

interface NostoProviderProps {
  children: React.ReactElement;
}

const Test: React.FC<NostoProviderProps> = ({ children }) => {

  return (
      <div className="hallo-test">{children}</div>
  );
};

export default Test;
