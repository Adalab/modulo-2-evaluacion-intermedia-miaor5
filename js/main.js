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
  const betNum= parseInt (bet.value)
  const balanceNum= parseInt(balance.innerHTML)


  if ( randNumber === number){

    sentence.innerHTML= "Has ganado el doble de lo apostado"
   console.log(betNum, balanceNum);
    balance.innerHTML= betNum * 2 + balanceNum;
   

  }
  else{
    sentence.innerHTML= "Has perdido lo apostado" 
    
    balance.innerHTML=balanceNum-betNum;
    console.log(balance);
    
  }

}
//el evento
button.addEventListener('click', handleClickbutton);