// hosting was chat gpt so no questions

console.log(supabase);
// Initialize Supabase
  const supabaseUrl = 'https://khcmowenbrddwujsxooi.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoY21vd2VuYnJkZHd1anN4b29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MjUzMTQsImV4cCI6MjA3MTIwMTMxNH0._ybMDfD1y7JldmM-rOjJu97vJ2IBPgd5zVjYtSwY3Xg';
  const Supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function callRecipeById(id) {
  const { data, error } = await Supabase
    .from('recipes')
    .select('recipe_id, dictionary') // fetch both to be sure
    .eq('recipe_id', id)
    .maybeSingle();

  if (error) {
    console.error("Supabase error:", error);
    return null;
  }

  console.log("Row fetched:", data); // 👈 see exactly what comes back

  if (data && data.dictionary) {
    return data.dictionary; // your JSON object
  } else {
    console.warn("No dictionary found for this recipe_id");
    return null;
  }
}


async function getRecipeById() {
  let recipe = await callRecipeById(counter);
  console.log(recipe); // ✅ this will be the dictionary
}

main();
