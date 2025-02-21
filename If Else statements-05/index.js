// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let Userinput = prompt("Enter a number or letter"); 

if (Userinput >= 'A' && Userinput <= 'Z') {
    alert("Uppercase Letter");
} 
else if (Userinput >= 'a' && Userinput <= 'z') {
    alert("Lowercase Letter");
} 
else if (!isNaN(Userinput)) {  
    alert("It's a Number");
    document.write("<h1>You typed a Number!</h1>");
} 
else {
    alert("Invalid Input");
}
