import { supabase } from "./client";

export const drop = async (noteId: string) => {
  const { error } = await supabase.from("notes").delete().eq("id", noteId);

  if (error) {
    console.log("[-] Error in drop note ", error);
    throw new Error("Failed to drop note");
  }
};
