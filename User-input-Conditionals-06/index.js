


// var city = prompt("Enter Your City Name")
// if (city == "Karachi") {
//     alert("Welcome to city of lights");
    
// }
// else{
//     alert("Welcome to.. " + city);
// }


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


// gender = prompt("Enter Your Gender");
// if (gender == "male" || gender == "Male") {
//     alert("Good Morning Sir");
// }
// else if (gender == "female" || gender == "Female") {
//     alert("Good Morning Ma'am");
//     }



// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:


// color = prompt("Enter a Color");
// if (color == "Red" || color == "red") {
//     alert("Must Stop");
    
// }
// else if (color == "Yellow" || color == "yellow") {
//     alert("Ready to move");
// }
// else if (color == "Green" || color == "green"){
//     alert("Move now");
// }



// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,show the message “Please refill the fuel in your car”

// remainingFuel = +prompt("Enter your remaining fuel in car");
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("You have enough fuel in your car");
//     }




// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.


// a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
//  } <---- // the output is being printed 

 // b
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } <---- // the output is not printed 

// c. 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } 
// if (c === 13){
//     alert("condition 2 is true");
//     } <---- // the output is being printed 

//     if (++c < 14){
//     alert("condition 3 is true");
//     }

//     if(c === 14){
//     alert("condition 4 is true"); 
//     }  <---- // the output is being printed 

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } <---- // the output is being printed 

// e
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     } <---- // the output is being printed true

// f
    // if("car" < "cat"){
    // alert("car is smaller than cat");
    // } <---- // the output is being printed car is < than cat as r unicode value is smaller than t



// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// firstSubmarks = +prompt("Enter your first subject marks");
// secondSubmarks = +prompt("Enter your second subject marks");
// thirdSubmarks = +prompt("Enter your third subject marks");
// totalmarks = +prompt("Enter your total marks");
// obtainedmarks = firstSubmarks + secondSubmarks + thirdSubmarks;
// percentage = obtainedmarks / totalmarks * 100;
// document.write("<h1>Marksheet</h1> <br>");
// document.write("<h3>Total marks : </h3> <br>" + totalmarks  );
// document.write("<h3>Obtained marks : </h3>" + obtainedmarks  );
// document.write("<h3>Percentage : </h3>" + percentage + '% <br>');

// if (percentage >= 80) {
//     document.write("<h3>Grade: A-one <h3> <br>");;
//     document.write("Remarks : Excellent <br>");
    
// }
// else if (percentage >= 70 && percentage < 80) {

//     document.write("Grade: A <br>");
//     document.write("Remarks : Good");
// }
// else if (percentage >= 60 && percentage < 70) {
//     document.write("Grade: B <br>");
//     document.write("Remarks : You need to improve");
//     }
//     else if (percentage > 50 && percentage < 60) {
//         document.write("Grade: Fail <br>");
//         document.write("Remarks : Sorry");
//         }



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// secretNumber = 3;
// guess = +prompt("Guess the secret number");
// if (guess == secretNumber) {
//     alert("Bingo! Correct answer");
//     } else if (guess == secretNumber + 1) {
//         alert("Close enough to the correct answer");
//         } else {
//             alert("Try again");
//             }




// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
//  var number = +prompt("Enter a number");
//  if (number % 3 == 0) {
//     alert("The number is divisible by 3");
//     } else {
//         alert("The number is not divisible by 3");
//         }


// 9. Write a program that checks whether the given input is an even number or an odd number.
// var number = +prompt("Enter a number");
// if (number % 2 == 0) {
//     alert("The number is even");
//     } else {
//         alert("The number is odd");
//         }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

//  var temperature = +prompt("Enter the temperature");
//  if (temperature > 40) {
//     alert("It is too hot outside.");
//     } else if (temperature > 30) {
//         alert("The Weather today is Normal.");
//         } else if (temperature > 20) {
//             alert("Today’s Weather is cool.");
//             } else if (temperature > 10) {
//                 alert("OMG! Today’s weather is so Cool.");
//                 }
                


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var num1 = +prompt("Enter first Number");
var num2 = +prompt("Enter second Number");
var operation = prompt("Enter operation (+, -, *, /, %)");
if (operation == "+") {
    alert(num1 + num2);
    } else if (operation == "-") {
        alert(num1 - num2);
        } else if (operation == "*") {
            alert(num1 * num2);
            } else if (operation == "/") {
                if (num2 != 0) {
                    alert(num1 / num2);
                    } 
                    else if (num2 == 0)
                        alert("Division by zero is not possible");
                }
                     else if (operation == "%") {
                        if (num2 != 0) {
                            alert(num1 % num2);
                            }
                            else if (num2 == 0)
                                alert("Division by zero is not possible");
                            } 
