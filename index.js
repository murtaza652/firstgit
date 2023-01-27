console.log(document.getElementById('items'));
console.log(document.getElementById('main'))
document.getElementById('header-title').textContent="Hello";
document.getElementById('main-header').style.borderBlock='solid 3px black';
var item=document.getElementsByClassName('title');
item[0].style.fontWeight ='bold';
item[0].style.color = 'green'
console.log(item[0]);
var items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor ='green';
for(var i=0; i<items.length;i++)
{
    items[i].style.fontWeight ='bold';
}