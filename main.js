var form=document.getElementById('my-form');

form.addEventListener('submit',setToLocalStorage);

function setToLocalStorage(e){
    e.preventDefault();

    var name=e.target.username.value;
    var email=e.target.useremail.value;
    var mobno=e.target.userphonno.value;

    const obj={ name,email,mobno}

    localStorage.setItem(name,JSON.stringify(obj));

}