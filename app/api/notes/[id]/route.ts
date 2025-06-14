import { NextResponse } from "next/server";
import { get } from "@/lib/supabase/get";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const data = await get(id);

    if (!data) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }

    return NextResponse.json({ content: data.content, hasPassword: data.hasPassword });
  } catch (error) {
    console.log("[-] Error in get note route ", error);
    return NextResponse.json({ error: "Please try again later." }, { status: 500 });
  }
}
