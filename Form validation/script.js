const submitbtn = document.getElementById('submitbtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

submitbtn.addEventListener('click', (e)=> {
    e.preventDefault();

    if(validateName() == true){
        nameError.innerHTML = ""; 
    }

    if(validateGmail() == true){
        emailError.innerHTML = "";
    }
    if(validateName() == true && validateGmail() == true){
       alert("Form submitted successfully");
    }
});

const validateName =() =>{
    let name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "write full name";
        return false;
    }
    return true;
}

const validateGmail =() =>{
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Gmail is required";
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "write correct gmail";
        return false;
    }
    return true;
}