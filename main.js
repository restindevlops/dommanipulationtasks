var form=document.getElementById('my-form');
console.log(submit);

form.addEventListener('submit',setToLocalStorage);

function setToLocalStorage(e){
    e.preventDefault();

    var name=e.target.username.value;
    var email=e.target.useremail.value;
    var mobno=e.target.userphonno.value;

    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
    localStorage.setItem('Mob No.',mobno);

}