const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Create a variable to hold the fragment
const fragment = document.createDocumentFragment();

// Loop through the ingredients array
ingredients.forEach(ingredient => {
  // Create a new list item
  const li = document.createElement('li');
  
  // Add the ingredient name as text content
  li.textContent = ingredient;

  // Add the class "item" to the list item
  li.classList.add('item');

  // Append the list item to the fragment
  fragment.appendChild(li);
});

// Get the ul#ingredients element
const list = document.querySelector('#ingredients');

// Append the fragment to the ul#ingredients element
list.appendChild(fragment);