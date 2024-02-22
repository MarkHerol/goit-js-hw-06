const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', () => {
  const requiredLength = inputElement.getAttribute('data-length');

  if (inputElement.value.length === Number(requiredLength)) {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
  } else {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
  }
});