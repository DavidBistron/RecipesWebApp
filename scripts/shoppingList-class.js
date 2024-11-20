// Class for Food-Supplies
class ShoppingElement {

  constructor(name, category, amount) {
     this.name = name;
     this.category = category;
     this.amount = amount;
  }
}

// Array for saving shopping elements
const shoppingElementArray = [];

// Add default shopping elements to array
// ------------------------------------------------------------------------------------------
const defaultShoppingElement1 = new ShoppingElement("Banana", "Fruits", 8);
const defaultShoppingElement2 = new ShoppingElement("M&Ms", "Sweets", "1kg");
const defaultShoppingElement3 = new ShoppingElement("Salt", "Spices", 1);

shoppingElementArray.push(defaultShoppingElement1);
shoppingElementArray.push(defaultShoppingElement2);
shoppingElementArray.push(defaultShoppingElement3);
// ------------------------------------------------------------------------------------------

// Function for rendering table
function renderTable(shoppingElementArray) {
  const tableBody = document.querySelector("#shopping-list tbody");
  tableBody.innerHTML = "";

  shoppingElementArray.forEach ((obj, index) => {
    // Create new row for every entry
    const row = document.createElement("tr");

    // Add row for shoppingElement
    const cellShoppingElementName = document.createElement("td");
    cellShoppingElementName.textContent = obj.name;
    row.appendChild(cellShoppingElementName);

    // Add row for category
    const cellShoppingElementCategory = document.createElement("td");
    cellShoppingElementCategory.textContent = obj.category;
    row.appendChild(cellShoppingElementCategory);

    // Add row for amount
    const cellShoppingElementAmount = document.createElement("td");
    cellShoppingElementAmount.textContent = obj.amount;
    row.appendChild(cellShoppingElementAmount);

    // Add new row for delete button
    const cellDelete = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn-delete-recipe");
    deleteButton.textContent = "X";
    deleteButton.onclick = function() {
      deleteShoppingElement(index);    
    };
    cellDelete.appendChild(deleteButton);
    row.appendChild(cellDelete);
   
    // Add row to table
    tableBody.appendChild(row);
  });
}

// Render Table
renderTable(shoppingElementArray);

// Function for adding new supplies
function addShoppingElement(name, category, amount) {
  let shoppingElement = new ShoppingElement(name, category, amount);
  shoppingElementArray.push(shoppingElement);
  renderTable(shoppingElementArray);
}

// Function for deleting existing supplies
function deleteShoppingElement(index) {
  shoppingElementArray.splice(index, 1);
  renderTable(shoppingElementArray);
}

// Event listener for form
document.getElementById('shoppingElement-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Verhindert das Neuladen der Seite
  const name = document.getElementById('shoppingElement-name').value;
  const category = document.getElementById('shoppingElement-category').value;
  const amount = document.getElementById('shoppingElement-amount').value;

  if (name && category && amount) {
      addShoppingElement(name, category, amount);
      // Empty input field after entry
      document.getElementById('shoppingElement-name').value = '';
      document.getElementById('shoppingElement-category').value = '';
      document.getElementById('shoppingElement-amount').value = '';
  } else {
    alert('Bitte fülle alle Felder aus.');
  }
});