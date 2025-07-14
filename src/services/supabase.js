import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://igihwiyeototrroxsaxg.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWh3aXllb3RvdHJyb3hzYXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0NzY2MDgsImV4cCI6MjA2ODA1MjYwOH0.TqH3TwomMEgyL1IzAF-dvX5WB75eQUsqyBkfQVuHVVs";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
