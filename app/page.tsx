"use client";

import { useState } from "react";
import { encryptAES, generateKey } from "@/lib/functions/aes";
import { hash } from "@/lib/functions/hash";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import UrlArea from "@/components/form/url-area";
import Option from "@/components/form/option";
import ErrorMessage from "@/components/form/error-message";

export default function Home() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isOption, setIsOption] = useState<boolean>(false);
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  const handleCreate = async () => {
    if (!text) return;

    try {
      setIsLoading(true);
      const key = await generateKey();
      const hashedPassword = password ? await hash(password) : null;

      let content;
      if (hashedPassword) {
        content = await encryptAES(text, key, hashedPassword);
      } else {
        content = await encryptAES(text, key);
      }

      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          hasPassword: hashedPassword ? true : false,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create note");
      }

      const { id } = await res.json();
      setUrl(`${window.location.origin}/note/${id}#${key}`);
      setError(null);
    } catch {
      setError("Failed to create note, Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen mt-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-zinc-800 bg-clip-text text-transparent tracking-tight">
            Onion Note
          </h1>
          <div className="text-lg text-slate-600">
            <p>Create a private note with end-to-end encryption</p>
            <p>Encrypted Content will be deleted after reading.</p>
          </div>
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-100 transition-all duration-300 hover:shadow-xl">
          <div className="relative">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={5000}
              placeholder="Write your note here..."
              readOnly={isLoading || !!url}
              className="w-full h-56"
            />
            <div className="absolute bottom-4 right-4 text-sm text-slate-400">
              {text.length}/ 5000 length
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-4 mt-8">
            <div className="flex gap-3">
              <Button
                variant="default"
                size="lg"
                onClick={handleCreate}
                disabled={isLoading || !text || !!url || password !== confirmPassword}
              >
                Create
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsOption(!isOption)}>
                {isOption ? "Close Option" : "Open Option"}
              </Button>
            </div>
          </div>
          {isOption && (
            <Option
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
          )}
        </div>
        {url && <UrlArea url={url} />}
      </div>
    </main>
  );
}
