// Step 1: Array with all recipes
const recipeList = [
  'Burger',
  'Chilli Sin Carne',
  'Mango Chutney',
  'Oats',
  'Oven Vegetables', 
  'Pancake', 
  'Pizza', 
  'Potatoes',
  'Salad',
];

// Step 1: Function for searching after recipe
function searchRecipe() {
  // get the user input and put it into JS
  const searchElement = document.getElementById("input-search");
  // save search item into a value
  const element = searchElement.value;

  // display searched values on html website
  document.querySelector('.display').innerHTML = element;

  // chek if searched value is a known recipe
  if (searchElement.value === 'Pancake') {
      document.querySelector('.display').innerHTML = "Eggs, Milk, Sugar";
  } else if (searchElement.value === 'Salad') {
      document.querySelector('.display').innerHTML = "Lettuce, Corn, Cucumber, Tomato";
  } else if (searchElement.value === 'Pizza') {
      document.querySelector('.display').innerHTML = "Dough, Tomato, Cheese, Oregano, Onion";
  }
  // Empty search field after search
  searchElement.value = '';
}

function displayRecipes() {
  document.querySelector('.recipe-list').innerHTML = recipeList;
}

displayRecipes();

// Step 2: Set with all recipes - values are unique
// const recipesSet = new Set([]);

// Objects
const recipe = {
  recipeName: '',                                     // string
  category: ['Breakfast', 'Lunch', 'Dinner'],     // predefined selection: array, list, map etc.
  // ingredients: {                                  // nested object: ingredientName + ingredientAmount
    // ingName,
    // ingAmount,
  // },                           
  prepDescription: '',                                // string
  rating: [1, 2, 3, 4, 5],                        // predefinied selection: number (1-5) or stars (* - *****)

  // id: 1,                                       // future property: number
  // image: image.jpg,                            // future property: image
  // fun: function myFunctionName() {             // future property: function (in an object = method)
  //    put code here
  // }
}

// Function to put created objects into array
function addNewRecipe() {
  prompt();
  recipeList.push(recipe);
  displayRecipes();
  console.log(recipe);
}