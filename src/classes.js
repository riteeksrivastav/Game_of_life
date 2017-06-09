//Point class that represents a point on a grid
var Point = function (x,y,alive){
  this.x = x;
  this.y = y;
}

var row = 400;
var col = 400;
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





module.exports = {
  Point: Point,
	getPoint: getPoint,
  getLiveNeighbours
}






