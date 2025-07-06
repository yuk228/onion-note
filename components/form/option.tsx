import React from "react";
import { Input } from "@/components/ui/input";
import { CircleAlert } from "lucide-react";
import { Dictionary } from "@/lib/types";

interface OptionProps {
  password: string | null;
  setPassword: (value: string) => void;
  confirmPassword: string | null;
  setConfirmPassword: (value: string) => void;
  dict: Dictionary;
}

const Option = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  dict,
}: OptionProps) => {
  return (
    <div className="mt-10 sm:mt-0 flex flex-col md:flex justify-between">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex-1 space-y-2">
          <p className="text-lg font-semibold text-foreground">{dict.main.option.password}</p>
          <p className="text-sm text-muted-foreground">{dict.main.option.password_description}</p>
          <Input
            type="password"
            placeholder={dict.main.option.password_placeholder}
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-lg font-semibold text-foreground">
            {dict.main.option.confirm_password}
          </p>
          <p className="text-sm text-muted-foreground">
            {dict.main.option.confirm_password_description}
          </p>
          <Input
            type="password"
            placeholder={dict.main.option.confirm_password_placeholder}
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password && confirmPassword && password !== confirmPassword && (
            <p className="text-destructive text-sm mt-1 flex items-center gap-1">
              <CircleAlert className="w-4 h-4" />
              {dict.main.option.error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Option;
