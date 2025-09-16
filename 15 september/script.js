// const mybody = document.body;
// console.log(mybody);
// mybody.style.backgroundColor = "lightblue";

//by id
// const box1 = document.getElementById("Box1");
// console.log(Box1);
// box1.style.backgroundColor = "lightgreen";

//tag
// const tag= document.getElementsByTagName("p");
// console.log(tag);

//by class
// const abc=document.getElementsByClassName("random");
// console.log(abc);
// abc.style.backgroundColor="yellow";

//query selector
// const q1=document.querySelector("#Box1");
// console.log(q1);
// q1.style.backgroundColor="pink";

// const b1=document.getElementById('Box2');
 // b1.innerHTML="<h1>Hello</h1>";
// b1.classList.add('round-border');

//add event listner
//const abs= document.getElementById('Box3')

// const boxes= document.getElementsByClassName('parent');
// for(let i=0; i<boxes.lenght; i++){
//     boxes[i].classList.add('round-border');
// }

let box1 = document.getElementById("Box1");
box1.addEventListener("click", function() {
  box1.style.backgroundColor = "yellow";
  console.log("Box 1 clicked!");
});


let box3 = document.getElementById("Box3");
box3.addEventListener("mouseover", function() {
  box3.style.backgroundColor = "lightgreen";
  console.log("Mouse is over Box 3!");
});