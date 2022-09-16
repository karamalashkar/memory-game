const card=document.querySelectorAll('.card');
var counter=0;
var gameOn=true;

for (let i in card){
    card[i].addEventListener('click',() =>{    
            if(counter<2){
                card[i].classList.toggle('flip');
                counter++;
            }
            
    })  
}
