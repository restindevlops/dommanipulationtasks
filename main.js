//GETELEMENTBYID

// var HeaderTitle=document.getElementById('header-title');

// HeaderTitle.textContent='Item Display';
// HeaderTitle.innerText="Item Lister";
// HeaderTitle.style.color="white";
// HeaderTitle.style.fontFamily='segoe ui';
// HeaderTitle.innerHTML="<h1> Display Items</h1>";

// var Border=document.getElementById('main-header');
// Border.style.borderBottom='solid 10px orange';

//GETELEMENTBYCLASSNAME

// FormTitle=document.getElementsByClassName('form-title');

// FormTitle[0].style.fontWeight='bold';
// FormTitle[0].style.color='green';

// var Items=document.getElementsByClassName('list-group-item');
// console.log(Items);
// Items[2].style.backgroundColor='lightgreen';


// for( var i=0;i<Items.length;i++)
// {
//     Items[i].style.fontWeight='bold';
// }

// for( var i=0;i<Items.length;i=i+2)
// {
//     Items[i].style.backgroundColor='lightgreen';
// }

//GETELEMENTSBYTAGNAME

// var li=document.getElementsByTagName('li');
// li[1].style.fontWeight='bold';

// for(var i=0;i<li.length;i=i+2)
// {
//     li[i].style.backgroundColor='lightgreen'
// }

//QUERYSELECTOR
  

  // 1. Using idname
var item=document.querySelector('#main-header')
item.style.borderBottom='solid 10px orange'

  // 2. using tagname 
var input=document.querySelector('input')
input.value="Item 5";

  // 3. for next elemnt with same tagname
var submit=document.querySelector('input[type="submit"]')
submit.value="SEND";

  // 4.Using Classname for last child
 var lastelem=document.querySelector('.list-group-item:last-child') 
 lastelem.textContent=" Item 4";

  // 5.Using Classname for nth child
  var lastelem=document.querySelector('.list-group-item:nth-child(3)') 
  lastelem.textContent=" Item 3";

    // 6.Using Classname for nth child
    var lastelem=document.querySelector('.list-group-item:nth-child(2)') 
    lastelem.style.backgroundColor=" lightgreen";
  
    // 7.Using Classname for nth child
  var lastelem=document.querySelector('.list-group-item:nth-child(3)') 
  lastelem.style.display=" none";  