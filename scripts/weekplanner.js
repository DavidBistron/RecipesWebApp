// Class for Week-Planning
class WeekElement {

  constructor(weekday, recipe) {
     this.weekday = weekday;
     this.recipe = recipe;
  }
}

// Array for saving recipes
const weekArray = [];

// Add default ingredients to array
// ------------------------------------------------------------------------------------------
const defaultWeekElement1 = new WeekElement("Monday", "Pizza");
const defaultWeekElement2 = new WeekElement("Tuesday", "Salad");
const defaultWeekElement3 = new WeekElement("Wednesday", "Potatoe-Salad");
const defaultWeekElement4 = new WeekElement("Thursday", "Pasta");
const defaultWeekElement5 = new WeekElement("Friday", "Burger");
const defaultWeekElement6 = new WeekElement("Saturday", "Chilli sin carne");
const defaultWeekElement7 = new WeekElement("Sunday", "Cabbage");

weekArray.push(defaultWeekElement1);
weekArray.push(defaultWeekElement2);
weekArray.push(defaultWeekElement3);
weekArray.push(defaultWeekElement4);
weekArray.push(defaultWeekElement5);
weekArray.push(defaultWeekElement6);
weekArray.push(defaultWeekElement7);
// ------------------------------------------------------------------------------------------

// Function for rendering table
function renderTable(weekArray) {
  const tableBody = document.querySelector("#week-list tbody");
  tableBody.innerHTML = "";

  weekArray.forEach ((obj, index) => {
    // Create new row for every entry
    const row = document.createElement("tr");

    // Add row for weekElement
    const cellWeekDay = document.createElement("td");
    cellWeekDay.textContent = obj.weekday;
    row.appendChild(cellWeekDay);

    // Add row for weekRecipe
    const cellWeekRecipe = document.createElement("td");
    cellWeekRecipe.textContent = obj.recipe;
    row.appendChild(cellWeekRecipe);

    // Add new row for delete button
    const cellDelete = document.createElement("td");
    const deleteButton = document.createElement("button");
    // deleteButton.setAttribute("data-index", index);
    deleteButton.classList.add("btn-delete-recipe");
    deleteButton.textContent = "X";
    deleteButton.onclick = function() {
      deleteWeekElement(index);    
    };
    cellDelete.appendChild(deleteButton);
    row.appendChild(cellDelete);
   
    // add row to table
    tableBody.appendChild(row);
  });
}

// Render Table
renderTable(weekArray);

// Function for adding new supplies
function addWeekElement(weekday, recipe) {
  let weekElement = new WeekElement(weekday, recipe);
  weekArray.push(weekElement);
  renderTable(weekArray);
}

// Function for deleting existing supplies
function deleteWeekElement(index) {
  weekArray.splice(index, 1);
  renderTable(weekArray);
}

// Event listener for form
document.getElementById('weekElement-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Verhindert das Neuladen der Seite
  const day = document.getElementById('weekElement-day').value;
  const recipe = document.getElementById('weekElement-recipe').value;

  if (day && recipe) {
      addWeekElement(day, recipe);
      // Empty input field after entry
      document.getElementById('weekElement-day').value = '';
      document.getElementById('weekElement-recipe').value = '';
  } else {
    alert('Bitte fülle alle Felder aus.');
  }
});


// IN das WeekArray soll der RezeptName gespeichert werden