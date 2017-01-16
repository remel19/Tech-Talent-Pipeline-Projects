/*
1(a). Create a script with two variables, each assigned to a number. Add them together and output the result to the console.
*/
var number1 = 19;
var number2 = 33;
console.log("Sum: "+ (number1 + number2));

/*
1(b).Now do the same with two strings.
 */
var string1 = "Hello";
var string2 = "Shannon";
console.log("Combine String: " + string1 + " " + string2);

/*
2.Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
*/

var grades = [[45,94],[73,79],[81,97],[100,99]];
console.log("Output from multidimensional Array: "+grades[3][1]); //should print 99

/*
3.Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
*/
while (true) {
  var userInput = prompt("Enter a number:");
  if(isNaN(userInput)){ // checks if the user input a string or number
    alert("It's not a number, please re-enter.");
    continue; // if string entered, the loop starts from the beginning.
  }
  if(userInput<100){
    alert("variable is less than 100");
  }
  else if (userInput == 100){
    alert("variable is equal to 100");
  }
  else{
    alert( userInput + " variable is greater than 100");
  }
  break;
}

/*
4. Try running the script and then changing the variable's value to see how this affects the program's output.

code works perfectly for any input, including strings.
*/


/*
5. Write a similar script to check if a string stored in a variable is the same as another string.
*/

var str1 = "Monkey eats bananas";
var str2 = prompt("Hint: Current String is (\"Monkey eats bananas\")\nPlease enter a string: ");

if(str1 == str2){
  console.log("These two strings are equal");
}

else {
  console.log("These strings aren't equal");
}

/*
6. Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
*/

var name = prompt("Please enter your name: ");
function takeName(input){
  alert("Your name is: "+ input);
}

takeName(name);

/*
7. Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
*/

function printSomething(){
  console.log("Shannon, I like the way you teach in class.");
}

printSomething();

/*
8. Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.
*/
function winPrice() {
  while(true){
    chooseDoor = prompt("Please choose a door to win a price:");
    if (chooseDoor == 1) {
      alert("You have won a TV");
    }
    else if (chooseDoor == 2) {
      alert("You have won a car");
    }
    else if(chooseDoor == 3){
      alert("You won a vacation trip to Bora Bora Island in French Polynesia");
    }
    else {
      alert("Not a valid door number");
      continue;
    }
    break;
  }
} //winPrice

winPrice();
