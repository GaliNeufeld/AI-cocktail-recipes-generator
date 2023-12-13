function generateRecipe(event) {
  event.preventDefault();
  alert("Here is the recipe");
}

let cocktailRecipeForm = document.querySelector("#cocktail-recipe-form");
cocktailRecipeForm.addEventListener("sumbit", generateRecipe);
