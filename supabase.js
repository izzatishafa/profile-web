import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ovfqbewkbvcjrsbawbvx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92ZnFiZXdrYnZjanJzYmF3YnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxMTM3MDksImV4cCI6MjAzNDY4OTcwOX0.BCWU75j-V1py87jQ9vFEY2vlgsUz3HsDasKIPiKHUbk";

export const supabase = createClient(supabaseUrl, supabaseKey);
