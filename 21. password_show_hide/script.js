let x;
function togglePassword(){
    if(x==1){
        document.getElementById('password').type = 'password';
        document.getElementById('pass-icon').src = 'hide.svg';
        x=0;
    }
    else{
        document.getElementById('password').type = 'text';
        document.getElementById('pass-icon').src = 'show.svg';
        x=1;
    }
}