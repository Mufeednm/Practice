let heading = document.getElementById("head");
 heading.innerHTML = "hdone"
 heading.style.backgroundColor = "green"
// console.log(heading);


let classhead = document.getElementsByClassName("clase");
classhead[0].innerHTML= "found class"
classhead[0].style.backgroundColor="red"
// console.log(classhead[0]);


let tagname= document.getElementsByTagName("button")
// console.log(tagname[0]);
 
// delete an element in html 
let delet = document.querySelector(".partb");
delet.remove()
console.log(delet);

 
let  anas = document.createElement("p");
anas .innerHTML = "he is a monkey"
console.log(anas);

// document.body.appendChild(anas);
document.body.prepend(anas);