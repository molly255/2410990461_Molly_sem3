const user1={
	name: "muskaan",
	id:1,
}
const user2={
	name: "jasmeet",
	id:2,
}


//constructor function
function person(name,age){
	this.name=name;
	this.age=age;
}
const p1=new person("Muskaan",19);
console.log(p1);

// Creating and modifying objects
let student = {
	name: "Rahul",
	age: 20,
	course: "B.Tech"
};
console.log("Original object:", student);

// Add a new property
student.city = "Delhi";
console.log("After adding city:", student);

// Modify an existing property
student.age = 21;
console.log("After modifying age:", student);

//javascript objects
//non-primitiven mai memmory adress dete hai
//primitive mai variable ke and value store hoti hai
//key value pairs//objects
//jb function ko object ke andr likhte hai usko methods kehte aaa
// 

//two ways to create objects
// 1.object literals
// 2.using new object
//3.constructor function
function User(username, email) {    
    this.username = username;
    this.email = email;
}
const u1=new User("molly123", "hi@example.com");
console.log(u1);
    
//4.class
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}
const u2 = new User("molly123", "molly@example.com");
console.log(u2);

//5. Object.create
const u3 = Object.create(User.prototype);
u3.username = "molly123";
u3.email = "molly@example.com";
console.log(u3);

json
const jsonString = JSON.stringify(u3);
console.log(jsonString);

const u4 = JSON.parse(jsonString);
console.log(u4);