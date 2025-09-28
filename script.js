// hosting was only possible due to chat gpt so no questions, however i do i have an local version if you want to see it.

console.log(supabase);
// Initialize Supabase
  const supabaseUrl = 'https://khcmowenbrddwujsxooi.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoY21vd2VuYnJkZHd1anN4b29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MjUzMTQsImV4cCI6MjA3MTIwMTMxNH0._ybMDfD1y7JldmM-rOjJu97vJ2IBPgd5zVjYtSwY3Xg';
  const Supabase = supabase.createClient(supabaseUrl, supabaseKey);
const urlsList = ["https://img.freepik.com/premium-vector/salad-bowl-clipart-cartoon-style-vector-illustration_761413-15628.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_f36nJiE8EgAN6t3EwMmwVl4Tp8oJTcPjQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwF5BpIjuqZ8V8c4D4WGFkHd11LVKC2ZZm3w&s",
]


let counter = 1
// 1️⃣ Fetch recipe from Supabase
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

// 2️⃣ Wrapper function
async function main(id) {
  const recipe = await callRecipeById(id);
  return recipe;
}

// 3️⃣ Use it inside another async function


