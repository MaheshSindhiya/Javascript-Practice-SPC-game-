//chellange 1:

function ageInDays(){
  let B_years = prompt("please enter your Birth year... :)" );
  let  ageInDay = (2021 - B_years) * 365;
  var h1_ele = document.createElement('h1');
  var textarea = document.createTextNode('You are ' + ageInDay + ' Days OLD :)')
  h1_ele.setAttribute('id', 'ageInDays');
  h1_ele.appendChild(textarea);

  let div_result = document.getElementById('result');
  div_result.appendChild(h1_ele);

}

function reset(){
  document.getElementById('ageInDays').remove();
}

// chellange 2:

function genrateCat(){
  var div = document.getElementById('cat_result');
  var cr_img = document.createElement('img');
  cr_img.setAttribute('src', 'https://thecatapi.com/api/images/get?formate=src&type=gif&size=small');

  div.appendChild(cr_img);
}

// chellange 3:

let rpsTable = {
  'winn' : 0,
  'loss' : 0,
  'drow' : 0,
}

function rpsGame(yourChoice){


  let humanChoice, botChoice; 
  humanChoice = yourChoice.id;
  let ranNoForBotChoice = ranNoPicker();
  botChoice = ranChiceFromRPS(ranNoForBotChoice);
  let result = desideWinner001(humanChoice, botChoice);

  message = finalResult(result);
  console.log('message : ' + message);

  document.querySelector('#ScoreSpanWinn').textContent = rpsTable['winn'];
  document.querySelector('#ScoreSpanLoss').textContent = rpsTable['loss'];
  document.querySelector('#ScoreSpanDrow').textContent = rpsTable['drow'];

  rpsFrontEnd(humanChoice, botChoice, message);

}

function ranNoPicker(){
  return Math.floor(Math.random() * 3);
}

function ranChiceFromRPS(number){
  return ['rock', 'paper', 'scissor'] [number];
}

function desideWinner001(humanChoice, botChoice){
  var rpsDatabase = {
    'rock': {'rock':0.5, 'paper':0, 'scissor':1},
    'paper': {'rock':1, 'paper':0.5, 'scissor':0},
    'scissor': {'rock':0, 'paper':1, 'scissor':0.5},
  }; 
  var userscore = rpsDatabase[humanChoice][botChoice];
  var botcscore = rpsDatabase[botChoice][humanChoice];
  return [userscore, botcscore];
}

function finalResult([userscore, botcscore]){
  if (userscore === 0) {
    rpsTable['loss']++;    
    return {'message': 'You Los!', 'color': 'red'};  
  }
  else if (userscore === 0.5) {
    rpsTable['drow']++;
    return {'message': 'You Tied!', 'color': 'yellow'};    
  } else {
    rpsTable['winn']++;
    return {'message': 'You Won!', 'color': 'Green'};    
  }
}

function rpsFrontEnd(humanChoice, botchoice, message){
  var imgDatabase = {
    'rock' : document.getElementById('rock').src,
    'paper' : document.getElementById('paper').src,
    'scissor' : document.getElementById('scissor').src
  }

  var targetDiv = document.getElementById('RPS_imgs');
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  var humanDiv = document.createElement('div');
  humanDiv.setAttribute('id', 'humanDiv');
  var humanImg = document.createElement('img');
  humanImg.setAttribute('src', imgDatabase[humanChoice]);
  humanImg.setAttribute('style', 'height: 150px; box-shadow: rgba(1, 1, 255, 0.4) 0px 7px 29px 0px;');
  humanDiv.appendChild(humanImg);
  targetDiv.appendChild(humanDiv);
  
  var textDiv = document.createElement('div');
  textDiv.setAttribute('id', 'textDiv');
  textDiv.setAttribute('style', 'display: grid; place-content: center; padding:10px; color:'+ message['color'] +';');
  var textMsg = document.createElement('h3');
  var setTextMsg = document.createTextNode(''+message['message']+'');
  textMsg.appendChild(setTextMsg);
  textDiv.appendChild(textMsg);
  targetDiv.appendChild(textDiv);
  
  var botDiv = document.createElement('div');
  botDiv.setAttribute('id', 'botDiv');
  var botImg = document.createElement('img');
  botImg.setAttribute('src', imgDatabase[botchoice]);
  botImg.setAttribute('style', 'height: 150px; box-shadow: rgba(255, 1, 1, 0.4) 0px 7px 29px 0px;');
  botDiv.appendChild(botImg);
  targetDiv.appendChild(botDiv);  
}

