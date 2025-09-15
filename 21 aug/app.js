//q1
// function greetUser(name) {
//     console.log("Hello, " + name + "! Welcome to JavaScript 🚀");
// }

// greetUser("Ani");


//q2
// function getFirstElement(arr) {
//     // Check if array is not empty
//     if (arr.length === 0) {
//         return undefined; // or you can return null
//     }
//     return arr[0];
// }

// console.log(getFirstElement([10, 20, 30])); // Output: 10
// console.log(getFirstElement([]));           // Output: undefined

//q3
function countEvenNumbers(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 3
console.log(countEvenNumbers([11, 13, 17]));       // Output: 0



//4
function filterLongNames(arr) {
    return arr.filter(name => name.length > 5);
}   
filterLongNames(["Alice", "Bob", "Catherine", "David", "Elizabeth"]);
console.log(filterLongNames(["Alice", "Bob", "Catherine", "David", "Elizabeth"]));
 
