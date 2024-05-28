const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');


// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
 
  const previouserror = document.querySelectorAll('.error-text')

  previouserror.forEach(data=>{
    if(data){
      data.remove()
    }
  })
  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
     const error = document.createElement('p');
     error.classList.add('error-text')
      error.textContent = 'FirstName cannot be empty'
      firstName.parentElement.appendChild(error)
      firstName.parentElement.classList.add('error-circle')
    
  } else {
    firstName.classList.remove('error');
    firstName.parentElement.classList.remove('error-circle')
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    const error = document.createElement('p');
    error.classList.add('error-text')
    error.textContent = 'LastName cannot be empty'
      lastName.parentElement.appendChild(error)
      lastName.parentElement.classList.add('error-circle')
  } else {
    lastName.classList.remove('error');
    lastName.parentElement.classList.remove('error-circle')
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    const error = document.createElement('p');
    error.classList.add('error-text')
    error.textContent = 'email cannot be empty'
    email.parentElement.appendChild(error)
    email.parentElement.classList.add('error-circle')
  } else {
    email.classList.remove('error');
    email.parentElement.classList.remove('error-circle')
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    const error = document.createElement('p');
    error.classList.add('error-text')
     error.textContent = 'password cannot be empty'
    password.parentElement.appendChild(error)
    password.parentElement.classList.add('error-circle')
  } else {
    password.classList.remove('error');
    password.parentElement.classList.remove('error-circle')
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

