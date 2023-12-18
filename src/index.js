typewriter = new Typewriter("#ingredients-list", {
  autoStart: true,
  cursor: "",
  delay: 1,
});

typewriter
  .typeString("<li>1 1/2 oz vodka</li>")
  .typeString("<li>1/2 oz peach schnapps</li>")
  .typeString("<li>2 oz cranberry juice</li>")
  .typeString("<li>2 oz orange juice</li>")
  .typeString("<li>Orange slice and maraschino cherryfor garnish</li>")
  .start();

typewriter = new Typewriter("#list-of-instructions", {
  autoStart: true,
  cursor: "",
  delay: 1,
});

typewriter
  .typeString("<li>Fill a shaker with ice cubes.</li>")
  .typeString(
    "<li>Add the vodka, peach schnapps, cranberry juice, and orange juice to the shaker.</li>"
  )
  .typeString(
    "<li>Secure the lid on the shaker and shake well to combine and chill the ingredients.</li>"
  )
  .typeString(
    "<li>Strain the mixture into a highball glass filled with ice.</li>"
  )
  .typeString("<li>Garnish with an orange slice and a maraschino cherry.</li>")
  .start();

let cocktailRecipeForm = document.querySelector("#cocktail-recipe-form");
cocktailRecipeForm.addEventListener("submit", generateRecipe);

function generateRecipe(event) {
  event.preventDefault();
  let requestedCocktail = document.querySelector("#requested-cocktail");
  let apiKey = "303b041t9dc7c1ce08f4ao48696a7fa8";
  let context =
    "You are an excellent bartender. Your mission is to provide the recipe of a cocktail in basic HTML based on the user instructions. Provide ingredients and instructions only";
  let prompt = `user instructions: generate a recipe for the cocktail ${requestedCocktail.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
 
 let cocktailNameElement = document.querySelector("#cocktail-name");
 cocktailNameElement.innerHTML = `<h1 class="generating" style="color:#596626">Generating a recipe for ${requestedCocktail.value}</h2>`;
 
 
  axios.get(apiUrl).then(displayRecipe);
}

function displayRecipe(response) {
  
 let sobRecipe = document.querySelector("#sob-recipe");
sobRecipe.classList.add("hidden");

  new Typewriter("#ai", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

