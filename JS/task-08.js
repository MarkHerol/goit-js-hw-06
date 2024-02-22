document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload on form submission

  const form = event.target;
  const formData = {};

  // Check if all fields are filled in
  const isFormValid = Array.from(form.elements).every(function(element) {
    if (element.name && !element.value) {
      alert('All fields must be filled in');
      return false;
    }
    return true;
  });

  if (!isFormValid) {
    return;
  }

  // Collect field values into an object
  Array.from(form.elements).forEach(function(element) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  });

  console.log(formData); // Display object with entered data in the console

  // Clear the values of the form fields
  form.reset();
});