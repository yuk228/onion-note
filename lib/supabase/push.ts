import { supabase } from "./client";
import { Note } from "../types";

export const push = async (note: Note) => {
  try {
    const { data, error } = await supabase.from("notes").insert({
      id: note.id,
      content: note.content,
      created_at: new Date().toISOString(),
      hasPassword: note.hasPassword,
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
