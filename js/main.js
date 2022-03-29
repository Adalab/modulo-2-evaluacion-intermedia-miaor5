'use strict';

const optionDice= document.querySelector('.js_options')
const bet=document.querySelector('.js_bet')
const sentence=document.querySelector('.js_sentence')
const button=document.querySelector('.js_button')
const balance= document.querySelector('.js_balance')



function getRandomNumber(max) {
return Math.ceil(Math.random() * max); }

function handleClickbutton (event){
    event.preventDefault ();


  // get a random number between 1-6
  const randNumber= getRandomNumber(6);
  console.log(randNumber);

  //check the number
   
  const number= parseInt(optionDice.value)
  const betnum= parseInt (bet.value)
  const balancenum= parseInt(balance.value)

  if ( randNumber === number){

    sentence.innerHTML= "Has ganado el doble de lo apostado"
   
    balance.innerHTML= betnum * 2 + balancenum;

  }
  else{
    sentence.innerHTML= "Has perdido lo apostado" 
    
    balance.innerHTML=balancenum;
    console.log(balance);
    
  }

}
//el evento
button.addEventListener('click', handleClickbutton);