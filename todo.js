const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul");

let array = [];



function saveAnswerInLs(b){
localStorage.setItem("tdKey", JSON.stringify(b));
}





function deleteList(event) {
const liId = event.target.parentNode.parentNode.parentNode;

toDoList.removeChild(liId);

const cleanToDos = array.filter(function(t){return t.id !== liId.id*1;});
array = cleanToDos;
saveAnswerInLs(array);
}


function addIt(a) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  const  span2 = document.createElement("span");
  const  span3 = document.createElement("span");
  const  div = document.createElement("div");



span2.addEventListener("click", deleteList);


  span.innerText = a;
  // span3.innerHTML = `<i class="fas fa-check"></i>`
  span2.innerHTML = `<i class="far fa-trash-alt"></i>`
  li.id = array.length + 1;

  
 li.appendChild(span);
 div.appendChild(span3);
 div.appendChild(span2);
 li.appendChild(div);
 toDoList.appendChild(li);

const object = {
  text: a,
  id: array.length + 1
  
};

array.push(object);

saveAnswerInLs(array);
}



function handleSubmit(event) {
event.preventDefault();
const whatHeinput = toDoInput.value;
addIt(whatHeinput);
toDoInput.value = ""
}



function saveToDos() {
  toDoForm.addEventListener("submit", handleSubmit);
}


function realLoad(arrayedValue){
  const txtInArray = arrayedValue.text;
addIt(txtInArray);

}

function loadToDos() {
  const tdValue = localStorage.getItem("tdKey");
  if (tdValue !== null) {
    const arrayedValue = JSON.parse(tdValue);
    arrayedValue.forEach(function(k){
      addIt(k.text);
      saveToDos();
    })
  
  }
  }



function init() {
  loadToDos();
   saveToDos();
} 

init();
