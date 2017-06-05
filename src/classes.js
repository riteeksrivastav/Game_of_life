//Point class that represents a point on a grid
var Point = function (x,y,alive){
  this.x = x;
  this.y = y;
  this.alive = alive;
}

var row = 400;
var col = 400;

function getPoint(x,y){
  return "x" + x + "y" + y;
}

//Grid class that represents the board
var Grid = function(){
  this.points = {};
}

Grid.prototype = {
  addPoint : function(point){
    this.points[getPoint(point.x,point.y)] = point;
  }
}


module.exports = {
	Point: Point,
	Grid: Grid,
	getPoint: getPoint
}