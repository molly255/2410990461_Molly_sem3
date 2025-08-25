//ques1 : Create an object named laptop with properties then print them
// Creating object using object literal
let laptop = {
  brand: "Dell",
  price: 55000,
  isAvailable: true
};

// Printing all properties
console.log("Brand", laptop.brand);
console.log("Price:", laptop.price);
console.log("Available:", laptop.isAvailable);


//ques 2:Modify and Delete Properties

// Creating object
let employee = {
  name: "John",
  position: "Developer",
  salary: 50000
};

// 1. Update the salary
employee.salary = 60000;

// 2. Add a new property department
employee.department = "IT";

// 3. Delete the position property
delete employee.position;

// Print updated object
console.log(employee);


//q3: Nested Object Access
let user = {
  name: "Anita",
  contact: {
    email: "anita@example.com",
    phone: "9876543210"
  }
};

// Accessing nested properties using dot notation
console.log("Email:", user.contact.email);
console.log("Phone:", user.contact.phone);


//q4:JSON Conversion

let movie = { 
  title: "Inception", 
  year: 2010, 
  rating: 8.8 
};

// Convert object to JSON string
let jsonString = JSON.stringify(movie);
console.log("JSON String:", jsonString);

// Convert JSON string back to object
let parsedMovie = JSON.parse(jsonString);

// Print movie title from parsed object
console.log("Movie Title:", parsedMovie.title);
