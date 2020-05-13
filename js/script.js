  let nick = prompt("Введите свой nickname:");
  nick = nick || "player";
  let newplayer = true;
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    if(nick == key){
     newplayer = false;
     break;
    }
  }
  if(newplayer){
    localStorage.setItem(nick, 0);
    alert("Добро пожаловать " + nick);
  }
  else{
    alert("Добро пожаловать снова, "+ nick + ", твой предыдущий рекорд: " + localStorage.getItem(nick))
  }
  let score = -1;
  let speed1 = new Date().getTime(), speed2;
  let record = localStorage.getItem(nick);

function start(){
  document.getElementById('cannabis').style.visibility ="visible";
  document.getElementById('main_menu').style.visibility ="hidden";
  speed1 = new Date().getTime();
  }
function quit(){
window.close();
  }
function restart(){
  document.getElementById('cannabis').style.visibility ="visible";
  document.getElementById('GameOver').style.visibility ="hidden";
  speed1 = new Date().getTime();
  score = -1;
}
function replase() {
    var audio = new Audio();
    audio.src = 'mc/click.mp3';
    audio.autoplay = true;
    block.style.left=(Math.floor((920 - 10) * Math.random()))+"px";
    block.style.top=110+(Math.floor((620  - 110) * Math.random()))+"px";
    speed2 = new Date().getTime();
  if(speed2 - speed1 >= 1000){
    var audio = new Audio();
    audio.src = 'mc/gv.mp3';
    audio.autoplay = true;
    document.getElementById('GameOver').style.visibility ="visible";
    document.getElementById('cannabis').style.visibility ="hidden";
    document.getElementById('scoreRES').innerHTML="SCORE: "+ score;
  if(score > record){
    record = score;
    localStorage.setItem(nick, record);
  }
    document.getElementById('record').innerHTML="RECORD: "+ record;

  }
    document.getElementById('speed').innerHTML="speed: "+ (speed2 - speed1);
    speed1 = speed2;
    document.getElementById('score').innerHTML="score: "+ ++score;
}
function show(){
  let keys = [];
  let value = [];
  let max = 0;
  let modal = document.getElementById('main_menu');
   modal.innerHTML = "";
  for(let i=0; i<localStorage.length; i++) {
    keys.push(localStorage.key(i));
    value.push(localStorage.getItem(localStorage.key(i)));
}

  let swap;
  let post;
  for (var i = 0; i < value.length; i++) {
    max = value[i];
    for (var j = i++; j < value.length; j++) {
      if(parseInt(value[j]) < parseInt(max)){
        max = value[j];
        post = j;
      }
      console.log(value);
    }
    if(max != value[i]){
      swap = value[i];
      value[i] = value[post];
      value[post] = swap;
      swap = keys[i];
      keys[i] = keys[post];
      keys[post] = swap;
    }
  }
 modal.innerHTML += `<b style = "color: #daa520">${keys[0]}: ${value[0]} </b> <br>`;
 modal.innerHTML += `<b style = "color: silver">${keys[1]}: ${value[1]} </b> <br>`;
 modal.innerHTML += `<b style = "color: chocolate">${keys[2]}: ${value[2]} </b> <br>`;
  for (var i = 3; i < value.length; i++){
    modal.innerHTML += keys[i] + ": " + value[i]+"<br>";
  }
  for (var i = 0; i < value.length; i++){
  console.log(keys[i] + ": " + value[i]);
  }


}

    let block = document.getElementById('cannabis');
    replase();
