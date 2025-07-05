import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://xxx.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "key";

export const supabase =
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
    : createClient(supabaseUrl, supabaseKey);
