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