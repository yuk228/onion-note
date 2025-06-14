import { push } from "@/lib/supabase/push";
import { NextResponse } from "next/server";
import { Note } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const { content, hasPassword } = await request.json();

    const id = crypto.randomUUID();

    const note: Note = {
      id,
      content,
      hasPassword,
    };

    await push(note);

    return NextResponse.json({ id }, { status: 200 });
  } catch (error) {
    console.log("[-] Error in create note route ", error);
    return NextResponse.json({ error: "Please try again later." }, { status: 500 });
  }
}
