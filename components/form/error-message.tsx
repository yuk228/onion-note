import React from "react";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto text-center w-fit  bg-red-50 text-red-700 p-4 rounded-lg mb-4">
      {children}
    </div>
  );
};

export default ErrorMessage;
