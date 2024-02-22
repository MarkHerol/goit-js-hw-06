const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

// Create an empty array to store the <li> elements
const listItems = [];

// Loop through the ingredients array
ingredients.forEach(ingredient => {
  // Create a new list item
  const li = document.createElement('li');

  // Add the ingredient name as text content
  li.textContent = ingredient;

  // Add the class "item" to the list item
  li.classList.add('item');

  // Add the <li> element to the listItems array
  listItems.push(li);
});

// Get the ul#ingredients element
const list = document.querySelector('#ingredients');

// Insert all <li> elements to the ul#ingredients list in a single operation
list.append(...listItems);
