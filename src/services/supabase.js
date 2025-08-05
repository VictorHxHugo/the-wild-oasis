import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://meinxkimmqainpemwwab.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1laW54a2ltbXFhaW5wZW13d2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODg4MDgsImV4cCI6MjA2MzI2NDgwOH0.DBdbdicpJVIUnd_ZTqxRapE_9LIiHj2I5iQftAeHlsY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
