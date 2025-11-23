import { createClient } from "@supabase/supabase-js";
import { getConfig } from "./configHelper";

const supabaseUrl = "https://ibrkwveftamiqiizqpno.supabase.co";
const supabaseKey = getConfig("SUPABASE_ANON_KEY");

export const supabase = createClient(supabaseUrl, supabaseKey);
