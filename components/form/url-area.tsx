import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ClipboardCopy } from "lucide-react";

const UrlArea = ({ url }: { url: string }) => {
  return (
    <div className="bg-background rounded-2xl shadow-lg p-8 border border-border">
      <h2 className="text-xl font-semibold mb-4">Share your note</h2>
      <div className="flex gap-2">
        <Input type="text" value={url} placeholder="" readOnly />
        <Button
          onClick={() => {
            navigator.clipboard.writeText(url);
            alert("Copied to clipboard");
          }}
          variant="secondary"
          size="lg"
        >
          <ClipboardCopy />
        </Button>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        This link and encrypted content will be deleted after reading.
      </p>
    </div>
  );
};

export default UrlArea;
