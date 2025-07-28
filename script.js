let input = document.getElementById("itemInput");
let button = document.getElementById("itemBt");
let ul = document.getElementById("itens");
let itens = document.getElementsByTagName("li");
let itemBts = document.getElementsByClassName("remove");

function elmt(){
  let li = document.createElement("li");
  let XBt = document.createElement("button");
  XBt.innerHTML = "X";
  XBt.className = "remove";
  li.appendChild(XBt);
  let text = document.createTextNode(input.value);
  li.appendChild(text);
  ul.appendChild(li);
  input.value = "";
  btEvents()
}

function deleteIt(){
  this.parentElement.remove();
}

function btEvents(){

  for(let i = 0; i < itemBts.length; i++){
    itemBts[i].addEventListener("click", deleteIt);
  }
  
}

button.addEventListener("click", elmt);
btEvents();
