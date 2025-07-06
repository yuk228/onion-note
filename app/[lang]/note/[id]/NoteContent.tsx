"use client";

import { useState, useEffect } from "react";
import { decryptAES } from "@/lib/functions/aes";
import { hash } from "@/lib/functions/hash";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import ErrorMessage from "@/components/form/error-message";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dictionary } from "@/lib/types";

export default function NoteContent({ noteId, dict }: { noteId: string; dict: Dictionary }) {
  const [noteText, setNoteText] = useState<string>("");
  const [encrypted, setEncrypted] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hasHashedPassword, setHasHashedPassword] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const decrypt = async (encryptedText: string, password?: string) => {
    try {
      const key = window.location.hash.substring(1);
      const decrypted = await decryptAES(encryptedText, key, password);
      setNoteText(decrypted);
      setHasHashedPassword(false);
      setError(null);
    } catch {
      setError("Incorrect password or key");
    }
  };

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await fetch(`/api/notes/${noteId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          router.push("/");
          return;
        }

        const data = await res.json();
        setEncrypted(data.content);

        if (!data.hasPassword) {
          await decrypt(data.content);
        } else {
          setHasHashedPassword(data.hasPassword);
        }
      } catch {
        router.push("/");
        return;
      }
    };
    fetchNote();
  }, [noteId, router]);

  const handleSubmit = async () => {
    if (!password) {
      setError("Enter password");
      return;
    }
    await decrypt(encrypted, await hash(password));
  };

  return (
    <main className="min-h-screen p-8 mt-30 ">
      <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-lg p-8 border border-border">
        {error && <ErrorMessage>{dict.note.error.title}</ErrorMessage>}
        {hasHashedPassword && (
          <div className="mb-4 text-center">
            <h2 className="text-lg font-bold mb-2 text-center text-red-500">
              {dict.note.password.title}
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Input
                type="password"
                placeholder={dict.note.password.placeholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="default" size="lg" onClick={handleSubmit}>
                {dict.note.password.button}
              </Button>
            </div>
          </div>
        )}
        <div className="prose max-w-none">
          <Textarea value={noteText} readOnly className="w-full h-96" />
        </div>
      </div>
    </main>
  );
}
