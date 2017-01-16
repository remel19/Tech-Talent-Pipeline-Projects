// Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// -checks that the password is 12345678
// -checks that the username contains at least one number
// -if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.




var userregex = /(?=.*[0-9])/;

var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function mysubmit(e){
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  e.preventDefault();

  if(!userregex.test(username)){
    alert("Wrong username format");
  }

  if(password != 12345678){
    alert("Incorrect password");
  }

  if(!validEmail.test(email)){
    alert("Incorrect email format");
  }

  if((userregex.test(username)) && (password == 12345678) &&  (validEmail.test(email))){
    document.getElementById('head').innerText = "Thanks for inputing the correct info";
  }
}

document.getElementById('submit').addEventListener('submit', mysubmit);
