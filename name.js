const form = document.querySelector(".js-form");
const span  = form.querySelector("span");
const input = form.querySelector("input");

function handleSubmit1(b){
b.preventDefault();
const currentValue = input.value;
localStorage.setItem("lsKey",currentValue);
say(currentValue);
}

function require() {
span.classList.add("hidden");
input.classList.remove("hidden");
form.addEventListener("submit",handleSubmit1)
}

function editName(event){
require();
}
function say(a){
input.classList.add("hidden");
span.classList.remove("hidden");
span.innerText = `Good luck, ${a}!`;

const edit = document.createElement("span");
edit.innerHTML = `<i class="far fa-edit"></i>`
span.appendChild(edit);
edit.addEventListener("click", editName)
}

function greetUser(){
  const lsValue = localStorage.getItem("lsKey")
  if(lsValue!==null){
    say(lsValue);
  }else{
    require();
  }
}

function init() {
  greetUser();
}


init();