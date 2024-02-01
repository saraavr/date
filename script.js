document.getElementById('movingButton').addEventListener('mouseover', moveButton);

function moveButton() {
  var button = document.getElementById('movingButton');
  var newX = Math.random() * window.innerWidth%150;
  var newY = Math.random() * window.innerHeight%100;
  button.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
}

function gif() {
  var g =document.getElementById("gif1");
  g.src="https://gifman.net/wp-content/uploads/2019/06/ursinhos-fofos-beijos.gif";
  g.innerHTML="Detalhes no wpp ;)";
}

function canvas(){
  var dd1= document.getElementById("canvas");
  dd1.style.backgroundColor="white";
  var ctx = dd1.getContext("2d");
  ctx.fillStyle= "#8B0000";
  ctx.font = "20px Courier new";
  ctx.fillText("Não vejo a hora de te ",10,30);
  ctx.fillText("ver me manda mensagem ",10,50);
  ctx.fillText(" para mais detalhes 😄",10,70);
}

function clearNo() {
  var no= document.getElementById("movingButton");
  no.innerHTML = ""
  no.className = "no"
}

function sim(){
gif();
  canvas();
  clearNo();
}