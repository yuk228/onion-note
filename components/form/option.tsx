import React from "react";
import { Input } from "@/components/ui/input";
import { CircleAlert } from "lucide-react";

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
          <p className="text-lg font-semibold text-foreground">Password</p>
          <p className="text-sm text-muted-foreground">
            Enter a custom password to protect your note
          </p>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-lg font-semibold text-foreground">Confirm Password</p>
          <p className="text-sm text-muted-foreground">Enter the same password</p>
          <Input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password && confirmPassword && password !== confirmPassword && (
            <p className="text-destructive text-sm mt-1 flex items-center gap-1">
              <CircleAlert className="w-4 h-4" />
              Passwords do not match
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Option;
