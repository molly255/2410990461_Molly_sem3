//num even or odd

let num = 7;  // change the value to test

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}


//Largest of Three Numbers
let a = 10, b = 25, c = 15;

if (a >= b && a >= c) {
    console.log(a + " is the largest");
} else if (b >= a && b >= c) {
    console.log(b + " is the largest");
} else {
    console.log(c + " is the largest");
}


//Grade Calculator

let marks = 82;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}


//FizzBuzz Problem
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


//Palindrome String
let str = "madam";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

if (str === reversed) {
    console.log(str + " is a Palindrome");
} else {
    console.log(str + " is NOT a Palindrome");
}
