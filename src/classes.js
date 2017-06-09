//Point class that represents a point on a grid
var Point = function (x,y){
  this.x = x;
  this.y = y;
}

function getPoint(x,y){
  return "x" + x + "y" + y;
}

var alive = {};
var dummy = {};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function initialize()
{
  for(var i = 0; i< row*40 ;i++){
    var x = getRandom(0,row);
    var y = getRandom(0,col);
    var point = new Point(x,y);
    alive[(getPoint(x,y))] = point;
  }
}

function getLiveNeighbours(x,y,alive) {
  var r = [-1,-1,-1,0,0,1,1,1];
  var c = [-1,0,1,-1,1,-1,0,1];
  var count =0;
  for(var i=0;i<8;i++)
  {
    if( alive[getPoint(x+r[i], y+c[i])] != undefined )
      count++;
  }
  return count;
}


function next_state(alive, dummy){
  for(key in alive)
  {
    var live_neighbours = getLiveNeighbours(alive[key].x,alive[key].y,alive);
    if(live_neighbours === 3 || live_neighbours === 2)
      dummy[key] = alive[key];
    var r = [-1,-1,-1,0,0,1,1,1];
    var c = [-1,0,1,-1,1,-1,0,1];
    for(var i=0;i<8;i++)
    {
      var temp_x =  alive[key].x+r[i];
      var temp_y =  alive[key].y + c[i];
      if(temp_x >=0 && temp_x < row && temp_y >=0 && temp_y <col)
      {
         if( alive[getPoint(alive[key].x+r[i], alive[key].y + c[i])] === undefined )
        {
           var neighbours = getLiveNeighbours(alive[key].x + r[i], alive[key].y + c[i],alive);
           if (neighbours === 3)
           {
             var point = new Point(alive[key].x + r[i], alive[key].y + c[i],true);
             dummy[getPoint(alive[key].x + r[i], alive[key].y + c[i])] = point;
           }
        }
      }
    }
  }
 return dummy;
}



module.exports = {
  Point: Point,
	getPoint: getPoint,
  getLiveNeighbours: getLiveNeighbours,
  next_state: next_state

}






