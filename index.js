console.log(document.getElementById('items'));
console.log(document.getElementById('main'))
document.getElementById('header-title').textContent="Hello";
document.getElementById('main-header').style.borderBlock='solid 3px black';
var item=document.getElementsByClassName('title');
item[0].style.fontWeight ='bold';
item[0].style.color = 'green'
console.log(item[0]);
// var items=document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor ='green';
// for(var i=0; i<items.length;i++)
// {
//     items[i].style.fontWeight ='bold';
// }
// var li=document.getElementsByTagName('li');
// li[2].style.backgroundColor ='green';
// for(var i=0; i<li.length;i++)
// {
//     li[i].style.fontWeight ='bold';
// }
var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor ="green";
var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color ="white";

var second=document.querySelectorAll('li');
second[1].style.color="green";
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length;i++)
{
    odd[i].style.backgroundColor ="green";
}