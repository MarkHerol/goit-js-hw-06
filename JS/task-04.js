let counterValue = 0;

const counterElement = document.getElementById('counter');
const valueElement = document.getElementById('value');

counterElement.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      const buttonAction = event.target.getAttribute('data-action');
      if (buttonAction === 'increment') {
        counterValue++;
      } else if (buttonAction === 'decrement') {
        counterValue--;
      }
      valueElement.textContent = counterValue;
    }
  });