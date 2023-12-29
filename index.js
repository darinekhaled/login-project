const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('Password');
const loginButton = document.getElementById('loginButton');

function isValidEmail(emailInput) {
 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailInput);
}


  
  function isvalidPassword(passwordInput) {
    
    const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/;
    return passwordRegex.test(passwordInput);
  }


loginButton.addEventListener('click', function() {
  
  var email = emailInput.value;
  var password = passwordInput.value;
  if (email !== null && password !== null) {
    if (isValidEmail(emailInput) && isvalidPassword(passwordInput)) {
      
      console.log('Login successful!');
    } else {
      console.log('Invalid email or password. Please try again.');
    } 
  }else {
    console.log('must not be null')
  }
});