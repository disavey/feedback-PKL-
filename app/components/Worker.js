import React from "react";

function Worker({ children }) {
  return (
    <div className="text-xl font-bold">
      <p>{children}</p>
      <div className="mt-2 border-b-4 border-blue-800"></div>
    </div>
  );
}

export default Worker;
