import React from "react";

function Authlayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {children}
    </div>
  );
}

export default Authlayout;
