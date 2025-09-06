// hosting was chat gpt so no questions

console.log(supabase);
// Initialize Supabase
  const supabaseUrl = 'https://khcmowenbrddwujsxooi.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoY21vd2VuYnJkZHd1anN4b29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MjUzMTQsImV4cCI6MjA3MTIwMTMxNH0._ybMDfD1y7JldmM-rOjJu97vJ2IBPgd5zVjYtSwY3Xg';
  const Supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function callRecipeById(id) {
  const { data, error } = await Supabase
    .from('recipes')
    .select('recipe_id, dictionary')
    .eq('recipe_id', id)
    .maybeSingle();

  if (error) return null;
  if (data && data.dictionary) return data.dictionary;
  return null;
}

async function getRecipe(id) {
  const recipe = await callRecipeById(id);
  return recipe; // ✅ returns the actual value
}

async function getRecipeById() {
  let recipe = await getRecipe(counter);
  return recipe; // ✅ returns the value to whoever calls main()
}


