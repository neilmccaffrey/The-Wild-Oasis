import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jqmcidsceszpuaxhpgaw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxbWNpZHNjZXN6cHVheGhwZ2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NDgwNzEsImV4cCI6MjAxNjQyNDA3MX0.isigyIDoox3UJAn06swpWMpt42v_qOqfcFM225kUQ9U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
