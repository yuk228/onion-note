import { push } from "@/lib/supabase/push";
import { NextResponse } from "next/server";
import { Note } from "@/lib/types";
import { verifyToken } from "@/lib/functions/verify-token";

export async function POST(request: Request) {
  try {
    const { content, hasPassword, token } = await request.json();

    if (!content || !token) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    await verifyToken(token);

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
