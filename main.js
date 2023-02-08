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

FormTitle[0].style.fontWeight='bold';
FormTitle[0].style.color='green';

var Items=document.getElementsByClassName('list-group-item');
console.log(Items);
Items[2].style.backgroundColor='lightgreen';

for( var i=0;i<Items.length;i++)
{
    Items[i].style.fontWeight='bold';
}


