
var row = prompt("Enter row");
var col = prompt("Enter column");

document.getElementById('myCanvas').setAttribute("width",""+row+"");
document.getElementById('myCanvas').setAttribute("height",""+col+"");

initialize();
main();

function main(){
  show_grid();
  next_state(alive, dummy);
  update();
  requestAnimationFrame(main)
}


function show_grid(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,row,col);
  for(key in alive){
    ctx.fillStyle = '#FF1005';
    ctx.fillRect((alive[key].x)*3,(alive[key].y)*3,3,3);
  }
}

function update() {

  alive = {};
  alive = dummy;
  dummy = {};
}

