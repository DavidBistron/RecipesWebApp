// Class for Recipes
class Recipe {

  constructor(name, category, id) {
    this.name = name;
    this.category = category;
    // Every Recipe gets an unique String-ID 
    // toString(36) = Base-36 format - substring(2,6) = cut first two and generate id of length 4 
    this.id = Math.random().toString(36).substring(2,6);  
  }
}

// Array for saving recipes
const recipesArray = [];

// Add default recipes to array
// ------------------------------------------------------------------------------------------
const defaultRecipe1 = new Recipe("Nudelsalat", "Salate", Math.floor(Math.random()*100));
const defaultRecipe2 = new Recipe("Wurstebrei", "Fleisch", Math.floor(Math.random()*100));

recipesArray.push(defaultRecipe1);
recipesArray.push(defaultRecipe2);
// ------------------------------------------------------------------------------------------

// Function for rendering table
function renderTable(recipesArray) {
  const tableBody = document.querySelector("#recipe-list tbody");
  tableBody.innerHTML = "";

  recipesArray.forEach (obj => {
    // Create new row
    const row = document.createElement("tr");

    // Add new row for name
    const cellName = document.createElement("td");
    cellName.textContent = obj.name;
    row.appendChild(cellName);

    // Add new row for category
    const cellCategory = document.createElement("td");
    cellCategory.textContent = obj.category;
    row.appendChild(cellCategory);

    // Add new row for id
    const cellId = document.createElement("td");
    cellId.textContent = obj.id;
    row.appendChild(cellId);

    // Add new row for delete button
    const cellDelete = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn-delete-recipe");
    deleteButton.textContent = "X";
    deleteButton.onclick = function() {
      deleteRecipe(obj); // ????      
    };
    cellDelete.appendChild(deleteButton);
    row.appendChild(cellDelete);
   
    // add row to table
    tableBody.appendChild(row);
  });
}

// Render Table
renderTable(recipesArray);

// Function for adding new recipes
function addRecipe(name, category, id) {
  let recipe = new Recipe(name, category, id);
  recipesArray.push(recipe);
  renderTable(recipesArray);
}


// Function for deleting existing recipes
function deleteRecipe(index) {
  recipesArray.splice(index, 1);
  renderTable(recipesArray);
}

// Event listener for form
document.getElementById('recipe-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Verhindert das Neuladen der Seite
  const name = document.getElementById('recipe-name').value;
  const category = document.getElementById('recipe-category').value;

  if (name && category) {
      addRecipe(name, category);
      document.getElementById('recipe-name').value = ''; // Eingabefeld leeren
      document.getElementById('recipe-category').value = '';
  } else {
    alert('Bitte fülle alle Felder aus.');
  }
});



/*
// Function for adding new recipes
function addRecipe(name, category, id) {
  let recipe = new Recipe(name, category, id);
  recipesArray.push(recipe);
  renderRecipes();
}

// Function for deleting existing recipes
function deleteRecipe(index) {
  recipesArray.splice(index, 1);
  renderRecipes();
}

// Function for rendering recipes list
function renderRecipes() {
  let recipeList = document.getElementById('recipe-list');   
  recipeList.innerHTML = '';                                  // Liste leeren

  recipesArray.forEach((recipe, index) => {
    let li = document.createElement('li');
    li.classList.add('recipe-item');
    li.innerHTML = `Recipe Name: ${recipe.name} <br> Recipe Category: ${recipe.category} <br> ID: ${recipe.id}
      <button class="trash-can" onclick="deleteRecipe(${index})">&#128465</button>`;
    recipeList.appendChild(li);
  });
}

// Event listener for form
document.getElementById('recipe-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Verhindert das Neuladen der Seite
  const name = document.getElementById('recipe-name').value;
  const category = document.getElementById('recipe-category').value;

  if (name && category) {
      addRecipe(name, category);
      document.getElementById('recipe-name').value = ''; // Eingabefeld leeren
      document.getElementById('recipe-category').value = '';
  } else {
    alert('Bitte fülle alle Felder aus.');
  }
});

// Render recipes list
renderRecipes();
*/