function rePlay(){

  var targetDiv = document.getElementById('RPS_imgs');
  document.getElementById('humanDiv').remove();
  document.getElementById('textDiv').remove();
  document.getElementById('botDiv').remove();

  let rockImg = document.createElement('img');
  let paperImg = document.createElement('img');
  let scissorImg = document.createElement('img');

  rockImg.setAttribute('src', 'imgs/rock.jpg');
  paperImg.setAttribute('src', 'imgs/paper.jpg');
  scissorImg.setAttribute('src', 'imgs/scissor.jpg');
  
  rockImg.setAttribute('id', 'rock');
  paperImg.setAttribute('id', 'paper');
  scissorImg.setAttribute('id', 'scissor');
  
  rockImg.setAttribute('height', '150px');
  paperImg.setAttribute('height', '150px');
  scissorImg.setAttribute('height', '150px');
  
  rockImg.setAttribute('onclick', 'rpsGame(this)');
  paperImg.setAttribute('onclick', 'rpsGame(this)');
  scissorImg.setAttribute('onclick', 'rpsGame(this)');

  targetDiv.appendChild(rockImg);
  targetDiv.appendChild(paperImg);
  targetDiv.appendChild(scissorImg);
}

// Challenge 4 : chang all buttons color
var allBtn = document.getElementsByTagName('span');
// console.log(allBtn);

var copyAllBtn = [];
for(i=0; i<allBtn.length; i++){
  copyAllBtn.push(allBtn[i].classList[1]);
}

// console.log('coppy of all btns : '+ copyAllBtn);

function bntColorChang(btnToChang){
  if (btnToChang.value === 'Red') {
      btnColorRed();
  }
  if (btnToChang.value === 'Blue') {
      btnColorBlue();
  }
  if (btnToChang.value === 'Green') {
      btnColorGreen();
  }
  if (btnToChang.value === 'Random') {
      btnColorRandom();
  }
  if (btnToChang.value === 'Reset') {
      btnColorReset();
  }
}

function btnColorRed(){
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add('btn-danger');    
  }
}

function btnColorBlue(){
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add('btn-primary');    
  }
}

function btnColorGreen(){
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add('btn-success');    
  }
}

function randomNoGenrator(){
  return Math.floor(Math.random() * 8);
}
function btnColorRandom(){  
  let chiceOfColor = ['btn-danger', 'btn-primary', 'btn-warnih', 'btn-success', 'btn-outline-danger', 'btn-outline-primary', 'btn-outline-warnih', 'btn-outline-success']
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add(chiceOfColor[randomNoGenrator()]);
  }
}

function btnColorReset(){
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove(allBtn[i].classList[1]);
    allBtn[i].classList.add(copyAllBtn[i]);    
  }
}

//  Challenge 5 : Blackjack game 

let bjDataBase = {
  'you' : {'socreSpan' : '#userScore', 'div' : '.userSide', 'score' : 0},
  'com' : {'socreSpan' : '#ComScore', 'div' : '.ComSide', 'score' : 0},
  'card' : ['AH', '2H','3H','4H','5H','6H','7H','8H','9H','10H','QH','JH','KH'],
  'cardScore' : {'AH' : [1,11], '2H' : 2, '3H' : 3, '4H' : 4, '5H' : 5, '6H' : 6, '7H' : 7, '8H' : 8, '9H' : 9, '10H' : 10, 'QH' : 10, 'JH' : 10, 'KH' : 10},
  'winns' : 0,
  'losses' : 0,
  'draws' : 0,
  'isStand' : false,
  'isTurnOver' : false,
}

const you = bjDataBase['you'];
const com = bjDataBase['com'];

const hitSound = new Audio('sounds/swish.m4a');
const winnSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');


document.querySelector('#bjHit').addEventListener('click', bjHitBtn);
document.querySelector('#bjDeal').addEventListener('click', bjDealBtn);
document.querySelector('#bjStand').addEventListener('click', ComSide);

function bjHitBtn(){
  if (bjDataBase['isStand'] === false) {    
    let card = randomCardGenratore();
    showCard(card, you);
    updateScore(card,you);
    showScore(you);  
  }
}

