// Class for Food-Supplies
class Supply {

  constructor(name, category) {
     this.name = name;
     this.category = category;
  }
}

// Array for saving supplies
const supplyArray = [];

// Add default supplies to array
// ------------------------------------------------------------------------------------------
const defaultSupply1 = new Supply("Noodles", "Durum");

supplyArray.push(defaultSupply1);
// ------------------------------------------------------------------------------------------

// Function for rendering table
function renderTable(supplyArray) {
  const tableBody = document.querySelector("#ingredients-list tbody");
  tableBody.innerHTML = "";

  supplyArray.forEach ((obj, index) => {
    // Create new row for every entry
    const row = document.createElement("tr");

    // Add row for ingredientName
    const cellIngredient = document.createElement("td");
    cellIngredient.textContent = obj.name;
    row.appendChild(cellIngredient);

    // Add row for ingredientCategory
    const cellCategory = document.createElement("td");
    cellCategory.textContent = obj.category;
    row.appendChild(cellCategory);

    // Add new row for delete button
    const cellDelete = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn-delete-recipe");
    deleteButton.textContent = "X";
    deleteButton.onclick = function() {
      deleteSupply(index);    
    };
    cellDelete.appendChild(deleteButton);
    row.appendChild(cellDelete);
   
    // Add row to table
    tableBody.appendChild(row);
  });
}

// Render Table
renderTable(supplyArray);

// Function for adding new supplies
function addSupply(name, category) {
  let supply = new Supply(name, category);
  supplyArray.push(supply);
  renderTable(supplyArray);
}

// Function for deleting existing supplies
function deleteSupply(index) {
  supplyArray.splice(index, 1);
  renderTable(supplyArray);
}

// Event listener for form
document.getElementById('supply-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Verhindert das Neuladen der Seite
  const name = document.getElementById('supply-name').value;
  const category = document.getElementById('supply-category').value;

  if (name && category) {
      addSupply(name, category);
      // Empty input field after entry
      document.getElementById('supply-name').value = '';
      document.getElementById('supply-category').value = '';
  } else {
    alert('Bitte fülle alle Felder aus.');
  }
});