// Reusable navigation for sub-websites
function generateMenuBar() {
  document.querySelector('.main-grid-left').innerHTML = `
      <button class="menu-box-left" onclick="document.location='http://127.0.0.1:5500/recipes.html'">Recipes</button>
      <button class="menu-box-left" onclick="document.location='http://127.0.0.1:5500/food-supplies.html'">Food Supplies</button>
      <button class="menu-box-left" onclick="document.location='http://127.0.0.1:5500/shopping-list.html'">Shopping List</button>
      <button class="menu-box-left" onclick="document.location='http://127.0.0.1:5500/week-planner.html'">Week Planner</button>
      <button class="menu-box-left" onclick="document.location='http://127.0.0.1:5500/index.html'">Home</button>
  `;
}

generateMenuBar();