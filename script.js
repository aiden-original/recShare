// hosting was chat gpt so no questions

// Initialize Supabase
  const supabaseUrl = 'https://khcmowenbrddwujsxooi.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoY21vd2VuYnJkZHd1anN4b29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MjUzMTQsImV4cCI6MjA3MTIwMTMxNH0._ybMDfD1y7JldmM-rOjJu97vJ2IBPgd5zVjYtSwY3Xg';
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
