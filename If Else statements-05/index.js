// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// let Userinput = prompt("Enter a number or letter"); 

// if (Userinput >= 'A' && Userinput <= 'Z') {
//     alert("Uppercase Letter");
// } 
// else if (Userinput >= 'a' && Userinput <= 'z') {
//     alert("Lowercase Letter");
// } 
// else if (!isNaN(Userinput)) {  
//     alert("It's a Number");
//     document.write("<h1>You typed a Number!</h1>");
// } 
// else {
//     alert("Invalid Input");
// }



// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.


// var num1 = +prompt("Enter first integer");
// var num2 = +prompt("Enter second integer");
// if (num1 > num2) {
//         alert("First Integer is Greater");
// } else if(num1 < num2){
//     alert("Second Integer is Greater");
// }
// else if (num1 = num2){
//     alert("Both Integers are Equal");
//     }
//     else{
//         alert("Invalid Input");
//     }


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.


// var Userinput = +(prompt('Enter a Number'));
// if (Userinput > 0) {
//     alert("Number is Positive");
//     } else if (Userinput < 0) {
//         alert("Number is Negative");
//         }
//         else if (Userinput <= 0){
//             alert("Number is Zero");
//         }



// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

// var Userinput = prompt('Enter a Character');
// if (Userinput == 'a' || Userinput == 'e' || Userinput == 'i' || Userinput == 'o' || Userinput == 'u'){
//     alert(Userinput == Userinput);
// }
// else{
//     alert("Not a Vowel!");
// }
 

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. 
// Show “Incorrect password” otherwise.


// var correctpassword = "1234";
// var Userinput = prompt('Enter your Password');

// if (Userinput == null || Userinput == " ") {
//     alert("Please enter your password");
//     } else if (Userinput == correctpassword) {
//         alert("Correct! The password you entered matches the original password");
//         }
//         else{
//             alert("Incorrect password");
//             }


// 6. This if/else statement does not work. Try to fix it:
// if closing bracket and else opening bracket was missing!
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }




// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
time = prompt("Enter a time in 24hr format")
if (time >= "0000" && time <1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time <1700) {
    alert("Good Afternoon");
    }
    else if (time >= 1700 && time < 2100){
        alert("Good Evening");

    }
    else if(time >= 2100 && time <= 2359){
        alert("Good Night");
    }