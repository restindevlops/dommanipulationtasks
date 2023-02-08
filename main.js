//GETELEMENTBYID

var HeaderTitle=document.getElementById('header-title');

HeaderTitle.textContent='Item Display';

HeaderTitle.innerText="Item Lister";

HeaderTitle.style.color="white";
HeaderTitle.style.fontFamily='segoe ui';
HeaderTitle.innerHTML="<h1> Display Items</h1>";

var Border=document.getElementById('main-header');
Border.style.borderBottom='solid 10px orange';

//GETELEMENTBYCLASSNAME
FormTitle=document.getElementsByClassName('form-title');
console.log(FormTitle);
FormTitle[0].style.fontWeight='bold';
FormTitle[0].style.color='green';
//FormTitle.style.fontWeight='bold';
//FormTitle.style.color='green';


