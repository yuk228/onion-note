import { Suspense } from "react";
import NoteContent from "@/app/note/[id]/NoteContent";

export default async function NotePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <NoteContent noteId={id} />
    </Suspense>
  );
}
