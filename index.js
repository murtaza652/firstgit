const myForm = document.querySelector('#my-form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  let myObj={
    name:nameInput.value,
    email:emailInput.value
  };
  myObj=JSON.stringify(myObj);
  e.preventDefault(); 
  localStorage.setItem(emailInput.value,myObj);

  }