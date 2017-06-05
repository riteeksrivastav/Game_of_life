function game_of_life_algo(r,c){
  for(var i = 0 ; i<r ; i++){
    for(var j = 0 ; j<c ; j++){
      var point = real_grid.getPointAt(i,j);
      if(real_grid.next_state(point)===1){
       dummy_grid.getPointAt(i,j).alive=true;
     }else{
       dummy_grid.getPointAt(i,j).alive=false;
     }
   }
 }   
}

function update_grid(r,c){
  for(var i = 0 ; i<r ; i++){
    for(var j = 0 ; j<c ; j++){
      real_grid.getPointAt(i,j).alive=dummy_grid.getPointAt(i,j).alive;
    }
  }
}

function show_grid(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,400,400);
  for(var i = 0 ; i<row ; i++){
    for(var j = 0 ; j<col ; j++){
      if(real_grid.getPointAt(i,j).alive===true){
        ctx.fillStyle = '#FF1005';
        ctx.fillRect(3*i,3*j,3,3);
      }
    }
  }
}