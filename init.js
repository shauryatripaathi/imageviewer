let imageContainer = document.getElementById("imageContainer");
let container = document.getElementById("container");

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");


container.addEventListener("click",handleOnBox);
function handleOnBox(e){
        let x= e.target.id;
       if(x == "box1"){
           
       }
           else {
               alert("other");
           }   
}


