import { supabase } from "./client";
import { Note } from "../types";
import { drop } from "./drop";

export const get = async (noteId: string) => {
  try {
    const { data, error } = await supabase
      .from("notes")
      .select("content, hasPassword")
      .eq("id", noteId)
      .single();

    if (error) {
      throw new Error("Failed to get note");
    }

    await drop(noteId);

    return data as Note;
  } catch (error) {
    console.log("[-] Error in get note ", error);
    throw new Error("Failed to get note");
  }
};
