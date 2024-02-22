// Create an array of ingredients
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];
const listItems = [];

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  listItems.push(li);
});

const list = document.querySelector('#ingredients');
list.append(...listItems);