import React from "react";
import { Input } from "@/components/ui/input";

interface OptionProps {
  password: string | null;
  setPassword: (value: string) => void;
  confirmPassword: string | null;
  setConfirmPassword: (value: string) => void;
}

const Option = ({ password, setPassword, confirmPassword, setConfirmPassword }: OptionProps) => {
  return (
    <div className="mt-10 sm:mt-0 flex flex-col md:flex justify-between">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex-1 space-y-2">
          <p className="text-lg font-semibold text-slate-800">Password</p>
          <p className="text-sm text-slate-500">Enter a custom password to protect your note</p>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-lg font-semibold text-slate-800">Confirm Password</p>
          <p className="text-sm text-slate-500">Enter the same password as above</p>
          <Input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password && confirmPassword && password !== confirmPassword && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Passwords do not match
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Option;
