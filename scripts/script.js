const card=document.querySelectorAll('.card');

for (let i in card){
    card[i].addEventListener('click',() =>{
        card[i].classList.toggle('flip');
    })
   
}