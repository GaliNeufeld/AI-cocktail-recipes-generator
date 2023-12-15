function generateRecipe(event) {
  event.preventDefault();
 let cocktailNameElement = document.querySelector("#cocktail-name");
 cocktailNameElement.innerHTML = "sex on the beach";
 let ingredientsListElement = document.getElementById("ingredients-list");
 
 typewriter = new Typewriter("#ingredients-list", {
   autoStart: true,
   cursor: "",
   delay: 50,
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
  delay: 50,
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


}

let cocktailRecipeForm = document.querySelector("#cocktail-recipe-form");
cocktailRecipeForm.addEventListener("submit", generateRecipe);
