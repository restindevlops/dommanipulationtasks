var form=document.getElementById('my-form');
var userlist=document.getElementById('items');

form.addEventListener('submit',setToLocalStorage);

function setToLocalStorage(e){
    e.preventDefault();

    var name=e.target.username.value;
    var email=e.target.useremail.value;
    var mobno=e.target.userphonno.value;

    const obj={ name,email,mobno}

    localStorage.setItem(email,JSON.stringify(obj));

    //Adding newly input userdetails onto li

    var newuser='Name :'+" "+document.getElementById('username').value+' | '+'Email : '+' '+document.getElementById('useremail').value+' | '+'Mob No. :'+' '+document.getElementById('userphonno').value;

    var li=document.createElement('li');

    li.classname="items";
    
    li.appendChild(document.createTextNode((newuser)));

    userlist.appendChild(li);

    //Adding delButton to each userdetail

    var delButton=document.createElement('button');
    
    delButton.classname='deletebutton';

    delButton.id='delete';

    delButton.style.backgroundColor='#eb4343';
    delButton.style.padding= '4px 4px';
    delButton.style.color= 'white';
    delButton.style.borderRadius= '5px';
    delButton.style.margin='0px 10px';
    delButton.style.width='15%';
    

    delButton.appendChild(document.createTextNode('Delete'));

    li.appendChild(delButton);

}

//to add event to delete button
userlist.addEventListener('click',removeUser);

//function to remove item
function removeUser(e){
    
        if(e.target.classname='deletebutton'){
        
        if(confirm('Are you Sure ?')){
            var li=e.target.parentElement;
            userlist.removeChild(li);

            var email=document.getElementById('useremail').value;
            localStorage.removeItem(email);
        }
   }
}
