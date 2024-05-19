import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://yuhnszcrjoreorciecbl.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aG5zemNyam9yZW9yY2llY2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NzE2NjcsImV4cCI6MjAzMTQ0NzY2N30.c5siIOCigVourZA-0jraWCcEpSEu0idh9zpNj-KrXzA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
