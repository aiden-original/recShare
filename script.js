// hosting was chat gpt so no questions

// Initialize Supabase
  const supabaseUrl = 'https://your-supabase-project-url.supabase.co';
  const supabaseKey = 'your-anon-key';
  const supabase = supabase.createClient(supabaseUrl, supabaseKey);




async function getRecipeById(id) {
    // This line waits for Supabase to fetch the row
    let { data, error } = await supabase
        .from('recipes')
        .select('data')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error);
        return null;
    } else {
        return data.data; // returns the recipe dictionary
    }
}
// Show recipe in console (or update your DOM)
  async function showRecipe() {
    const recipe = await getRecipeById(count);
    if (recipe) {
      console.log(recipe.name);
      console.log(recipe.ingredients);
      console.log(recipe.steps);
    }
  }

  showRecipe();
