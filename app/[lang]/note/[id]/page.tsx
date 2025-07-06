import { Suspense } from "react";
import NoteContent from "@/app/[lang]/note/[id]/NoteContent";
import { getDictionary } from "@/lib/lang/dictionary";

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string; lang: "en" | "ja" }>;
}) {
  const { id, lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <NoteContent noteId={id} dict={dict} />
    </Suspense>
  );
}
