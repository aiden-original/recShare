// hosting was chat gpt so no questions

console.log(supabase);
// Initialize Supabase
  const supabaseUrl = 'https://khcmowenbrddwujsxooi.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoY21vd2VuYnJkZHd1anN4b29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MjUzMTQsImV4cCI6MjA3MTIwMTMxNH0._ybMDfD1y7JldmM-rOjJu97vJ2IBPgd5zVjYtSwY3Xg';
  const Supabase = supabase.createClient(supabaseUrl, supabaseKey);



async function getRecipeById(id) {
  const { data, error } = await Supabase
    .from('recipes')
    .select('recipe_id, dictionary')
    .eq('recipe_id', id)
    .maybeSingle();

  console.log("Supabase returned:", data, error); // 👈 log raw response

  if (error) {
    console.error("Supabase error:", error);
    return null;
  }

  if (!data) {
    console.warn("No row found for recipe_id =", id);
    return null;
  }

  if (!data.dictionary) {
    console.warn("Row found, but no dictionary field:", data);
    return null;
  }

  return data.dictionary;
}




async function showRecipe() {
  const recipe = await getRecipeById(1);

  if (recipe) {
    console.log("Recipe name:", recipe.DishName);
    console.log("Ingredients:", recipe.ingredients);
    console.log("Steps:", recipe.steps);
  }
}

showRecipe();
