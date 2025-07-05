import React from "react";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto text-center w-fit bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
      {children}
    </div>
  );
};

export default ErrorMessage;
