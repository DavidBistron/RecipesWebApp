class rezepte {
    constructor() {
        
    }
}

// Recipes Array --> IN PROJEKT 2 mit TS verwende Array - TUPEL (!)
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

// Menu Navigation, change content of menu-box-right
function navRecipes() {
    document.querySelector('.menu-box-right').innerHTML = `
    <input type="text" placeholder="Search Recipe" class="js-recipe-search">
    <button class="css-search-button" onclick="${searchRecipe()}">Search</button>
    `;
    
    document.querySelector('.menu-box-right').innerHTML = `
    <p>${recipeList[0]}</p> 
    <p>${recipeList[8]}</p>`;
}

function navFoodSupplies() {
    
}

function navShoppingList() {
    document.querySelector('.menu-box-right').innerHTML = "Shopping List";
}

function navWeekPlanner() {
    document.querySelector('.menu-box-right').innerHTML = "Week Planner";
}

// Function for searching after recipe
function searchRecipe() {
    // get the user input and put it into JS
    const searchElement = document.getElementById("js-recipe-search");
    // save search item into a value
    const element = searchElement.value;

    // display searched values on html website
    document.querySelector('.inner-box-right').innerHTML = element;

    // chek if searched value is a known recipe
    if (searchElement.value === 'Pancake') {
        document.querySelector('.menu-box-right').innerHTML = "Eggs, Milk, Sugar";
    } else if (searchElement.value === 'Salad') {
        document.querySelector('.menu-box-right').innerHTML = "Lettuce, Corn, Cucumber, Tomato";
    } else if (searchElement.value === 'Pizza') {
        document.querySelector('.menu-box-right').innerHTML = "Dough, Tomato, Cheese, Oregano, Onion";
    }
    // empty search field after search
    searchElement.value = '';
}

// ------------------------------------------------------------------------------
// Empty array for list of ingredients

/*
const ingredientList = [];

renderIngredientList();

// Function to render HTML website, every time ingredient is added to list
function renderIngredientList() {

    // Accumulator Pattern - Variable to contain all added ingredients and display on website; empty string by default
    let ingredientListHTML = '';

    // loop through ingredients array and display on website 
    for (let i = 0; i < ingredientList.length; i++) {
        const ingredient = ingredientList[i];
        const html = `<p>${ingredient}</p>`; // Generating the HTML technique
        // while looping through add the html element to ingredientListHTML Accumulator
        ingredientListHTML += html;
    }
    document.getElementById('js-buy-display').innerHTML = 'Your available ingredients:' + ingredientListHTML ;
}

// Function for adding ingredients
function addIngredient() {
    const addIngredient = document.querySelector('.js-add-ingredient'); // get user input
    const ing = addIngredient.value; // save user input value (!) in variable
    // Zutaten in das Array pushen (legen)
    ingredientList.push(ing);
    console.log(ing);
    console.log(ingredientList);

    // Eingabefeld leeren nach der Sucheingabe
    addIngredient.value = '';

    renderIngredientList();
}

// Function to determine wich ingredients are needed
/*
function determineIngredients() {
    if() {

    }
}
*/

// ------------------------------------------------------------------------------
// Autocomplete

/*
function autocomplete(inp, arr) {
    var currentFocus;

    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;

        // div element with items (values)
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        // append DIV element as a child of autocomplete container
        this.parentNode.appendChild(a);

        // for each item in the array...
        for (i = 0; i < arr.length; i++) {
            // check if item starts with same letters as text field value
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            // create a DIV element for each matching element
            b = document.createElement("DIV");
            // make matching letters bold
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            // insert a input field that will hold the current array item's value
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            // execute a function when someone clicks on the item value (DIV element)
            b.addEventListener("click", function(e) {
                // insert the value for the autocomplete text field 
                inp.value = this.getElementsByTagName("input")[0].value;
                // close the list of autocompleted values or any other open lists of autocompleted values
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    // execute a function presses a key on the keyboard
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                // If the arrow DOWN key is pressed, increase the currentFocus variable
                currentFocus++;
                //and and make the current item more visible
                addActive(x);
            } else if (e.keyCode == 38) { //up
            // If the arrow UP key is pressed, decrease the currentFocus variable
            currentFocus--;
            // and and make the current item more visible:
            addActive(x);
            } else if (e.keyCode == 13) {
            // If the ENTER key is pressed, prevent the form from being submitted
            e.preventDefault();
            if (currentFocus > -1) {
            // and simulate a click on the "active" item
            if (x) x[currentFocus].click();
            }
    }
});

function addActive(x) {
    // a function to classify an item as "active"
    if (!x) return false;
    // start by removing the "active" class on all items
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    // add class "autocomplete-active"
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    // a function to remove the "active" class from all autocomplete items
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    // close all autocomplete lists in the document, except the one passed as an argument
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

//execute a function when someone clicks in the document
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});

}

autocomplete(document.getElementById("js-auto"), recipeList);
*/