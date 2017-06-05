//Point class that represents a point on a grid
var Point = function (x,y,alive){
  this.x = x;
  this.y = y;
  this.alive = alive;
}

var row = 400;
var col = 400;

function getPoint(x,y){
  return "x0y0";
}

//Grid class that represents the board
var Grid = function(){
  this.points = {};
}



module.exports = {
	Point: Point,
	Grid: Grid,
	getPoint: getPoint
}