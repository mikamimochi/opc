const recipe = {
  "@context":
    "https://tasty.co/recipe/cherry-blossom-raindrop-cake",
  "@type": "Recipe",
  author: "By Spencer Kombol",
  cooktime: "Cooktime: 1 hour 35 minutes",
  name: "Cherry Blossom Raindrop Cake",
  description:
    "This mesmerizing Japanese dessert is not only easy to make, but delicious too!",
  ingredients: [
    "INGREDIENTS: \n CHERRY BLOSSOM JELLY \n 4 teaspoons agar powder, 2.5 teaspoons sugar, 1 cup water, ½ oz salted cherry blossom \n MILK JELLY \n 1 tablespoon agar powder, 2 teaspoons sugar, 1 cup fat free milk \n FOR SERVING \n brown sugar syrup, for serving, and matcha, for garnish \n SPECIAL EQUIPMENT \n ice ball tray",
  ],

  instructions:
    "INSTRUCTIONS: \n 1. Make the cherry blossom jelly: In a small bowl, combine the agar and sugar. \n 2. Pour the water into a small pan, then add the agar mixture and stir. \n 3. Cook over high heat until the water is boiling. Reduce the heat to low and cook for 2 minutes. Meanwhile, fill a large bowl with ice and cold water. \n 4. Move the pan to the ice bath, and chill for 3 minutes, stirring occasionally. \n 5. Rinse the salted cherry blossoms and soak in water for 10 minutes. Gently squeeze the flowers to remove the calyxIn. \n 6. In an ice ball tray, place the cherry blossoms in the bottom and pour the agar-sugar mixture over them. Chill for 15 minutes. \n 7. Make the milk jelly: In a small bowl, combine the agar and sugar. Pour the milk into a small pan, then add agar mixture and stir. \n 8. Cook over high heat until the milk is simmering. Reduce to the heat to low and cook for 2 minutes. \n 9. Move the pan to the ice bath and chill for 2 minutes. \n 10. Pour the milk mixture over the chilled cherry blossom layer in the ice ball tray. Cover with the lid and chill for 1 hour. \n 11. Remove the raindrop cake from the tray, and pour the brown sugar syrup over it. Garnish with matcha powder, if desired.",
  yield: "YIELD: 2 servings",
  ending: "Enjoy! Raindrop Cake® is a registered trademark owned by Darren Wong."
};

const titleElement = document.getElementById("title");
titleElement.innerText = recipe.name;
document.getElementById("author").innerText = recipe.author;
document.getElementById("description").innerText = recipe.description;
document.getElementById("cooktime").innerText = recipe.cooktime;
document.getElementById("yield").innerText = recipe.yield;
document.getElementById("ingredients").innerText = recipe.ingredients;
document.getElementById("instructions").innerText = recipe.instructions;
document.getElementById("ending").innerText = recipe.ending;