typewriter = new Typewriter("#ingredients-list", {
  autoStart: true,
  cursor: "",
  delay: 1,
});

typewriter
  .typeString("<li>1 1/2 oz (45ml) Vodka</li>")
  .typeString("<li>1 oz (30ml) Grenadine syrup</li>")
  .typeString("<li>4 oz (120ml) Orange juice</li>")
  .typeString("<li>Ice cubes</li>")
  .typeString("<li>Strawberry and an orange slice for garnish</li>")
  .start();

typewriter = new Typewriter("#list-of-instructions", {
  autoStart: true,
  cursor: "",
  delay: 1,
});

typewriter
  .typeString("<li>Add ice to a large wine glass.</li>")
  .typeString(
    "<li>Pour in the vodka.</li>"
  )
  .typeString(
    "<li>Add the orange juice and stir.</li>"
  )
  .typeString(
    "<li>Carefully pour the grenadine from high up on the side of the glass.</li>"
  )
  .typeString("<li>Garnish with a strawberry and an orange slice.</li>")
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
 
  let cocktailName = document.querySelector(".cocktail-name");
   cocktailName.style.display = "block";
  cocktailName.innerHTML = `<h1 class="generating" style="color:#596626">Generating a recipe for ${requestedCocktail.value}</h1>`;

 
  axios.get(apiUrl).then(displayRecipe);
}

function displayRecipe(response) {
  
 let vodkaSunriseRecipe = document.querySelector("#vodka-sunrise-recipe");
 vodkaSunriseRecipe.classList.add("hidden");
 let cocktailName = document.querySelector(".cocktail-name");
 cocktailName.style.display= "none";

  new Typewriter("#ai", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

