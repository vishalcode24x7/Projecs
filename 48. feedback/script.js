//rating
const ratings = document.querySelectorAll('.rating');
//ratingContainer
const ratingContainer = document.querySelector('.ratings-container');
//sendBtn
const sendBtn = document.querySelector('#send');
//panel
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

ratingContainer.addEventListener('click', (e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
})

sendBtn.addEventListener('click', ()=>{
    panel.innerHTML = `
        <p class = "heart">💖</p>
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
})

function removeActive(){
    for(let i=0; i<ratings.length; i++){
        ratings[i].classList.remove('active');
    }
}