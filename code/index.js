import{ add }from "./calc";
import("./index.css")
import image from "./file.jpg";

console.log(add(5,6));
console.log(add(5,110));

const h1 = document.createElement("p");
h1.innerText = "Notepad";

let img = document.createElement("img");
img.src = image;

h1.classList.add("redcolor")
document.getElementById("root").appendChild(h1);
document.getElementById("logo").appendChild(img)

const form = document.querySelector("form");
const input = document.querySelector("#addNote");
const list = document.querySelector("ul");

form.addEventListener("submit",function(e) {
    e.preventDefault();
    toDoList();
    input.value = "";
})

list.addEventListener("click",function(e) {
    if(e.target.nodeName==="BUTTON"){
        e.target.closest("LI").remove();
    } 
})

function toDoList(){
    if(input.value != ""){
        const toDo = addNote.value;
        const note = document.createElement("li");
        note.innerText=toDo;
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "X";
        deleteBtn.style.marginLeft="5%"
        note.append('',deleteBtn);
        list.append(note);
    
    } else {
        alert("Add something to remember")
    }
}
