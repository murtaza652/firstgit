
var itemList=document.querySelector('#items');
itemList.parentNode.style.backgroundColor ="#f4f4f4";
//temList.parentElement.style.backgroundColor ="black";
console.log(itemList.childNodes);
itemList.childNodes[1].style.backgroundColor ="green";
console.log(itemList.children);
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

var newDiv=document.createElement("div");
newDiv.className="new div";
newDiv.id="new div1";
newDiv.setAttribute('title',"hello new div");
var newDivText=document.createTextNode("HEllo");
newDiv.appendChild(newDivText);
console.log(newDiv);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
itemList.insertBefore(newDiv,itemList.firstChild);