function ComSide(){
  if (bjDataBase['you']['score'] > 0) {
    
    bjDataBase['isStand'] = true;
    function getRandom(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }  
    
    let comTurmNo = getRandom(1, 4);
    
    for (let i = 0; i <= comTurmNo; i++) {
  
      if (com['score'] < 15) {
        bjDataBase['isTurnOver'] = true
        let card = randomCardGenratore();
        showCard(card, com);
        updateScore(card,com);    
      }
      else{
        break;
      }
    }
    
    let winner = desideWinner();
    showWinner(winner);
    showScore(com);
  }
}

function randomCardGenratore(){
  let randomCard = Math.floor(Math.random() * 13);
  return bjDataBase['card'][randomCard];
}

function showCard(card, activeUser){
  if (activeUser['score'] <= 21) {    
    let imgElement = document.createElement('img');
    imgElement.src = `images/${card}.png`;
    document.querySelector(activeUser['div']).appendChild(imgElement);
    hitSound.play();
  }
}

function updateScore(card, activeUser){
  if (card === 'AH') {
    if (activeUser['score'] + bjDataBase['cardScore'][card][1] <= 21) {
      activeUser['score'] += bjDataBase['cardScore'][card][1];
    }
    else{
      activeUser['score'] += bjDataBase['cardScore'][card][0];
    }    
  }
  else{
    activeUser['score'] += bjDataBase['cardScore'][card];
  }
}

function showScore(activeUser){
  if (activeUser['score'] > 21) {
    
    document.querySelector(activeUser['socreSpan']).textContent = 'BUSTED!';
    document.querySelector(activeUser['socreSpan']).style.color = 'red';
  }
  else{
    document.querySelector(activeUser['socreSpan']).textContent =activeUser['score'];
  }
}

function bjDealBtn(){
  if(bjDataBase['isTurnOver'] === true)
  {
    bjDataBase['isStand'] = false;
    let allImgsYou = document.querySelector(you['div']).querySelectorAll('img');
    let allImgsCom = document.querySelector(com['div']).querySelectorAll('img');
    for (let i = 0; i < allImgsYou.length; i++) {
      allImgsYou[i].remove();   
    }
    for (let i = 0; i < allImgsCom.length; i++) {
      allImgsCom[i].remove();   
    }
    
    you['score'] = 0;
    com['score'] = 0;
    
    document.querySelector(you['socreSpan']).textContent = 0;
    document.querySelector(you['socreSpan']).style.color = 'white';
    document.querySelector(com['socreSpan']).textContent = 0;
    document.querySelector(com['socreSpan']).style.color = 'white';
    
    document.querySelector('#result_span').textContent = 'Lets`s Play';
    document.querySelector('#result_span').style.color = 'green';
    
    document.querySelector('#bjWinsSpan').textContent = bjDataBase['winns'];
    document.querySelector('#bjLossesSpan').textContent = bjDataBase['losses'];
    document.querySelector('#bjDrowsSpan').textContent = bjDataBase['draws'];
  }
}

// Define the winnr winner
function desideWinner(){
  let winner;

  // you dont get busted
  if (you['score'] <= 21) {
    if (you['score'] > com['score'] || com['score'] > 21) {
      bjDataBase['winns']++;
      winner = you;

    }
    else if (you['score'] < com['score']){
      bjDataBase['losses']++;
      winner = com;

    }
    else if (you['score'] === com['score']) {
      bjDataBase['draws']++;

    }
  }
  // if you get busted
  else if(you['score'] > 21 && com['score'] <= 21){
      bjDataBase['losses']++;
      winner = com;

  }
  // if you both get busted
  else if (you['score'] > 21 && com['score'] > 21) {
    bjDataBase['draws']++;

  }

  // console.log('Winner is : - ', winner);
  return winner;

}

function showWinner(winner){
  let message = '';
  let msgColor = '';

  if(winner === you){
    message = 'You Won!';
    msgColor = 'green';
    winnSound.play();
  }
  else if (winner === com) {
    message = 'You Loss!';
    msgColor = 'red';
    lossSound.play();
  }
  else{
    message = 'You Drew!';
    msgColor = 'orange';
  }

  document.querySelector('#result_span').textContent = message;
  document.querySelector('#result_span').style.color = msgColor;
}